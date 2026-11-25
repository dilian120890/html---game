/* Sổ đánh giá năng lực — bản web tĩnh, miễn phí (GitHub Pages + Google Sheet của cô).
   Dữ liệu: mỗi lớp + môn một trang tính "dg-<môn>-<lớp>", mỗi học sinh một dòng.
   Khoá bản ghi cố định (deterministic) nên sửa nhiều lần không bao giờ sinh bản trùng:
     <mã biểu hiện>@<mã phiên>  → { lv, at }       mức quan sát (lv 0 = chưa quan sát, không tính)
     note@<mã phiên>            → { t, at }        ghi chú của cô cho học sinh trong phiên
     ov:<mã>@<giai đoạn>        → { lv, at }       cô chốt mức thủ công (ghi đè mức tự tính)
     nx@<giai đoạn>             → { t, at }        đoạn nhận xét cô đã chỉnh
   Dòng "_phien": thông tin các phiên quan sát { date, tiet, bai, codes, status: DRAFT|SUBMITTED }. */

const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const LS = {
  get(k, d) { try { const v = localStorage.getItem('dgnl:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('dgnl:' + k, JSON.stringify(v)); } catch (e) {} }
};
const SHEET = (typeof SHEET_URL !== 'undefined' && SHEET_URL) || '';
const today = () => { const d = new Date(); return new Date(d - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); };
const dstr = ts => { const d = new Date(ts); return new Date(d - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); };
const vn = d => d ? d.slice(8, 10) + '/' + d.slice(5, 7) + '/' + d.slice(0, 4) : '';
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove('on'), 2200); }
function mergeP(a, b) { a = a || {}; Object.entries(b || {}).forEach(([k, v]) => { if (!a[k] || ((v && v.at) || 0) >= (a[k].at || 0)) a[k] = v; }); return a; }

/* ── trạng thái ── */
const CLASSES = Object.keys(CLASS_SUBJECTS);
let CLS = LS.get('cls', CLASSES[2] || CLASSES[0]); if (!CLASS_SUBJECTS[CLS]) CLS = CLASSES[0];
let SUBJ = LS.get('subj', null);
let PER = LS.get('per', (PERIODS.find(p => today() >= p.from && today() <= p.to && p.id !== 'all') || PERIODS[1]).id);
let TAB = LS.get('tab', 'obs');
let SID = null, SESSION = null, GFILTER = 'all';
const DATA = LS.get('data', {});      /* sheetApp → { hsId: p } */
const REV = LS.get('rev', {});        /* app ôn tập → { hsId: p } */
const CFG = LS.get('cfg', {});        /* tiêu chí cô sửa + khoá năm học */
let SYNC = SHEET ? 'wait' : 'local';

const school = () => +CLS[0] >= 6 ? 'thcs' : 'th';
const SC = () => SCALES[school()];
const MAXLV = () => SC().levels.length;
const lvObj = v => SC().levels.find(l => l.v === v);
const subjList = () => CLASS_SUBJECTS[CLS] || [];
function fixSubj() { if (!subjList().some(s => s[0] === SUBJ)) SUBJ = subjList()[0][0]; }
fixSubj();
const appId = () => (subjList().find(s => s[0] === SUBJ) || [])[1] || '';
const sheetApp = () => 'dg-' + SUBJ + '-' + CLS;
const fwKey = () => SUBJ + '-' + school();
const period = () => PERIODS.find(p => p.id === PER) || PERIODS[0];
const roster = () => (ROSTERS[CLS] || []).map(([id, name]) => ({ id, name }));
const locked = () => !!(CFG._khoa && CFG._khoa.v);
const D = () => (DATA[sheetApp()] = DATA[sheetApp()] || {});
const P = id => (D()[id] = D()[id] || {});
const SESS = () => P('_phien');

function criteria() {
  const c = CFG[fwKey()];
  if (c && c.items && c.items.length) return c.items;
  return JSON.parse(JSON.stringify(PC_NLC.concat(DT[SUBJECTS[SUBJ].fw] || [])));
}
const em = s => school() === 'thcs' ? String(s || '').replace(/\bCon\b/g, 'Em').replace(/\bcon\b/g, 'em') : s || '';
const short = c => String(c.name || '').split(':')[0];

/* ── Google Sheet ── */
let pushQ = {}, pushT = null;
function sheetGet(app) {
  return fetch(SHEET + '?app=' + encodeURIComponent(app) + '&t=' + Date.now()).then(r => r.json());
}
function pull(force) {
  if (!SHEET) { render(); return; }
  SYNC = 'wait'; drawSync();
  const jobs = [sheetGet(sheetApp()).then(j => {
    (j.rows || []).forEach(r => { if (r && r.id) D()[r.id] = mergeP(D()[r.id], r.p); });
  })];
  if (appId()) jobs.push(sheetGet(appId()).then(j => {
    const m = REV[appId()] = REV[appId()] || {};
    (j.rows || []).forEach(r => { if (r && r.id) m[r.id] = mergeP(m[r.id], r.p); });
  }));
  jobs.push(sheetGet('dg-cfg').then(j => {
    (j.rows || []).forEach(r => { if (r && r.id && r.p && r.p.v) { if (!CFG[r.id] || (r.p.v.at || 0) > (CFG[r.id].at || 0)) CFG[r.id] = r.p.v; } });
  }));
  Promise.all(jobs).then(() => { SYNC = 'sheet'; save(); render(); if (force) toast('Đã tải dữ liệu mới nhất từ Google Sheet'); })
    .catch(() => { SYNC = 'error'; drawSync(); render(); });
}
function save() { LS.set('data', DATA); LS.set('rev', REV); LS.set('cfg', CFG); }
function queue(id) {
  save();
  if (!SHEET) return;
  pushQ[sheetApp() + '|' + id] = { app: sheetApp(), id };
  SYNC = 'wait'; drawSync();
  clearTimeout(pushT); pushT = setTimeout(flush, 1200);
}
function flush() {
  const jobs = Object.values(pushQ).map(({ app, id }) => {
    const name = id === '_phien' ? '(Phiên quan sát)' : ((ROSTERS[app.split('-')[2]] || []).find(r => r[0] === id) || [])[1] || id;
    const body = JSON.stringify({ app, cls: app.split('-')[2], id, name, n: 1, p: (DATA[app] || {})[id] || {} });
    return fetch(SHEET, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body }).then(r => r.json());
  });
  pushQ = {};
  Promise.all(jobs).then(r => { SYNC = r.every(x => x && x.ok) ? 'sheet' : 'error'; drawSync(); })
    .catch(() => { SYNC = 'error'; drawSync(); });
}
function pushCfg(key) {
  save();
  if (!SHEET) return;
  fetch(SHEET, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ app: 'dg-cfg', cls: '', id: key, name: key, n: 1, p: { v: CFG[key] } }) })
    .then(r => r.json()).then(j => { SYNC = j.ok ? 'sheet' : 'error'; drawSync(); }).catch(() => { SYNC = 'error'; drawSync(); });
}
function drawSync() {
  const m = { wait: '⏳ Đang đồng bộ…', sheet: '✅ Đã lưu Google Sheet', error: '⚠️ Chưa kết nối được Sheet (đang lưu trên máy)', local: '💾 Lưu trên máy này' };
  $('#sync').textContent = (locked() ? '🔒 ' : '') + m[SYNC];
}

