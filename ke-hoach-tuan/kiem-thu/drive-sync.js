// Kiểm thử đồng bộ Google Drive giữa 2 máy (máy chủ Apps Script được giả lập theo đúng logic drive-sync/Code.gs).
const {chromium}=require(require('child_process').execSync('npm root -g').toString().trim()+'/playwright');
const URL=process.argv[2]||('file://'+require('path').resolve(__dirname,'../index.html'));
const EXEC='https://script.google.com/macros/s/TEST/exec';
const ok=(c,m)=>{console.log((c?'PASS ':'FAIL ')+m);if(!c)process.exitCode=1};
// in-memory Apps Script mimic (same logic as Code.gs)
const srv={key:'ab12cd34',cur:{rev:0},files:{},down:false};
function handle(d){
  if(d.key!==srv.key)return{ok:false,err:'key'};
  if(d.action==='load')return{ok:true,rev:srv.cur.rev||0,at:srv.cur.at||'',device:srv.cur.device||'',data:srv.cur.data||null};
  if(d.action==='save'){if(!d.force&&(srv.cur.rev||0)>(+d.baseRev||0))return{ok:false,err:'conflict',rev:srv.cur.rev,at:srv.cur.at,device:srv.cur.device};
    const rev=(srv.cur.rev||0)+1;srv.cur={rev,at:new Date().toISOString(),device:d.device,data:d.data};srv.files['Sao lưu '+new Date().toISOString().slice(0,10)]=1;return{ok:true,rev,at:srv.cur.at}}
}
async function dev(b,name){const ctx=await b.newContext({viewport:{width:1200,height:900}});const p=await ctx.newPage();p.errs=[];p.on('pageerror',e=>p.errs.push(e.message));
  await p.route(/fonts\.g/,r=>r.abort());
  await p.route(/script\.google\.com/,async r=>{if(srv.down)return r.abort();const d=JSON.parse(r.request().postData()||'{}');await r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(handle(d))})});
  await p.clock.install({time:new Date('2026-11-26T09:00:00')});await p.goto(URL);await p.waitForTimeout(300);p.nm=name;return p}
