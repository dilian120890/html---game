/* Khung chung app ôn tập HK1 · 4 bước mỗi chặng:
   1 Nhắc lại kiến thức → 2 Sơ đồ tư duy điền khuyết → 3 Câu hỏi ôn tập theo mức (dạng đề) → 4 Vận dụng.
   Nội dung từng môn nằm ở data.js (APP, TOPICS, STAGES); danh sách lớp ở roster.js. */
(function () {
'use strict';
const A = APP, ID = A.id, TH = A.school !== 'thcs';
const LV = TH ? ['', 'Mức 1 · Biết', 'Mức 2 · Hiểu', 'Mức 3 · Vận dụng'] : ['', 'Nhận biết', 'Thông hiểu', 'Vận dụng'];
const LVs = TH ? ['', 'Mức 1', 'Mức 2', 'Mức 3'] : ['', 'Nhận biết', 'Thông hiểu', 'Vận dụng'];
const TYPE = { mcq: 'Trắc nghiệm', tf: 'Đúng hay sai', tf4: 'Đúng/Sai từng ý', short: 'Trả lời ngắn', match: 'Nối', sort: 'Phân loại', order: 'Sắp xếp thứ tự', essay: 'Tự luận', pick: 'Chọn hình' };
const STEP = ['Nhắc lại kiến thức', 'Sơ đồ tư duy', 'Câu hỏi ôn tập', 'Vận dụng'];
const STEP_EN = ['Remember', 'Mind map', 'Review questions', 'Apply'];
if (A.theme) { const r = document.documentElement.style; Object.entries(A.theme).forEach(([k, v]) => r.setProperty('--' + k, v)); }
if (!TH) document.body.classList.add('thcs');

/* ── tiện ích ── */
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\*\*/g, '').replace(/\{\{([^}|]+)[^}]*\}\}/g, '$1');
const fold = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase().replace(/[^a-z0-9%]+/g, ' ').trim();
const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const isEmoji = c => c && /[^\x00-\x7F]/.test(c[0] + (c[1] || ''));
const emojiURL = (e, bg) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="${bg || '#FFF6DA'}"/><text x="50" y="54" font-size="62" text-anchor="middle" dominant-baseline="middle">${e}</text></svg>`);
const src = c => !c ? '' : (typeof SVGS !== 'undefined' && SVGS[c]) ? 'data:image/svg+xml,' + encodeURIComponent(SVGS[c]) : isEmoji(c) ? emojiURL(c) : /^(data:|https?:|img\/)/.test(c) ? c : 'img/' + c + '.jpg';
const img = (c, alt, cls) => c ? `<img src="${src(c)}" alt="${esc(alt || '')}"${cls ? ` class="${cls}"` : ''} loading="lazy">` : '';
const pose = k => (A.poses && A.poses[k]) || A.mascot;
const S = n => STAGES.find(s => s.n === n);
const topicOf = st => TOPICS[st.t || 0] || TOPICS[0];
const L = i => 'ABCDEFGH'[i];
const ENp = (vi, en) => BI && en ? `<span class="en" lang="en">${esc(en)}</span>` : '';
const K = k => ID + '-' + k;
const ls = { get(k, d) { try { const v = localStorage.getItem(K(k)); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(K(k), JSON.stringify(v)); } catch (e) {} } };

/* ── học sinh & tiến độ ── */
ROSTER.forEach(r => r.extra = false);
function addKid(id, name) { if (!ROSTER.some(r => r.id === id)) ROSTER.push({ id, name, extra: true }); }
ls.get('extra', []).forEach(r => addKid(r.id, r.name));
let SID = ls.get('sid', null);
if (!ROSTER.some(r => r.id === SID)) SID = null;
let ALL = ls.get('all', {});
let PROG = SID ? (ALL[SID] = ALL[SID] || {}) : {};
let DB = null, SYNC = 'local';
const studentName = id => (ROSTER.find(r => r.id === id) || {}).name || '';
function setStudent(id) { SID = id; ls.set('sid', id); PROG = id ? (ALL[id] = ALL[id] || {}) : {}; }
function newKid(name) {
  name = name.trim().replace(/\s+/g, ' ');
  const same = ROSTER.find(r => fold(r.name) === fold(name)); if (same) return same.id;
  const id = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  addKid(id, name);
  ls.set('extra', ROSTER.filter(r => r.extra).map(r => ({ id: r.id, name: r.name })));
  if (DB) DB.collection('students').doc(id).set({ name, at: Date.now() }).catch(() => {});
  return id;
}
const P = n => (PROG[n] = PROG[n] || {});
let saving = Promise.resolve();
function save() {
  if (!SID) return;
  ls.set('all', ALL);
  if (DB) {
    const id = SID, body = { p: JSON.parse(JSON.stringify(ALL[id] || {})), at: Date.now() };
    saving = saving.then(() => DB.collection('progress').doc(id).set(body)).catch(() => { SYNC = 'error'; });
  }
  sheetPush(SID);
}
const redrawIfList = () => { if (REDRAW === home || REDRAW === board || REDRAW === who) { const y = window.scrollY; REDRAW(); window.scrollTo(0, y); } };
(async () => {
  try {
    const db = window.claude && await window.claude.use('db');
    if (!db) return;
    DB = db; SYNC = 'wait';
    db.collection('students').onSnapshot(snap => {
      snap.docs.forEach(d => { if (d.exists) { const v = d.data(); if (v && v.name) addKid(d.id, v.name); } });
      if (REDRAW === board || REDRAW === who) redrawIfList();
    }, () => {});
    db.collection('progress').onSnapshot(snap => {
      snap.docs.forEach(d => { if (d.exists) { const v = d.data(); if (v && v.p) ALL[d.id] = mergeP(ALL[d.id], JSON.parse(JSON.stringify(v.p))); } });
      if (SID) PROG = ALL[SID] = ALL[SID] || {};
      SYNC = 'db'; redrawIfList();
    }, () => { SYNC = 'error'; });
  } catch (e) {}
})();
/* Google Sheet (khi chạy trên GitHub Pages, địa chỉ ở sheet-config.js) */
const SHEET = (typeof SHEET_URL !== 'undefined' && !window.claude && SHEET_URL) || '';
function mergeP(a, b) { a = a || {}; Object.entries(b || {}).forEach(([n, v]) => { if (!a[n] || ((v && v.at) || 0) > (a[n].at || 0)) a[n] = v; }); return a; }
let lastPull = 0;
function sheetPull() {
  if (!SHEET || Date.now() - lastPull < 15000) return;
  lastPull = Date.now(); if (SYNC !== 'sheet') SYNC = 'wait';
  fetch(SHEET + '?app=' + ID + '&t=' + Date.now()).then(r => r.json()).then(j => {
    (j.rows || []).forEach(r => { if (!r || !r.id) return; if (r.name) addKid(r.id, r.name); ALL[r.id] = mergeP(ALL[r.id], r.p); });
    if (SID) PROG = ALL[SID] = ALL[SID] || {};
    ls.set('all', ALL); SYNC = 'sheet'; redrawIfList();
  }).catch(() => { SYNC = 'error'; });
}
function sheetPush(id) {
  if (!SHEET || !id) return;
  const body = JSON.stringify({ app: ID, cls: CLASS_NAME, id, name: studentName(id), n: STAGES.length, p: ALL[id] || {} });
  fetch(SHEET, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body })
    .then(r => r.json()).then(j => { SYNC = j && j.ok ? 'sheet' : 'error'; }).catch(() => { SYNC = 'error'; });
}
setTimeout(sheetPull, 0);

/* ── đọc to & song ngữ ── */
let BI = A.bilingual ? ls.get('bi', true) : false;
function speak(text, lang) {
  try {
    lang = lang || 'vi-VN';
    const u = new SpeechSynthesisUtterance(strip(text)); u.lang = lang; u.rate = lang.startsWith('vi') ? 0.92 : 0.85;
    const v = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith(lang.slice(0, 2))); if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) {}
}
function sfx(ok) {
  try {
    const C = sfx.c = sfx.c || new (window.AudioContext || window.webkitAudioContext)();
    const o = C.createOscillator(), g = C.createGain(); o.connect(g); g.connect(C.destination);
    const t = C.currentTime; o.type = 'sine';
    if (ok) { o.frequency.setValueAtTime(660, t); o.frequency.setValueAtTime(880, t + .1); } else { o.frequency.setValueAtTime(260, t); o.frequency.setValueAtTime(200, t + .12); }
    g.gain.setValueAtTime(.12, t); g.gain.exponentialRampToValueAtTime(.001, t + .3); o.start(t); o.stop(t + .32);
  } catch (e) {}
}

const app = document.getElementById('app');
let REDRAW = () => home();
const totalStars = () => STAGES.reduce((a, s) => a + ((PROG[s.n] && PROG[s.n].stars) || 0), 0);
function bar(back) {
  const got = STAGES.filter(s => PROG[s.n] && PROG[s.n].done).length;
  return `<div class="bar">
    ${back ? `<button class="btn ghost sm" data-home>← Bản đồ</button>` : ''}
    <div class="brand">${img(A.mascot, '')}${esc(A.name)}</div>
    ${A.bilingual ? `<button class="pill${BI ? ' bi-on' : ''}" data-bi aria-pressed="${BI}">Song ngữ Việt – Anh: ${BI ? 'Bật' : 'Tắt'}</button>` : ''}
    ${SID ? `<button class="pill" data-who title="Đổi bạn">🙂 ${esc(studentName(SID))} · Đổi bạn</button>` : ''}
    <button class="pill" data-board>📊 Bảng tiến độ</button>
    <span class="pill">🏁 ${got}/${STAGES.length} chặng</span>
    <span class="pill">⭐ ${totalStars()}</span>
  </div>`;
}
function bindBar(el) {
  el.querySelectorAll('[data-home]').forEach(b => b.onclick = home);
  el.querySelectorAll('[data-who]').forEach(b => b.onclick = who);
  el.querySelectorAll('[data-board]').forEach(b => b.onclick = board);
  el.querySelectorAll('[data-bi]').forEach(b => b.onclick = () => { BI = !BI; ls.set('bi', BI); const y = scrollY; REDRAW(); scrollTo(0, y); });
}
function paint(h, keepScroll) { const y = window.scrollY; app.innerHTML = `<div class="wrap">${h}</div>`; bindBar(app); if (keepScroll) window.scrollTo(0, y); else window.scrollTo(0, 0); }
const stepsDone = n => { const p = PROG[n] || {}; return [!!p.s1, !!p.s2, !!p.s3, !!p.done]; };

/* ───────── TRANG CHỦ ───────── */
function home() {
  if (!SID) return who();
  REDRAW = home; sheetPull();
  const all = STAGES.every(s => PROG[s.n] && PROG[s.n].done);
  let h = bar(false) + `
  <div class="hero">${img(all && A.finale ? A.finale : A.hero, A.name)}
    <div class="ttl"><h1>${esc(A.name)}</h1><span class="sub">${esc(A.sub)}${BI && A.nameEn ? ' · ' + esc(A.nameEn) : ''}</span></div></div>
  <div class="guide">${img(pose('hi'), '')}<div class="bubble">${A.intro}${BI && A.introEn ? `<span class="en" lang="en">${esc(A.introEn)}</span>` : ''}</div></div>
  <div class="howto">${STEP.map((s, i) => `<div><b>${i + 1}</b>${s}${BI ? `<span class="en">${STEP_EN[i]}</span>` : ''}</div>`).join('')}</div>`;
  TOPICS.forEach((t, ti) => {
    const list = STAGES.filter(s => (s.t || 0) === ti);
    if (!list.length) return;
    h += `<section class="topic" style="--tc:${t.color};--tcs:${t.soft}"><div><h2>${esc(t.name)}${ENp(t.name, t.en)}</h2>${t.meta ? `<p class="meta">${esc(t.meta)}</p>` : ''}</div>
      <div class="stages">${list.map(card).join('')}</div></section>`;
  });
  const stk = STAGES.filter(s => s.sticker);
  if (stk.length) h += `<section class="album"><h2>🏅 Bộ sưu tập huy hiệu${BI ? '<span class="en">Badge album</span>' : ''}</h2><div class="stk">${stk.map(s => `<div class="s${PROG[s.n] && PROG[s.n].done ? ' got' : ''}" title="${esc(s.title)}">${img(s.sticker, s.title)}</div>`).join('')}</div>
    <p class="note">Hoàn thành một chặng để nhận một huy hiệu.</p></section>`;
  h += `<p class="note">${SYNC === 'db' || SYNC === 'sheet' ? '☁️ Tiến độ đã lưu chung cho cả lớp.' : SYNC === 'wait' ? '⏳ Đang kết nối bảng tiến độ…' : '💾 Tiến độ đang lưu trên máy này.'}</p>`;
  paint(h);
  app.querySelectorAll('[data-st]').forEach(b => b.onclick = () => stage(+b.dataset.st));
}
function card(st) {
  const p = PROG[st.n] || {}, d = stepsDone(st.n);
  return `<button class="card${st.star ? ' star' : ''}" data-st="${st.n}">
    ${img(st.cover, st.title)}${p.stars ? `<span class="st">${'★'.repeat(p.stars)}</span>` : ''}
    <span class="cb"><span class="no">${st.star ? '★ Ôn tập tổng hợp' : 'Chặng ' + st.n}</span><span class="nm">${esc(st.title)}${ENp(st.title, st.en)}</span>
    <span class="steps4">${d.map(x => `<i class="${x ? 'on' : ''}"></i>`).join('')}</span></span></button>`;
}

/* ───────── CHỌN BẠN ───────── */
function who() {
  REDRAW = who; sheetPull();
  let q = '';
  const draw = () => {
    const list = ROSTER.filter(r => !q || fold(r.name).includes(fold(q)));
    app.querySelector('.kids').innerHTML = list.map(r => `<button class="kid" data-id="${r.id}">🙂 ${esc(r.name)}</button>`).join('') ||
      `<p class="muted">Không thấy tên em trong danh sách lớp ${esc(CLASS_NAME)}.</p>`;
    app.querySelectorAll('.kid').forEach(b => b.onclick = () => { setStudent(b.dataset.id); home(); });
    app.querySelector('[data-add]').hidden = !q.trim() || list.some(r => fold(r.name) === fold(q));
  };
  paint(`<div class="bar"><div class="brand">${img(A.mascot, '')}${esc(A.name)}</div>${SID ? '<button class="btn ghost sm" data-home>← Quay lại</button>' : ''}</div>
  <div class="guide">${img(pose('hi'), '')}<div class="bubble">Em là bạn nào trong lớp <b>${esc(CLASS_NAME)}</b>? Bấm vào tên của em để bắt đầu nhé.${BI ? '<span class="en">Who are you? Tap your name.</span>' : ''}</div></div>
  <section class="who"><input type="search" placeholder="Gõ tên em để tìm…" aria-label="Tìm tên"><div class="kids"></div>
  <button class="btn ghost sm" data-add hidden>➕ Thêm tên mới</button></section>`);
  const inp = app.querySelector('input');
  inp.oninput = () => { q = inp.value; draw(); };
  app.querySelector('[data-add]').onclick = () => { const id = newKid(inp.value); setStudent(id); home(); };
  draw();
}

/* ───────── BẢNG TIẾN ĐỘ ───────── */
function board() {
  REDRAW = board; sheetPull();
  const rows = ROSTER.map(r => { const p = ALL[r.id] || {}; return { r, p, tot: STAGES.reduce((a, s) => a + ((p[s.n] && p[s.n].stars) || 0), 0) }; });
  paint(bar(true) + `<div class="stage-h"><div><span class="k">Lớp ${esc(CLASS_NAME)}</span><h2>📊 Bảng tiến độ cả lớp</h2></div></div>
  <div class="tbl"><table><thead><tr><th>#</th><th>Họ và tên</th>${STAGES.map(s => `<th title="${esc(s.title)}">${s.star ? '★' : 'C' + s.n}</th>`).join('')}<th>Tổng ⭐</th></tr></thead><tbody>
  ${rows.map((x, i) => `<tr><td>${i + 1}</td><td>${esc(x.r.name)}</td>${STAGES.map(s => { const q = x.p[s.n]; return `<td class="${q && q.stars === 3 ? 's3' : ''}">${q ? (q.done ? '★'.repeat(q.stars || 0) || '✓' : ([q.s1, q.s2, q.s3].filter(Boolean).length ? [q.s1, q.s2, q.s3].filter(Boolean).length + '/4' : '')) : ''}</td>`; }).join('')}<td><b>${x.tot}</b></td></tr>`).join('')}
  </tbody></table></div>
  <p class="note">Ô có sao: đã hoàn thành chặng. Ô ghi 1/4, 2/4, 3/4: em đang làm đến bước đó. Mức sao: từ 90% câu đúng được ★★★, từ 70% được ★★, từ 50% được ★.</p>`);
}

/* ───────── CHẶNG ───────── */
let CUR = null, STEPI = 0;
function stage(n, step) {
  CUR = S(n);
  const d = stepsDone(n);
  STEPI = step != null ? step : d[2] ? 3 : d[1] ? 2 : d[0] ? 1 : 0;
  if (step == null && d[3]) STEPI = 0;
  REDRAW = () => stage(n, STEPI);
  const t = topicOf(CUR);
  const head = `<div class="stage-h" style="border-left-color:${t.color}">${img(CUR.sticker || CUR.cover, '', '')}
    <div style="flex:1;min-width:200px"><span class="k">${CUR.star ? '★ Ôn tập tổng hợp' : 'Chặng ' + n} · ${esc(t.name)}</span><h2>${esc(CUR.title)}${ENp(CUR.title, CUR.en)}</h2></div>
    <div class="steps">${STEP.map((s, i) => `<button data-step="${i}" class="${i === STEPI ? 'on' : d[i] ? 'ok' : ''}"${i > 0 && !d[i - 1] && !d[i] && i !== STEPI ? ' disabled' : ''}>${d[i] ? '✓ ' : ''}${i + 1}. ${s}</button>`).join('')}</div></div>`;
  const body = [stepRecall, stepMind, stepQuiz, stepApply][STEPI](CUR);
  paint(bar(true) + head + body.h);
  const sh = app.querySelector('.stage-h img'); if (sh) { sh.style.cssText = 'width:64px;height:64px;object-fit:contain;border-radius:14px;background:#fff'; }
  app.querySelectorAll('[data-step]').forEach(b => b.onclick = () => stage(n, +b.dataset.step));
  body.bind && body.bind(app);
}
const nextStep = () => stage(CUR.n, STEPI + 1);
const taskHead = (i, text, en) => `<div class="task-h"><span class="n">${i}</span><div>${text}${BI && en ? `<span class="en">${esc(en)}</span>` : ''}</div></div>`;

/* Bước 1 · Nhắc lại kiến thức */
function stepRecall(st) {
  const p = P(st.n); p.read = p.read || [];
  const R = st.recall || [];
  let h = taskHead(1, 'Em hãy <b>đọc to</b> từng thẻ kiến thức cần nhớ. Đọc xong thẻ nào, bấm <b>“Em đã đọc”</b> ở thẻ đó.', 'Read each card aloud, then tap “I have read it”.');
  h += `<div class="rc">${R.map((r, i) => `<article class="rcard${p.read.includes(i) ? ' read' : ''}" data-i="${i}">
      ${r.img ? img(r.img, strip(r.t), 'main' + (r.fit ? ' fit' : '')) : ''}
      ${r.more ? `<div class="more">${r.more.map(c => img(c, '')).join('')}</div>` : ''}
      <div class="tx"><p>${rich(r.t)}</p>${BI && r.te ? `<p class="ten" lang="en">${esc(r.te)}</p>` : ''}</div>
      <div class="ft"><button class="say" data-say="${i}">🔊 Nghe</button>${BI && r.te ? `<button class="say en2" data-sayen="${i}">🔊 English</button>` : ''}
      <button class="readbtn" data-read="${i}">${p.read.includes(i) ? '✓ Em đã đọc' : 'Em đã đọc'}</button></div></article>`).join('')}</div>`;
  if (st.keys) h += `<section class="keybox"><h3>📌 Ghi nhớ</h3><ul>${st.keys.map(k => `<li>${rich(k)}</li>`).join('')}</ul></section>`;
  if (BI && st.w) h += `<section class="vocab"><h3>🔤 Từ vựng tiếng Anh<span class="en">Vocabulary</span></h3><div class="vgrid">${st.w.map((w, i) => `<div class="vw">${img(w[0], w[1])}<span class="vi">${esc(w[1])}</span><span class="enw" lang="en">${esc(w[2])}</span><span class="sp2"><button data-vw="${i}" data-l="vi">🔊 Việt</button><button data-vw="${i}" data-l="en">🔊 Anh</button></span></div>`).join('')}</div></section>`;
  const ok = p.read.length >= R.length;
  h += `<div class="row"><span class="note" data-cnt>Đã đọc ${p.read.length}/${R.length} thẻ</span><span class="sp"></span><button class="btn main" data-next${ok ? '' : ' disabled'}>Sang bước 2: Sơ đồ tư duy →</button></div>`;
  return { h, bind(el) {
    el.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(R[+b.dataset.say].t));
    el.querySelectorAll('[data-sayen]').forEach(b => b.onclick = () => speak(R[+b.dataset.sayen].te, 'en-US'));
    el.querySelectorAll('[data-vw]').forEach(b => b.onclick = () => { const w = st.w[+b.dataset.vw]; speak(b.dataset.l === 'en' ? w[2] : w[1], b.dataset.l === 'en' ? 'en-US' : 'vi-VN'); });
    el.querySelectorAll('[data-read]').forEach(b => b.onclick = () => {
      const i = +b.dataset.read; if (!p.read.includes(i)) p.read.push(i); else return;
      b.closest('.rcard').classList.add('read'); b.textContent = '✓ Em đã đọc'; sfx(true);
      el.querySelector('[data-cnt]').textContent = `Đã đọc ${p.read.length}/${R.length} thẻ`;
      if (p.read.length >= R.length) { p.s1 = true; p.at = Date.now(); el.querySelector('[data-next]').disabled = false; el.querySelector('[data-step="1"]').disabled = false; el.querySelector('[data-step="0"]').classList.add('ok'); }
      save();
    });
    el.querySelector('[data-next]').onclick = nextStep;
  } };
}

/* Bước 2 · Sơ đồ tư duy điền khuyết */
function stepMind(st) {
  const p = P(st.n), M = st.mind;
  const blanks = []; // {a:[...accepted], shown}
  const line = (s, bi) => esc(s).replace(/\{\{(.+?)\}\}/g, (_, a) => { const alts = a.split('|'); blanks.push({ a: alts, b: bi }); return `<button class="blank" data-b="${blanks.length - 1}" aria-label="Chỗ trống">&nbsp;</button>`; });
  const brs = M.branches.map((b, bi) => `<div class="br" data-br="${bi}" style="--bc:${b.color || 'var(--main)'}"><div class="bh">${b.img ? img(b.img, '') : ''}<span>${esc(b.label)}${BI && b.le ? `<span class="en" style="color:#fff;opacity:.9">${esc(b.le)}</span>` : ''}</span></div><ul>${b.items.map(it => `<li>${line(it, bi)}</li>`).join('')}</ul></div>`);
  const half = Math.ceil(brs.length / 2);
  const chips = shuf(blanks.map((b, i) => ({ t: b.a[0], i })).concat((M.extra || []).map(t => ({ t, i: -1 }))));
  let h = taskHead(2, 'Hoàn thành <b>sơ đồ tư duy</b>: bấm một <b>từ khoá</b> trong hộp màu vàng, rồi bấm vào <b>chỗ trống</b> phù hợp. Bấm lại chỗ đã điền để gỡ ra. Điền xong bấm <b>Kiểm tra</b>.', 'Complete the mind map: tap a word, then tap a blank.');
  h += `<div class="mm"><svg class="lines" aria-hidden="true"></svg>
    <div class="mm-col L">${brs.slice(0, half).join('')}</div>
    <div class="mm-c">${M.img ? img(M.img, '') : ''}<h3>${esc(M.center)}${BI && M.ce ? `<span class="en" style="color:#fff">${esc(M.ce)}</span>` : ''}</h3></div>
    <div class="mm-col R">${brs.slice(half).join('')}</div></div>
  <div class="bank"><span class="hint">Hộp từ khoá (${blanks.length} chỗ trống${M.extra && M.extra.length ? ', có ' + M.extra.length + ' từ gây nhiễu' : ''})</span><div class="chips">${chips.map((c, k) => `<button class="chip" data-c="${k}">${esc(c.t)}</button>`).join('')}</div>
  <div class="row"><button class="btn main sm" data-check>✔ Kiểm tra</button><button class="btn ghost sm" data-show hidden>👀 Xem đáp án</button><button class="btn ghost sm" data-reset>↺ Làm lại</button><span class="sp"></span><span class="note" data-msg></span></div></div>
  <div class="fb" data-fb hidden></div>
  <div class="row"><span class="sp"></span><button class="btn main" data-next${p.s2 ? '' : ' disabled'}>Sang bước 3: Câu hỏi ôn tập →</button></div>`;
  return { h, bind(el) {
    const fill = {}; // blank index -> chip k
    let sel = null, tgt = null, checks = 0;
    const chipEls = [...el.querySelectorAll('.chip')], bEls = [...el.querySelectorAll('.blank')];
    const put = (bi, k) => {
      if (fill[bi] != null) chipEls[fill[bi]].classList.remove('used');
      fill[bi] = k; const b = bEls[bi]; b.textContent = chips[k].t; b.className = 'blank fill'; chipEls[k].classList.add('used'); chipEls[k].classList.remove('sel');
      sel = null; tgt = null; bEls.forEach(x => x.classList.remove('target'));
    };
    chipEls.forEach((c, k) => c.onclick = () => {
      if (tgt != null) return put(tgt, k);
      chipEls.forEach(x => x.classList.remove('sel')); sel = sel === k ? null : k; if (sel != null) c.classList.add('sel');
    });
    bEls.forEach((b, bi) => b.onclick = () => {
      if (sel != null) return put(bi, sel);
      if (fill[bi] != null) { chipEls[fill[bi]].classList.remove('used'); delete fill[bi]; b.innerHTML = '&nbsp;'; b.className = 'blank'; return; }
      bEls.forEach(x => x.classList.remove('target')); tgt = tgt === bi ? null : bi; if (tgt != null) b.classList.add('target');
    });
    const fb = el.querySelector('[data-fb]');
    el.querySelector('[data-check]').onclick = () => {
      checks++;
      let right = 0;
      blanks.forEach((bl, bi) => {
        const b = bEls[bi], k = fill[bi];
        if (k == null) { b.className = 'blank wrong'; b.innerHTML = '&nbsp;?&nbsp;'; return; }
        const ok = bl.a.some(a => fold(a) === fold(chips[k].t));
        b.className = 'blank ' + (ok ? 'right' : 'wrong'); if (ok) right++;
      });
      const all = right === blanks.length;
      p.mind = Math.max(p.mind || 0, Math.round(right / blanks.length * 100));
      if (all) { p.s2 = true; p.at = Date.now(); el.querySelector('[data-next]').disabled = false; el.querySelector('[data-step="2"]').disabled = false; el.querySelector('[data-step="1"]').classList.add('ok'); }
      save(); sfx(all);
      fb.hidden = false; fb.className = 'fb pop ' + (all ? 'good' : right / blanks.length >= .6 ? 'part' : 'bad');
      fb.innerHTML = `${img(pose(all ? 'good' : 'try'), '')}<div class="tx"><h3>${all ? 'Tuyệt vời! Sơ đồ đã đúng hết.' : `Đúng ${right}/${blanks.length} chỗ trống.`}</h3><p class="why">${all ? 'Em hãy nhìn sơ đồ và nói lại kiến thức trọng tâm của chặng nhé.' : 'Chỗ màu đỏ chưa đúng. Bấm vào chỗ đó để gỡ từ ra rồi chọn lại.'}</p></div>`;
      if (!all && checks >= 2) el.querySelector('[data-show]').hidden = false;
    };
    el.querySelector('[data-show]').onclick = () => {
      blanks.forEach((bl, bi) => { const b = bEls[bi]; if (!b.classList.contains('right')) { b.textContent = bl.a[0]; b.className = 'blank show'; } });
      el.querySelector('.chips').style.pointerEvents = 'none';
      el.querySelector('[data-msg]').textContent = 'Em đọc kĩ đáp án, rồi bấm “Làm lại” để tự điền một lần nữa.';
    };
    el.querySelector('[data-reset]').onclick = () => stage(st.n, 1);
    el.querySelector('[data-next]').onclick = nextStep;
    const mm = el.querySelector('.mm'), svg = mm.querySelector('svg');
    const draw = () => {
      if (getComputedStyle(svg).display === 'none') return;
      const R0 = mm.getBoundingClientRect(), c = mm.querySelector('.mm-c').getBoundingClientRect();
      const cx = c.left + c.width / 2 - R0.left, cy = c.top + c.height / 2 - R0.top;
      svg.setAttribute('viewBox', `0 0 ${R0.width} ${R0.height}`);
      svg.innerHTML = [...mm.querySelectorAll('.br')].map(b => {
        const r = b.getBoundingClientRect(), left = r.left + r.width / 2 < c.left + c.width / 2;
        const x = (left ? r.right : r.left) - R0.left, y = r.top + 22 - R0.top, sx = left ? c.left - R0.left : c.right - R0.left;
        const mx = (x + sx) / 2;
        return `<path d="M${sx},${cy} C${mx},${cy} ${mx},${y} ${x},${y}" fill="none" stroke="${b.style.getPropertyValue('--bc')}" stroke-width="5" stroke-linecap="round" opacity=".8"/>`;
      }).join('');
    };
    requestAnimationFrame(draw); setTimeout(draw, 400); window.onresize = draw;
    el.querySelectorAll('.mm img').forEach(i => i.addEventListener('load', draw));
  } };
}

/* Bước 3 · Câu hỏi ôn tập */
function buildQuiz(st) {
  const Q = (st.q || []).map((q, i) => Object.assign({ _i: i }, q));
  if (st.exam) return Q; // đề ôn giữ đúng thứ tự như đề thật
  return [1, 2, 3].flatMap(l => shuf(Q.filter(q => (q.lv || 1) === l)));
}
let QZ = null;
function stepQuiz(st) {
  const p = P(st.n);
  if (!QZ || QZ.n !== st.n) QZ = { n: st.n, list: buildQuiz(st), i: 0, sc: [], t0: Date.now() };
  const q = QZ.list[QZ.i];
  if (!q) return quizEnd(st);
  const tot = QZ.list.length;
  let h = taskHead(3, st.exam ? `<b>${esc(st.examTitle || 'Đề ôn tập')}</b>: làm lần lượt từng câu như khi làm bài kiểm tra thật. ${st.examNote ? esc(st.examNote) : ''}` :
    'Trả lời các câu hỏi ôn tập. Câu hỏi đi từ <b>' + LVs[1] + '</b> đến <b>' + LVs[3] + '</b>. Đọc kĩ rồi mới chọn nhé!', 'Answer the review questions.');
  h += `<div class="qtop"><span class="pill">Câu ${QZ.i + 1}/${tot}</span><div class="prog"><i style="width:${QZ.i / tot * 100}%"></i></div>${st.exam ? '<span class="pill" data-clock>⏱ 00:00</span>' : ''}<span class="pill">✅ ${QZ.sc.reduce((a, b) => a + b, 0).toFixed(1).replace('.0', '')}</span></div>
  <section class="qbox pop" data-q>
    <div class="qmeta">${q.part ? `<span class="qtype" style="background:var(--sun-soft);color:var(--ink)">${esc(q.part)}</span>` : ''}<span class="lv lv${q.lv || 1}">${LV[q.lv || 1]}</span><span class="qtype">${TYPE[q.t] || ''}</span>${q.pt ? `<span class="qtype">${q.pt} điểm</span>` : ''}</div>
    <div class="qq"><h3>${q.ctx ? `<span class="ctx">${rich(q.ctx)}</span>` : ''}${rich(q.q)}${BI && q.qe ? `<span class="en" lang="en">${esc(q.qe)}</span>` : ''}</h3><button class="say" data-sayq>🔊</button></div>
    ${q.img ? img(q.img, '', 'qimg') : ''}
    <div data-ans></div>
    <div data-fb></div>
  </section>`;
  return { h, bind(el) {
    el.querySelector('[data-sayq]').onclick = () => speak((q.ctx ? q.ctx + '. ' : '') + q.q + (q.o ? '. ' + q.o.map((o, i) => L(i) + '. ' + (typeof o === 'string' ? o : o[1])).join('. ') : ''));
    if (st.exam) { const c = el.querySelector('[data-clock]'); const tick = () => { if (!document.body.contains(c)) return; const s = Math.floor((Date.now() - QZ.t0) / 1000); c.textContent = `⏱ ${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; setTimeout(tick, 1000); }; tick(); }
    const box = el.querySelector('[data-ans]'), fbx = el.querySelector('[data-fb]');
    const done = (score, extra) => {
      el.querySelector('[data-q]').classList.add('locked');
      QZ.sc[QZ.i] = score; sfx(score >= .99);
      const cls = score >= .99 ? 'good' : score > 0 ? 'part' : 'bad';
      const title = score >= .99 ? (TH ? 'Đúng rồi! Em giỏi quá!' : 'Chính xác!') : score > 0 ? `Đúng một phần (${Math.round(score * 100)}%)` : 'Chưa đúng rồi.';
      fbx.innerHTML = `<div class="fb pop ${cls}">${img(pose(score >= .99 ? 'good' : 'think'), '')}<div class="tx"><h3>${title}</h3>${extra || ''}${q.ex ? `<p class="why">💡 ${rich(q.ex)}</p>` : ''}</div>
        <button class="btn main" data-go>${QZ.i + 1 < tot ? 'Câu tiếp →' : 'Xem kết quả →'}</button></div>`;
      fbx.querySelector('[data-go]').onclick = () => { QZ.i++; stage(st.n, 2); };
      fbx.querySelector('[data-go]').focus({ preventScroll: true });
      fbx.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
    RENDER[q.t](q, box, done);
  } };
}
const optT = o => typeof o === 'string' ? o : o[1] || '';
const optH = o => typeof o === 'string' ? `<span>${rich(o)}</span>` : `${img(o[0], o[1])}${o[1] ? `<span>${rich(o[1])}</span>` : ''}`;
const checkBtn = (txt) => `<div class="row" data-cb><span class="sp"></span><button class="btn main" data-check>${txt || '✔ Kiểm tra'}</button></div>`;
const RENDER = {
  mcq(q, box, done) {
    const ord = q.keep ? q.o.map((_, i) => i) : shuf(q.o.map((_, i) => i));
    const im = q.o.every(o => typeof o !== 'string');
    box.innerHTML = `<div class="opts${im ? ' img' : ''}">${ord.map((oi, k) => `<button class="opt${im ? ' im' : ''}" data-o="${oi}"><span class="L">${L(k)}</span>${optH(q.o[oi])}</button>`).join('')}</div>`;
    box.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const oi = +b.dataset.o, ok = oi === q.a;
      b.classList.add(ok ? 'right' : 'wrong');
      if (!ok) { b.classList.add('shake'); box.querySelector(`[data-o="${q.a}"]`).classList.add('right'); }
      done(ok ? 1 : 0, ok ? '' : `<p class="why">Đáp án đúng: <b>${L(ord.indexOf(q.a))}. ${esc(optT(q.o[q.a]))}</b></p>`);
    });
  },
  pick(q, box, done) { RENDER.mcq(q, box, done); },
  tf(q, box, done) {
    const lb = q.labels || ['Đúng', 'Sai'];
    box.innerHTML = `<div class="tfrow"><button class="tfb y" data-v="1">✔ ${esc(lb[0])}</button><button class="tfb n" data-v="0">✘ ${esc(lb[1])}</button></div>`;
    box.querySelectorAll('.tfb').forEach(b => b.onclick = () => { b.classList.add('pick'); const ok = (b.dataset.v === '1') === !!q.a; done(ok ? 1 : 0, ok ? '' : `<p class="why">Đáp án đúng: <b>${esc(q.a ? lb[0] : lb[1])}</b></p>`); });
  },
  tf4(q, box, done) {
    const v = {};
    box.innerHTML = `<table class="t4">${q.items.map((it, i) => `<tr data-r="${i}"><td>${'abcdef'[i]})</td><td>${rich(it[0])}</td><td><button class="d" data-v="1">Đúng</button><button class="s" data-v="0">Sai</button></td></tr>`).join('')}</table>${checkBtn()}`;
    box.querySelectorAll('tr').forEach(tr => tr.querySelectorAll('button').forEach(b => b.onclick = () => { tr.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on'); v[tr.dataset.r] = b.dataset.v === '1'; }));
    box.querySelector('[data-check]').onclick = () => {
      if (Object.keys(v).length < q.items.length) return box.querySelector('[data-check]').classList.add('shake'), setTimeout(() => box.querySelector('[data-check]').classList.remove('shake'), 400);
      let r = 0; q.items.forEach((it, i) => { const ok = v[i] === !!it[1]; if (ok) r++; box.querySelector(`tr[data-r="${i}"]`).classList.add(ok ? 'right' : 'wrong'); });
      box.querySelector('[data-cb]').remove();
      done(r / q.items.length, `<p class="why">Em đúng ${r}/${q.items.length} ý. Đáp án: ${q.items.map((it, i) => `${'abcdef'[i]}) <b>${it[1] ? 'Đúng' : 'Sai'}</b>`).join(', ')}.</p>`);
    };
  },
  short(q, box, done) {
    box.innerHTML = `<div class="short"><input type="text" placeholder="${esc(q.ph || 'Gõ câu trả lời của em…')}" aria-label="Câu trả lời"><button class="btn main" data-check>✔ Kiểm tra</button></div>`;
    const inp = box.querySelector('input'); inp.focus({ preventScroll: true });
    const go = () => {
      const v = fold(inp.value); if (!v) return;
      const ok = q.a.some(a => { const f = fold(a); return v === f || (f.length > 2 && (' ' + v + ' ').includes(' ' + f + ' ')); });
      inp.disabled = true; box.querySelector('[data-check]').remove(); inp.style.borderColor = ok ? 'var(--ok)' : 'var(--bad)';
      done(ok ? 1 : 0, ok ? '' : `<p class="why">Đáp án: <b>${esc(q.a[0])}</b></p>`);
    };
    box.querySelector('[data-check]').onclick = go; inp.onkeydown = e => { if (e.key === 'Enter') go(); };
  },
  essay(q, box, done) {
    box.innerHTML = `<div class="essay"><textarea placeholder="${esc(q.ph || 'Em viết câu trả lời vào đây…')}" aria-label="Bài làm"></textarea></div>${checkBtn('✔ Nộp bài')}`;
    const ta = box.querySelector('textarea');
    box.querySelector('[data-check]').onclick = () => {
      const v = ' ' + fold(ta.value) + ' '; if (v.trim().length < 3) return;
      const hit = q.kw.map(g => g.some(k => v.includes(' ' + fold(k)) || v.includes(fold(k))));
      const r = hit.filter(Boolean).length / q.kw.length;
      ta.disabled = true; box.querySelector('[data-cb]').remove();
      done(r >= .99 ? 1 : Math.round(r * 4) / 4, `<p class="why">Bài em có ${hit.filter(Boolean).length}/${q.kw.length} ý chính${q.kwn ? ': ' + q.kwn.map((n, i) => (hit[i] ? '✅ ' : '⬜ ') + esc(n)).join(' · ') : ''}.</p><div class="model"><b>Bài làm gợi ý:</b>\n${esc(q.model)}</div>`);
    };
  },
  match(q, box, done) {
    const Lf = q.pairs.map((p, i) => ({ v: p[0], i })), Rt = shuf(q.pairs.map((p, i) => ({ v: p[1], i })));
    const C = ['#2F8FD8', '#E08A1E', '#3AA85A', '#C0398B', '#7A4CC2', '#E0533D'];
    const cell = (x, side) => `<button class="mi" data-s="${side}" data-i="${x.i}">${typeof x.v === 'string' ? `<span>${rich(x.v)}</span>` : optH(x.v)}</button>`;
    box.innerHTML = `<p class="note">Bấm một ô bên trái, rồi bấm ô phù hợp bên phải.</p><div class="match"><div class="mcol">${Lf.map(x => cell(x, 'l')).join('')}</div><div class="mcol">${Rt.map(x => cell(x, 'r')).join('')}</div></div>${checkBtn()}`;
    const pair = {}; let sel = null, ci = 0; const col = {};
    const repaint = () => box.querySelectorAll('.mi').forEach(b => {
      const s = b.dataset.s, i = +b.dataset.i; b.querySelector('.tag') && b.querySelector('.tag').remove(); b.classList.remove('paired');
      const li = s === 'l' ? i : +Object.keys(pair).find(k => pair[k] === i);
      if ((s === 'l' && pair[i] != null) || (s === 'r' && !isNaN(li))) { b.classList.add('paired'); b.style.setProperty('--pc', col[li]); b.insertAdjacentHTML('beforeend', '<span class="tag"></span>'); }
    });
    box.querySelectorAll('.mi').forEach(b => b.onclick = () => {
      const s = b.dataset.s, i = +b.dataset.i;
      if (!sel || sel.s === s) { box.querySelectorAll('.mi').forEach(x => x.classList.remove('sel')); sel = { s, i }; b.classList.add('sel'); return; }
      const l = s === 'l' ? i : sel.i, r = s === 'r' ? i : sel.i;
      Object.keys(pair).forEach(k => { if (pair[k] === r) delete pair[k]; });
      pair[l] = r; if (!col[l]) col[l] = C[ci++ % C.length];
      sel = null; box.querySelectorAll('.mi').forEach(x => x.classList.remove('sel')); repaint();
    });
    box.querySelector('[data-check]').onclick = () => {
      if (Object.keys(pair).length < Lf.length) return;
      let r = 0; Lf.forEach(x => { const ok = pair[x.i] === x.i; if (ok) r++; box.querySelector(`.mi[data-s="l"][data-i="${x.i}"]`).classList.add(ok ? 'right' : 'wrong'); box.querySelector(`.mi[data-s="r"][data-i="${pair[x.i]}"]`).classList.add(ok ? 'right' : 'wrong'); });
      box.querySelector('[data-cb]').remove();
      done(r / Lf.length, r === Lf.length ? '' : `<p class="why">Nối đúng: ${q.pairs.map(p => `<b>${esc(optT(p[0]) || p[0])}</b> – ${esc(optT(p[1]) || p[1])}`).join('; ')}.</p>`);
    };
  },
  sort(q, box, done) {
    const items = shuf(q.items.map((it, i) => ({ v: it[0], b: it[1], i }))), at = {};
    let sel = null;
    const chip = x => `<button class="si" data-i="${x.i}">${typeof x.v === 'string' ? esc(x.v) : optH(x.v)}</button>`;
    box.innerHTML = `<p class="note">Bấm một thẻ, rồi bấm vào nhóm phù hợp.</p><div class="sortpool">${items.map(chip).join('')}</div><div class="bins">${q.bins.map((b, k) => `<div class="bin" role="button" tabindex="0" data-k="${k}"><h4>${esc(b)}</h4><span class="in"></span></div>`).join('')}</div>${checkBtn()}`;
    const pool = box.querySelector('.sortpool');
    const drop = b => { b.querySelector('.in').appendChild(sel); at[sel.dataset.i] = +b.dataset.k; sel.classList.remove('sel'); sel = null; };
    box.querySelectorAll('.si').forEach(s => s.onclick = e => { e.stopPropagation(); const bn = s.closest('.bin'); if (sel && sel !== s && bn) return drop(bn); box.querySelectorAll('.si').forEach(x => x.classList.remove('sel')); sel = sel === s ? null : s; if (sel) s.classList.add('sel'); });
    box.querySelectorAll('.bin').forEach(b => b.onclick = () => { if (sel) drop(b); });
    pool.onclick = () => { if (sel) { pool.appendChild(sel); delete at[sel.dataset.i]; sel.classList.remove('sel'); sel = null; } };
    box.querySelector('[data-check]').onclick = () => {
      if (Object.keys(at).length < items.length) return;
      let r = 0; items.forEach(x => { const ok = at[x.i] === x.b; if (ok) r++; box.querySelector(`.si[data-i="${x.i}"]`).classList.add(ok ? 'right' : 'wrong'); });
      box.querySelector('[data-cb]').remove();
      done(r / items.length, r === items.length ? '' : `<p class="why">Thẻ đỏ đặt chưa đúng nhóm. ${q.items.filter((it, i) => at[i] !== it[1]).map(it => `<b>${esc(optT(it[0]) || it[0])}</b> → ${esc(q.bins[it[1]])}`).join('; ')}.</p>`);
    };
  },
  order(q, box, done) {
    const items = shuf(q.items.map((v, i) => ({ v, i }))), seq = [];
    box.innerHTML = `<p class="note">Bấm lần lượt các bước theo đúng thứ tự (bấm lại để bỏ chọn).</p><div class="olist">${items.map(x => `<button class="oi" data-i="${x.i}"><span class="num">?</span>${typeof x.v === 'string' ? `<span>${rich(x.v)}</span>` : optH(x.v)}</button>`).join('')}</div>${checkBtn()}`;
    const upd = () => box.querySelectorAll('.oi').forEach(b => { const k = seq.indexOf(+b.dataset.i); b.querySelector('.num').textContent = k < 0 ? '?' : k + 1; b.style.borderColor = k < 0 ? '' : 'var(--main)'; });
    box.querySelectorAll('.oi').forEach(b => b.onclick = () => { const i = +b.dataset.i, k = seq.indexOf(i); if (k < 0) seq.push(i); else seq.splice(k, 1); upd(); });
    box.querySelector('[data-check]').onclick = () => {
      if (seq.length < items.length) return;
      let r = 0; seq.forEach((i, k) => { const ok = i === k; if (ok) r++; const e = box.querySelector(`.oi[data-i="${i}"]`); e.style.borderColor = ''; e.classList.add(ok ? 'right' : 'wrong'); });
      box.querySelector('[data-cb]').remove();
      done(r === items.length ? 1 : r / items.length * .5, r === items.length ? '' : `<p class="why">Thứ tự đúng: ${q.items.map((v, k) => `<b>${k + 1}.</b> ${esc(optT(v) || v)}`).join(' → ')}</p>`);
    };
  }
};
function starOf(pct) { return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0; }
function quizEnd(st) {
  const p = P(st.n), tot = QZ.list.length, sum = QZ.sc.reduce((a, b) => a + (b || 0), 0), pct = Math.round(sum / tot * 100);
  if (!QZ.saved) {
    QZ.saved = true; p.tries = (p.tries || 0) + 1; p.last = pct; p.best = Math.max(p.best || 0, pct);
    p.stars = Math.max(p.stars || 0, starOf(pct)); p.s3 = true; p.at = Date.now();
    if (st.exam) p.time = Math.round((Date.now() - QZ.t0) / 1000);
    save();
  }
  const s = starOf(pct);
  const byLv = [1, 2, 3].map(l => { const ix = QZ.list.map((q, i) => (q.lv || 1) === l ? i : -1).filter(i => i >= 0); return ix.length ? `<span style="color:#fff;background:var(--l${l})">${LVs[l]}: ${(ix.reduce((a, i) => a + (QZ.sc[i] || 0), 0)).toFixed(1).replace('.0', '')}/${ix.length}</span>` : ''; }).join('');
  const wrong = QZ.list.filter((q, i) => (QZ.sc[i] || 0) < .99);
  const h = taskHead(3, 'Kết quả phần câu hỏi ôn tập') + `<section class="res pop">${img(pose(s >= 2 ? 'win' : 'try'), '', 'reward')}
    <div class="stars">${[1, 2, 3].map(k => k <= s ? '★' : '<span class="off">★</span>').join('')}</div>
    <h2>Em đúng ${sum.toFixed(1).replace('.0', '')}/${tot} câu (${pct}%)</h2>
    <div class="lvtable">${byLv}</div>
    ${st.exam && p.time ? `<p class="note">Thời gian làm bài: ${Math.floor(p.time / 60)} phút ${p.time % 60} giây.</p>` : ''}
    <p>${s === 3 ? 'Xuất sắc! Em đã nắm chắc kiến thức của chặng này.' : s === 2 ? 'Tốt lắm! Xem lại các câu sai rồi thử lại để được 3 sao nhé.' : 'Em hãy đọc lại thẻ kiến thức và sơ đồ tư duy rồi làm lại nhé.'}</p>
    ${wrong.length ? `<details style="text-align:left;width:100%"><summary style="font-weight:800;cursor:pointer">Xem lại ${wrong.length} câu chưa đúng</summary><ul>${wrong.map(q => `<li style="margin:6px 0"><b>${strip(q.q)}</b>${q.ex ? `<br><span class="muted">💡 ${strip(q.ex)}</span>` : ''}</li>`).join('')}</ul></details>` : ''}
    <div class="row" style="justify-content:center"><button class="btn ghost" data-redo>↺ Làm lại câu hỏi</button><button class="btn main" data-next>Sang bước 4: Vận dụng →</button></div></section>`;
  return { h, bind(el) {
    el.querySelector('[data-redo]').onclick = () => { QZ = null; stage(st.n, 2); };
    el.querySelector('[data-next]').onclick = () => { QZ = null; nextStep(); };
  } };
}

