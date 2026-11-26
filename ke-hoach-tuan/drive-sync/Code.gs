/**
 * Máy chủ lưu dữ liệu AI Weekly Planner vào Google Drive của cô.
 *
 * Cách cài (làm một lần):
 * 1. Vào https://script.google.com → Dự án mới. Xoá hết mã có sẵn, dán toàn bộ tệp này vào, bấm Lưu.
 * 2. Chọn hàm "caiDat" ở thanh trên rồi bấm Chạy. Cho phép quyền truy cập Drive.
 *    Mở "Nhật ký thực thi" để xem MÃ BÍ MẬT (8 ký tự). Thư mục "AI Weekly Planner" được tạo trong Drive.
 * 3. Bấm Triển khai → Tùy chọn triển khai mới → Loại: Ứng dụng web.
 *    Thực thi với tư cách: Tôi. Người có quyền truy cập: Bất kỳ ai. Bấm Triển khai, chép địa chỉ (kết thúc bằng /exec).
 * 4. Trong app: Cài đặt → Lưu vào Google Drive → dán địa chỉ và mã bí mật → Kết nối.
 *
 * Dữ liệu nằm trong tệp "AI Weekly Planner - du lieu.json". Mỗi ngày có thêm một tệp "Sao lưu yyyy-MM-dd.json",
 * giữ 30 ngày gần nhất. Không có mã bí mật thì không ai đọc hoặc ghi được, kể cả khi biết địa chỉ.
 */
var FOLDER = 'AI Weekly Planner';
var FILE = 'AI Weekly Planner - du lieu.json';
var KEEP = 30;

function caiDat() {
  var p = PropertiesService.getScriptProperties();
  var k = p.getProperty('KEY');
  if (!k) {
    k = Utilities.getUuid().replace(/-/g, '').slice(0, 8);
    p.setProperty('KEY', k);
  }
  folder_();
  Logger.log('MÃ BÍ MẬT của cô: ' + k);
  Logger.log('Thư mục dữ liệu: ' + folder_().getUrl());
}

/* Muốn đổi mã bí mật thì chạy hàm này, rồi nhập mã mới trong app ở mọi máy. */
function doiMaBiMat() {
  PropertiesService.getScriptProperties().deleteProperty('KEY');
  caiDat();
}

function folder_() {
  var it = DriveApp.getFoldersByName(FOLDER);
  return it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER);
}
function file_(f, name) {
  var it = f.getFilesByName(name);
  return it.hasNext() ? it.next() : null;
}
function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return out_({ ok: true, hello: 'Máy chủ AI Weekly Planner đang chạy' });
}

function doPost(e) {
  var d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return out_({ ok: false, err: 'bad' }); }
  var key = PropertiesService.getScriptProperties().getProperty('KEY');
  if (!key) return out_({ ok: false, err: 'nokey' });
  if (String(d.key || '') !== key) return out_({ ok: false, err: 'key' });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var f = folder_(), file = file_(f, FILE), cur = { rev: 0 };
    if (file) { try { cur = JSON.parse(file.getBlob().getDataAsString() || '{}'); } catch (err) { cur = { rev: 0, broken: true }; } }
    if (d.action === 'load') {
      return out_({ ok: true, rev: cur.rev || 0, at: cur.at || '', device: cur.device || '', data: cur.data || null });
    }
    if (d.action === 'save') {
      if (!d.data || !d.data.tasks) return out_({ ok: false, err: 'bad' });
      if (!d.force && (cur.rev || 0) > (Number(d.baseRev) || 0)) {
        return out_({ ok: false, err: 'conflict', rev: cur.rev, at: cur.at, device: cur.device || '' });
      }
      var rev = (cur.rev || 0) + 1, at = new Date().toISOString();
      var body = JSON.stringify({ app: 'ai-weekly-planner', rev: rev, at: at, device: String(d.device || '').slice(0, 60), data: d.data });
      if (file) file.setContent(body); else f.createFile(FILE, body, 'application/json');
      var day = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
      var vf = file_(f, 'Sao lưu ' + day + '.json');
      if (vf) vf.setContent(body); else { f.createFile('Sao lưu ' + day + '.json', body, 'application/json'); prune_(f); }
      return out_({ ok: true, rev: rev, at: at });
    }
    return out_({ ok: false, err: 'action' });
  } finally {
    lock.releaseLock();
  }
}

function prune_(f) {
  var it = f.getFiles(), list = [];
  while (it.hasNext()) { var x = it.next(); if (x.getName().indexOf('Sao lưu ') === 0) list.push(x); }
  list.sort(function (a, b) { return a.getName() < b.getName() ? 1 : -1; });
  list.slice(KEEP).forEach(function (x) { x.setTrashed(true); });
}
