/* Công nghệ 8 · Kết nối tri thức · Ôn tập học kì 1 — "Xưởng kĩ sư" */
const W = (b) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130"><rect width="200" height="130" fill="#fff"/><g fill="none" stroke="#111" stroke-linecap="butt">${b}</g></svg>`;
const SVGS = {
  ln_dam: W('<line x1="20" y1="65" x2="180" y2="65" stroke-width="6"/>'),
  ln_manh: W('<line x1="20" y1="65" x2="180" y2="65" stroke-width="1.6"/>'),
  ln_dut: W('<line x1="20" y1="65" x2="180" y2="65" stroke-width="2" stroke-dasharray="12 6"/>'),
  ln_tam: W('<line x1="20" y1="65" x2="180" y2="65" stroke-width="1.6" stroke-dasharray="26 5 2 5"/>'),
  kho: W('<rect x="20" y="15" width="160" height="100" stroke-width="3"/><line x1="100" y1="15" x2="100" y2="115" stroke-width="2"/><line x1="100" y1="65" x2="180" y2="65" stroke-width="2"/><line x1="140" y1="65" x2="140" y2="115" stroke-width="2"/><line x1="140" y1="90" x2="180" y2="90" stroke-width="2"/><g fill="#2F6FD8" stroke="none" font-family="Arial" font-weight="700" font-size="14"><text x="52" y="70">A1</text><text x="130" y="44">A2</text><text x="111" y="95">A3</text><text x="150" y="82" font-size="11">A4</text><text x="150" y="107" font-size="11">A4</text></g><text x="22" y="12" font-size="10" fill="#555" stroke="none" font-family="Arial">A0 = 1189 × 841 mm</text>'),
  kichthuoc: W('<rect x="40" y="55" width="120" height="50" stroke-width="4"/><line x1="40" y1="52" x2="40" y2="20" stroke-width="1.2"/><line x1="160" y1="52" x2="160" y2="20" stroke-width="1.2"/><line x1="40" y1="28" x2="160" y2="28" stroke-width="1.2"/><path d="M40 28 l9 -3 v6z M160 28 l-9 -3 v6z" fill="#111" stroke="none"/><text x="92" y="24" font-family="Arial" font-size="13" fill="#111" stroke="none">120</text>'),
  hc3: W('<rect x="20" y="15" width="60" height="45" stroke-width="3"/><rect x="20" y="75" width="60" height="40" stroke-width="3"/><rect x="100" y="15" width="40" height="45" stroke-width="3"/><g font-family="Arial" font-size="10" fill="#2F6FD8" stroke="none"><text x="22" y="70">Hình chiếu bằng</text><text x="22" y="12">Hình chiếu đứng</text><text x="100" y="12">Hình chiếu cạnh</text></g>'),
  hc_tru: W('<rect x="25" y="20" width="50" height="45" stroke-width="3"/><circle cx="50" cy="95" r="25" stroke-width="3"/><rect x="110" y="20" width="50" height="45" stroke-width="3"/><g stroke-width="1" stroke-dasharray="10 3 2 3"><line x1="50" y1="14" x2="50" y2="71"/><line x1="135" y1="14" x2="135" y2="71"/><line x1="20" y1="95" x2="80" y2="95"/><line x1="50" y1="66" x2="50" y2="124"/></g>'),
  hc_non: W('<path d="M25 65 L50 18 L75 65 Z" stroke-width="3"/><circle cx="50" cy="96" r="25" stroke-width="3"/><path d="M110 65 L135 18 L160 65 Z" stroke-width="3"/>'),
  hc_cau: W('<circle cx="50" cy="42" r="25" stroke-width="3"/><circle cx="50" cy="100" r="25" stroke-width="3" transform="translate(0,-2)"/><circle cx="135" cy="42" r="25" stroke-width="3"/>'),
  cua1: W('<g stroke-width="5"><line x1="10" y1="90" x2="70" y2="90"/><line x1="130" y1="90" x2="190" y2="90"/></g><line x1="70" y1="90" x2="70" y2="30" stroke-width="2.5"/><path d="M70 30 A60 60 0 0 1 130 90" stroke-width="1.4"/>'),
  cua2: W('<g stroke-width="5"><line x1="10" y1="90" x2="50" y2="90"/><line x1="150" y1="90" x2="190" y2="90"/></g><line x1="50" y1="90" x2="50" y2="40" stroke-width="2.5"/><line x1="150" y1="90" x2="150" y2="40" stroke-width="2.5"/><path d="M50 40 A50 50 0 0 1 100 90 M150 40 A50 50 0 0 0 100 90" stroke-width="1.4"/>'),
  cs1: W('<g stroke-width="5"><line x1="10" y1="65" x2="60" y2="65"/><line x1="140" y1="65" x2="190" y2="65"/></g><rect x="60" y="57" width="80" height="16" stroke-width="1.6"/><line x1="60" y1="65" x2="140" y2="65" stroke-width="1.6"/>'),
  cs2: W('<g stroke-width="5"><line x1="10" y1="65" x2="60" y2="65"/><line x1="140" y1="65" x2="190" y2="65"/></g><rect x="60" y="55" width="80" height="20" stroke-width="1.6"/><line x1="60" y1="62" x2="140" y2="62" stroke-width="1.6"/><line x1="60" y1="68" x2="140" y2="68" stroke-width="1.6"/>'),
  matbang: W('<rect x="15" y="12" width="170" height="100" stroke-width="5"/><line x1="75" y1="12" x2="75" y2="112" stroke-width="4"/><line x1="125" y1="12" x2="125" y2="112" stroke-width="4"/><g stroke="#fff" stroke-width="6"><line x1="88" y1="112" x2="112" y2="112"/><line x1="75" y1="70" x2="75" y2="88"/><line x1="125" y1="70" x2="125" y2="88"/><line x1="35" y1="12" x2="55" y2="12"/><line x1="145" y1="12" x2="165" y2="12"/></g><g stroke-width="1.2"><path d="M88 112 A12 12 0 0 1 100 100 M112 112 A12 12 0 0 0 100 100"/><path d="M75 70 A18 18 0 0 0 57 88"/><path d="M125 70 A18 18 0 0 1 143 88"/><rect x="35" y="9" width="20" height="6"/><rect x="145" y="9" width="20" height="6"/></g><g font-family="Arial" font-size="9" fill="#2F6FD8" stroke="none"><text x="22" y="60">Phòng ngủ</text><text x="80" y="55">P. khách</text><text x="131" y="60">Phòng ngủ</text></g>'),
  tq_ct: W('<rect x="110" y="56" width="85" height="28" fill="#eee" stroke-width="1"/><circle cx="45" cy="70" r="30" stroke-width="2" stroke-dasharray="4 3"/><circle cx="45" cy="70" r="4" fill="#111"/><line x1="45" y1="70" x2="68" y2="50" stroke="#E08A1E" stroke-width="6" stroke-linecap="round"/><line x1="68" y1="50" x2="135" y2="70" stroke="#2F6FD8" stroke-width="5" stroke-linecap="round"/><rect x="125" y="60" width="30" height="20" fill="#9aa" stroke-width="2"/><path d="M165 70 h22 M180 64 l7 6 -7 6 M165 64 l-7 6 7 6" stroke-width="2"/><path d="M45 32 a38 38 0 0 1 30 15" stroke-width="2"/><path d="M75 47 l-1 -8 -6 5z" fill="#111"/>'),
  br_tr: W('<circle cx="100" cy="50" r="30" stroke-width="3" fill="#ddd"/><g stroke-width="7">' + Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return `<line x1="${100+30*Math.cos(a)}" y1="${50+30*Math.sin(a)}" x2="${100+38*Math.cos(a)}" y2="${50+38*Math.sin(a)}"/>`}).join('') + '</g><rect x="20" y="90" width="160" height="14" fill="#ccc" stroke-width="2"/><g stroke-width="6">' + Array.from({length:14},(_,i)=>`<line x1="${26+i*11.5}" y1="90" x2="${26+i*11.5}" y2="84"/>`).join('') + '</g><path d="M30 118 h140 M162 113 l8 5 -8 5 M38 113 l-8 5 8 5" stroke-width="2"/>'),
  ti_so: W('<circle cx="55" cy="65" r="45" stroke-width="3" fill="#eef"/><circle cx="160" cy="65" r="18" stroke-width="3" fill="#eef"/><line x1="55" y1="20" x2="160" y2="47" stroke-width="2"/><line x1="55" y1="110" x2="160" y2="83" stroke-width="2"/><g font-family="Arial" font-size="12" fill="#111" stroke="none"><text x="35" y="70">Z1 = 30</text><text x="142" y="70" font-size="10">Z2=10</text></g>')
};
const APP = {
  id: 'cn8', name: 'Xưởng kĩ sư', sub: 'Ôn tập Công nghệ 8 · Học kì 1',
  school: 'thcs', bilingual: false,
  hero: '00_1', finale: '00_1', mascot: 'a04',
  poses: { hi: 'a00', think: 'b00', good: 'b04', try: 'a04', win: 'b00' },
  theme: { main: '#2F6FD8', 'main-d': '#1F4FA8', soft: '#E1ECFB', accent: '#F28C28' },
  intro: 'Chào bạn! Mình là <b>Minh</b>, kĩ sư cơ khí nhí, còn đây là <b>Rô-bốt Bánh Răng</b>. Xưởng kĩ sư có hai khu: <b>phòng vẽ</b> (Vẽ kĩ thuật) và <b>xưởng cơ khí</b>. Mỗi chặng có 4 bước: <b>đọc kiến thức cần nhớ</b>, <b>hoàn thành sơ đồ tư duy</b>, <b>làm câu hỏi ôn tập</b> theo dạng đề kiểm tra và <b>vận dụng</b>.'
};
const TOPICS = [
  { name: 'Chương I · Vẽ kĩ thuật (phòng vẽ)', color: '#2F6FD8', soft: '#E1ECFB' },
  { name: 'Chương II · Cơ khí (xưởng cơ khí)', color: '#F28C28', soft: '#FFEBD6' },
  { name: 'Ôn tập giữa học kì 1', color: '#E0533D', soft: '#FFE6DF' }
];
const STAGES = [
/* ───── 1 ───── */
{ n: 1, t: 0, title: 'Tiêu chuẩn trình bày bản vẽ kĩ thuật', cover: 'drawA', sticker: 'a09',
  recall: [
    { img: 'kho', fit: true, t: '**Khổ giấy:** A0 (1189 × 841 mm), A1 (841 × 594), A2 (594 × 420), A3 (420 × 297), **A4 (297 × 210)**. Các khổ nhỏ được chia đôi liên tiếp từ khổ A0. Mỗi bản vẽ có **khung vẽ** và **khung tên** ở góc phải phía dưới.' },
    { img: 'a07', fit: true, t: '**Tỉ lệ** là tỉ số giữa kích thước đo trên hình biểu diễn và kích thước thực tương ứng: **thu nhỏ** (1:2, 1:5, 1:10…), **nguyên hình** (1:1), **phóng to** (2:1, 5:1…).' },
    { img: 'ln_dam', fit: true, more: ['ln_manh'], t: '**Nét liền đậm:** vẽ đường bao thấy, cạnh thấy. **Nét liền mảnh:** đường kích thước, đường gióng, đường gạch gạch trên mặt cắt.' },
    { img: 'ln_dut', fit: true, more: ['ln_tam'], t: '**Nét đứt mảnh:** đường bao khuất, cạnh khuất. **Nét gạch dài – chấm – mảnh:** đường tâm, đường trục đối xứng.' },
    { img: 'kichthuoc', fit: true, t: '**Ghi kích thước:** gồm **đường gióng**, **đường kích thước** (có mũi tên hai đầu) và **chữ số kích thước** (đơn vị **mm**, không ghi đơn vị). Kí hiệu **Ø** trước kích thước đường kính, **R** trước kích thước bán kính.' },
    { img: 'a11', fit: true, t: '**Chữ viết** trên bản vẽ phải rõ ràng, thống nhất, dễ đọc. Khổ chữ (chiều cao chữ hoa) theo dãy: 1,8; 2,5; 3,5; 5; 7; 10; 14; 20 mm.' }
  ],
  keys: ['Khổ giấy A0 → A4; khung vẽ, khung tên.', 'Tỉ lệ thu nhỏ – nguyên hình – phóng to.', 'Nét: liền đậm (thấy), liền mảnh (kích thước), đứt mảnh (khuất), gạch chấm mảnh (tâm, trục).', 'Kích thước tính bằng mm; Ø đường kính, R bán kính.'],
  mind: { center: 'Tiêu chuẩn bản vẽ kĩ thuật', img: 'drawA', extra: ['cm', 'nét lượn sóng'], branches: [
    { label: 'Khổ giấy', color: '#2F6FD8', img: 'kho', items: ['A4: {{297 × 210}} mm', 'Có khung vẽ và {{khung tên}}'] },
    { label: 'Tỉ lệ', color: '#7A4CC2', img: 'a07', items: ['1:2 là tỉ lệ {{thu nhỏ}}', '2:1 là tỉ lệ {{phóng to}}'] },
    { label: 'Nét vẽ', color: '#111111', img: 'ln_dut', items: ['Liền đậm: cạnh {{thấy}}', 'Đứt mảnh: cạnh {{khuất}}', 'Gạch chấm mảnh: đường {{tâm}}'] },
    { label: 'Kích thước', color: '#E08A1E', img: 'kichthuoc', items: ['Đơn vị {{mm}}', '{{Ø}} đường kính, R bán kính'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Khổ giấy A4 có kích thước là:', o: ['297 × 210 mm', '420 × 297 mm', '594 × 420 mm', '1189 × 841 mm'], a: 0 },
    { t: 'match', lv: 1, q: 'Nối mỗi loại nét với ứng dụng.', pairs: [[['ln_dam', 'Nét liền đậm'], 'Đường bao thấy, cạnh thấy'], [['ln_manh', 'Nét liền mảnh'], 'Đường kích thước, đường gióng'], [['ln_dut', 'Nét đứt mảnh'], 'Đường bao khuất, cạnh khuất'], [['ln_tam', 'Nét gạch dài – chấm – mảnh'], 'Đường tâm, trục đối xứng']] },
    { t: 'mcq', lv: 1, q: 'Tỉ lệ nào là tỉ lệ phóng to?', o: ['2:1', '1:2', '1:1', '1:5'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Đơn vị kích thước dài trên bản vẽ kĩ thuật là:', o: ['mm (không ghi đơn vị)', 'cm', 'm', 'dm'], a: 0 },
    { t: 'mcq', lv: 2, img: 'drawA', q: 'Trên bản vẽ, khung tên được đặt ở vị trí nào?', o: ['Góc phải phía dưới', 'Góc trái phía trên', 'Chính giữa bản vẽ', 'Bên ngoài khung vẽ'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Kí hiệu Ø ghi trước kích thước đường kính.', true], ['Nét đứt mảnh dùng để vẽ đường tâm.', false], ['Tỉ lệ 1:1 là tỉ lệ nguyên hình.', true], ['Khổ A3 lớn gấp đôi khổ A4.', true]] },
    { t: 'mcq', lv: 2, q: 'Một chi tiết dài 100 mm được vẽ theo tỉ lệ 1:2. Trên bản vẽ, đoạn đó dài bao nhiêu?', o: ['50 mm', '200 mm', '100 mm', '20 mm'], a: 0 },
    { t: 'short', lv: 2, q: 'Kí hiệu ghi trước kích thước bán kính của cung tròn là chữ gì?', a: ['r'] },
    { t: 'mcq', lv: 3, q: 'Bản vẽ ghi kích thước 40 nhưng đo trên giấy được 80 mm. Bản vẽ dùng tỉ lệ nào?', o: ['2:1', '1:2', '1:1', '1:4'], a: 0, ex: 'Tỉ lệ = kích thước trên hình / kích thước thật = 80/40 = 2:1.' },
    { t: 'essay', lv: 3, q: 'Vì sao bản vẽ kĩ thuật phải được trình bày theo các tiêu chuẩn thống nhất? Nêu 3 tiêu chuẩn em đã học.', kw: [['thong nhat', 'ngon ngu', 'chung', 'hieu', 'doc'], ['kho giay'], ['ti le'], ['net'], ['kich thuoc', 'chu viet']], kwn: ['Lí do: ngôn ngữ chung', 'Khổ giấy', 'Tỉ lệ', 'Nét vẽ', 'Kích thước / chữ viết'], model: 'Bản vẽ kĩ thuật là ngôn ngữ chung của kĩ thuật, phải theo tiêu chuẩn thống nhất để người thiết kế, người chế tạo và người sử dụng đều đọc hiểu giống nhau. Các tiêu chuẩn: khổ giấy, tỉ lệ, nét vẽ, chữ viết, ghi kích thước.' }
  ],
  tasks: ['Gấp một tờ A3 thành A4 và kẻ khung vẽ, khung tên.', 'Vẽ 4 loại nét trên giấy và ghi ứng dụng.', 'Đo một vật (hộp bút) và ghi kích thước theo tỉ lệ 1:2.'] },
/* ───── 2 ───── */
{ n: 2, t: 0, title: 'Hình chiếu vuông góc', cover: 'hc3', sticker: 'a13',
  recall: [
    { img: 'hc3', fit: true, t: '**Phép chiếu vuông góc:** các tia chiếu **vuông góc** với mặt phẳng chiếu. Có 3 mặt phẳng chiếu: **mặt phẳng chiếu đứng** (chính diện), **mặt phẳng chiếu bằng** (nằm ngang), **mặt phẳng chiếu cạnh** (bên phải).' },
    { img: 'drawA', fit: true, t: '**Hình chiếu đứng:** hướng chiếu từ **trước tới**. **Hình chiếu bằng:** hướng chiếu từ **trên xuống**. **Hình chiếu cạnh:** hướng chiếu từ **trái sang**. Trên bản vẽ: hình chiếu bằng ở **dưới** hình chiếu đứng, hình chiếu cạnh ở **bên phải** hình chiếu đứng.' },
    { img: 'a12', fit: true, t: '**Khối đa diện:** hình hộp chữ nhật, lăng trụ đều, chóp đều (bao bởi các đa giác phẳng). Hình hộp chữ nhật có 3 hình chiếu là **hình chữ nhật**.' },
    { img: 'hc_tru', fit: true, t: '**Hình trụ:** hình chiếu đứng và cạnh là **hình chữ nhật**, hình chiếu bằng là **hình tròn**.' },
    { img: 'hc_non', fit: true, t: '**Hình nón:** hình chiếu đứng và cạnh là **tam giác cân**, hình chiếu bằng là **hình tròn**.' },
    { img: 'hc_cau', fit: true, t: '**Hình cầu:** cả 3 hình chiếu đều là **hình tròn** bằng nhau.' }
  ],
  keys: ['3 hình chiếu: đứng (trước tới), bằng (trên xuống), cạnh (trái sang).', 'Vị trí: bằng ở dưới đứng; cạnh ở bên phải đứng.', 'Trụ: chữ nhật – tròn; nón: tam giác cân – tròn; cầu: 3 hình tròn.'],
  mind: { center: 'Hình chiếu vuông góc', img: 'hc3', extra: ['từ dưới lên', 'hình thang'], branches: [
    { label: 'Hướng chiếu', color: '#2F6FD8', img: 'hc3', items: ['Đứng: từ {{trước tới}}', 'Bằng: từ {{trên xuống}}', 'Cạnh: từ {{trái sang}}'] },
    { label: 'Vị trí trên bản vẽ', color: '#7A4CC2', img: 'drawA', items: ['Hình chiếu bằng ở {{dưới}} hình chiếu đứng', 'Hình chiếu cạnh ở bên {{phải}}'] },
    { label: 'Khối tròn xoay', color: '#E08A1E', img: 'hc_tru', items: ['Trụ: hình chiếu bằng là {{hình tròn}}', 'Nón: hình chiếu đứng là {{tam giác cân}}', 'Cầu: 3 hình chiếu đều là hình tròn'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Hình chiếu bằng có hướng chiếu như thế nào?', o: ['Từ trên xuống', 'Từ trước tới', 'Từ trái sang', 'Từ phải sang'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Trên bản vẽ kĩ thuật, hình chiếu cạnh được đặt ở đâu?', o: ['Bên phải hình chiếu đứng', 'Bên trái hình chiếu đứng', 'Dưới hình chiếu đứng', 'Trên hình chiếu đứng'], a: 0 },
    { t: 'match', lv: 1, q: 'Nối mỗi bộ ba hình chiếu với vật thể.', pairs: [[['hc_tru', ''], 'Hình trụ'], [['hc_non', ''], 'Hình nón'], [['hc_cau', ''], 'Hình cầu']] },
    { t: 'sort', lv: 2, q: 'Phân loại khối hình học.', bins: ['Khối đa diện', 'Khối tròn xoay'], items: [['Hình hộp chữ nhật', 0], ['Hình lăng trụ tam giác đều', 0], ['Hình chóp đều đáy vuông', 0], ['Hình trụ', 1], ['Hình nón', 1], ['Hình cầu', 1]] },
    { t: 'mcq', lv: 2, q: 'Hình chiếu bằng của hình nón đặt đáy song song mặt phẳng chiếu bằng là:', o: ['Hình tròn', 'Tam giác cân', 'Hình chữ nhật', 'Hình vuông'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Trong phép chiếu vuông góc, tia chiếu vuông góc với mặt phẳng chiếu.', true], ['Hình chiếu đứng có hướng chiếu từ trái sang.', false], ['Hình hộp chữ nhật có ba hình chiếu đều là hình chữ nhật.', true], ['Hình cầu có hình chiếu đứng là tam giác.', false]] },
    { t: 'mcq', lv: 2, img: 'drawA', q: 'Trong bản vẽ, hình nằm ngay dưới hình chiếu đứng là hình chiếu gì?', o: ['Hình chiếu bằng', 'Hình chiếu cạnh', 'Hình cắt', 'Hình chiếu phối cảnh'], a: 0 },
    { t: 'short', lv: 3, q: 'Vật thể có 3 hình chiếu đều là hình tròn bằng nhau là khối gì?', a: ['hình cầu', 'cầu', 'khối cầu', 'quả cầu'] },
    { t: 'mcq', lv: 3, q: 'Một vật có hình chiếu đứng và hình chiếu cạnh là hình chữ nhật, hình chiếu bằng là hình tròn. Vật đó có thể là:', o: ['Cái cốc hình trụ', 'Quả bóng', 'Cái nón lá', 'Viên gạch'], a: 0 },
    { t: 'essay', lv: 3, q: 'Trình bày hướng chiếu và vị trí của 3 hình chiếu vuông góc trên bản vẽ kĩ thuật.', kw: [['truoc toi'], ['tren xuong'], ['trai sang'], ['duoi'], ['ben phai', 'phai']], kwn: ['Đứng: trước tới', 'Bằng: trên xuống', 'Cạnh: trái sang', 'Bằng ở dưới đứng', 'Cạnh ở bên phải đứng'], model: 'Hình chiếu đứng: hướng chiếu từ trước tới. Hình chiếu bằng: từ trên xuống, đặt ở dưới hình chiếu đứng. Hình chiếu cạnh: từ trái sang, đặt ở bên phải hình chiếu đứng.' }
  ],
  tasks: ['Vẽ 3 hình chiếu của hộp bút (hình hộp chữ nhật).', 'Vẽ 3 hình chiếu của cái cốc hình trụ.', 'Tìm 3 đồ vật ở nhà có dạng khối tròn xoay.'] },
/* ───── 3 ───── */
{ n: 3, t: 0, title: 'Bản vẽ chi tiết và bản vẽ lắp', cover: 'b19', sticker: 'a14',
  recall: [
    { img: 'b19', fit: true, more: ['b23', 'b22', 'b24'], t: '**Bản vẽ chi tiết** dùng để **chế tạo và kiểm tra** chi tiết máy. Nội dung: **hình biểu diễn**, **kích thước**, **yêu cầu kĩ thuật**, **khung tên**.' },
    { img: 'drawA', fit: true, t: '**Trình tự đọc bản vẽ chi tiết:** khung tên → hình biểu diễn → kích thước → yêu cầu kĩ thuật.' },
    { img: 'a20', fit: true, more: ['a14', 'a15', 'a16'], t: '**Bản vẽ lắp** diễn tả **hình dạng, kết cấu** của sản phẩm và **vị trí tương quan** giữa các chi tiết; dùng để **lắp ráp**, kiểm tra. Nội dung: hình biểu diễn, kích thước, **bảng kê**, khung tên.' },
    { img: 'a15', fit: true, t: '**Trình tự đọc bản vẽ lắp:** khung tên → **bảng kê** → hình biểu diễn → kích thước → phân tích chi tiết → tổng hợp. Ví dụ bộ vòng đai: 2 vòng đai, 2 bu lông, 2 vòng đệm, 2 đai ốc.' }
  ],
  keys: ['Bản vẽ chi tiết: hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên.', 'Bản vẽ lắp: hình biểu diễn, kích thước, bảng kê, khung tên.', 'Bản vẽ lắp có bảng kê; bản vẽ chi tiết có yêu cầu kĩ thuật.'],
  mind: { center: 'Bản vẽ cơ khí', img: 'b19', extra: ['mặt bằng', 'phối cảnh'], branches: [
    { label: 'Bản vẽ chi tiết', color: '#2F6FD8', img: 'b24', items: ['Dùng để {{chế tạo}}, kiểm tra', 'Có {{yêu cầu kĩ thuật}}'] },
    { label: 'Bản vẽ lắp', color: '#F28C28', img: 'a20', items: ['Dùng để {{lắp ráp}}', 'Có {{bảng kê}} chi tiết'] },
    { label: 'Đọc bản vẽ', color: '#3A9A3F', img: 'drawA', items: ['Bắt đầu từ {{khung tên}}', 'Rồi đến hình biểu diễn, {{kích thước}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Nội dung nào CÓ trong bản vẽ lắp nhưng KHÔNG có trong bản vẽ chi tiết?', o: ['Bảng kê', 'Khung tên', 'Kích thước', 'Hình biểu diễn'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Bản vẽ chi tiết dùng để làm gì?', o: ['Chế tạo và kiểm tra chi tiết máy', 'Lắp ráp cả sản phẩm', 'Xây nhà', 'Trang trí'], a: 0 },
    { t: 'order', lv: 1, q: 'Sắp xếp trình tự đọc bản vẽ chi tiết.', items: ['Khung tên', 'Hình biểu diễn', 'Kích thước', 'Yêu cầu kĩ thuật'] },
    { t: 'order', lv: 2, q: 'Sắp xếp trình tự đọc bản vẽ lắp.', items: ['Khung tên', 'Bảng kê', 'Hình biểu diễn', 'Kích thước', 'Phân tích chi tiết', 'Tổng hợp'] },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Khung tên cho biết tên gọi chi tiết, vật liệu, tỉ lệ.', true], ['Yêu cầu kĩ thuật gồm chỉ dẫn gia công, xử lí bề mặt.', true], ['Bản vẽ lắp không có hình biểu diễn.', false], ['Bảng kê ghi tên gọi, số lượng, vật liệu của các chi tiết.', true]] },
    { t: 'match', lv: 2, q: 'Nối chi tiết máy với tên gọi.', pairs: [[['b15', ''], 'Bu lông'], [['b22', ''], 'Đai ốc'], [['b23', ''], 'Vòng đệm'], [['b19', ''], 'Gối đỡ']] },
    { t: 'short', lv: 2, q: 'Phần ghi tên gọi, số lượng và vật liệu của từng chi tiết trong bản vẽ lắp gọi là gì?', a: ['bảng kê', 'bang ke'] },
    { t: 'mcq', lv: 3, ctx: 'Một xưởng nhận bản vẽ có bảng kê gồm: vòng đai (2), bu lông M10 (2), vòng đệm (2), đai ốc M10 (2).', q: 'Đây là loại bản vẽ gì và có tất cả bao nhiêu chi tiết?', o: ['Bản vẽ lắp, 8 chi tiết', 'Bản vẽ chi tiết, 4 chi tiết', 'Bản vẽ nhà, 8 chi tiết', 'Bản vẽ lắp, 4 chi tiết'], a: 0 },
    { t: 'essay', lv: 3, q: 'So sánh nội dung của bản vẽ chi tiết và bản vẽ lắp.', kw: [['hinh bieu dien', 'kich thuoc', 'khung ten'], ['yeu cau ki thuat'], ['bang ke']], kwn: ['Giống: hình biểu diễn, kích thước, khung tên', 'Chi tiết có yêu cầu kĩ thuật', 'Lắp có bảng kê'], model: 'Giống nhau: đều có hình biểu diễn, kích thước, khung tên. Khác nhau: bản vẽ chi tiết có yêu cầu kĩ thuật (dùng để chế tạo); bản vẽ lắp có bảng kê (dùng để lắp ráp).' }
  ],
  tasks: ['Tháo một cái bút bi, kể tên các chi tiết và lập bảng kê.', 'Đọc khung tên một bản vẽ chi tiết trong SGK.', 'Vẽ phác bộ bu lông – vòng đệm – đai ốc.'] },
/* ───── 4 ───── */
{ n: 4, t: 0, title: 'Bản vẽ nhà', cover: 'matbang', sticker: 'b03',
  recall: [
    { img: 'matbang', fit: true, t: '**Mặt bằng:** hình cắt bằng của ngôi nhà, diễn tả vị trí, kích thước **tường, vách, cửa đi, cửa sổ**, cách bố trí các phòng. Là hình biểu diễn **quan trọng nhất**.' },
    { img: 'b03', fit: true, t: '**Mặt đứng:** hình chiếu vuông góc mặt ngoài nhà, diễn tả **hình dạng bên ngoài**. **Mặt cắt:** hình cắt bởi mặt phẳng song song mặt chiếu đứng/cạnh, diễn tả các bộ phận và **kích thước theo chiều cao**.' },
    { img: 'cua1', fit: true, more: ['cua2'], t: '**Kí hiệu cửa đi:** cửa đi đơn **một cánh** (một cung tròn), cửa đi đơn **hai cánh** (hai cung tròn).' },
    { img: 'cs1', fit: true, more: ['cs2'], t: '**Kí hiệu cửa sổ:** cửa sổ **đơn** (một nét giữa), cửa sổ **kép** (hai nét giữa).' },
    { img: 'b03', fit: true, t: '**Trình tự đọc bản vẽ nhà:** khung tên → hình biểu diễn → kích thước → các bộ phận.' }
  ],
  keys: ['Bản vẽ nhà: mặt bằng, mặt đứng, mặt cắt.', 'Mặt bằng quan trọng nhất.', 'Đọc: khung tên → hình biểu diễn → kích thước → các bộ phận.'],
  mind: { center: 'Bản vẽ nhà', img: 'matbang', extra: ['bảng kê', 'yêu cầu kĩ thuật'], branches: [
    { label: 'Hình biểu diễn', color: '#2F6FD8', img: 'matbang', items: ['{{Mặt bằng}}: quan trọng nhất', '{{Mặt đứng}}: hình dạng bên ngoài', '{{Mặt cắt}}: kích thước chiều cao'] },
    { label: 'Kí hiệu', color: '#F28C28', img: 'cua2', items: ['Cửa đi đơn {{hai cánh}}', 'Cửa sổ {{kép}}'] },
    { label: 'Trình tự đọc', color: '#3A9A3F', img: 'b03', items: ['Khung tên → hình biểu diễn', '→ {{kích thước}} → các {{bộ phận}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Hình biểu diễn quan trọng nhất của bản vẽ nhà là:', o: ['Mặt bằng', 'Mặt đứng', 'Mặt cắt', 'Khung tên'], a: 0 },
    { t: 'match', lv: 1, q: 'Nối kí hiệu với tên gọi.', pairs: [[['cua1', ''], 'Cửa đi đơn một cánh'], [['cua2', ''], 'Cửa đi đơn hai cánh'], [['cs1', ''], 'Cửa sổ đơn'], [['cs2', ''], 'Cửa sổ kép']] },
    { t: 'mcq', lv: 1, q: 'Mặt đứng của bản vẽ nhà diễn tả điều gì?', o: ['Hình dạng bên ngoài ngôi nhà', 'Bố trí các phòng', 'Kích thước theo chiều cao bên trong', 'Danh sách vật liệu'], a: 0 },
    { t: 'order', lv: 2, q: 'Sắp xếp trình tự đọc bản vẽ nhà.', items: ['Khung tên', 'Hình biểu diễn', 'Kích thước', 'Các bộ phận'] },
    { t: 'mcq', lv: 2, img: 'matbang', q: 'Mặt bằng trên có bao nhiêu phòng và cửa chính là loại cửa gì?', o: ['3 phòng, cửa đi đơn hai cánh', '2 phòng, cửa sổ kép', '3 phòng, cửa đi một cánh', '4 phòng, cửa sổ đơn'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Mặt cắt cho biết kích thước các bộ phận theo chiều cao.', true], ['Bản vẽ nhà có bảng kê như bản vẽ lắp.', false], ['Mặt bằng thể hiện vị trí tường, cửa đi, cửa sổ.', true], ['Kí hiệu cửa sổ kép có hai nét song song ở giữa.', true]] },
    { t: 'short', lv: 2, q: 'Hình biểu diễn nào của bản vẽ nhà là hình cắt bằng, thể hiện bố trí các phòng?', a: ['mặt bằng', 'mat bang'] },
    { t: 'mcq', lv: 3, q: 'Chị Linh muốn biết chiều cao tầng nhà và mái nhà. Chị cần xem hình biểu diễn nào?', o: ['Mặt cắt', 'Mặt bằng', 'Khung tên', 'Bảng kê'], a: 0 },
    { t: 'essay', lv: 3, q: 'Nêu nội dung của 3 hình biểu diễn trong bản vẽ nhà.', kw: [['mat bang'], ['mat dung'], ['mat cat'], ['phong', 'tuong', 'cua', 'ben ngoai', 'chieu cao']], kwn: ['Mặt bằng', 'Mặt đứng', 'Mặt cắt', 'Nội dung từng hình'], model: 'Mặt bằng: diễn tả vị trí, kích thước tường, cửa đi, cửa sổ và cách bố trí các phòng. Mặt đứng: diễn tả hình dạng bên ngoài ngôi nhà. Mặt cắt: diễn tả các bộ phận và kích thước ngôi nhà theo chiều cao.' }
  ],
  tasks: ['Vẽ phác mặt bằng phòng ngủ của em, có kí hiệu cửa đi và cửa sổ.', 'Đo chiều dài, chiều rộng phòng và ghi kích thước.', 'Tìm hiểu bản vẽ nhà của gia đình (nếu có).'] },
/* ───── 5 ───── */
{ n: 5, t: 1, title: 'Vật liệu cơ khí', cover: 'b08', sticker: 'b13',
  recall: [
    { img: 'b13', fit: true, more: ['a12'], t: '**Kim loại đen** (thành phần chính là sắt và cacbon): **thép** (cacbon ≤ 2,14%: cứng, dẻo, bền, dùng làm dụng cụ, khung xe, đinh) và **gang** (cacbon > 2,14%: cứng, **giòn**, dùng làm nồi, vỏ máy).' },
    { img: 'b08', fit: true, t: '**Kim loại màu:** **nhôm** (nhẹ, dẫn điện, dẫn nhiệt tốt, ít bị ăn mòn: nồi, khung cửa, dây điện) và **đồng** (màu đỏ, dẫn điện rất tốt: lõi dây điện, chi tiết điện); hợp kim đồng, nhôm.' },
    { img: '🧴', fit: true, t: '**Chất dẻo** (nhựa): nhẹ, cách điện, dễ tạo hình. **Nhựa nhiệt dẻo** nóng chảy được, tái chế được; **nhựa nhiệt rắn** chịu nhiệt cao, không nóng chảy lại.' },
    { img: '🛞', fit: true, t: '**Cao su:** dẻo, **đàn hồi**, cách điện, giảm chấn: lốp xe, gioăng, đệm cao su.' }
  ],
  keys: ['Kim loại đen: thép, gang. Kim loại màu: nhôm, đồng.', 'Phi kim loại: chất dẻo, cao su.', 'Chọn vật liệu dựa vào tính chất và công dụng.'],
  mind: { center: 'Vật liệu cơ khí', img: 'b08', extra: ['gỗ thông', 'thuỷ tinh'], branches: [
    { label: 'Kim loại đen', color: '#555555', img: 'b13', items: ['{{Thép}}: cứng, dẻo, bền', '{{Gang}}: cứng, giòn'] },
    { label: 'Kim loại màu', color: '#C46A1A', img: 'b08', items: ['{{Nhôm}}: nhẹ, ít bị ăn mòn', '{{Đồng}}: dẫn điện rất tốt'] },
    { label: 'Phi kim loại', color: '#3A9A3F', img: '🛞', items: ['{{Chất dẻo}}: nhẹ, cách điện', '{{Cao su}}: đàn hồi, giảm chấn'] }
  ] },
  q: [
    { t: 'sort', lv: 1, q: 'Xếp vật liệu vào đúng nhóm.', bins: ['Kim loại đen', 'Kim loại màu', 'Phi kim loại'], items: [['Thép', 0], ['Gang', 0], ['Nhôm', 1], ['Đồng', 1], ['Cao su', 2], ['Chất dẻo', 2]] },
    { t: 'mcq', lv: 1, q: 'Lõi dây dẫn điện thường làm bằng vật liệu gì?', o: ['Đồng', 'Gang', 'Cao su', 'Thép'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Gang khác thép ở điểm nào?', o: ['Gang có tỉ lệ cacbon cao hơn, giòn hơn', 'Gang nhẹ hơn nhôm', 'Gang dẫn điện tốt hơn đồng', 'Gang đàn hồi như cao su'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Vì sao lốp xe được làm bằng cao su?', o: ['Cao su dẻo, đàn hồi, giảm chấn tốt', 'Cao su dẫn điện tốt', 'Cao su cứng và giòn', 'Cao su rất nặng'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Nhôm nhẹ, ít bị ăn mòn nên dùng làm khung cửa.', true], ['Vỏ ổ cắm điện làm bằng chất dẻo vì cách điện.', true], ['Gang dẻo nên dùng làm lò xo.', false], ['Nhựa nhiệt dẻo có thể tái chế.', true]] },
    { t: 'match', lv: 2, q: 'Nối đồ vật với vật liệu chế tạo phù hợp.', pairs: [['Nồi nấu cơm', 'Nhôm'], ['Lõi dây điện', 'Đồng'], ['Lốp xe đạp', 'Cao su'], ['Đinh, dao, kéo', 'Thép']] },
    { t: 'short', lv: 2, q: 'Kim loại màu nào nhẹ, dẫn nhiệt tốt, thường làm xoong nồi?', a: ['nhôm', 'nhom'] },
    { t: 'mcq', lv: 3, ctx: 'Minh cần làm tay cầm cho một dụng cụ điện để đảm bảo an toàn.', q: 'Nên chọn vật liệu nào?', o: ['Chất dẻo hoặc cao su cách điện', 'Đồng', 'Nhôm', 'Thép'], a: 0 },
    { t: 'essay', lv: 3, q: 'Kể tên 2 đồ vật trong nhà làm từ kim loại và 2 đồ vật làm từ phi kim loại. Giải thích vì sao chọn vật liệu đó.', kw: [['thep', 'gang', 'nhom', 'dong', 'inox'], ['nhua', 'chat deo', 'cao su'], ['cung', 'ben', 'nhe', 'dan dien', 'cach dien', 'dan hoi', 'an mon']], kwn: ['Kim loại', 'Phi kim loại', 'Giải thích tính chất'], model: 'Kim loại: nồi nhôm (nhẹ, dẫn nhiệt tốt), con dao thép (cứng, bền). Phi kim loại: vỏ ổ cắm bằng nhựa (cách điện), dép cao su (dẻo, đàn hồi).' }
  ],
  tasks: ['Lập bảng: 10 đồ vật trong nhà – vật liệu – lí do.', 'Thu gom đồ nhựa, kim loại cũ để tái chế.', 'Thử nam châm để phân biệt sắt thép với nhôm, đồng.'] },
/* ───── 6 ───── */
{ n: 6, t: 1, title: 'Truyền và biến đổi chuyển động', cover: 'b21', sticker: 'a17',
  recall: [
    { img: 'b21', fit: true, t: '**Truyền đai (truyền ma sát):** bánh dẫn và bánh bị dẫn nối bằng dây đai; truyền chuyển động nhờ **lực ma sát**. Dùng ở máy khâu, máy xay xát. Êm, đơn giản nhưng có thể **trượt**.' },
    { img: 'a17', fit: true, more: ['b20'], t: '**Truyền ăn khớp:** **bánh răng** (các răng ăn khớp trực tiếp) và **xích** (đĩa – xích – líp, ví dụ xe đạp). Truyền chính xác, không trượt.' },
    { img: 'ti_so', fit: true, t: '**Tỉ số truyền:** i = n2/n1 = **Z1/Z2** (bánh răng, xích) = D1/D2 (đai). Đĩa xe đạp Z1 = 30 răng, líp Z2 = 10 răng → i = 3: líp (bánh sau) quay nhanh gấp **3 lần** đĩa.' },
    { img: 'tq_ct', fit: true, t: '**Cơ cấu tay quay – con trượt:** biến chuyển động **quay** thành chuyển động **tịnh tiến** (máy khâu, động cơ đốt trong).' },
    { img: 'br_tr', fit: true, t: '**Bánh răng – thanh răng:** biến chuyển động quay thành **tịnh tiến** và ngược lại (máy khoan, cửa trượt). **Tay quay – thanh lắc:** biến quay thành **lắc** qua lại (máy khâu đạp chân, xe tự đẩy).' }
  ],
  keys: ['Truyền chuyển động: đai (ma sát), bánh răng, xích (ăn khớp).', 'i = n2/n1 = Z1/Z2.', 'Biến đổi: tay quay – con trượt, bánh răng – thanh răng (quay ↔ tịnh tiến), tay quay – thanh lắc (quay → lắc).'],
  mind: { center: 'Cơ cấu chuyển động', img: 'a17', extra: ['lò xo', 'ròng rọc cố định'], branches: [
    { label: 'Truyền chuyển động', color: '#2F6FD8', img: 'b21', items: ['Truyền {{đai}} (ma sát)', 'Truyền {{bánh răng}}, xích (ăn khớp)'] },
    { label: 'Tỉ số truyền', color: '#7A4CC2', img: 'ti_so', items: ['i = n2/n1 = {{Z1/Z2}}'] },
    { label: 'Biến đổi chuyển động', color: '#F28C28', img: 'tq_ct', items: ['Tay quay – {{con trượt}}: quay → tịnh tiến', 'Bánh răng – {{thanh răng}}', 'Tay quay – thanh lắc: quay → {{lắc}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Bộ truyền nào truyền chuyển động nhờ lực ma sát?', o: ['Truyền đai', 'Truyền bánh răng', 'Truyền xích', 'Bánh răng – thanh răng'], a: 0 },
    { t: 'mcq', lv: 1, img: 'tq_ct', q: 'Cơ cấu tay quay – con trượt biến chuyển động quay thành chuyển động gì?', o: ['Tịnh tiến', 'Lắc', 'Quay ngược chiều', 'Rung'], a: 0 },
    { t: 'sort', lv: 2, q: 'Xếp các cơ cấu vào nhóm.', bins: ['Truyền chuyển động', 'Biến đổi chuyển động'], items: [['Truyền đai', 0], ['Truyền bánh răng', 0], ['Truyền xích xe đạp', 0], ['Tay quay – con trượt', 1], ['Bánh răng – thanh răng', 1], ['Tay quay – thanh lắc', 1]] },
    { t: 'mcq', lv: 2, img: 'ti_so', q: 'Đĩa xe đạp có 30 răng, líp có 10 răng. Khi đĩa quay 1 vòng thì líp quay bao nhiêu vòng?', o: ['3 vòng', '1 vòng', '10 vòng', '1/3 vòng'], a: 0, ex: 'n2 = n1 × Z1/Z2 = 1 × 30/10 = 3 vòng.' },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Truyền đai có thể bị trượt khi quá tải.', true], ['Bánh răng nhỏ quay chậm hơn bánh răng lớn ăn khớp với nó.', false], ['Xe đạp dùng bộ truyền xích.', true], ['Máy khâu đạp chân dùng cơ cấu tay quay – thanh lắc.', true]] },
    { t: 'short', lv: 2, q: 'Bánh dẫn có 40 răng, bánh bị dẫn có 20 răng. Tỉ số truyền i bằng bao nhiêu?', a: ['2', 'i=2', 'i = 2'] },
    { t: 'mcq', lv: 3, q: 'Bánh dẫn quay 60 vòng/phút, Z1 = 20, Z2 = 60. Tốc độ bánh bị dẫn là:', o: ['20 vòng/phút', '180 vòng/phút', '60 vòng/phút', '40 vòng/phút'], a: 0, ex: 'n2 = n1 × Z1/Z2 = 60 × 20/60 = 20 vòng/phút.' },
    { t: 'mcq', lv: 3, q: 'Cửa trượt tự động ở siêu thị dùng động cơ quay để cánh cửa chạy ngang. Cơ cấu phù hợp là:', o: ['Bánh răng – thanh răng', 'Truyền đai', 'Tay quay – thanh lắc', 'Truyền xích'], a: 0 },
    { t: 'essay', lv: 3, q: 'Giải thích vì sao xe đạp leo dốc dễ hơn khi chuyển sang líp to (nhiều răng hơn).', kw: [['ti so', 'i', 'z1', 'z2'], ['cham', 'it vong', 'giam'], ['luc', 'nhe', 'khoe', 'de dap']], kwn: ['Tỉ số truyền thay đổi', 'Bánh sau quay chậm hơn', 'Đạp nhẹ, lực lớn hơn'], model: 'Líp to có nhiều răng (Z2 lớn) nên tỉ số truyền i = Z1/Z2 nhỏ lại; bánh sau quay chậm hơn nhưng lực đẩy lớn hơn, người đạp thấy nhẹ chân hơn khi leo dốc.' }
  ],
  tasks: ['Đếm số răng đĩa và líp xe đạp nhà em, tính tỉ số truyền.', 'Tìm 3 đồ vật trong nhà có cơ cấu truyền hoặc biến đổi chuyển động.', 'Làm mô hình tay quay – con trượt bằng bìa và que kem.'] },
/* ───── 7 ───── */
{ n: 7, t: 1, title: 'Gia công cơ khí và ngành nghề cơ khí', cover: 'gc_2', sticker: 'b07',
  recall: [
    { img: 'a09', fit: true, more: ['a07', 'a10'], t: '**Dụng cụ đo:** thước lá, **thước cặp** (đo đường kính, chiều sâu lỗ chính xác), thước đo góc. **Dụng cụ vạch dấu:** mũi vạch, chấm dấu.' },
    { img: 'gc_1', t: '**Đo và vạch dấu:** xác định vị trí cần gia công trên phôi, vạch đường bằng mũi vạch, chấm dấu tâm lỗ.' },
    { img: 'gc_2', t: '**Cưa:** kẹp phôi chặt trên **êtô**, vết cưa cách má êtô 10–20 mm; đứng chân trước chân sau, đẩy cưa dùng lực, kéo về nhẹ nhàng. Sắp đứt thì đẩy cưa nhẹ, đỡ vật.' },
    { img: 'gc_3', more: ['a08'], t: '**Dũa:** tạo độ nhẵn, phẳng bề mặt. Tay phải cầm cán dũa, tay trái đặt lên đầu dũa; đẩy dũa tạo lực, kéo về không ấn. **Đục:** cắt bỏ phần thừa bằng đục và búa.' },
    { img: 'a11', fit: true, more: ['b09', 'b12'], t: '**An toàn:** đeo **kính bảo hộ**, găng tay; kẹp phôi chắc chắn; không dùng tay gạt phoi, không thổi phoi; dụng cụ không bị nứt, cán chắc chắn.' },
    { img: 'b02', fit: true, more: ['b01', 'a01'], t: '**Ngành nghề cơ khí:** **kĩ sư cơ khí** (nghiên cứu, thiết kế, chỉ đạo sản xuất), **kĩ thuật viên** (vận hành, bảo dưỡng máy, hỗ trợ kĩ sư), **thợ cơ khí** (gia công, lắp ráp, sửa chữa: thợ tiện, thợ hàn, thợ nguội…).' }
  ],
  keys: ['Gia công bằng tay: đo – vạch dấu – cưa – đục – dũa.', 'An toàn: kính bảo hộ, găng tay, kẹp chặt phôi, không gạt phoi bằng tay.', 'Ngành nghề: kĩ sư cơ khí, kĩ thuật viên, thợ cơ khí.'],
  mind: { center: 'Xưởng cơ khí', img: 'b07', extra: ['máy giặt', 'bút màu'], branches: [
    { label: 'Đo, vạch dấu', color: '#2F6FD8', img: 'a09', items: ['{{Thước cặp}} đo chính xác', '{{Mũi vạch}}, chấm dấu'] },
    { label: 'Gia công', color: '#F28C28', img: 'gc_2', items: ['{{Cưa}}: cắt phôi', '{{Dũa}}: làm nhẵn, phẳng', 'Kẹp phôi bằng {{êtô}}'] },
    { label: 'An toàn', color: '#E0533D', img: 'a11', items: ['Đeo {{kính bảo hộ}}', 'Không gạt {{phoi}} bằng tay'] },
    { label: 'Ngành nghề', color: '#3A9A3F', img: 'b02', items: ['{{Kĩ sư}} cơ khí: thiết kế', '{{Kĩ thuật viên}}: vận hành, bảo dưỡng', '{{Thợ}} cơ khí: gia công, lắp ráp'] }
  ] },
  q: [
    { t: 'match', lv: 1, q: 'Nối dụng cụ với công dụng.', pairs: [[['a09', ''], 'Đo kích thước chính xác'], [['a08', ''], 'Kẹp chặt phôi'], [['a11', ''], 'Bảo vệ mắt'], [['a07', ''], 'Đo, kiểm tra góc vuông']] },
    { t: 'order', lv: 1, q: 'Sắp xếp các bước gia công một thanh thép.', items: [['gc_1', 'Đo và vạch dấu'], ['gc_2', 'Cưa theo vạch dấu'], ['gc_3', 'Dũa cho nhẵn, phẳng']] },
    { t: 'mcq', lv: 1, q: 'Khi cưa, phôi phải được:', o: ['Kẹp chặt trên êtô', 'Cầm bằng tay', 'Đặt tự do trên bàn', 'Kẹp bằng chân'], a: 0 },
    { t: 'tf4', lv: 2, q: 'An toàn khi gia công cơ khí:', items: [['Dùng tay gạt phoi cho sạch.', false], ['Đeo kính bảo hộ khi cưa, dũa.', true], ['Dùng dũa có cán bị nứt vẫn được.', false], ['Khi sắp cưa đứt, đẩy cưa nhẹ và đỡ vật.', true]] },
    { t: 'mcq', lv: 2, q: 'Khi dũa, thao tác nào đúng?', o: ['Đẩy dũa tạo lực cắt, kéo về nhẹ nhàng không ấn', 'Ấn mạnh cả khi đẩy và kéo', 'Chỉ kéo không đẩy', 'Dũa một tay'], a: 0 },
    { t: 'sort', lv: 2, q: 'Xếp công việc vào nghề phù hợp.', bins: ['Kĩ sư cơ khí', 'Kĩ thuật viên', 'Thợ cơ khí'], items: [['Thiết kế chi tiết máy trên máy tính', 0], ['Chỉ đạo quy trình sản xuất', 0], ['Vận hành máy CNC', 1], ['Bảo dưỡng rô-bốt công nghiệp', 1], ['Hàn khung kim loại', 2], ['Tiện trục trên máy tiện', 2]] },
    { t: 'short', lv: 2, q: 'Dụng cụ dùng để vạch đường thẳng lên bề mặt kim loại gọi là gì?', a: ['mũi vạch', 'mui vach'] },
    { t: 'mcq', lv: 3, ctx: 'Một bạn cầm phôi bằng tay để cưa, không đeo kính bảo hộ.', q: 'Em nên làm gì?', o: ['Nhắc bạn kẹp phôi vào êtô, đeo kính và báo thầy cô', 'Cổ vũ bạn cưa nhanh', 'Đứng xem', 'Cưa giúp bạn khi bạn cầm phôi'], a: 0 },
    { t: 'essay', lv: 3, q: 'Em thích nghề nào trong lĩnh vực cơ khí? Nêu công việc chính và 2 phẩm chất, năng lực cần có.', kw: [['ki su', 'ki thuat vien', 'tho'], ['thiet ke', 'van hanh', 'bao duong', 'gia cong', 'lap rap', 'sua chua', 'han', 'tien'], ['can than', 'ti mi', 'kien tri', 'suc khoe', 'sang tao', 'toan', 'ki thuat', 'trach nhiem']], kwn: ['Tên nghề', 'Công việc chính', 'Phẩm chất, năng lực'], model: 'Em thích nghề kĩ sư cơ khí. Công việc chính là nghiên cứu, thiết kế máy móc và chỉ đạo sản xuất. Người làm nghề cần giỏi toán, vẽ kĩ thuật, sáng tạo, cẩn thận và có trách nhiệm.' }
  ],
  tasks: ['Kể tên 5 dụng cụ cơ khí có trong nhà và công dụng.', 'Phỏng vấn một người làm nghề cơ khí (thợ sửa xe, thợ hàn…).', 'Lập bảng nội quy an toàn khi thực hành ở xưởng.'] },
/* ───── 8 ★ ───── */
{ n: 8, t: 2, star: true, exam: true, title: 'Đề ôn giữa học kì 1', cover: '00_1', sticker: 'b04',
  examTitle: 'Đề ôn kiểm tra giữa học kì 1 – Công nghệ 8', examNote: 'Phần I: 8 câu trắc nghiệm (4 điểm). Phần II: 2 câu Đúng/Sai (2 điểm). Phần III: 2 câu trả lời ngắn (1 điểm). Phần IV: Tự luận (3 điểm). Thời gian làm bài 45 phút.',
  recall: [
    { img: 'kho', fit: true, t: '**Tiêu chuẩn bản vẽ:** khổ giấy (A4 = 297 × 210 mm), tỉ lệ, nét vẽ, chữ viết, ghi kích thước (mm).' },
    { img: 'drawA', fit: true, t: '**Hình chiếu:** đứng (trước tới), bằng (trên xuống, đặt dưới), cạnh (trái sang, đặt bên phải).' },
    { img: 'b19', fit: true, t: '**Bản vẽ chi tiết** (có yêu cầu kĩ thuật) – **bản vẽ lắp** (có bảng kê) – **bản vẽ nhà** (mặt bằng, mặt đứng, mặt cắt).' },
    { img: 'b13', fit: true, t: '**Vật liệu cơ khí:** kim loại đen (thép, gang), kim loại màu (nhôm, đồng), phi kim loại (chất dẻo, cao su).' }
  ],
  keys: ['Dạng đề theo Thông tư 22: trắc nghiệm nhiều lựa chọn, Đúng/Sai, trả lời ngắn, tự luận.'],
  mind: { center: 'Vẽ kĩ thuật', img: 'drawA', extra: ['ảnh chụp', 'tranh màu'], branches: [
    { label: 'Tiêu chuẩn', color: '#2F6FD8', img: 'kho', items: ['Khổ giấy, {{tỉ lệ}}', 'Nét vẽ, chữ viết, {{kích thước}}'] },
    { label: 'Hình chiếu', color: '#7A4CC2', img: 'hc3', items: ['{{Đứng}}, bằng, cạnh'] },
    { label: 'Các loại bản vẽ', color: '#F28C28', img: 'matbang', items: ['Bản vẽ {{chi tiết}}', 'Bản vẽ {{lắp}}', 'Bản vẽ {{nhà}}'] }
  ] },
  q: [
    { part: 'Phần I · Câu 1', t: 'mcq', lv: 1, pt: 0.5, q: 'Nét liền đậm dùng để vẽ:', o: ['Đường bao thấy, cạnh thấy', 'Đường tâm', 'Đường kích thước', 'Cạnh khuất'], a: 0 },
    { part: 'Phần I · Câu 2', t: 'mcq', lv: 1, pt: 0.5, q: 'Tỉ lệ 1:5 là tỉ lệ:', o: ['Thu nhỏ', 'Phóng to', 'Nguyên hình', 'Không xác định'], a: 0 },
    { part: 'Phần I · Câu 3', t: 'mcq', lv: 1, pt: 0.5, q: 'Hình chiếu đứng có hướng chiếu:', o: ['Từ trước tới', 'Từ trên xuống', 'Từ trái sang', 'Từ dưới lên'], a: 0 },
    { part: 'Phần I · Câu 4', t: 'mcq', lv: 1, pt: 0.5, q: 'Hình chiếu bằng của hình trụ (đáy song song mặt phẳng chiếu bằng) là:', o: ['Hình tròn', 'Hình chữ nhật', 'Tam giác', 'Hình vuông'], a: 0 },
    { part: 'Phần I · Câu 5', t: 'mcq', lv: 2, pt: 0.5, q: 'Nội dung nào KHÔNG có trong bản vẽ chi tiết?', o: ['Bảng kê', 'Khung tên', 'Yêu cầu kĩ thuật', 'Kích thước'], a: 0 },
    { part: 'Phần I · Câu 6', t: 'mcq', lv: 2, pt: 0.5, q: 'Trình tự đọc bản vẽ lắp bắt đầu bằng:', o: ['Khung tên, rồi bảng kê', 'Kích thước', 'Phân tích chi tiết', 'Tổng hợp'], a: 0 },
    { part: 'Phần I · Câu 7', t: 'mcq', lv: 1, pt: 0.5, q: 'Hình biểu diễn quan trọng nhất trong bản vẽ nhà là:', o: ['Mặt bằng', 'Mặt đứng', 'Mặt cắt', 'Hình chiếu cạnh'], a: 0 },
    { part: 'Phần I · Câu 8', t: 'mcq', lv: 1, pt: 0.5, img: 'cua2', q: 'Kí hiệu trên trong bản vẽ nhà là:', o: ['Cửa đi đơn hai cánh', 'Cửa sổ kép', 'Cửa đi đơn một cánh', 'Cầu thang'], a: 0 },
    { part: 'Phần II · Câu 1', t: 'tf4', lv: 1, pt: 1, q: 'Về tiêu chuẩn bản vẽ kĩ thuật:', items: [['Khổ A4 có kích thước 297 × 210 mm.', true], ['Đường tâm vẽ bằng nét đứt mảnh.', false], ['Kích thước ghi trên bản vẽ là kích thước thật, đơn vị mm.', true], ['Kí hiệu R ghi trước kích thước đường kính.', false]] },
    { part: 'Phần II · Câu 2', t: 'tf4', lv: 2, pt: 1, q: 'Về hình chiếu vuông góc và bản vẽ:', items: [['Hình chiếu cạnh đặt bên phải hình chiếu đứng.', true], ['Hình nón có hình chiếu đứng là tam giác cân.', true], ['Bản vẽ lắp dùng để chế tạo từng chi tiết.', false], ['Mặt cắt của bản vẽ nhà cho biết kích thước theo chiều cao.', true]] },
    { part: 'Phần III · Câu 1', t: 'short', lv: 2, pt: 0.5, q: 'Một đoạn thẳng dài 60 mm vẽ theo tỉ lệ 1:2 thì dài bao nhiêu mm trên bản vẽ?', a: ['30', '30 mm', '30mm'] },
    { part: 'Phần III · Câu 2', t: 'short', lv: 2, pt: 0.5, q: 'Vật thể có hình chiếu đứng và cạnh là tam giác cân, hình chiếu bằng là hình tròn. Đó là khối gì?', a: ['hình nón', 'nón', 'khối nón'] },
    { part: 'Phần IV · Tự luận', t: 'essay', lv: 3, pt: 3, q: 'Nêu nội dung của bản vẽ chi tiết và trình tự đọc bản vẽ chi tiết. Theo em, vì sao phải đọc khung tên đầu tiên?', kw: [['hinh bieu dien'], ['kich thuoc'], ['yeu cau ki thuat'], ['khung ten'], ['ten goi', 'vat lieu', 'ti le', 'biet']], kwn: ['Hình biểu diễn', 'Kích thước', 'Yêu cầu kĩ thuật', 'Khung tên', 'Lí do đọc khung tên trước'], model: 'Bản vẽ chi tiết gồm: hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên. Trình tự đọc: khung tên → hình biểu diễn → kích thước → yêu cầu kĩ thuật. Đọc khung tên trước để biết tên gọi chi tiết, vật liệu, tỉ lệ bản vẽ, từ đó hiểu đúng các phần sau.' }
  ],
  tasks: ['Tự làm lại đề trong 45 phút, không xem đáp án.', 'Vẽ 3 hình chiếu của một vật thể đơn giản trong nhà.', 'Ghi lại 3 lỗi em hay sai và cách khắc phục.'] }
];