const S=p=>p.evaluate(()=>({mode:window.__planner.MODE,n:window.__planner.D.tasks.length,DR:window.__planner.DR,titles:window.__planner.D.tasks.map(t=>t.title)}));
async function connect(p,key){await p.evaluate(()=>location.hash='cai-dat');await p.waitForTimeout(150);await p.fill('#drUrl',EXEC);await p.fill('#drKey',key||srv.key);await p.click('[data-act="dr-connect"]');await p.waitForTimeout(600)}
(async()=>{const b=await chromium.launch();
const A=await dev(b,'A');
// A: start using sample as own data
await p_keep(A);
async function p_keep(p){await p.click('[data-act="keep-sample"]');await p.waitForTimeout(200)}
let a=await S(A);ok(a.mode==='USER','A: giữ dữ liệu mẫu làm dữ liệu riêng ('+a.n+' nhiệm vụ)');
await connect(A,'sai-ma');ok(await A.evaluate(()=>document.querySelector('#drMsg').textContent.includes('Sai mã')),'A: sai mã bí mật bị từ chối');
await connect(A);a=await S(A);
ok(srv.cur.rev===1&&srv.cur.data.tasks.length===a.n,'A: kết nối, Drive trống → đẩy '+a.n+' nhiệm vụ lên (rev 1)');
ok(await A.evaluate(()=>document.querySelector('#drBadge').textContent.includes('đã lưu')),'A: trạng thái "đã lưu" hiện ở thanh bên');
// edit on A → auto push
await A.evaluate(()=>location.hash='hom-nay');await A.waitForTimeout(100);
await A.click('[data-new]');await A.fill('#fT','Gọi phụ huynh em Bình');await A.fill('#fS','15:00');await A.click('#dlgF button[value=save]');
await A.clock.runFor(3000);await A.waitForTimeout(400);
ok(srv.cur.rev===2&&srv.cur.data.tasks.some(t=>t.title==='Gọi phụ huynh em Bình'),'A: sửa xong 2 giây tự lưu lên Drive (rev 2)');
// device B fresh browser
const B=await dev(b,'B');let bb=await S(B);ok(bb.mode==='SAMPLE','B: máy mới đang ở dữ liệu mẫu');
await connect(B);bb=await S(B);
ok(bb.mode==='USER'&&bb.titles.includes('Gọi phụ huynh em Bình')&&bb.n===srv.cur.data.tasks.length,'B: kết nối → tải đúng dữ liệu từ Drive ('+bb.n+' nhiệm vụ)');
// B ticks a task → push; A focuses → pulls
const tid=await B.evaluate(()=>window.__planner.D.tasks.find(t=>t.title==='Gọi phụ huynh em Bình').id);
await B.evaluate(()=>location.hash='tat-ca');await B.waitForTimeout(100);await B.check(`[data-done="${tid}"]`);await B.clock.runFor(3000);await B.waitForTimeout(400);
ok(srv.cur.rev===3,'B: tick hoàn thành → Drive rev 3');
await A.evaluate(()=>window.__planner.drPull(true));await A.waitForTimeout(400);
ok(await A.evaluate(id=>window.__planner.D.tasks.find(t=>t.id===id).status==='done',tid),'A: mở lại app → thấy việc B đã tick');
// conflict: both edit offline-ish: A edits, B edits before A pulls
srv.down=true;
await A.evaluate(()=>location.hash='tat-ca');await A.waitForTimeout(100);
const t2=await A.evaluate(()=>window.__planner.D.tasks.find(t=>t.status!=='done'&&t.date).id);
await A.check(`[data-done="${t2}"]`);await A.clock.runFor(3000);await A.waitForTimeout(300);
ok(await A.evaluate(()=>window.__planner.DR.dirty===1&&document.querySelector('#drBadge').textContent.includes('lỗi')),'A: mất mạng → báo lỗi, vẫn lưu trên máy, đánh dấu chờ gửi');
srv.down=false;
await B.evaluate(()=>location.hash='hom-nay');await B.waitForTimeout(100);await B.click('[data-new]');await B.fill('#fT','Việc thêm từ máy B');await B.click('#dlgF button[value=save]');await B.clock.runFor(3000);await B.waitForTimeout(400);
ok(srv.cur.rev===4,'B: lưu thêm việc → rev 4');
await A.evaluate(()=>window.__planner.drPull(true));await A.waitForTimeout(400);
ok(await A.evaluate(()=>document.querySelector('#banners').textContent.includes('Google Drive có bản khác')),'A: phát hiện sửa trùng từ 2 máy → hỏi chọn bản, không tự ghi đè');
ok(srv.cur.rev===4,'Drive không bị ghi đè khi chưa chọn');
await A.screenshot({path:'/tmp/conflict.png'});
await A.click('#banners [data-act="dr-remote"]');await A.waitForTimeout(400);
a=await S(A);ok(a.titles.includes('Việc thêm từ máy B'),'A: chọn "Dùng bản trên Drive" → có việc của máy B');
ok(await A.evaluate(()=>JSON.parse(localStorage.getItem('ai_weekly_planner_tasks_backup_v1'))[0].reason.includes('Drive')),'A: bản máy A được sao lưu trước khi thay');
// force path
await B.evaluate(()=>location.hash='hom-nay');await B.waitForTimeout(100);await B.click('[data-new]');await B.fill('#fT','B2');await B.click('#dlgF button[value=save]');await B.clock.runFor(3000);await B.waitForTimeout(400);
await A.evaluate(()=>location.hash='hom-nay');await A.waitForTimeout(100);await A.click('[data-new]');await A.fill('#fT','A2');await A.click('#dlgF button[value=save]');await A.clock.runFor(3000);await A.waitForTimeout(400);
ok(await A.evaluate(()=>window.__planner.DR&&document.querySelector('#banners').textContent.includes('Google Drive có bản khác')),'A: lưu khi Drive đã có bản mới hơn → báo trùng');
await A.click('#banners [data-act="dr-force"]');await A.waitForTimeout(400);
ok(srv.cur.data.tasks.some(t=>t.title==='A2')&&!srv.cur.data.tasks.some(t=>t.title==='B2'),'A: chọn "Ghi bản máy này" → Drive có A2');
// recovery from drive
await B.evaluate(()=>localStorage.setItem('ai_weekly_planner_tasks_v1','{hỏng'));await B.reload();await B.waitForTimeout(600);
bb=await S(B);ok(bb.mode==='RECOVERY'&&await B.evaluate(()=>!!document.querySelector('#banners [data-act="dr-remote"]')),'B: dữ liệu máy hỏng → có nút "Tải bản trên Google Drive"');
await B.click('#banners [data-act="dr-remote"]');await B.waitForTimeout(400);
bb=await S(B);ok(bb.mode==='USER'&&bb.titles.includes('A2'),'B: khôi phục từ Drive thành công');
// reload A: drive config persists, no spurious push
const r0=srv.cur.rev;await A.reload();await A.waitForTimeout(600);ok(srv.cur.rev===r0&&await A.evaluate(()=>window.__planner.DR.on===1),'A: mở lại app vẫn nhớ kết nối, không ghi thừa');
ok(!JSON.stringify(srv.cur.data).includes(srv.key),'Mã bí mật không nằm trong dữ liệu lưu');
for(const p of [A,B])ok(p.errs.length===0,p.nm+': không có lỗi JavaScript '+JSON.stringify(p.errs));
await b.close()})();