/* ── minh chứng & tính mức ── */
const isReview = t => /ôn tập|đề /i.test(t);
function starLv(st) {
  const s = st.stars || 0;
  if (school() === 'thcs') return [1, 2, 3, 4][s] || 1;
  return s >= 3 ? 3 : s === 2 ? 2 : 1;
}
function appInfo() { return REVIEW_APPS.find(a => a.id === appId()); }
function evidences(id, c, per) {
  per = per || period();
  const out = [], p = P(id), ss = SESS();
  Object.entries(p).forEach(([k, v]) => {
    const m = k.match(/^(.+)@(\d{4}-\d{2}-\d{2}-t\d+)$/);
    if (!m || m[1] !== c.code || !v || !v.lv) return;
    const s = ss[m[2]]; if (!s || s.del) return;
    if (s.date < per.from || s.date > per.to) return;
    out.push({ src: 'gv', lv: v.lv, date: s.date, label: 'Quan sát ' + vn(s.date) + ' · tiết ' + s.tiet + (s.bai ? ' · ' + s.bai : ''), w: 2, sess: m[2] });
  });
  const ai = appInfo(), rv = ai && REV[ai.id];
  if (c.app && ai && rv) {
    const rp = rv[id] || {};
    if (c.app === 'done') {
      const n = ai.stages.length, done = ai.stages.filter(([sn]) => rp[sn] && rp[sn].done && dstr(rp[sn].at || 0) <= per.to).length;
      if (Object.keys(rv).length) {
        const r = done / n, M = MAXLV();
        const lv = M === 4 ? (r >= .8 ? 4 : r >= .65 ? 3 : r >= .5 ? 2 : 1) : (r >= .8 ? 3 : r >= .5 ? 2 : 1);
        out.push({ src: 'app', lv, date: per.to < today() ? per.to : today(), label: 'App: xong ' + done + '/' + n + ' chặng', w: 1 });
      }
    } else {
      ai.stages.forEach(([sn, title]) => {
        const st = rp[sn]; if (!st || !st.tries || !st.at) return;
        if (c.app === 'review' && !isReview(title)) return;
        const d = dstr(st.at); if (d < per.from || d > per.to) return;
        out.push({ src: 'app', lv: starLv(st), date: d, label: 'App: ' + title + ' · ' + '★'.repeat(st.stars || 0) + (st.stars ? '' : '✗'), w: 1 });
      });
    }
  }
  return out.sort((a, b) => b.date.localeCompare(a.date));
}
function toLevel(avg) { if (avg == null) return 0; const cut = SC().cut; let v = 1; cut.forEach(x => { if (avg >= x) v++; }); return v; }
function assess(id, c) {
  const ev = evidences(id, c);
  const ov = P(id)['ov:' + c.code + '@' + PER];
  let sw = 0, s = 0; ev.forEach(e => { sw += e.w; s += e.w * e.lv; });
  const auto = sw ? toLevel(s / sw) : 0;
  const lv = ov && ov.lv ? ov.lv : auto;
  return { ev, auto, lv, ov: ov && ov.lv ? ov.lv : 0, gap: ev.length < 2 && !(ov && ov.lv) };
}
function studentSummary(id) {
  const cs = criteria(), rows = cs.map(c => ({ c, a: assess(id, c) }));
  const grp = {};
  Object.keys(GROUPS).forEach(g => {
    const l = rows.filter(r => r.c.g === g && r.a.lv);
    grp[g] = l.length ? toLevel(l.reduce((x, r) => x + r.a.lv, 0) / l.length) : 0;
  });
  const nEv = rows.reduce((x, r) => x + r.a.ev.length, 0), gaps = rows.filter(r => r.a.gap).length;
  const dt = grp.dt, M = MAXLV();
  let tag = 'GAP';
  if (gaps <= rows.length / 2 && dt) tag = dt === 1 ? 'SUPPORT' : dt === M ? 'CHALLENGE' : 'PRACTICE';
  return { rows, grp, nEv, gaps, tag };
}
const TAGS = { SUPPORT: 'Cần hỗ trợ', PRACTICE: 'Luyện tập củng cố', CHALLENGE: 'Thử thách mở rộng', GAP: 'Cần thêm minh chứng' };
function lvChip(v, small) {
  if (!v) return '<span class="lv none">—</span>';
  const l = lvObj(v); return `<span class="lv ${l.tone}" title="${esc(l.name)}">${esc(small ? l.k : l.k)}</span>`;
}

