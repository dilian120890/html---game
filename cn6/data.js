/* Công nghệ 6 · Kết nối tri thức · Ôn tập học kì 1 — "Ngôi nhà xanh ven biển" */
const APP = {
  id: 'cn6', name: 'Ngôi nhà xanh ven biển', sub: 'Ôn tập Công nghệ 6 · Học kì 1',
  school: 'thcs', bilingual: false,
  hero: '00_1', finale: '00_6', mascot: 'ch_1',
  poses: { hi: '00_3_1', think: '00_3_3', good: '00_3_5', try: '00_3_2', win: '00_3_4' },
  theme: { main: '#0E8F8A', 'main-d': '#0A6B67', soft: '#D8F2EF', accent: '#F26B4F' },
  intro: 'Chào bạn! Mình là <b>Khoa</b>, kĩ sư tập sự. Cả nhà mình đang xây một <b>ngôi nhà xanh ven biển</b> và chuẩn bị <b>bữa cơm kết nối yêu thương</b>. Mỗi chặng có 4 bước: <b>đọc kiến thức cần nhớ</b>, <b>hoàn thành sơ đồ tư duy</b>, <b>làm câu hỏi ôn tập</b> theo dạng đề kiểm tra và <b>vận dụng</b>. Cùng mình hoàn thành 7 chặng nhé!'
};
const TOPICS = [
  { name: 'Chương 1 · Nhà ở', color: '#0E8F8A', soft: '#D8F2EF' },
  { name: 'Chương 2 · Bảo quản và chế biến thực phẩm', color: '#E08A1E', soft: '#FFF0D6' },
  { name: 'Ôn tập giữa học kì 1', color: '#E0533D', soft: '#FFE6DF' }
];
const STAGES = [
/* ───── 1 ───── */
{ n: 1, t: 0, title: 'Nhà ở đối với con người', cover: '01_1', sticker: 'ic_1',
  recall: [
    { img: '01_1', t: '**Vai trò của nhà ở:** là nơi **trú ngụ**, **bảo vệ** con người trước tác động xấu của thiên nhiên (mưa, nắng, gió bão) và xã hội; là nơi **sinh hoạt**, đáp ứng nhu cầu **vật chất và tinh thần** của các thành viên trong gia đình.' },
    { img: '01_2_6', fit: true, t: '**Cấu tạo chung** của nhà ở gồm 3 phần: **móng nhà** (dưới cùng, đỡ toàn bộ ngôi nhà), **thân nhà** (tường, cột, cửa) và **mái nhà** (che chắn phía trên).' },
    { img: '01_2_4', fit: true, t: '**Các khu vực chính:** sinh hoạt chung (phòng khách), nghỉ ngơi (phòng ngủ), thờ cúng, nấu ăn (bếp), vệ sinh, …' },
    { img: '01_2_1', fit: true, more: ['01_2_4', '01_2_5', '01_2_6'], t: '**Nông thôn:** nhà ba gian truyền thống, có sân, vườn. **Thành thị:** nhà liền kề (nhà ống), **chung cư**, biệt thự.' },
    { img: '01_2_2', fit: true, more: ['01_2_3', '01_2_7'], t: '**Khu vực đặc thù:** **nhà sàn** (miền núi, tránh ẩm thấp, thú dữ), **nhà nổi** (sông nước miền Tây), nhà rông (Tây Nguyên).' },
    { img: '01_2_9', fit: true, more: ['01_2_8'], t: 'Nhà vùng **ven biển, hay có bão** thường thấp, mái bằng hoặc mái dốc vững chắc; vùng **ngập lụt** làm nhà cao, có gác. Kiến trúc nhà phụ thuộc **điều kiện tự nhiên** và **tập quán** từng vùng.' }
  ],
  keys: ['Nhà ở: nơi trú ngụ, bảo vệ, sinh hoạt; đáp ứng nhu cầu vật chất và tinh thần.', 'Cấu tạo: móng nhà – thân nhà – mái nhà.', 'Kiến trúc nhà ở Việt Nam: nông thôn, thành thị, khu vực đặc thù.'],
  mind: { center: 'Nhà ở đối với con người', img: '01_1', extra: ['cửa sổ', 'nhà kho'], branches: [
    { label: 'Vai trò', color: '#0E8F8A', img: 'ic_1', items: ['Nơi {{trú ngụ}} của con người', '{{Bảo vệ}} trước thiên nhiên, xã hội', 'Đáp ứng nhu cầu vật chất và {{tinh thần}}'] },
    { label: 'Cấu tạo', color: '#8B5E3C', img: '01_2_6', items: ['{{Móng nhà}}: đỡ cả ngôi nhà', '{{Thân nhà}}: tường, cột, cửa', '{{Mái nhà}}: che chắn phía trên'] },
    { label: 'Kiến trúc', color: '#2F8FD8', img: '01_2_2', items: ['Nông thôn: nhà {{ba gian}}', 'Thành thị: nhà liền kề, {{chung cư}}', 'Đặc thù: {{nhà sàn}}, nhà nổi'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Cấu tạo chung của nhà ở gồm những phần chính nào?', o: ['Móng nhà, thân nhà, mái nhà', 'Phòng khách, phòng ngủ, bếp', 'Cửa chính, cửa sổ, cầu thang', 'Sân, vườn, cổng'], a: 0 },
    { t: 'mcq', lv: 1, img: '01_2_2', q: 'Kiểu nhà trong hình thường gặp ở đâu?', o: ['Vùng miền núi', 'Khu đô thị lớn', 'Vùng sông nước miền Tây', 'Khu công nghiệp'], a: 0, ex: 'Nhà sàn ở miền núi giúp tránh ẩm thấp và thú dữ.' },
    { t: 'match', lv: 1, q: 'Nối mỗi kiểu nhà với tên gọi.', pairs: [[['01_2_3', ''], 'Nhà nổi'], [['01_2_5', ''], 'Chung cư'], [['01_2_1', ''], 'Nhà ba gian'], [['01_2_7', ''], 'Nhà rông']] },
    { t: 'mcq', lv: 1, q: 'Khu vực nào trong nhà dùng để tiếp khách, sinh hoạt chung của cả gia đình?', o: ['Phòng khách', 'Phòng ngủ', 'Nhà vệ sinh', 'Kho chứa đồ'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau về nhà ở là đúng hay sai?', items: [['Nhà ở bảo vệ con người trước mưa, nắng, gió bão.', true], ['Nhà ở chỉ đáp ứng nhu cầu vật chất, không liên quan tinh thần.', false], ['Móng nhà là phần nằm dưới cùng, đỡ toàn bộ ngôi nhà.', true], ['Mọi vùng miền ở Việt Nam đều có kiến trúc nhà giống nhau.', false]] },
    { t: 'sort', lv: 2, q: 'Xếp kiểu nhà vào khu vực thường gặp.', bins: ['Nông thôn', 'Thành thị', 'Khu vực đặc thù'], items: [[['01_2_1', 'Nhà ba gian'], 0], [['01_2_4', 'Nhà liền kề'], 1], [['01_2_5', 'Chung cư'], 1], [['01_2_2', 'Nhà sàn'], 2], [['01_2_3', 'Nhà nổi'], 2], [['01_2_6', 'Biệt thự'], 1]] },
    { t: 'mcq', lv: 2, q: 'Vì sao nhà ở vùng thường xuyên ngập lụt hay được làm cao, có gác?', o: ['Để tránh nước ngập, bảo vệ người và tài sản', 'Để trông đẹp hơn', 'Để tiết kiệm vật liệu', 'Để đón nhiều gió hơn'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Kiến trúc nhà ở mỗi vùng khác nhau chủ yếu do đâu?', o: ['Điều kiện tự nhiên và tập quán địa phương', 'Sở thích của thợ xây', 'Màu sơn của ngôi nhà', 'Số người trong gia đình'], a: 0 },
    { t: 'short', lv: 2, q: 'Phần nào của ngôi nhà có nhiệm vụ che chắn, bảo vệ các bộ phận bên dưới khỏi mưa nắng?', a: ['mái nhà', 'mái'] },
    { t: 'mcq', lv: 3, img: '01_2_9', ctx: 'Gia đình Khoa xây nhà ở vùng ven biển thường có bão lớn.', q: 'Phương án nào hợp lí nhất?', o: ['Nhà thấp, mái vững chắc, chèn chống bão, có hàng cây chắn gió', 'Nhà nhiều tầng bằng kính, mái tôn mỏng', 'Nhà sàn bằng tre cao trên cột', 'Nhà không có móng để dễ di chuyển'], a: 0 },
    { t: 'essay', lv: 3, q: 'Hãy nêu vai trò của nhà ở đối với gia đình em và kể tên các khu vực chính trong nhà em.', kw: [['tru ngu', 'o', 'nghi ngoi'], ['bao ve', 'mua', 'nang', 'bao'], ['phong khach', 'phong ngu', 'bep', 've sinh', 'tho cung']], kwn: ['Nơi trú ngụ', 'Bảo vệ', 'Kể tên khu vực'], model: 'Nhà ở là nơi gia đình em trú ngụ, nghỉ ngơi và sinh hoạt; bảo vệ cả nhà khỏi mưa nắng, gió bão. Nhà em có phòng khách, phòng ngủ, bếp, nơi thờ cúng và nhà vệ sinh.' }
  ],
  tasks: ['Vẽ sơ đồ mặt bằng nhà em, ghi tên các khu vực chính.', 'Tìm hiểu kiểu nhà phổ biến ở quê em và giải thích vì sao.', 'Sắp xếp lại góc học tập của em gọn gàng, sạch sẽ.'] },
/* ───── 2 ───── */
{ n: 2, t: 0, title: 'Xây dựng nhà ở', cover: '02_1_2', sticker: 'ic_2',
  recall: [
    { img: '02_2_3', fit: true, more: ['02_2_4', '02_2_6', '02_2_7', '02_2_8'], t: '**Vật liệu tự nhiên:** cát, đá, sỏi, **gỗ**, **tre**, đất sét, lá (rơm rạ, lá cọ).' },
    { img: '02_2_1', fit: true, more: ['02_2_2', '02_2_5', '02_2_9', '02_2_10', '02_2_11'], t: '**Vật liệu nhân tạo** (do con người chế tạo): **gạch**, ngói, **xi măng**, **thép**, kính, tôn, gạch không nung.' },
    { img: '02_1_1', t: '**Bước 1 – Chuẩn bị:** chọn kiểu nhà, **vẽ thiết kế**, dự tính chi phí, chuẩn bị vật liệu.' },
    { img: '02_1_2', more: ['02_1_3'], t: '**Bước 2 – Xây dựng phần thô:** làm **móng**, dựng khung, xây **tường**, làm **mái**.' },
    { img: '02_1_4', t: '**Bước 3 – Hoàn thiện:** trát, **sơn** tường, lát nền, lắp đặt **điện nước**, cửa và đồ nội thất.' },
    { img: '00_3_2', fit: true, t: '**An toàn lao động:** đội mũ bảo hộ, đi giày bảo hộ, đeo găng tay, dây an toàn khi làm trên cao; công trường có rào chắn, biển báo.' }
  ],
  keys: ['Vật liệu: tự nhiên (cát, đá, gỗ, tre, đất sét, lá) và nhân tạo (gạch, ngói, xi măng, thép, kính).', 'Các bước: Chuẩn bị → Xây dựng phần thô → Hoàn thiện.', 'Luôn đảm bảo an toàn lao động trên công trường.'],
  mind: { center: 'Xây dựng nhà ở', img: '02_1_2', extra: ['nhựa dẻo', 'vải'], branches: [
    { label: 'Vật liệu tự nhiên', color: '#3AA85A', img: '02_2_6', items: ['Cát, đá, {{sỏi}}', '{{Gỗ}}, tre, lá', '{{Đất sét}}'] },
    { label: 'Vật liệu nhân tạo', color: '#E0533D', img: '02_2_1', items: ['{{Gạch}}, ngói', '{{Xi măng}}, thép', '{{Kính}}, tôn'] },
    { label: 'Các bước xây', color: '#2F8FD8', img: '02_1_1', items: ['B1: {{Chuẩn bị}} (thiết kế, vật liệu)', 'B2: Xây dựng {{phần thô}}', 'B3: {{Hoàn thiện}}'] },
    { label: 'An toàn', color: '#E08A1E', img: '00_3_2', items: ['Đội {{mũ bảo hộ}}', 'Đeo dây an toàn khi làm trên {{cao}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Vật liệu nào dưới đây là vật liệu tự nhiên?', o: ['Tre', 'Xi măng', 'Thép', 'Kính'], a: 0 },
    { t: 'sort', lv: 1, q: 'Phân loại vật liệu xây dựng.', bins: ['Tự nhiên', 'Nhân tạo'], items: [[['02_2_3', 'Cát'], 0], [['02_2_6', 'Gỗ'], 0], [['02_2_8', 'Lá'], 0], [['02_2_1', 'Gạch'], 1], [['02_2_5', 'Thép'], 1], [['02_2_11', 'Kính'], 1]] },
    { t: 'order', lv: 1, q: 'Sắp xếp các bước chính xây dựng nhà ở.', items: [['02_1_1', 'Chuẩn bị: thiết kế, dự tính chi phí, vật liệu'], ['02_1_2', 'Làm móng, dựng khung'], ['02_1_3', 'Xây tường, làm mái'], ['02_1_4', 'Hoàn thiện: sơn, lắp điện nước']] },
    { t: 'mcq', lv: 1, img: '02_1_4', q: 'Công việc trong hình thuộc bước nào?', o: ['Hoàn thiện', 'Chuẩn bị', 'Làm móng', 'Thiết kế'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Công việc nào thuộc bước xây dựng phần thô?', o: ['Làm móng, xây tường', 'Sơn tường, lắp đèn', 'Vẽ bản thiết kế', 'Kê đồ nội thất'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Gạch, ngói được làm từ đất sét nung nên là vật liệu nhân tạo.', true], ['Bản vẽ thiết kế được thực hiện ở bước hoàn thiện.', false], ['Thợ làm trên mái cần đeo dây an toàn.', true], ['Không cần biển báo quanh công trường đang thi công.', false]] },
    { t: 'mcq', lv: 2, q: 'Vì sao cần dự tính chi phí trước khi xây nhà?', o: ['Để chuẩn bị đủ tiền, tránh dừng công trình giữa chừng', 'Để nhà cao hơn', 'Để không cần bản vẽ', 'Để xây nhanh hơn'], a: 0 },
    { t: 'short', lv: 2, q: 'Vật liệu nhân tạo nào được trộn với cát, nước để tạo vữa xây tường?', a: ['xi măng', 'xi mang'] },
    { t: 'mcq', lv: 3, ctx: 'Gia đình Khoa muốn xây nhà ven biển bền, ít tốn kém và thân thiện môi trường.', q: 'Lựa chọn nào hợp lí?', o: ['Dùng gạch không nung, mái ngói, cửa kính lấy sáng và trồng cây chắn gió', 'Chỉ dùng lá và tre cho toàn bộ ngôi nhà', 'Dùng toàn kính cho tường nhà', 'Dùng tôn mỏng cho tường và mái'], a: 0 },
    { t: 'mcq', lv: 3, img: '02_1_3', ctx: 'Khi đi ngang một công trình đang xây, Khoa thấy vật liệu có thể rơi từ trên cao.', q: 'Khoa nên làm gì?', o: ['Đi vòng tránh khu vực, không đứng dưới chân công trình', 'Đứng xem thợ làm việc', 'Nhặt gạch về chơi', 'Leo lên giàn giáo'], a: 0 },
    { t: 'essay', lv: 3, q: 'Kể tên 3 vật liệu tự nhiên và 3 vật liệu nhân tạo dùng để xây nhà mà em biết.', kw: [['cat', 'da', 'soi', 'go', 'tre', 'dat set', 'la'], ['gach', 'ngoi', 'xi mang', 'thep', 'kinh', 'ton']], kwn: ['Vật liệu tự nhiên', 'Vật liệu nhân tạo'], model: 'Vật liệu tự nhiên: cát, đá, gỗ. Vật liệu nhân tạo: gạch, xi măng, thép.' }
  ],
  tasks: ['Quan sát ngôi nhà em, kể tên các vật liệu đã dùng để xây.', 'Vẽ sơ đồ 3 bước xây dựng nhà ở.', 'Nhắc người thân đội mũ bảo hộ khi sửa nhà.'] },
/* ───── 3 ───── */
{ n: 3, t: 0, title: 'Ngôi nhà thông minh', cover: '03_1', sticker: 'ic_5',
  recall: [
    { img: '03_1', t: '**Ngôi nhà thông minh** là ngôi nhà được trang bị **hệ thống điều khiển tự động hoặc bán tự động** cho các thiết bị, có thể điều khiển **từ xa** (điện thoại), giúp cuộc sống **tiện ích**, **an ninh, an toàn** và **tiết kiệm năng lượng**.' },
    { img: '03_2_1', fit: true, more: ['03_2_7', '03_2_4'], t: '**Hệ thống chiếu sáng:** đèn tự bật khi có người nhờ **cảm biến chuyển động**, tự tắt khi không có người; rèm tự mở lấy sáng.' },
    { img: '03_2_2', fit: true, more: ['03_2_3', '03_2_6'], t: '**Hệ thống an ninh, an toàn:** camera, **khoá vân tay**, **báo khói, báo cháy**, báo có người lạ.' },
    { img: '03_2_8', fit: true, more: ['03_2_5'], t: 'Hệ thống **kiểm soát nhiệt độ** (điều hoà tự điều chỉnh), hệ thống **giải trí**, điều khiển thiết bị bằng **giọng nói** qua loa thông minh.' },
    { img: 'ic_5', fit: true, t: '**Nguyên lí hoạt động:** **Nhận lệnh** (cảm biến, điện thoại, giọng nói) → **Xử lí** (bộ điều khiển) → **Chấp hành** (bật đèn, mở rèm, bật bơm…). Kết quả được **phản hồi** để hệ thống tự điều chỉnh.' },
    { img: '03_2_9', fit: true, more: ['03_2_10', '03_2_12', '03_2_11'], t: '**Tiết kiệm năng lượng:** dùng đèn LED, tắt thiết bị khi không dùng, tận dụng **ánh sáng và gió tự nhiên**, năng lượng mặt trời; **không** mở tủ lạnh lâu.' }
  ],
  keys: ['Nhà thông minh: thiết bị điều khiển tự động/bán tự động, điều khiển từ xa.', 'Đặc điểm: tiện ích – an ninh, an toàn – tiết kiệm năng lượng.', 'Nguyên lí: Nhận lệnh → Xử lí → Chấp hành (có phản hồi).'],
  mind: { center: 'Ngôi nhà thông minh', img: '03_1', extra: ['thủ công', 'bóng sợi đốt'], branches: [
    { label: 'Khái niệm', color: '#0E8F8A', img: 'ic_5', items: ['Điều khiển {{tự động}} hoặc bán tự động', 'Điều khiển {{từ xa}} qua điện thoại'] },
    { label: 'Hệ thống', color: '#2F8FD8', img: '03_2_2', items: ['Chiếu sáng: {{cảm biến}} chuyển động', 'An ninh: camera, {{báo cháy}}', 'Kiểm soát {{nhiệt độ}}'] },
    { label: 'Nguyên lí', color: '#7A4CC2', img: '03_2_5', items: ['{{Nhận lệnh}} → Xử lí → {{Chấp hành}}'] },
    { label: 'Tiết kiệm năng lượng', color: '#3AA85A', img: '03_2_9', items: ['Dùng đèn {{LED}}', 'Tận dụng ánh sáng, gió {{tự nhiên}}', 'Năng lượng {{mặt trời}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Ngôi nhà thông minh là ngôi nhà như thế nào?', o: ['Được trang bị hệ thống điều khiển tự động hoặc bán tự động cho các thiết bị', 'Có nhiều phòng và nhiều tầng', 'Được xây bằng vật liệu đắt tiền', 'Có thật nhiều đồ điện'], a: 0 },
    { t: 'mcq', lv: 1, img: '03_2_6', q: 'Thiết bị trong hình thuộc hệ thống nào của ngôi nhà thông minh?', o: ['An ninh, an toàn', 'Giải trí', 'Chiếu sáng', 'Kiểm soát nhiệt độ'], a: 0 },
    { t: 'match', lv: 1, q: 'Nối thiết bị với chức năng.', pairs: [[['03_2_1', ''], 'Đèn tự bật khi có người'], [['03_2_3', ''], 'Mở cửa bằng vân tay'], [['03_2_5', ''], 'Điều khiển bằng giọng nói'], [['03_2_4', ''], 'Rèm tự mở lấy sáng']] },
    { t: 'mcq', lv: 1, q: 'Trong hệ thống đèn tự bật khi có người đi qua, cảm biến chuyển động đóng vai trò gì?', o: ['Nhận lệnh (tín hiệu đầu vào)', 'Xử lí', 'Chấp hành', 'Nguồn điện'], a: 0 },
    { t: 'order', lv: 2, q: 'Sắp xếp hoạt động của hệ thống tự tưới cây theo nguyên lí nhà thông minh.', items: ['Đất khô: cảm biến độ ẩm phát hiện (nhận lệnh)', 'Mạch điều khiển xử lí tín hiệu', 'Bật máy bơm tưới nước (chấp hành)', 'Đất đủ ẩm: cảm biến báo về, tắt bơm (phản hồi)'] },
    { t: 'sort', lv: 2, q: 'Việc làm nào tiết kiệm năng lượng?', bins: ['Tiết kiệm', 'Lãng phí'], items: [[['03_2_7', 'Dùng đèn LED'], 0], [['03_2_12', 'Phơi quần áo bằng nắng'], 0], [['03_2_10', 'Mở cửa sổ lấy sáng'], 0], [['03_2_11', 'Mở tủ lạnh thật lâu'], 1], ['Bật điều hoà khi đi vắng', 1], ['Để ti vi bật khi không xem', 1]] },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Có thể điều khiển thiết bị nhà thông minh từ xa bằng điện thoại.', true], ['Nhà thông minh nhất định phải là biệt thự đắt tiền.', false], ['Báo khói giúp phát hiện sớm nguy cơ cháy.', true], ['Bình nước nóng năng lượng mặt trời làm tốn điện hơn.', false]] },
    { t: 'mcq', lv: 2, q: 'Đặc điểm nào KHÔNG phải của ngôi nhà thông minh?', o: ['Tốn nhiều năng lượng hơn nhà thường', 'Tiện ích', 'An ninh, an toàn', 'Tiết kiệm năng lượng'], a: 0 },
    { t: 'short', lv: 3, q: 'Trong nguyên lí “Nhận lệnh → Xử lí → …”, bước cuối cùng (bật đèn, mở rèm) gọi là gì?', a: ['chấp hành', 'chap hanh', 'cơ cấu chấp hành'] },
    { t: 'mcq', lv: 3, ctx: 'Nhà Khoa ven biển, mùa hè rất nóng. Cả nhà muốn mát mà ít tốn điện.', q: 'Giải pháp nào tốt nhất?', o: ['Mở cửa đón gió ở thấp, ô thoát khí nóng ở cao, trồng cây tạo bóng mát', 'Đóng kín cửa, bật điều hoà cả ngày', 'Sơn tường màu đen', 'Lợp mái tôn mỏng không chống nóng'], a: 0, ex: 'Khí nóng nhẹ bốc lên thoát ra ô cao, gió mát vào từ cửa thấp (đối lưu tự nhiên).' },
    { t: 'essay', lv: 3, q: 'Nêu 3 việc gia đình em có thể làm để sử dụng năng lượng tiết kiệm, hiệu quả.', kw: [['tat', 'rut'], ['led', 'tiet kiem dien'], ['anh sang tu nhien', 'gio tu nhien', 'cua so', 'mat troi', 'phoi']], kwn: ['Tắt thiết bị khi không dùng', 'Dùng thiết bị tiết kiệm (LED)', 'Tận dụng tự nhiên'], model: 'Tắt đèn, quạt, ti vi khi không dùng; thay bóng sợi đốt bằng đèn LED; mở cửa sổ lấy ánh sáng và gió tự nhiên, phơi quần áo bằng nắng mặt trời.' }
  ],
  tasks: ['Lập danh sách thiết bị tự động có trong nhà em (đèn cảm biến, điều hoà…).', 'Kiểm tra và rút phích các thiết bị không dùng trong 1 tuần.', 'Vẽ sơ đồ “Nhận lệnh → Xử lí → Chấp hành” cho một thiết bị em thích.'] },
/* ───── 4 ───── */
{ n: 4, t: 1, title: 'Thực phẩm và dinh dưỡng', cover: '04_1', sticker: 'ic_7',
  recall: [
    { img: '04_2_1', fit: true, more: ['04_2_2', '04_2_3'], t: '**Nhóm giàu tinh bột, đường:** gạo, bánh mì, khoai, ngô… là **nguồn năng lượng chính** cho cơ thể.' },
    { img: '04_2_4', fit: true, more: ['04_2_5', '04_2_6', '04_2_7', '04_2_8'], t: '**Nhóm giàu chất đạm (protein):** thịt, cá, trứng, sữa, đậu phụ… giúp **xây dựng, tái tạo tế bào**, giúp cơ thể **lớn lên**.' },
    { img: '04_2_11', fit: true, t: '**Nhóm giàu chất béo:** dầu ăn, mỡ, bơ, lạc, vừng… **cung cấp năng lượng**, bảo vệ cơ thể, giúp **hấp thu vitamin A, D, E, K**.' },
    { img: '04_2_9', fit: true, more: ['04_2_10'], t: '**Nhóm giàu vitamin, chất khoáng:** rau xanh, quả chín… giúp **tăng sức đề kháng**, cơ thể khoẻ mạnh, phát triển tốt.' },
    { img: '04_1', t: '**Tháp dinh dưỡng:** đáy tháp ăn **nhiều** (ngũ cốc, rau quả), lên cao ăn **vừa phải** (đạm, sữa), đỉnh tháp ăn **hạn chế** (đường, muối, dầu mỡ). Uống **đủ nước** mỗi ngày.' },
    { img: '06_2_1', fit: true, t: '**Ăn uống khoa học:** bữa ăn có **đủ 4 nhóm chất**, đa dạng món; ăn **đủ 3 bữa**, **không bỏ bữa sáng**, ăn đúng giờ, không ăn quá no.' }
  ],
  keys: ['4 nhóm thực phẩm chính: tinh bột – đạm – chất béo – vitamin, chất khoáng.', 'Bữa ăn hợp lí: đủ 4 nhóm, đa dạng, đủ 3 bữa, không bỏ bữa sáng.', 'Hạn chế đường, muối, dầu mỡ; uống đủ nước.'],
  mind: { center: 'Thực phẩm và dinh dưỡng', img: '04_1', extra: ['nước ngọt có ga', 'kẹo'], branches: [
    { label: 'Tinh bột, đường', color: '#E08A1E', img: '04_2_1', items: ['Gạo, bánh mì, {{khoai}}', 'Nguồn {{năng lượng}} chính'] },
    { label: 'Chất đạm', color: '#E0533D', img: '04_2_4', items: ['Thịt, {{cá}}, trứng, đậu phụ', 'Giúp cơ thể {{lớn lên}}'] },
    { label: 'Chất béo', color: '#C9A100', img: '04_2_11', items: ['{{Dầu ăn}}, mỡ, lạc, vừng', 'Hấp thu vitamin A, D, E, K'] },
    { label: 'Vitamin, khoáng', color: '#3AA85A', img: '04_2_9', items: ['{{Rau}} xanh, quả chín', 'Tăng sức {{đề kháng}}'] },
    { label: 'Ăn khoa học', color: '#2F8FD8', img: '06_2_1', items: ['Không bỏ bữa {{sáng}}', 'Hạn chế {{muối}}, đường'] }
  ] },
  q: [
    { t: 'sort', lv: 1, q: 'Xếp thực phẩm vào nhóm chất dinh dưỡng chủ yếu.', bins: ['Tinh bột', 'Đạm', 'Vitamin, khoáng'], items: [[['04_2_2', 'Bánh mì'], 0], [['04_2_3', 'Khoai lang'], 0], [['04_2_5', 'Cá'], 1], [['04_2_7', 'Đậu phụ'], 1], [['04_2_9', 'Rau muống'], 2], [['04_2_10', 'Cam'], 2]] },
    { t: 'mcq', lv: 1, q: 'Nhóm thực phẩm nào là nguồn cung cấp năng lượng chủ yếu cho cơ thể?', o: ['Nhóm giàu tinh bột, đường', 'Nhóm giàu vitamin', 'Nhóm giàu chất khoáng', 'Nước uống'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Chất đạm có vai trò chính nào?', o: ['Xây dựng, tái tạo tế bào, giúp cơ thể lớn lên', 'Chỉ làm món ăn ngon hơn', 'Làm cơ thể béo phì', 'Không có vai trò gì'], a: 0 },
    { t: 'mcq', lv: 1, img: '04_1', q: 'Theo tháp dinh dưỡng, nhóm nào cần ăn hạn chế nhất?', o: ['Đường, muối, dầu mỡ', 'Rau xanh', 'Gạo, ngũ cốc', 'Hoa quả'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Chất béo giúp cơ thể hấp thu vitamin A, D, E, K.', true], ['Bỏ bữa sáng giúp học tập tập trung hơn.', false], ['Rau, quả giúp tăng sức đề kháng.', true], ['Chỉ cần ăn thật nhiều thịt là đủ chất.', false]] },
    { t: 'mcq', lv: 2, q: 'Bạn An thường bị chảy máu chân răng, hay ốm vặt, rất ít ăn rau quả. An có thể đang thiếu nhóm chất nào?', o: ['Vitamin và chất khoáng', 'Tinh bột', 'Chất béo', 'Chất đạm'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Nhận xét nào đúng về bữa ăn hợp lí?', o: ['Có đủ 4 nhóm thực phẩm chính, món ăn đa dạng', 'Chỉ có cơm và thịt', 'Ăn càng nhiều càng tốt', 'Chỉ ăn món mình thích'], a: 0 },
    { t: 'short', lv: 2, q: 'Kể tên một thực phẩm giàu chất đạm có nguồn gốc thực vật.', a: ['đậu phụ', 'đậu', 'đậu nành', 'lạc', 'đậu xanh', 'đậu đen', 'đậu tương', 'vừng'] },
    { t: 'mcq', lv: 3, ctx: 'Khoa đang tuổi lớn, chơi thể thao nhiều nhưng hay ăn đồ chiên rán và uống nước ngọt.', q: 'Lời khuyên phù hợp nhất là gì?', o: ['Ăn đủ cơm, thêm cá, trứng, rau quả; giảm đồ chiên và nước ngọt; uống đủ nước lọc', 'Bỏ hẳn cơm để giảm cân', 'Chỉ ăn rau', 'Tăng thêm nước ngọt cho đủ năng lượng'], a: 0 },
    { t: 'essay', lv: 3, q: 'Dựa vào 4 nhóm thực phẩm, hãy đề xuất thực đơn một bữa trưa hợp lí cho em và giải thích ngắn gọn.', kw: [['com', 'bun', 'pho', 'banh mi', 'khoai'], ['thit', 'ca', 'trung', 'dau', 'tom'], ['rau', 'canh', 'qua', 'cam', 'chuoi', 'dua hau']], kwn: ['Tinh bột', 'Đạm', 'Rau quả'], model: 'Cơm (tinh bột), cá kho (đạm, chất béo), canh rau ngót (vitamin, khoáng), tráng miệng chuối. Bữa ăn đủ 4 nhóm chất, đa dạng.' }
  ],
  tasks: ['Ghi lại thực đơn 1 ngày của em và đánh giá đã đủ 4 nhóm chất chưa.', 'Không bỏ bữa sáng trong 1 tuần.', 'Uống đủ nước lọc, hạn chế nước ngọt có ga.'] },
/* ───── 5 ───── */
{ n: 5, t: 1, title: 'Bảo quản và chế biến thực phẩm', cover: '05_1', sticker: 'ic_10',
  recall: [
    { img: '05_1', t: '**Vai trò của bảo quản:** làm chậm quá trình hư hỏng, **giữ chất dinh dưỡng**, **kéo dài thời gian sử dụng** thực phẩm.' },
    { img: '05_2_4', fit: true, more: ['05_2_3'], t: '**Làm lạnh** (1–7 °C): giữ thực phẩm tươi trong **thời gian ngắn** (rau, quả, thịt dùng trong ngày). **Đông lạnh** (dưới 0 °C): bảo quản **dài ngày** (thịt, cá).' },
    { img: '05_2_1', fit: true, more: ['05_2_2', '05_2_5', '05_2_6'], t: '**Làm khô** (phơi, sấy): cá khô, mực khô. **Ướp** muối, đường: dưa muối, mứt. Ngoài ra còn hút chân không, đóng hộp.' },
    { img: '05_2_12', fit: true, t: '**Chế biến không dùng nhiệt:** trộn dầu giấm, **nộm (gỏi)**, muối chua. Giữ được nhiều vitamin nhưng cần nguyên liệu rất sạch.' },
    { img: '05_2_7', fit: true, more: ['05_2_8', '05_2_9', '05_2_10', '05_2_11'], t: '**Chế biến có dùng nhiệt:** trong nước (**luộc**, nấu, kho), bằng hơi nước (**hấp**), nhiệt trực tiếp (**nướng**), trong chất béo (**rán**, **xào**).' },
    { img: '05_1', t: '**An toàn vệ sinh thực phẩm:** rửa tay sạch; dùng **thớt, dao riêng** cho thực phẩm **sống và chín**; nấu chín kĩ; bảo quản đúng cách; không dùng thực phẩm ôi thiu.' }
  ],
  keys: ['Bảo quản: làm lạnh, đông lạnh, làm khô, ướp.', 'Chế biến: không dùng nhiệt (trộn, nộm, muối chua) và có dùng nhiệt (luộc, hấp, nướng, rán, xào).', 'Vệ sinh: thớt sống – chín riêng, nấu chín, rửa tay.'],
  mind: { center: 'Bảo quản và chế biến', img: '05_1', extra: ['để ngoài nắng', 'rửa sau khi cắt'], branches: [
    { label: 'Bảo quản', color: '#2F8FD8', img: '05_2_3', items: ['{{Làm lạnh}}: ngắn ngày', '{{Đông lạnh}}: dài ngày', 'Làm {{khô}}: phơi, sấy', '{{Ướp}} muối, đường'] },
    { label: 'Không dùng nhiệt', color: '#3AA85A', img: '05_2_12', items: ['Trộn dầu giấm, {{nộm}}', '{{Muối chua}}'] },
    { label: 'Có dùng nhiệt', color: '#E0533D', img: '05_2_10', items: ['Trong nước: {{luộc}}, kho', 'Hơi nước: {{hấp}}', 'Chất béo: rán, {{xào}}'] },
    { label: 'An toàn', color: '#E08A1E', img: '05_1', items: ['Thớt {{sống}}, chín riêng', 'Nấu {{chín kĩ}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Phương pháp nào bảo quản thịt, cá được lâu ngày nhất?', o: ['Đông lạnh', 'Làm lạnh', 'Để ở nhiệt độ phòng', 'Ngâm vào nước'], a: 0 },
    { t: 'match', lv: 1, q: 'Nối hình với phương pháp bảo quản, chế biến.', pairs: [[['05_2_1', ''], 'Làm khô (phơi)'], [['05_2_2', ''], 'Muối chua'], [['05_2_8', ''], 'Hấp'], [['05_2_9', ''], 'Nướng']] },
    { t: 'sort', lv: 1, q: 'Phân loại phương pháp chế biến.', bins: ['Không dùng nhiệt', 'Có dùng nhiệt'], items: [[['05_2_12', 'Nộm'], 0], [['05_2_2', 'Muối chua'], 0], [['05_2_7', 'Luộc'], 1], [['05_2_10', 'Rán'], 1], [['05_2_11', 'Xào'], 1], ['Trộn dầu giấm', 0]] },
    { t: 'mcq', lv: 1, q: 'Bảo quản thực phẩm có vai trò gì?', o: ['Làm chậm hư hỏng, kéo dài thời gian sử dụng', 'Làm thực phẩm to hơn', 'Tăng lượng chất béo', 'Làm thực phẩm đổi màu'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Luộc, nấu, kho là phương pháp làm chín thực phẩm bằng gì?', o: ['Trong nước', 'Bằng hơi nước', 'Trong chất béo', 'Bằng nhiệt trực tiếp'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi việc làm sau là đúng hay sai?', items: [['Dùng chung một thớt cho thịt sống và thịt chín.', false], ['Rửa rau trước khi cắt để giữ vitamin.', true], ['Thức ăn thừa nên để ngoài nhiệt độ phòng qua đêm.', false], ['Rửa tay sạch trước khi chế biến.', true]] },
    { t: 'mcq', lv: 2, img: '05_1', q: 'Trong hình, vì sao mẹ dùng hai thớt màu khác nhau?', o: ['Để thớt riêng cho thực phẩm sống và chín, tránh nhiễm khuẩn', 'Để trang trí bếp đẹp hơn', 'Vì thớt đỏ sắc hơn', 'Để thái nhanh hơn'], a: 0 },
    { t: 'short', lv: 2, q: 'Làm bánh bao chín bằng hơi nước gọi là phương pháp gì?', a: ['hấp', 'hap'] },
    { t: 'mcq', lv: 3, ctx: 'Mẹ mua 1 kg thịt nhưng chỉ dùng 300 g cho bữa tối nay, phần còn lại dùng cho tuần sau.', q: 'Cách bảo quản hợp lí là gì?', o: ['Chia nhỏ, để phần dùng ngay ở ngăn mát, phần còn lại cho vào ngăn đông', 'Để cả 1 kg ngoài bếp', 'Để cả 1 kg trong ngăn mát cả tuần', 'Phơi nắng toàn bộ'], a: 0 },
    { t: 'mcq', lv: 3, q: 'Để giảm chất béo trong bữa ăn của ông bà, nên ưu tiên cách chế biến nào?', o: ['Luộc, hấp', 'Rán ngập dầu', 'Chiên giòn', 'Xào nhiều mỡ'], a: 0 },
    { t: 'essay', lv: 3, q: 'Em sẽ làm gì để đảm bảo an toàn vệ sinh khi cùng mẹ chuẩn bị bữa cơm?', kw: [['rua tay'], ['thot', 'song', 'chin'], ['nau chin', 'chin ki'], ['bao quan', 'tu lanh', 'sach']], kwn: ['Rửa tay', 'Thớt sống/chín riêng', 'Nấu chín kĩ', 'Bảo quản, giữ sạch'], model: 'Em rửa tay sạch trước khi làm, rửa rau rồi mới cắt; dùng thớt riêng cho đồ sống và đồ chín; nấu chín kĩ thức ăn; giữ bếp sạch và cất thức ăn thừa vào tủ lạnh.' }
  ],
  tasks: ['Sắp xếp tủ lạnh nhà em: ngăn mát cho rau quả, ngăn đông cho thịt cá.', 'Tự làm một món không dùng nhiệt (nộm, trộn) cùng người lớn.', 'Dán nhãn “sống” và “chín” cho hai thớt ở nhà.'] },
/* ───── 6 ───── */
{ n: 6, t: 1, title: 'Dự án: Bữa ăn kết nối yêu thương', cover: '06_1', sticker: 'ic_12',
  recall: [
    { img: '06_1', t: '**Bữa ăn gia đình** giúp các thành viên **gắn kết**, chia sẻ, quan tâm nhau. Bữa ăn ngon cần **hợp khẩu vị** và **đủ chất**.' },
    { img: '06_2_1', fit: true, more: ['06_2_6'], t: '**Thực đơn** một bữa cơm gia đình thường có: **món chính** (giàu đạm), **món canh**, **món rau**, **món tráng miệng** và cơm.' },
    { img: '06_2_4', fit: true, more: ['06_2_2', '06_2_5'], t: 'Bữa ăn **chưa hợp lí:** chỉ đồ chiên rán, nước ngọt; hoặc thiếu đạm, thiếu rau quả.' },
    { img: 'ch_4', fit: true, more: ['ch_5'], t: 'Thực đơn cần **phù hợp từng người**: ông bà ăn mềm, ít muối, ít mỡ; em nhỏ cần đủ đạm, sữa, rau quả.' },
    { img: 'ic_11', fit: true, t: '**Các bước dự án:** xây dựng thực đơn → lựa chọn thực phẩm → **tính chi phí** (theo ngân sách) → phân công, chế biến → trình bày, đánh giá.' }
  ],
  keys: ['Thực đơn: món chính, canh, rau, tráng miệng.', 'Đủ 4 nhóm chất, phù hợp các thành viên, trong ngân sách.', 'Bữa ăn gia đình: gắn kết yêu thương.'],
  mind: { center: 'Bữa ăn kết nối yêu thương', img: '06_1', extra: ['nước ngọt', 'khoai chiên'], branches: [
    { label: 'Thực đơn', color: '#E08A1E', img: '06_2_6', items: ['Món {{chính}} giàu đạm', 'Món {{canh}}, món rau', 'Món {{tráng miệng}}'] },
    { label: 'Yêu cầu', color: '#3AA85A', img: '04_1', items: ['Đủ {{4 nhóm}} thực phẩm', 'Phù hợp {{ông bà}}, em nhỏ', 'Trong {{ngân sách}}'] },
    { label: 'Các bước', color: '#2F8FD8', img: 'ic_11', items: ['Xây dựng {{thực đơn}}', 'Tính {{chi phí}}', 'Phân công, {{chế biến}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Thực đơn một bữa cơm gia đình thường gồm những món nào?', o: ['Món chính, món canh, món rau, món tráng miệng', 'Chỉ có cơm và thịt', 'Chỉ đồ chiên rán', 'Chỉ bánh kẹo'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Mâm cơm nào hợp lí nhất?', o: [['06_2_6', ''], ['06_2_4', ''], ['06_2_2', ''], ['06_2_5', '']], a: 0, ex: 'Mâm cơm có cơm, cá, canh rau, quả: đủ 4 nhóm chất.' },
    { t: 'sort', lv: 2, q: 'Mâm cơm nào hợp lí, mâm nào chưa hợp lí?', bins: ['Hợp lí', 'Chưa hợp lí'], items: [[['06_2_1', ''], 0], [['06_2_6', ''], 0], [['06_2_4', ''], 1], [['06_2_2', ''], 1], [['06_2_5', ''], 1]] },
    { t: 'tf4', lv: 2, q: 'Khi lên thực đơn cho gia đình có ông bà và em nhỏ:', items: [['Nên chọn món mềm, ít muối cho ông bà.', true], ['Chỉ cần chọn món Khoa thích nhất.', false], ['Cần tính chi phí phù hợp ngân sách.', true], ['Bỏ món rau cho nhanh.', false]] },
    { t: 'mcq', lv: 2, img: '06_2_4', q: 'Mâm ăn này chưa hợp lí vì sao?', o: ['Nhiều dầu mỡ, đường; thiếu rau xanh', 'Thiếu chất béo', 'Quá nhiều rau', 'Có quá nhiều cơm'], a: 0 },
    { t: 'short', lv: 2, q: 'Món ăn cuối bữa như hoa quả, chè… gọi là món gì?', a: ['tráng miệng', 'trang mieng', 'món tráng miệng'] },
    { t: 'mcq', lv: 3, ctx: 'Nhóm Khoa có 150 000 đồng để nấu bữa trưa cho 4 người.', q: 'Cách làm nào hợp lí?', o: ['Lập thực đơn, ghi giá từng thực phẩm, tính tổng không vượt 150 000 đồng', 'Mua thật nhiều món đắt tiền', 'Không cần tính, thiếu thì vay', 'Chỉ mua một món duy nhất'], a: 0 },
    { t: 'mcq', lv: 3, q: 'Thực đơn nào phù hợp cho bữa tối có ông bà?', o: ['Cơm, cá hấp, canh bí, rau luộc, chuối', 'Gà rán, khoai chiên, nước ngọt', 'Mì tôm, xúc xích nướng', 'Thịt nướng cay, bia'], a: 0 },
    { t: 'essay', lv: 3, q: 'Xây dựng thực đơn bữa cơm kết nối yêu thương cho gia đình em (ghi rõ món chính, canh, rau, tráng miệng) và nêu ý nghĩa của bữa ăn gia đình.', kw: [['thit', 'ca', 'trung', 'tom', 'dau'], ['canh'], ['rau'], ['trang mieng', 'qua', 'chuoi', 'cam', 'dua hau'], ['gan ket', 'yeu thuong', 'chia se', 'quan tam']], kwn: ['Món chính', 'Canh', 'Rau', 'Tráng miệng', 'Ý nghĩa'], model: 'Món chính: cá kho, trứng rán. Canh: canh rau ngót nấu thịt. Rau: rau muống luộc. Tráng miệng: dưa hấu. Bữa ăn giúp cả nhà gắn kết, chia sẻ, yêu thương nhau.' }
  ],
  tasks: ['Lập thực đơn và bảng chi phí cho một bữa cơm gia đình.', 'Cùng bố mẹ nấu và trình bày bữa cơm, chụp ảnh lưu lại.', 'Hỏi cảm nhận của từng thành viên sau bữa ăn.'] },
/* ───── 7 ★ ───── */
{ n: 7, t: 2, star: true, exam: true, title: 'Đề ôn giữa học kì 1', cover: '00_2', sticker: '00_3_4',
  examTitle: 'Đề ôn kiểm tra giữa học kì 1 – Công nghệ 6', examNote: 'Phần I: 8 câu trắc nghiệm (4 điểm). Phần II: 2 câu Đúng/Sai (2 điểm). Phần III: 3 câu trả lời ngắn (1,5 điểm). Phần IV: Tự luận (2,5 điểm). Thời gian làm bài 45 phút.',
  recall: [
    { img: '01_1', t: '**Nhà ở**: trú ngụ, bảo vệ, sinh hoạt; đáp ứng nhu cầu vật chất, tinh thần. **Giếng trời**, **cửa sổ kính** giúp lấy **ánh sáng tự nhiên** cho ngôi nhà.' },
    { img: '02_2_7', fit: true, more: ['02_2_6', '02_2_1', '02_2_11'], t: 'Vật liệu **tự nhiên**: tre, gỗ, đá, đất sét, lá. Vật liệu **nhân tạo**: gạch, xi măng, thép, kính, tôn, mica.' },
    { img: '03_1', t: '**Nhà thông minh**: hệ thống tự động/bán tự động, **điều khiển từ xa**. **Cảm biến** chuyển động là bộ phận **nhận tín hiệu đầu vào**.' },
    { img: '🌬️', fit: true, t: '**Thông gió đối lưu:** không khí nóng nhẹ bốc lên → làm **ô thoát khí nóng ở cao**, **cửa đón gió mát ở thấp**. Khi mất điện, nhà vẫn mát nhờ **ô thông gió** và **bóng cây xanh**.' },
    { img: '💡', fit: true, t: 'Tấm **mica, ni-lông trong** hoặc kính dùng làm mái/vách **lấy sáng** tự nhiên, tiết kiệm điện ban ngày.' },
    { img: '🔁', fit: true, t: '**Vòng lặp phản hồi:** Cảm biến → Bộ xử lí → Cơ cấu chấp hành → Phản hồi. Ví dụ tưới cây: đất khô → cảm biến độ ẩm → mạch điều khiển → bật bơm → đủ ẩm thì tắt bơm.' }
  ],
  keys: ['Ôn Chương 1: nhà ở, xây dựng nhà ở, nhà thông minh, tiết kiệm năng lượng.', 'Dạng đề: trắc nghiệm A–D, Đúng/Sai, trả lời ngắn, tự luận vận dụng.'],
  mind: { center: 'Ngôi nhà xanh, thông minh', img: '00_1', extra: ['đóng kín cửa', 'tường kính'], branches: [
    { label: 'Lấy sáng', color: '#E08A1E', img: '03_2_10', items: ['{{Giếng trời}}, cửa sổ kính', 'Tấm {{mica}} trong làm mái lấy sáng'] },
    { label: 'Thông gió', color: '#2F8FD8', img: '01_2_9', items: ['Cửa đón gió ở {{thấp}}', 'Ô thoát khí nóng ở {{cao}}', 'Trồng {{cây xanh}} tạo bóng mát'] },
    { label: 'Vòng lặp phản hồi', color: '#7A4CC2', img: 'ic_5', items: ['{{Cảm biến}} → Bộ xử lí', '→ Cơ cấu {{chấp hành}} → Phản hồi'] },
    { label: 'Vật liệu', color: '#3AA85A', img: '02_2_7', items: ['Tự nhiên: {{tre}}, gỗ, đá', 'Nhân tạo: gạch, {{thép}}, kính'] }
  ] },
  q: [
    { part: 'Phần I · Câu 1', t: 'mcq', lv: 1, pt: 0.5, q: 'Vai trò nào sau đây là của nhà ở?', o: ['Là nơi trú ngụ, bảo vệ con người trước tác động xấu của thiên nhiên', 'Là nơi sản xuất hàng hoá', 'Là nơi vui chơi công cộng', 'Là nơi trồng trọt'], a: 0 },
    { part: 'Phần I · Câu 2', t: 'mcq', lv: 1, pt: 0.5, q: 'Ngôi nhà thông minh là ngôi nhà được lắp đặt:', o: ['Hệ thống tự động hoặc bán tự động, có thể điều khiển từ xa', 'Nhiều ti vi và máy tính', 'Nhiều cửa sổ', 'Tường cách âm'], a: 0 },
    { part: 'Phần I · Câu 3', t: 'mcq', lv: 1, pt: 0.5, q: 'Nhóm nào gồm toàn vật liệu tự nhiên?', o: ['Tre, gỗ, đá, đất sét', 'Gạch, xi măng, thép', 'Kính, tôn, nhựa', 'Gạch, tre, kính'], a: 0 },
    { part: 'Phần I · Câu 4', t: 'mcq', lv: 1, pt: 0.5, q: 'Bộ phận nào giúp lấy ánh sáng tự nhiên vào giữa ngôi nhà ống?', o: ['Giếng trời', 'Móng nhà', 'Cầu thang', 'Bể nước ngầm'], a: 0 },
    { part: 'Phần I · Câu 5', t: 'mcq', lv: 1, pt: 0.5, q: 'Trong hệ thống đèn hành lang tự bật khi có người đi qua, cảm biến chuyển động là:', o: ['Bộ phận nhận tín hiệu đầu vào', 'Bộ phận chấp hành', 'Nguồn điện', 'Bóng đèn'], a: 0 },
    { part: 'Phần I · Câu 6', t: 'mcq', lv: 2, pt: 0.5, q: 'Để thông gió đối lưu tự nhiên, cách bố trí nào hợp lí?', o: ['Cửa đón gió mát ở thấp, ô thoát khí nóng ở cao', 'Cửa đón gió ở cao, ô thoát khí ở thấp', 'Đóng kín mọi cửa', 'Chỉ mở một cửa duy nhất'], a: 0, ex: 'Khí nóng nhẹ bốc lên cao và thoát ra ngoài, gió mát đi vào từ phía dưới.' },
    { part: 'Phần I · Câu 7', t: 'mcq', lv: 2, pt: 0.5, q: 'Vật liệu nào thích hợp làm mái lấy sáng cho mô hình nhà?', o: ['Tấm mica trong hoặc ni-lông trong', 'Bìa các-tông', 'Tấm gỗ', 'Giấy bạc'], a: 0 },
    { part: 'Phần I · Câu 8', t: 'mcq', lv: 3, pt: 0.5, q: 'Khi mất điện vào buổi trưa nắng, giải pháp nào giúp ngôi nhà ven biển vẫn mát?', o: ['Mở ô thông gió, cửa sổ; tận dụng bóng mát của cây xanh', 'Đóng kín cửa', 'Bật bếp ga', 'Che kín ô thông gió'], a: 0 },
    { part: 'Phần II · Câu 1', t: 'tf4', lv: 2, pt: 1, q: 'Nhóm Khoa thiết kế mô hình ngôi nhà xanh ven biển. Mỗi ý sau đúng hay sai?', items: [['Đặt cửa sổ đón gió ở hướng có gió mát thổi tới.', true], ['Dùng mái tôn mỏng màu tối để nhà mát hơn.', false], ['Trồng hàng cây xanh giúp chắn gió bão và tạo bóng mát.', true], ['Làm ô thoát khí nóng ở sát nền nhà.', false]] },
    { part: 'Phần II · Câu 2', t: 'tf4', lv: 2, pt: 1, q: 'Về hệ thống tưới cây tự động trong nhà thông minh:', items: [['Cảm biến độ ẩm đất là bộ phận nhận tín hiệu.', true], ['Máy bơm là bộ phận xử lí tín hiệu.', false], ['Khi đất đủ ẩm, hệ thống tự tắt bơm nhờ phản hồi.', true], ['Hệ thống luôn bơm nước liên tục cả ngày.', false]] },
    { part: 'Phần III · Câu 1', t: 'short', lv: 1, pt: 0.5, q: 'Bộ phận nào của ngôi nhà nằm dưới cùng, đỡ toàn bộ ngôi nhà?', a: ['móng nhà', 'móng'] },
    { part: 'Phần III · Câu 2', t: 'short', lv: 1, pt: 0.5, q: 'Trong vòng lặp phản hồi, bộ phận thực hiện lệnh (bật bơm, bật đèn) gọi là cơ cấu gì?', a: ['chấp hành', 'cơ cấu chấp hành', 'chap hanh'] },
    { part: 'Phần III · Câu 3', t: 'order', lv: 2, pt: 0.5, q: 'Sắp xếp vòng lặp phản hồi của hệ thống tự tưới cây.', items: ['Đất khô', 'Cảm biến độ ẩm phát hiện', 'Mạch điều khiển xử lí', 'Bật máy bơm tưới', 'Đất đủ ẩm, cảm biến báo về, tắt bơm'] },
    { part: 'Phần IV · Tự luận', t: 'essay', lv: 3, pt: 2.5, q: 'Với ngân sách không quá 40 000 đồng, em hãy đề xuất cách làm mô hình ngôi nhà ven biển mát mẻ, đủ sáng (vật liệu, cách lấy sáng, thông gió) và giải thích.', kw: [['tai che', 'bia', 'tre', 'que kem', 'hop'], ['mica', 'ni long', 'kinh', 'gieng troi', 'cua so', 'lay sang'], ['thong gio', 'doi luu', 'thap', 'cao', 'o thoang'], ['cay', 'bong mat']], kwn: ['Vật liệu rẻ, tái chế', 'Lấy sáng', 'Thông gió đối lưu', 'Cây xanh'], model: 'Em dùng hộp bìa và que kem tái chế làm khung nhà (gần như không tốn tiền), mua tấm mica trong khoảng 15 000 đồng làm giếng trời lấy sáng. Cửa đón gió đặt thấp hướng ra biển, ô thoát khí nóng đặt cao gần mái để không khí đối lưu. Xung quanh trồng cây xanh tạo bóng mát. Tổng chi phí khoảng 30 000 đồng.' }
  ],
  tasks: ['Vẽ sơ đồ vòng lặp phản hồi cho hệ thống tưới cây hoặc đèn hành lang.', 'Quan sát nhà em: chỉ ra chỗ lấy sáng và thông gió tự nhiên.', 'Lập bảng dự toán chi phí mô hình ngôi nhà (không quá 40 000 đồng).'] }
];