/* Bước 4 · Vận dụng */
function stepApply(st) {
  const p = P(st.n); p.tk = p.tk || [];
  const T = st.tasks || [];
  const h = taskHead(4, 'Vận dụng kiến thức vào cuộc sống. Làm xong việc nào, em bấm vào ô của việc đó. Cuối cùng bấm <b>Hoàn thành chặng</b>.', 'Use what you learned. Tick each task you do.') +
  `<section class="tasks"><h3>🌟 Nhiệm vụ vận dụng</h3>${T.map((t, i) => `<button class="task" data-t="${i}"><span class="bx">${p.tk.includes(i) ? '✓' : ''}</span><span>${rich(typeof t === 'string' ? t : t[1])}${BI && t.e ? `<span class="en">${esc(t.e)}</span>` : ''}</span>${typeof t !== 'string' && t[0] ? img(t[0], '', '') : ''}</button>`).join('')}</section>
  ${p.done ? `<section class="res"><div class="stars">${[1, 2, 3].map(k => k <= (p.stars || 0) ? '★' : '<span class="off">★</span>').join('')}</div><h2>Em đã hoàn thành chặng này!</h2>${st.sticker ? img(st.sticker, '', 'reward') : ''}</section>` : ''}
  <div class="row"><span class="sp"></span>${p.done ? '' : `<button class="btn main" data-fin>🏁 Hoàn thành chặng</button>`}${nextOf(st) ? `<button class="btn${p.done ? ' main' : ' ghost'}" data-go>Chặng tiếp →</button>` : ''}<button class="btn ghost" data-home>Về bản đồ</button></div>`;
  return { h, bind(el) {
    el.querySelectorAll('.task img').forEach(i => i.style.cssText = 'width:64px;height:64px;object-fit:contain;margin-left:auto;border-radius:10px;background:#fff');
    el.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { const i = +b.dataset.t, k = p.tk.indexOf(i); if (k < 0) p.tk.push(i); else p.tk.splice(k, 1); b.querySelector('.bx').textContent = k < 0 ? '✓' : ''; save(); });
    const f = el.querySelector('[data-fin]'); if (f) f.onclick = () => { p.done = true; p.at = Date.now(); save(); sfx(true); confetti(); stage(st.n, 3); };
    const g = el.querySelector('[data-go]'); if (g) g.onclick = () => stage(nextOf(st).n);
  } };
}
const nextOf = st => STAGES[STAGES.indexOf(st) + 1];
function confetti() {
  const c = document.createElement('div'); c.setAttribute('aria-hidden', 'true');
  c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99;overflow:hidden';
  const E = ['⭐', '🎉', '🌟', '✨', '🎈'];
  c.innerHTML = Array.from({ length: 28 }, () => `<span style="position:absolute;left:${Math.random() * 100}%;top:-40px;font-size:${20 + Math.random() * 20}px;animation:fall ${1.6 + Math.random() * 1.4}s ${Math.random() * .5}s ease-in forwards">${E[Math.floor(Math.random() * E.length)]}</span>`).join('');
  if (!document.getElementById('fallk')) { const s = document.createElement('style'); s.id = 'fallk'; s.textContent = '@keyframes fall{to{transform:translateY(110vh) rotate(360deg)}}'; document.head.appendChild(s); }
  document.body.appendChild(c); setTimeout(() => c.remove(), 3500);
}
window.addEventListener('focus', sheetPull);
if (typeof speechSynthesis !== 'undefined') speechSynthesis.onvoiceschanged = () => {};
home();
})();