/* ── nhận xét tự ghép theo ma trận ── */
function sentence(c, v) { const M = MAXLV(); return em(v === M ? c.ok : v === 1 ? c.low : c.mid); }
function compose(id) {
  const S = studentSummary(id), M = MAXLV(), parts = [];
  ['pc', 'nlc', 'dt'].forEach(g => {
    const l = S.rows.filter(r => r.c.g === g && r.a.lv);
    if (!l.length) return;
    const best = l.slice().sort((a, b) => b.a.lv - a.a.lv)[0];
    const worst = l.slice().sort((a, b) => a.a.lv - b.a.lv)[0];
    if (best.a.lv === M) parts.push(sentence(best.c, M));
    if (worst.a.lv < M) parts.push(sentence(worst.c, worst.a.lv));
  });
  return parts.join(' ');
}

/* ── giao diện chung ── */
function header() {
  $('#selCls').innerHTML = CLASSES.map(c => `<option ${c === CLS ? 'selected' : ''}>${c}</option>`).join('');
  $('#selSub').innerHTML = subjList().map(([s]) => `<option value="${s}" ${s === SUBJ ? 'selected' : ''}>${SUBJECTS[s].name}</option>`).join('');
  $('#selPer').innerHTML = PERIODS.map(p => `<option value="${p.id}" ${p.id === PER ? 'selected' : ''}>${p.name}</option>`).join('');
  const T = [['obs', 'Quan sát lớp học'], ['hs', 'Hồ sơ học sinh'], ['lop', 'Tổng hợp lớp'], ['tc', 'Bộ tiêu chí'], ['hd', 'Hướng dẫn']];
  $('#tabs').innerHTML = T.map(([k, n]) => `<button data-tab="${k}" class="${k === TAB ? 'on' : ''}">${n}</button>`).join('');
  drawSync();
}
$('#selCls').onchange = e => { CLS = e.target.value; LS.set('cls', CLS); fixSubj(); LS.set('subj', SUBJ); SID = null; SESSION = null; header(); render(); pull(); };
$('#selSub').onchange = e => { SUBJ = e.target.value; LS.set('subj', SUBJ); SESSION = null; header(); render(); pull(); };
$('#selPer').onchange = e => { PER = e.target.value; LS.set('per', PER); render(); };
$('#sync').onclick = () => pull(true);
$('#tabs').onclick = e => { const b = e.target.closest('[data-tab]'); if (!b) return; TAB = b.dataset.tab; LS.set('tab', TAB); header(); render(); };

function render() {
  const v = { obs: viewObs, hs: viewStudent, lop: viewClass, tc: viewCriteria, hd: viewHelp }[TAB] || viewObs;
  $('#app').innerHTML = v();
  drawSync();
}

