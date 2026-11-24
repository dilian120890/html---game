/**
 * Lưu tiến độ học sinh của các app ôn tập vào Google Sheet này.
 * Mỗi app một trang tính (tnxh1, tnxh2, tnxh3, cn3). Mỗi học sinh một dòng.
 * Cột G ("Dữ liệu") là dữ liệu của app, cô không cần sửa.
 */
var HEAD = ['Mã', 'Lớp', 'Họ và tên', 'Tổng sao', 'Số chặng qua', 'Cập nhật', 'Dữ liệu'];

function sheetOf_(app, n) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(app);
  if (!sh) {
    sh = ss.insertSheet(app);
    var head = HEAD.slice();
    for (var i = 1; i <= (n || 16); i++) head.push('C' + i);
    sh.appendRow(head);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground('#FFF3CC');
    sh.setColumnWidth(3, 200);
    sh.setColumnWidth(7, 60);
  }
  return sh;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function clean_(s) { return String(s || '').replace(/[^\w-]/g, '').slice(0, 20); }

/* Đọc: ?app=tnxh1 → danh sách tiến độ cả lớp */
function doGet(e) {
  var app = clean_(e && e.parameter && e.parameter.app);
  if (!app) return json_({ ok: true, hello: 'Máy chủ tiến độ đang chạy' });
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(app);
  if (!sh || sh.getLastRow() < 2) return json_({ ok: true, rows: [] });
  var v = sh.getRange(2, 1, sh.getLastRow() - 1, 7).getValues();
  var rows = v.filter(function (r) { return r[0]; }).map(function (r) {
    var p = {}; try { p = JSON.parse(r[6] || '{}'); } catch (err) {}
    return { id: String(r[0]), name: String(r[2]), p: p };
  });
  return json_({ ok: true, rows: rows });
}

/* Ghi: gửi { app, cls, id, name, n, p } → gộp với dữ liệu cũ, giữ kết quả mới hơn của từng chặng */
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var app = clean_(d.app), id = String(d.id || '').slice(0, 40);
  if (!app || !id) return json_({ ok: false });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var n = Math.min(Number(d.n) || 16, 40);
    var sh = sheetOf_(app, n);
    var last = sh.getLastRow();
    var ids = last > 1 ? sh.getRange(2, 1, last - 1, 1).getValues().map(function (r) { return String(r[0]); }) : [];
    var row = ids.indexOf(id) + 2;
    var p = {};
    if (row > 1) { try { p = JSON.parse(sh.getRange(row, 7).getValue() || '{}'); } catch (err) {} }
    else row = last + 1;
    var np = d.p || {};
    Object.keys(np).forEach(function (k) {
      if (!p[k] || ((np[k] && np[k].at) || 0) >= (p[k].at || 0)) p[k] = np[k];
    });
    var stars = 0, done = 0, cols = [];
    for (var i = 1; i <= n; i++) {
      var s = p[i] || {};
      stars += s.stars || 0; if (s.done) done++;
      cols.push(s.tries ? (s.stars ? '★'.repeat(s.stars) : '✗') : '');
    }
    var out = [id, d.cls || '', String(d.name || '').slice(0, 80), stars, done + '/' + n, new Date(), JSON.stringify(p)].concat(cols);
    sh.getRange(row, 1, 1, out.length).setValues([out]);
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
