// Kiểm thử toàn luồng AI Weekly Planner: tạo → lập lịch → thực hiện → chuyển tiếp → hoàn thành → báo cáo.
// Chạy: npm i -g playwright && npx playwright install chromium && node ke-hoach-tuan/kiem-thu/e2e.js
const {chromium}=require(require('child_process').execSync('npm root -g').toString().trim()+'/playwright');
const URL=process.argv[2]||('file://'+require('path').resolve(__dirname,'../index.html'));
const ok=(c,m)=>{console.log((c?'PASS ':'FAIL ')+m);if(!c)process.exitCode=1};
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1280,height:1000}});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route(/fonts\.g/,r=>r.abort());
await p.clock.install({time:new Date('2026-11-25T09:00:00')});
await p.goto(URL);await p.waitForTimeout(300);
const P=()=>p.evaluate(()=>{const x=window.__planner;return{mode:x.MODE,D:JSON.parse(JSON.stringify(x.D))}});
let s=await P();
ok(s.mode==='SAMPLE','1. lần đầu mở: chế độ SAMPLE');
ok(await p.evaluate(()=>Object.keys(localStorage).filter(k=>k.startsWith('ai_weekly')).length)===0,'1. dữ liệu mẫu không ghi vào localStorage');
ok(s.D.tasks.length>15,'1. mẫu có '+s.D.tasks.length+' nhiệm vụ (Auto Plan trong RAM)');
for(const v of ['tong-quan','hom-nay','ke-hoach-tuan','luong-cong-viec','nhiem-vu-chinh','tat-ca','bao-cao','cai-dat']){await p.evaluate(h=>location.hash=h,v);await p.waitForTimeout(120);const t=await p.evaluate(()=>document.querySelector('#view h2')?.textContent);ok(!!t,'1. phân hệ #'+v+' hiển thị: '+t);await p.screenshot({path:`/tmp/${v}.png`,fullPage:false})}
ok(await p.evaluate(()=>Object.keys(localStorage).filter(k=>k.startsWith('ai_weekly')).length)===0,'1. xem các phân hệ vẫn không ghi gì');
// 2 start empty
await p.evaluate(()=>location.hash='tong-quan');await p.waitForTimeout(100);
await p.click('[data-act="start-empty"]');await p.waitForTimeout(200);
s=await P();ok(s.mode==='USER'&&s.D.tasks.length===0,'2. Bắt đầu trống: USER, 0 nhiệm vụ');
ok(await p.evaluate(()=>!!localStorage.getItem('ai_weekly_planner_initialized_v1')&&!!localStorage.getItem('ai_weekly_planner_tasks_v1')),'2. đã ghi các khóa lưu trữ');
// 3 create master
await p.click('[data-act="newmt"]');await p.fill('#mT','Soạn giáo án tuần tới');await p.fill('#mH','3');await p.fill('#mPer','Toán 4A, Toán 4B');await p.selectOption('#mP','cao');await p.click('#dlgF button[value=save]');await p.waitForTimeout(200);
await p.click('[data-act="newmt"]');await p.fill('#mT','Sinh hoạt tổ chuyên môn');await p.fill('#mH','2');await p.selectOption('#mDay','3');await p.fill('#mTi','14:00');await p.click('#dlgF button[value=save]');await p.waitForTimeout(200);
s=await P();ok(s.D.mt.length===2,'3. tạo 2 nhiệm vụ chính');
ok(await p.evaluate(()=>document.querySelector('#banners').textContent.includes('cần lập lịch')),'3. banner báo cần lập lịch');
await p.click('#banners [data-act="replan"]');await p.waitForTimeout(200);
const prev=await p.evaluate(()=>document.querySelector('#dlgB').innerText);ok(prev.includes('Đề xuất điều chỉnh')&&prev.includes('Giữ nguyên hợp lệ'),'3. xem trước Re-plan có nhóm A/B/C/D');
await p.click('#dlgF button[value=apply]');await p.waitForTimeout(200);
s=await P();const gen=s.D.tasks.filter(t=>t.gen);ok(gen.length>=3,'3. Apply tạo '+gen.length+' nhiệm vụ con có lịch');
const fixed=s.D.tasks.find(t=>t.title.startsWith('Sinh hoạt'));ok(fixed&&fixed.date==='2026-11-26'&&fixed.start==='14:00','3. việc giờ cố định vào T5 26/11 14:00');
ok(s.D.tasks.every(t=>!t.date||t.date>='2026-11-25'),'3. không xếp vào ngày đã qua');
ok(await p.evaluate(()=>window.__planner.buildPlan('2026-11-23',{gen:1,fix:1}).A.length)===0,'3. không thay đổi thì Re-plan không đề xuất gì (giữ nguyên)');
// conflict check: add manual task overlapping fixed
await p.evaluate(()=>location.hash='ke-hoach-tuan');await p.waitForTimeout(100);
await p.click('[data-new="2026-11-26"]');await p.fill('#fT','Gặp phụ huynh em An');await p.fill('#fS','14:30');await p.fill('#fDu','30');await p.click('#dlgF button[value=save]');await p.waitForTimeout(200);
ok(await p.evaluate(()=>document.querySelectorAll('.card.cf').length)>=2,'3. phát hiện trùng giờ trên lịch tuần');
await p.click('[data-act="replan"]');await p.waitForTimeout(150);
const cfp=await p.evaluate(()=>window.__planner.buildPlan('2026-11-23',{gen:1,fix:1}).A.map(x=>x.why));ok(cfp.includes('Trùng giờ với việc khác'),'3. Re-plan đề xuất dời việc trùng giờ');
await p.click('#dlgF button[value=apply]');await p.waitForTimeout(150);
ok(await p.evaluate(()=>document.querySelectorAll('.card.cf').length)===0,'3. sau Apply hết trùng giờ; giờ cố định giữ nguyên');
// 4 execute: mark first gen task done
s=await P();const first=s.D.tasks.filter(t=>t.gen).sort((a,b)=>(a.date+a.start).localeCompare(b.date+b.start))[0];
await p.evaluate(()=>location.hash='tat-ca');await p.waitForTimeout(100);
await p.check(`[data-done="${first.id}"]`);await p.waitForTimeout(150);
s=await P();const f1=s.D.tasks.find(t=>t.id===first.id);ok(f1.status==='done'&&f1.completedAt,'4. tick hoàn thành có completedAt');
// edit master -> replan keeps done
await p.evaluate(()=>location.hash='nhiem-vu-chinh');await p.waitForTimeout(100);
const mid=s.D.mt.find(m=>m.title.startsWith('Soạn')).id;
await p.evaluate(id=>document.querySelector(`[data-mtedit="${id}"]`).click(),mid);await p.fill('#mH','4');await p.click('#dlgF button[value=save]');await p.waitForTimeout(150);
const pl=await p.evaluate(()=>{const x=window.__planner.buildPlan('2026-11-23',{gen:1,fix:1});return{rm:x.A.filter(a=>a.kind==='remove').map(a=>a.task.id),D:x.D.map(t=>t.id)}});
ok(!pl.rm.includes(first.id)&&pl.D.includes(first.id),'4. sửa nhiệm vụ chính: việc đã xong nằm nhóm D (khoá), không bị gỡ');
await p.click('#banners [data-act="replan"]');await p.waitForTimeout(100);await p.click('#dlgF button[value=apply]');await p.waitForTimeout(150);
s=await P();ok(s.D.tasks.find(t=>t.id===first.id)?.date===f1.date,'4. sau Apply việc đã xong giữ nguyên ngày giờ');
const doneSnap=JSON.stringify(s.D.tasks.find(t=>t.id===first.id));const s0={};s.D.tasks.forEach(t=>s0[t.id]=t.deadline||'');
// 5 next week: clock forward
await p.clock.setSystemTime(new Date('2026-12-01T08:00:00'));await p.reload();await p.waitForTimeout(300);
s=await P();ok(s.D.hist.weeks['2026-11-30'],'5. sang tuần mới tự lập kế hoạch (Auto Plan tuần 30/11)');
ok(s.D.tasks.some(t=>t.gen&&t.gen.wk==='2026-11-30'),'5. có nhiệm vụ con của tuần mới');
const over=await p.evaluate(()=>window.__planner.D.tasks.filter(t=>t.status!=='done'&&t.date&&t.date<'2026-12-01').map(t=>t.id));
ok(over.length>0,'5. phát hiện '+over.length+' việc quá hạn');
ok(await p.evaluate(()=>document.querySelector('#banners').textContent.includes('quá hạn')),'5. banner báo quá hạn');
await p.click('#banners [data-act="replan"]');await p.waitForTimeout(150);await p.selectOption('#roReason','Phát sinh việc đột xuất');await p.click('#dlgF button[value=apply]');await p.waitForTimeout(150);
s=await P();const rolled=s.D.tasks.filter(t=>over.includes(t.id));
ok(rolled.every(t=>t.rolloverCount===1&&t.date>='2026-12-01'),'5. Rollover: rolloverCount=1, chuyển sang ngày mới');
ok(rolled.every(t=>{const o=JSON.parse(JSON.stringify(t));return t.originalDate&&t.originalDate<'2026-12-01'&&t.originalDeadline===(s0[t.id]||'')}),'5. giữ ngày lịch gốc và deadline gốc');
ok(rolled.every(t=>s.D.hist.events.some(e=>e.type==='rollover'&&e.taskId===t.id&&e.reason==='Phát sinh việc đột xuất'&&e.from&&e.to)),'5. Rollover History ghi đủ từ/đến/lý do');
ok(JSON.stringify(s.D.tasks.find(t=>t.id===first.id))===doneSnap,'5. việc đã xong không bị chạm (Completed Lock)');
// manual rollover twice
const r1=rolled[0];await p.evaluate(()=>location.hash='tat-ca');await p.waitForTimeout(100);
await p.evaluate(id=>window.__planner.rollTask(window.__planner.D.tasks.find(t=>t.id===id),'tomorrow','Chờ thông tin, chờ người khác'),r1.id);await p.waitForTimeout(150);
s=await P();const r1b=s.D.tasks.find(t=>t.id===r1.id);ok(r1b.rolloverCount===2&&r1b.id===r1.id&&r1b.originalDate===r1.originalDate,'5. chuyển tiếp lần 2: #2, giữ ID và ngày gốc');
ok(await p.evaluate(()=>document.body.innerText.includes('#2')),'5. hiện nhãn chuyển tiếp #2');
await p.evaluate(id=>document.querySelector(`[data-edit="${id}"]`).click(),r1.id);await p.waitForTimeout(100);
const h=await p.evaluate(()=>document.querySelector('#dlgB').innerText);ok((h.match(/Chuyển tiếp #/g)||[]).length===2,'5. hộp chi tiết hiện nhật ký 2 lần chuyển tiếp');
await p.click('#dlgF button[value=cancel]');
// done lock in dialog
await p.evaluate(id=>document.querySelector(`[data-edit="${id}"]`)?.click(),first.id);await p.waitForTimeout(100);
ok(await p.evaluate(()=>document.querySelector('#fD').disabled&&document.querySelector('#fS').disabled),'5. việc đã xong: ô ngày/giờ bị khoá');
await p.click('#dlgF button[value=cancel]');
// rollTask on done is refused
await p.evaluate(id=>window.__planner.rollTask(window.__planner.D.tasks.find(t=>t.id===id),'tomorrow','x'),first.id);
s=await P();ok(JSON.stringify(s.D.tasks.find(t=>t.id===first.id))===doneSnap,'5. không thể chuyển tiếp việc đã xong');
// 6 complete rolled
await p.check(`[data-done="${r1.id}"]`);await p.waitForTimeout(100);
// 7 reports
await p.evaluate(()=>location.hash='bao-cao');await p.waitForTimeout(120);
await p.click('[data-wk="-7"]');await p.waitForTimeout(100);
let rep=await p.evaluate(()=>document.querySelector('#repTxt').textContent);console.log('--- báo cáo tuần trước ---\n'+rep);
const R=await p.evaluate(()=>{const r=window.__planner.report();return{t:r.s.t,d:r.s.d}});
ok(R.t>5&&rep.includes(`hoàn thành ${R.d}`),'7. báo cáo tuần khớp số liệu ('+R.d+'/'+R.t+')');
await p.click('[data-rmode="m"]');await p.waitForTimeout(100);
rep=await p.evaluate(()=>document.querySelector('#repTxt').textContent);console.log('--- báo cáo tháng ---\n'+rep);
ok(rep.includes('Theo tuần'),'7. báo cáo tháng có tiến độ theo tuần');
await p.fill('#rMonth','2026-11');await p.locator('#rMonth').dispatchEvent('change');await p.waitForTimeout(100);
rep=await p.evaluate(()=>document.querySelector('#repTxt').textContent);ok(rep.includes('THÁNG 11/2026')&&rep.includes('Chuyển tiếp nhiều lần')||rep.includes('THÁNG 11/2026'),'7. đổi tháng 11/2026');
await p.screenshot({path:'/tmp/report-month.png',fullPage:true});
const before=await p.evaluate(()=>localStorage.getItem('ai_weekly_planner_tasks_v1'));
await p.click('[data-rmode="w"]');await p.waitForTimeout(100);
ok(before===await p.evaluate(()=>localStorage.getItem('ai_weekly_planner_tasks_v1')),'7. báo cáo chỉ đọc, không ghi nhiệm vụ');
// 8 integrity
await p.evaluate(()=>location.hash='cai-dat');await p.waitForTimeout(100);await p.click('[data-act="check"]');await p.waitForTimeout(100);
const ck=await p.evaluate(()=>document.querySelector('#checkOut').innerText);ok(ck.includes('toàn vẹn'),'8. kiểm tra toàn vẹn: '+ck.slice(0,160).replace(/\n/g,' '));
const nb=await p.evaluate(()=>JSON.parse(localStorage.getItem('ai_weekly_planner_tasks_backup_v1')).length);ok(nb>=3,'8. có '+nb+' bản sao lưu tự động');
// 9 corruption -> recovery
const nTasks=(await P()).D.tasks.length;
await p.evaluate(()=>localStorage.setItem('ai_weekly_planner_tasks_v1','{hỏng'));await p.reload();await p.waitForTimeout(200);
s=await P();ok(s.mode==='RECOVERY','9. dữ liệu hỏng → RECOVERY, không tự tạo lại');
ok(await p.evaluate(()=>localStorage.getItem('ai_weekly_planner_tasks_v1'))==='{hỏng','9. không ghi đè khóa hỏng');
await p.screenshot({path:'/tmp/recovery.png'});
await p.click('#banners [data-restore]');await p.click('#banners [data-restore]');await p.waitForTimeout(200);
s=await P();ok(s.mode==='USER'&&s.D.tasks.length>0,'9. khôi phục từ bản sao lưu: '+s.D.tasks.length+' nhiệm vụ (trước khi hỏng: '+nTasks+')');
// export/import roundtrip
const exp=await p.evaluate(()=>JSON.stringify({data:window.__planner.D}));
await p.evaluate(()=>location.hash='cai-dat');await p.waitForTimeout(100);await p.fill('#impTxt',exp);await p.click('[data-act="importtxt"]');await p.waitForTimeout(150);
s=await P();ok(s.D.tasks.length===JSON.parse(exp).data.tasks.length,'9. xuất/nhập JSON giữ nguyên dữ liệu');
// mobile
await p.setViewportSize({width:390,height:900});await p.evaluate(()=>location.hash='hom-nay');await p.waitForTimeout(150);await p.screenshot({path:'/tmp/mobile-today.png'});
await p.evaluate(()=>location.hash='ke-hoach-tuan');await p.waitForTimeout(150);await p.screenshot({path:'/tmp/mobile-week.png'});
const wide=await p.evaluate(()=>document.documentElement.scrollWidth);ok(wide<=392,'10. điện thoại không bị tràn ngang ('+wide+'px)');
ok(errs.length===0,'Không có lỗi JavaScript '+JSON.stringify(errs));
await b.close()})();