/* ── 1. Quan sát lớp học: phiên nháp → chốt ── */
function sessList() {
  const per = period();
  return Object.entries(SESS()).filter(([, s]) => s && !s.del && s.date >= per.from && s.date <= per.to)
    .sort((a, b) => (b[1].date + b[0]).localeCompare(a[1].date + a[0]));
}
function viewObs() {
  const list = sessList(), cs = criteria();
  const ro = locked();
  let h = `<div class="grid"><div>
  <div class="card"><h2>Phiên quan sát · ${esc(SUBJECTS[SUBJ].name)} ${esc(CLS)}</h2>
   <p class="mute">Mỗi tiết dạy là một phiên. Chạm vào ô để đổi mức: — → ${SC().levels.map(l => l.k).join(' → ')} → —. Ô "—" là chưa quan sát, không tính vào đánh giá.</p>
   ${ro ? '<p class="gap">Năm học đã khoá: chỉ xem, không sửa.</p>' : ''}
   <div class="chips" style="flex-direction:column;align-items:stretch">${list.map(([k, s]) => `
     <button class="chip ${k === SESSION ? 'on' : ''}" data-sess="${k}" style="text-align:left;border-radius:10px;padding:8px 12px">
      <b>${vn(s.date)} · Tiết ${esc(s.tiet)}</b> ${s.status === 'SUBMITTED' ? '🔒 Đã chốt' : '✏️ Nháp'}<br><span style="font-size:12px">${esc(s.bai || 'Chưa ghi tên bài')} · ${(s.codes || []).length} biểu hiện</span></button>`).join('') || '<p class="mute">Chưa có phiên nào trong giai đoạn này.</p>'}</div>
  </div>
  ${ro ? '' : `<div class="card"><h3>Tạo phiên mới</h3>
   <div class="row" style="margin-bottom:8px"><label class="mute">Ngày <input type="date" id="nDate" value="${today()}"></label>
   <label class="mute">Tiết <input type="text" id="nTiet" value="1" style="width:50px"></label></div>
   <input type="text" id="nBai" placeholder="Tên bài học (ví dụ: Bài 5. Sử dụng máy thu hình)" style="width:100%;margin-bottom:8px">
   <div class="mute" style="margin-bottom:4px">Biểu hiện sẽ quan sát trong tiết này:</div>
   <div style="max-height:260px;overflow:auto;font-size:13.5px">${cs.map(c => `<label style="display:flex;gap:6px;padding:2px 0"><input type="checkbox" class="nCode" value="${esc(c.code)}" ${c.g !== 'pc' && !c.app ? 'checked' : ''}><span><b>${esc(c.code)}</b> ${esc(short(c))}</span></label>`).join('')}</div>
   <button class="btn" id="nGo" style="margin-top:10px;width:100%">Tạo phiên quan sát</button></div>`}
  </div><div>`;
  const s = SESSION && SESS()[SESSION];
  if (!s || s.del) h += `<div class="card"><h2>Chọn hoặc tạo một phiên để bắt đầu quan sát</h2><p class="mute">Gợi ý: tạo phiên ngay đầu tiết, chạm nhanh mức cho từng con trong lúc dạy, cuối tiết bấm "Chốt phiên". Mức đã chốt tự trở thành minh chứng cho hồ sơ học sinh.</p></div>`;
  else h += obsMatrix(SESSION, s);
  return h + '</div></div>';
}
function obsMatrix(k, s) {
  const cs = criteria().filter(c => (s.codes || []).includes(c.code));
  const ro = s.status === 'SUBMITTED' || locked();
  const kids = roster();
  let rec = 0, obs = 0;
  kids.forEach(r => cs.forEach(c => { const v = P(r.id)[c.code + '@' + k]; if (v) { rec++; if (v.lv) obs++; } }));
  let h = `<div class="card"><div class="row" style="justify-content:space-between">
   <div><h2 style="margin:0">${vn(s.date)} · Tiết ${esc(s.tiet)} · ${esc(s.bai || '')}</h2>
   <div class="mute">${s.status === 'SUBMITTED' ? '🔒 Đã chốt lúc ' + new Date(s.subAt || s.at).toLocaleString('vi-VN') : '✏️ Phiên nháp, đang ghi nhận'} · Đã quan sát ${obs}/${kids.length * cs.length} ô · Bản ghi trùng: 0</div></div>
   <div class="row noprint">${locked() ? '' : s.status === 'SUBMITTED'
      ? '<button class="btn ghost" data-act="reopen">Chỉnh sửa phiếu</button>'
      : '<button class="btn" data-act="submit">Chốt phiên quan sát</button><button class="btn warn sm" data-act="delsess">Xoá phiên</button>'}</div></div></div>
  <div class="tblw"><table class="mx"><thead><tr><th>Học sinh</th>${cs.map(c => `<th class="c" title="${esc(c.name)}"><b>${esc(c.code)}</b><span>${esc(short(c))}</span>
   ${ro ? '' : `<select data-fill="${esc(c.code)}"><option value="">Cả lớp…</option>${SC().levels.map(l => `<option value="${l.v}">${l.k}</option>`).join('')}<option value="0">Xoá</option></select>`}</th>`).join('')}<th style="min-width:200px">Ghi chú</th></tr></thead><tbody>`;
  kids.forEach((r, i) => {
    const p = P(r.id);
    h += `<tr><td>${i + 1}. ${esc(r.name)}</td>${cs.map(c => {
      const v = (p[c.code + '@' + k] || {}).lv || 0, l = lvObj(v);
      return `<td class="c"><button class="cell lv ${v ? l.tone : 'none'}" ${ro ? 'disabled' : ''} data-cell="${esc(r.id)}|${esc(c.code)}">${v ? l.k : '—'}</button></td>`;
    }).join('')}<td><input type="text" data-note="${esc(r.id)}" value="${esc((p['note@' + k] || {}).t || '')}" ${ro ? 'disabled' : ''} placeholder="Ghi chú hành vi…" style="width:100%;border:1px solid var(--line);border-radius:6px;padding:4px 6px"></td></tr>`;
  });
  return h + `</tbody></table></div>
  <div class="legend" style="margin-top:8px">${SC().levels.map(l => `<span>${lvChip(l.v)} ${l.name}</span>`).join('')}<span>${lvChip(0)} Chưa quan sát</span></div>`;
}
function setRec(id, code, lv) {
  const k = code + '@' + SESSION;
  P(id)[k] = { lv, at: Date.now() };
  queue(id);
}
document.addEventListener('click', e => {
  const t = e.target;
  const sb = t.closest('[data-sess]'); if (sb) { SESSION = sb.dataset.sess; render(); return; }
  const cell = t.closest('[data-cell]');
  if (cell && !cell.disabled) {
    const [id, code] = cell.dataset.cell.split('|');
    const cur = (P(id)[code + '@' + SESSION] || {}).lv || 0;
    const nx = (cur + 1) % (MAXLV() + 1);
    setRec(id, code, nx);
    const l = lvObj(nx); cell.className = 'cell lv ' + (nx ? l.tone : 'none'); cell.textContent = nx ? l.k : '—';
    return;
  }
  if (t.id === 'nGo') {
    const date = $('#nDate').value || today(), tiet = ($('#nTiet').value || '1').replace(/\D/g, '') || '1';
    const codes = [...document.querySelectorAll('.nCode:checked')].map(x => x.value);
    if (!codes.length) { toast('Cô chọn ít nhất 1 biểu hiện nhé'); return; }
    const k = date + '-t' + tiet, ss = SESS();
    if (ss[k] && !ss[k].del) { SESSION = k; toast('Phiên ngày này, tiết này đã có: em mở lại phiên cũ (không tạo trùng)'); render(); return; }
    ss[k] = { date, tiet, bai: $('#nBai').value.trim(), codes, status: 'DRAFT', at: Date.now() };
    /* sheet chỉ gộp theo khoá ở cấp 1, nên lưu cả phiên vào một khoá */
    SESSION = k; queue('_phien');
    const per = PERIODS.find(p => p.id !== 'all' && date >= p.from && date <= p.to);
    if (per && date !== '' && (date < period().from || date > period().to)) { PER = per.id; LS.set('per', PER); header(); }
    render(); return;
  }
  const act = t.closest('[data-act]');
  if (act) {
    const s = SESS()[SESSION]; if (!s) return;
    const a = act.dataset.act;
    if (a === 'submit') { SESS()[SESSION] = Object.assign({}, s, { status: 'SUBMITTED', subAt: Date.now(), at: Date.now() }); toast('Đã chốt phiên. Các mức vừa ghi đã thành minh chứng.'); }
    if (a === 'reopen') { SESS()[SESSION] = Object.assign({}, s, { status: 'DRAFT', at: Date.now() }); toast('Đã mở lại phiếu để chỉnh sửa (sửa trên chính bản ghi cũ).'); }
    if (a === 'delsess') { if (!confirm('Xoá phiên quan sát này? Các mức trong phiên sẽ không còn được tính.')) return; SESS()[SESSION] = Object.assign({}, s, { del: true, at: Date.now() }); SESSION = null; }
    queue('_phien'); render(); return;
  }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.fill !== undefined && t.value !== '') {
    const lv = +t.value, code = t.dataset.fill;
    roster().forEach(r => { P(r.id)[code + '@' + SESSION] = { lv, at: Date.now() }; queue(r.id); });
    render(); toast('Đã điền cả lớp, cô chạm từng ô để chỉnh riêng.'); return;
  }
  if (t.dataset.note !== undefined) { P(t.dataset.note)['note@' + SESSION] = { t: t.value.trim(), at: Date.now() }; queue(t.dataset.note); return; }
  if (t.dataset.ov !== undefined) {
    P(SID)['ov:' + t.dataset.ov + '@' + PER] = { lv: +t.value || 0, at: Date.now() }; queue(SID); render(); return;
  }
  if (t.id === 'selHs') { SID = t.value; render(); return; }
});

/* ── 2. Hồ sơ học sinh ── */
function radar(rows) {
  const items = rows.filter(r => r.c.g !== 'pc'); if (items.length < 3) return '';
  const M = MAXLV(), W = 300, cx = 150, cy = 150, R = 105, n = items.length;
  const pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n, r = R * v / M; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  let g = '';
  for (let v = 1; v <= M; v++) g += `<polygon points="${items.map((_, i) => pt(i, v).join(',')).join(' ')}" fill="none" stroke="#E4E7EC"/>`;
  items.forEach((r, i) => { const [x, y] = pt(i, M); const [lx, ly] = pt(i, M + .55); g += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#E4E7EC"/><text x="${lx}" y="${ly}" font-size="11" text-anchor="middle" dominant-baseline="middle" fill="#475467" font-weight="700">${esc(r.c.code)}</text>`; });
  g += `<polygon points="${items.map((r, i) => pt(i, r.a.lv || 0).join(',')).join(' ')}" fill="rgba(47,111,222,.22)" stroke="#2F6FDE" stroke-width="2"/>`;
  items.forEach((r, i) => { if (r.a.lv) { const [x, y] = pt(i, r.a.lv); g += `<circle cx="${x}" cy="${y}" r="3.5" fill="#2F6FDE"/>`; } });
  return `<svg viewBox="-20 -10 ${W + 40} ${W + 20}" width="100%" style="max-width:340px">${g}</svg>`;
}
function viewStudent() {
  const kids = roster(); if (!kids.length) return '<div class="card">Lớp chưa có danh sách học sinh.</div>';
  if (!kids.some(k => k.id === SID)) SID = kids[0].id;
  const S = studentSummary(SID), p = P(SID), M = MAXLV(), ro = locked();
  const nx = p['nx@' + PER];
  const text = nx && nx.t ? nx.t : compose(SID);
  const ai = appInfo(), rp = ai && REV[ai.id] ? (REV[ai.id][SID] || {}) : null;
  const per = period(), notes = Object.entries(p).filter(([k, v]) => k.startsWith('note@') && v && v.t && SESS()[k.slice(5)] && !SESS()[k.slice(5)].del)
    .map(([k, v]) => { const s = SESS()[k.slice(5)]; return [s.date, v.t, s.bai]; }).filter(n => n[0] >= per.from && n[0] <= per.to).sort((a, b) => b[0].localeCompare(a[0]));
  let h = `<div class="card row noprint"><label>Học sinh <select id="selHs">${kids.map((k, i) => `<option value="${k.id}" ${k.id === SID ? 'selected' : ''}>${i + 1}. ${esc(k.name)}</option>`).join('')}</select></label>
   <button class="btn ghost sm" data-nav="-1">◀ Trước</button><button class="btn ghost sm" data-nav="1">Sau ▶</button>
   <span class="tag ${S.tag}">${TAGS[S.tag]}</span><span class="mute">${S.nEv} minh chứng · ${S.gaps} biểu hiện thiếu minh chứng · ${esc(period().name)}</span>
   <button class="btn ghost sm" onclick="print()" style="margin-left:auto">In hồ sơ</button></div>
  <div class="grid"><div>
   <div class="card"><h2>${esc((kids.find(k => k.id === SID) || {}).name)}</h2>
    <div class="stats">${Object.entries(GROUPS).map(([g, n]) => `<div class="stat"><div class="k">${n}</div><div class="v">${lvChip(S.grp[g])} <span class="mute">${S.grp[g] ? lvObj(S.grp[g]).name : 'Chưa đủ minh chứng'}</span></div></div>`).join('')}</div>
    <div style="text-align:center;margin-top:10px">${radar(S.rows)}</div></div>
   ${rp ? `<div class="card"><h3>Tiến độ app ôn tập: ${esc(ai.name)}</h3>${ai.stages.map(([sn, title]) => { const st = rp[sn] || {}; return `<div class="stage"><span>${sn}. ${esc(title)}</span><span class="stars">${st.tries ? (st.stars ? '★'.repeat(st.stars) + '☆'.repeat(3 - st.stars) : '✗') : '<span class="mute">chưa làm</span>'}</span></div>`; }).join('')}</div>` : (ai ? '<div class="card mute">Chưa tải được tiến độ app ôn tập (cần kết nối Google Sheet).</div>' : '')}
  </div><div>
   <div class="card"><div class="row" style="justify-content:space-between"><h2 style="margin:0">Nhận xét ${esc(period().name.toLowerCase())}</h2>
    <div class="row noprint"><button class="btn ghost sm" data-act2="regen" ${ro ? 'disabled' : ''}>Ghép lại từ ma trận</button><button class="btn sm" data-act2="copy">Sao chép</button></div></div>
    <p class="mute">Tự ghép từ câu ghi nhận (mức cao nhất) và câu gợi mở (mức thấp hơn) của từng nhóm. Số trong câu là ngưỡng mẫu, cô thay bằng số thực tế của con. Cô sửa trực tiếp, app tự lưu.</p>
    <textarea id="nxText" ${ro ? 'disabled' : ''} placeholder="Chưa có minh chứng nào trong giai đoạn này. Cô ghi mức ở tab Quan sát lớp học, hoặc chờ học sinh làm app ôn tập, rồi bấm Ghép lại từ ma trận.">${esc(text)}</textarea>
    ${nx && nx.t ? '<div class="mute">Đã lưu bản cô chỉnh.</div>' : '<div class="mute">Bản tự ghép (chưa chỉnh).</div>'}</div>
   ${notes.length ? `<div class="card"><h3>Ghi chú quan sát của cô</h3>${notes.map(([d, t, b]) => `<div class="stage"><span>📝 ${esc(t)}</span><span class="mute">${vn(d)}${b ? ' · ' + esc(b) : ''}</span></div>`).join('')}</div>` : ''}
   <div class="card"><h2>Biểu hiện và minh chứng</h2><div class="tblw" style="max-height:none"><table><thead><tr><th>Mã</th><th>Biểu hiện</th><th>Minh chứng (mới nhất trước)</th><th>Tự tính</th><th>Cô chốt</th></tr></thead><tbody>
   ${S.rows.map(({ c, a }) => `<tr><td><b>${esc(c.code)}</b><div class="mute">${GROUPS[c.g]}</div></td><td style="min-width:300px;font-size:13.5px">${esc(c.name)}<div class="mute">${esc(c.bloom || '')} · ${esc(c.measure || '')}</div></td>
    <td><div class="ev">${a.ev.map(e => `<span class="${e.src}" title="${esc(e.label)}">${e.src === 'gv' ? '👁 ' + vn(e.date).slice(0, 5) : '📱 ' + esc(e.label.replace(/^App: /, '').slice(0, 34))} ${lvObj(e.lv).k}</span>`).join('') || '<span class="mute">—</span>'}</div>${a.gap ? '<div class="gap">Cần thêm minh chứng (tối thiểu 2)</div>' : ''}
</td>
    <td>${lvChip(a.auto)}</td><td><select data-ov="${esc(c.code)}" ${ro ? 'disabled' : ''}><option value="0">Tự động</option>${SC().levels.map(l => `<option value="${l.v}" ${a.ov === l.v ? 'selected' : ''}>${l.k}</option>`).join('')}</select></td></tr>`).join('')}
   </tbody></table></div></div>
  </div></div>`;
  return h;
}
document.addEventListener('click', e => {
  const n = e.target.closest('[data-nav]');
  if (n) { const kids = roster(); const i = kids.findIndex(k => k.id === SID); SID = kids[(i + +n.dataset.nav + kids.length) % kids.length].id; render(); return; }
  const a = e.target.closest('[data-act2]');
  if (a) {
    if (a.dataset.act2 === 'regen') { P(SID)['nx@' + PER] = { t: '', at: Date.now() }; queue(SID); render(); toast('Đã ghép lại nhận xét theo mức hiện tại'); }
    if (a.dataset.act2 === 'copy') { navigator.clipboard.writeText($('#nxText').value).then(() => toast('Đã sao chép nhận xét')); }
  }
  const x = e.target.closest('[data-act3]');
  if (x) classAction(x.dataset.act3);
  const go = e.target.closest('[data-goto]');
  if (go) { SID = go.dataset.goto; TAB = 'hs'; LS.set('tab', TAB); header(); render(); scrollTo(0, 0); }
});
document.addEventListener('input', e => {
  if (e.target.id === 'nxText') { clearTimeout(e.target._h); const v = e.target.value; e.target._h = setTimeout(() => { P(SID)['nx@' + PER] = { t: v, at: Date.now() }; queue(SID); }, 700); }
});

/* ── 3. Tổng hợp lớp (heatmap) ── */
function viewClass() {
  const kids = roster(), cs = criteria(), M = MAXLV();
  const sums = kids.map(k => ({ k, S: studentSummary(k.id) }));
  const dist = v => sums.filter(x => x.S.grp.dt === v).length;
  const tags = Object.keys(TAGS).map(t => [t, sums.filter(x => x.S.tag === t).length]);
  const colors = { low: 'var(--low)', mid: 'var(--mid)', mid2: 'var(--mid2)', top: 'var(--top)' };
  let h = `<div class="card"><div class="row" style="justify-content:space-between"><h2 style="margin:0">Tổng hợp ${esc(SUBJECTS[SUBJ].name)} ${esc(CLS)} · ${esc(period().name)}</h2>
   <div class="row noprint"><button class="btn ghost sm" data-act3="copyall">Sao chép tất cả nhận xét</button><button class="btn ghost sm" data-act3="csv">Tải bảng Excel (CSV)</button><button class="btn ghost sm" onclick="print()">In</button></div></div>
   <div class="stats" style="margin-top:12px"><div class="stat"><div class="k">Năng lực đặc thù</div><div class="bar">${SC().levels.slice().reverse().map(l => `<i style="width:${100 * dist(l.v) / Math.max(1, kids.length)}%;background:${colors[l.tone]}" title="${l.name}: ${dist(l.v)}"></i>`).join('')}</div>
   <div class="mute" style="margin-top:4px">${SC().levels.slice().reverse().map(l => l.k + ' ' + dist(l.v)).join(' · ')} · chưa đủ MC ${dist(0)}</div></div>
   ${tags.map(([t, n]) => `<div class="stat"><div class="k">${TAGS[t]}</div><div class="v"><span class="tag ${t}">${n} học sinh</span></div></div>`).join('')}</div></div>
  <div class="tblw"><table class="mx"><thead><tr><th>Học sinh</th>${cs.map(c => `<th class="c" title="${esc(c.name)}"><b>${esc(c.code)}</b><span>${esc(short(c))}</span></th>`).join('')}
   ${Object.values(GROUPS).map(n => `<th class="c"><b style="color:var(--ink)">${n}</b></th>`).join('')}<th class="c">Mức môn (gợi ý)</th><th>Nhóm</th></tr></thead><tbody>`;
  sums.forEach(({ k, S }, i) => {
    h += `<tr><td><a href="javascript:void 0" data-goto="${k.id}" style="color:var(--main-d);text-decoration:none;font-weight:600">${i + 1}. ${esc(k.name)}</a><div class="mute">${S.nEv} minh chứng${S.gaps ? ' · ' + S.gaps + ' biểu hiện thiếu' : ''}</div></td>
    ${S.rows.map(r => `<td class="c" ${r.a.gap && r.a.lv ? 'style="opacity:.6" title="Mới có ' + r.a.ev.length + ' minh chứng"' : ''}>${lvChip(r.a.lv)}</td>`).join('')}
    ${Object.keys(GROUPS).map(g => `<td class="c">${lvChip(S.grp[g])}</td>`).join('')}<td class="c">${lvChip(S.grp.dt)}</td><td><span class="tag ${S.tag}">${TAGS[S.tag]}</span></td></tr>`;
  });
  return h + `</tbody></table></div><p class="mute">Bấm tên học sinh để mở hồ sơ. Ô mờ là mức mới có 1 minh chứng, nên quan sát thêm. "Mức môn (gợi ý)" lấy theo năng lực đặc thù; ${school() === 'th' ? 'theo TT27, môn TNXH, Khoa học, Công nghệ tiểu học ghi mức HTT/HT/CHT và nhận xét, không cho điểm.' : 'theo TT22, Công nghệ THCS còn có điểm kiểm tra định kì, mức ở đây dùng cho nhận xét.'}</p>`;
}
function classAction(a) {
  const kids = roster(), cs = criteria();
  const textOf = id => { const nx = P(id)['nx@' + PER]; return nx && nx.t ? nx.t : compose(id); };
  if (a === 'copyall') {
    navigator.clipboard.writeText(kids.map((k, i) => `${i + 1}. ${k.name}: ${textOf(k.id)}`).join('\n')).then(() => toast('Đã sao chép nhận xét cả lớp'));
  }
  if (a === 'csv') {
    const lk = v => v ? lvObj(v).k : '';
    const head = ['STT', 'Họ và tên'].concat(cs.map(c => c.code + ' ' + short(c)), Object.values(GROUPS), ['Mức môn (gợi ý)', 'Nhóm', 'Số minh chứng', 'Nhận xét']);
    const rows = kids.map((k, i) => { const S = studentSummary(k.id); return [i + 1, k.name].concat(S.rows.map(r => lk(r.a.lv)), Object.keys(GROUPS).map(g => lk(S.grp[g])), [lk(S.grp.dt), TAGS[S.tag], S.nEv, textOf(k.id)]); });
    const csv = '﻿' + [head].concat(rows).map(r => r.map(x => '"' + String(x).replace(/"/g, '""') + '"').join(',')).join('\r\n');
    const u = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const l = document.createElement('a'); l.href = u; l.download = `Danh gia nang luc ${SUBJECTS[SUBJ].name} ${CLS} - ${period().name}.csv`; l.click();
  }
}

/* ── 4. Bộ tiêu chí ── */
function viewCriteria() {
  const cs = criteria(), ro = locked(), custom = !!(CFG[fwKey()] && CFG[fwKey()].items);
  const lv = SC().levels;
  return `<div class="card"><div class="row" style="justify-content:space-between"><div><h2 style="margin:0">Bộ tiêu chí ${esc(SUBJECTS[SUBJ].name)} · ${school() === 'th' ? 'Tiểu học (TT27: ' + lv.map(l => l.k).join(' / ') + ')' : 'THCS (TT22: ' + lv.map(l => l.name).join(' / ') + ')'}</h2>
   <div class="mute">${custom ? 'Đang dùng bộ cô đã chỉnh.' : 'Đang dùng bộ mặc định.'} Dùng chung cho mọi lớp ${school() === 'th' ? 'tiểu học' : 'THCS'} học môn này. Giữ đúng mã năng lực trong KHDH (1.x.x phẩm chất, 2.x.x năng lực chung, a–e năng lực đặc thù).</div></div>
   <div class="row noprint">${ro ? '' : '<button class="btn sm" data-tc="add">+ Thêm biểu hiện</button><button class="btn ghost sm" data-tc="import">Nhập file</button>'}<button class="btn ghost sm" data-tc="export">Xuất file</button>${custom && !ro ? '<button class="btn warn sm" data-tc="reset">Về mặc định</button>' : ''}</div></div></div>
  <div class="card tc">${cs.map((c, i) => `<div class="it" data-i="${i}">
   <label>Mã<input data-f="code" value="${esc(c.code)}" ${ro ? 'disabled' : ''}></label>
   <label>Nhóm<select data-f="g" ${ro ? 'disabled' : ''}>${Object.entries(GROUPS).map(([g, n]) => `<option value="${g}" ${c.g === g ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
   <label>Biểu hiện<input data-f="name" value="${esc(c.name)}" ${ro ? 'disabled' : ''}></label>
   <label>Bloom<input data-f="bloom" value="${esc(c.bloom || '')}" ${ro ? 'disabled' : ''}></label>
   <label class="full">Cách đo${c.app ? ' <span class="mute">(có lấy minh chứng tự động từ app ôn tập)</span>' : ''}<input data-f="measure" value="${esc(c.measure || '')}" ${ro ? 'disabled' : ''}></label>
   <div class="t3">${['Ngưỡng CHT', 'Ngưỡng HT', 'Ngưỡng HTT'].map((n, j) => `<label>${n}<input data-t="${j}" value="${esc((c.t || [])[j] || '')}" ${ro ? 'disabled' : ''}></label>`).join('')}</div>
   <div class="t3s"><label>Câu ghi nhận (mức cao nhất)<textarea data-f="ok" ${ro ? 'disabled' : ''}>${esc(c.ok || '')}</textarea></label>
   <label>Câu gợi mở khi ${lv[0].k}<textarea data-f="low" ${ro ? 'disabled' : ''}>${esc(c.low || '')}</textarea></label>
   <label>Câu gợi mở khi ${lv.slice(1, -1).map(l => l.k).join(', ')}<textarea data-f="mid" ${ro ? 'disabled' : ''}>${esc(c.mid || '')}</textarea></label></div>
   ${ro ? '' : `<div class="full" style="text-align:right"><button class="btn warn sm" data-tc="del" data-di="${i}">Xoá biểu hiện</button></div>`}</div>`).join('')}</div>
  <div class="card"><h3>Khoá năm học</h3><p class="mute">Khi khoá, mọi dữ liệu chỉ còn xem, không sửa được (giữ nguyên học bạ cuối năm).</p>
   <button class="btn ${locked() ? 'ghost' : 'warn'}" data-tc="lock">${locked() ? '🔓 Mở khoá năm học' : '🔒 Khoá năm học 2026 – 2027'}</button></div>
  <input type="file" id="tcFile" accept=".json" hidden>`;
}
function saveCriteria(items) { CFG[fwKey()] = { items, at: Date.now() }; pushCfg(fwKey()); }
document.addEventListener('change', e => {
  const it = e.target.closest('.tc .it'); if (!it) return;
  const items = criteria(), c = items[+it.dataset.i];
  if (e.target.dataset.f) c[e.target.dataset.f] = e.target.value;
  if (e.target.dataset.t !== undefined) { c.t = c.t || ['', '', '']; c.t[+e.target.dataset.t] = e.target.value; }
  saveCriteria(items); toast('Đã lưu bộ tiêu chí');
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-tc]'); if (!b) return;
  const a = b.dataset.tc, items = criteria();
  if (a === 'add') { items.push({ code: 'x', g: 'dt', name: 'Biểu hiện mới', bloom: 'C3', measure: '', t: ['', '', ''], ok: '', low: '', mid: '' }); saveCriteria(items); render(); scrollTo(0, document.body.scrollHeight); }
  if (a === 'del') { if (!confirm('Xoá biểu hiện này khỏi bộ tiêu chí?')) return; items.splice(+b.dataset.di, 1); saveCriteria(items); render(); }
  if (a === 'reset') { if (!confirm('Đưa bộ tiêu chí về mặc định? Các chỉnh sửa của cô sẽ mất.')) return; CFG[fwKey()] = { items: null, at: Date.now() }; pushCfg(fwKey()); render(); }
  if (a === 'export') { const u = URL.createObjectURL(new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' })); const l = document.createElement('a'); l.href = u; l.download = `Bo tieu chi ${SUBJECTS[SUBJ].name} ${school()}.json`; l.click(); }
  if (a === 'import') { const f = $('#tcFile'); f.onchange = () => { const r = new FileReader(); r.onload = () => { try { const v = JSON.parse(r.result); if (!Array.isArray(v)) throw 0; saveCriteria(v); render(); toast('Đã nhập bộ tiêu chí'); } catch (er) { toast('File không đúng định dạng'); } }; r.readAsText(f.files[0]); }; f.click(); }
  if (a === 'lock') { if (!confirm(locked() ? 'Mở khoá năm học để sửa dữ liệu?' : 'Khoá năm học? Sau khi khoá chỉ xem được, không sửa.')) return; CFG._khoa = { v: !locked(), at: Date.now() }; pushCfg('_khoa'); header(); render(); }
});

/* ── 5. Hướng dẫn ── */
function viewHelp() {
  return `<div class="card" style="max-width:860px"><h2>Cách dùng sổ đánh giá năng lực</h2>
  <ol style="line-height:1.8">
   <li><b>Chọn lớp, môn, giai đoạn</b> ở thanh trên cùng. Danh sách học sinh lấy đúng từ các app ôn tập của cô.</li>
   <li><b>Quan sát lớp học</b>: mỗi tiết tạo một phiên (ngày, tiết, tên bài, chọn biểu hiện cần quan sát). Trong tiết, chạm vào ô để ghi mức cho từng con, có thể "điền cả lớp" rồi sửa riêng từng con, ghi chú hành vi ở cột cuối. Cuối tiết bấm <b>Chốt phiên</b>. Cần sửa thì bấm <b>Chỉnh sửa phiếu</b>: app sửa ngay trên bản ghi cũ, không bao giờ sinh bản trùng.</li>
   <li><b>Minh chứng tự động</b>: kết quả các chặng trên app ôn tập (Google Sheet) tự thành minh chứng cho năng lực nhận thức, vận dụng và tự học (3 sao = ${SC().levels[SC().levels.length - 1].k}, 2 sao = ${SC().levels[SC().levels.length - 2].k}, 1 sao hoặc chưa đạt = ${SC().levels[0].k}${school() === 'thcs' ? ', theo thang 4 mức' : ''}).</li>
   <li><b>Hồ sơ học sinh</b>: mức từng biểu hiện được tính từ mọi minh chứng trong giai đoạn (quan sát của cô tính hệ số 2, app tính hệ số 1). Biểu hiện có dưới 2 minh chứng được báo "cần thêm minh chứng". Cô luôn có quyền <b>chốt mức</b> thủ công.</li>
   <li><b>Nhận xét</b>: app tự ghép câu ghi nhận và câu gợi mở theo ma trận; cô sửa trực tiếp, app tự lưu. Ở tab Tổng hợp lớp cô sao chép nhận xét cả lớp hoặc tải bảng Excel.</li>
   <li><b>Bộ tiêu chí</b>: sửa mã, biểu hiện, ngưỡng và câu nhận xét cho khớp KHDH của trường. Cuối năm có thể khoá năm học.</li>
  </ol>
  <p class="mute">Dữ liệu lưu trên máy và trên Google Sheet của cô (trang tính dg-…), hoàn toàn miễn phí, không cần Firebase. Mở trên máy khác, bấm nút đồng bộ ở góc trên để tải về.</p></div>`;
}

header(); render(); pull();
