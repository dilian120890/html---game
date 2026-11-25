/* Công nghệ 7 · Kết nối tri thức · Ôn tập học kì 1 — "Nông trại xanh của Hà" */
const APP = {
  id: 'cn7', name: 'Nông trại xanh của Hà', sub: 'Ôn tập Công nghệ 7 · Học kì 1',
  school: 'thcs', bilingual: false,
  hero: '00_1', finale: '00_6', mascot: 'ha_1',
  poses: { hi: 'ha_1', think: 'ha_5', good: 'ha_2', try: 'ha_6', win: 'ha_4' },
  theme: { main: '#3A9A3F', 'main-d': '#2A7430', soft: '#E1F3DC', accent: '#E08A1E' },
  intro: 'Chào bạn! Mình là <b>Hà</b>, nhà khoa học nông nghiệp trẻ. Mảnh đất bên suối đang chờ chúng mình biến thành <b>nông trại xanh công nghệ cao</b>. Mỗi chặng có 4 bước: <b>đọc kiến thức cần nhớ</b>, <b>hoàn thành sơ đồ tư duy</b>, <b>làm câu hỏi ôn tập</b> theo dạng đề kiểm tra và <b>vận dụng</b>. Cùng mình làm nông trại nhé!'
};
const TOPICS = [
  { name: 'Chương 1 · Trồng trọt', color: '#3A9A3F', soft: '#E1F3DC' },
  { name: 'Chương 2 · Lâm nghiệp', color: '#1F7A5A', soft: '#D9F0E6' },
  { name: 'Ôn tập giữa học kì 1', color: '#E08A1E', soft: '#FFF0D6' }
];
const STAGES = [
/* ───── 1 ───── */
{ n: 1, t: 0, title: 'Giới thiệu về trồng trọt', cover: '01_1', sticker: 'farm_6',
  recall: [
    { img: '01_1', t: '**Vai trò của trồng trọt:** cung cấp **lương thực, thực phẩm** cho con người; **thức ăn** cho chăn nuôi; **nguyên liệu** cho chế biến, công nghiệp; nông sản để **xuất khẩu**; tạo việc làm, bảo vệ môi trường.' },
    { img: '01_2_1', fit: true, more: ['01_2_2', '01_2_3'], t: '**Cây lương thực:** lúa, ngô, khoai lang, sắn… **Cây rau:** bắp cải, cà chua, rau muống…' },
    { img: '01_2_8', fit: true, more: ['01_2_9', '01_2_10', '01_2_6', '01_2_7', '01_2_11'], t: '**Cây công nghiệp:** cà phê, chè, cao su, hồ tiêu… **Cây ăn quả:** xoài, thanh long, cam… **Cây hoa, cây cảnh:** hoa cúc, hoa hồng…' },
    { img: 'farm_12', fit: true, more: ['farm_11'], t: '**Phương thức trồng trọt:** **ngoài tự nhiên** (chi phí thấp nhưng phụ thuộc thời tiết) và **trong nhà có mái che** (nhà kính, nhà lưới: chủ động điều kiện, năng suất cao, ít sâu bệnh, chi phí đầu tư lớn).' },
    { img: 'ha_3', fit: true, t: '**Trồng trọt công nghệ cao:** thuỷ canh, khí canh, **tưới nhỏ giọt tự động**, cảm biến, drone phun thuốc, IoT. **Ngành nghề:** kĩ sư trồng trọt, kĩ sư bảo vệ thực vật, kĩ sư chọn tạo giống cây trồng.' }
  ],
  keys: ['Vai trò: lương thực, thực phẩm; thức ăn chăn nuôi; nguyên liệu chế biến; xuất khẩu.', 'Nhóm cây: lương thực, rau, công nghiệp, ăn quả, hoa – cây cảnh.', 'Phương thức: ngoài tự nhiên và trong nhà có mái che.'],
  mind: { center: 'Trồng trọt ở Việt Nam', img: '01_1', extra: ['chỉ trồng lúa', 'giảm việc làm'], branches: [
    { label: 'Vai trò', color: '#3A9A3F', img: '01_2_1', items: ['Cung cấp {{lương thực}}, thực phẩm', 'Thức ăn cho {{chăn nuôi}}', 'Nguyên liệu, nông sản {{xuất khẩu}}'] },
    { label: 'Nhóm cây trồng', color: '#E08A1E', img: '01_2_8', items: ['Lương thực: lúa, {{ngô}}', 'Công nghiệp: {{cà phê}}, chè, cao su', 'Ăn quả, rau, {{hoa}}'] },
    { label: 'Phương thức', color: '#2F8FD8', img: 'farm_12', items: ['Ngoài {{tự nhiên}}', 'Trong {{nhà có mái che}}'] },
    { label: 'Ngành nghề', color: '#7A4CC2', img: 'ha_2', items: ['Kĩ sư {{trồng trọt}}', 'Kĩ sư {{bảo vệ thực vật}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Vai trò nào sau đây KHÔNG phải của trồng trọt?', o: ['Cung cấp sắt thép cho xây dựng', 'Cung cấp lương thực, thực phẩm', 'Cung cấp thức ăn cho chăn nuôi', 'Cung cấp nông sản để xuất khẩu'], a: 0 },
    { t: 'sort', lv: 1, q: 'Xếp các cây trồng vào nhóm phù hợp.', bins: ['Cây lương thực', 'Cây công nghiệp', 'Cây ăn quả'], items: [[['01_2_1', 'Lúa'], 0], [['01_2_2', 'Ngô'], 0], [['01_2_8', 'Cà phê'], 1], [['01_2_10', 'Cao su'], 1], [['01_2_6', 'Xoài'], 2], [['01_2_7', 'Thanh long'], 2]] },
    { t: 'mcq', lv: 1, img: 'farm_12', q: 'Phương thức trồng trọt trong hình là gì?', o: ['Trồng trọt trong nhà có mái che', 'Trồng trọt ngoài tự nhiên', 'Trồng rừng', 'Chăn nuôi'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Công việc chính của kĩ sư bảo vệ thực vật là gì?', o: ['Phòng trừ sâu bệnh, bảo vệ cây trồng', 'Thiết kế nhà ở', 'Chăm sóc vật nuôi', 'Sửa chữa máy tính'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Trồng trọt trong nhà có mái che giúp chủ động điều kiện sống của cây.', true], ['Trồng trọt ngoài tự nhiên không phụ thuộc thời tiết.', false], ['Cà phê, chè, cao su thuộc nhóm cây công nghiệp.', true], ['Tưới nhỏ giọt tự động là ứng dụng công nghệ cao.', true]] },
    { t: 'mcq', lv: 2, q: 'Ưu điểm nổi bật của trồng trọt trong nhà kính là gì?', o: ['Hạn chế sâu bệnh, cho năng suất cao, chủ động thời vụ', 'Chi phí đầu tư rất thấp', 'Không cần chăm sóc', 'Không cần nước tưới'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Nhược điểm của trồng trọt ngoài tự nhiên là gì?', o: ['Phụ thuộc thời tiết, khó kiểm soát sâu bệnh', 'Chi phí đầu tư rất lớn', 'Cần nhiều máy móc hiện đại', 'Không trồng được lúa'], a: 0 },
    { t: 'short', lv: 2, q: 'Phương pháp trồng cây không dùng đất, rễ cây đặt trong dung dịch dinh dưỡng gọi là gì?', a: ['thuỷ canh', 'thủy canh', 'thuy canh'] },
    { t: 'mcq', lv: 3, ctx: 'Một gia đình ở Đà Lạt muốn trồng rau sạch quanh năm, năng suất cao, bán cho siêu thị.', q: 'Phương án nào phù hợp nhất?', o: ['Trồng trong nhà kính, tưới nhỏ giọt, theo dõi bằng cảm biến', 'Trồng ngoài trời, phun thật nhiều thuốc trừ sâu', 'Chỉ trồng một vụ mỗi năm', 'Không bón phân'], a: 0 },
    { t: 'essay', lv: 3, q: 'Em có thích nghề kĩ sư trồng trọt không? Nêu 2 phẩm chất hoặc năng lực cần có của người làm nghề này.', kw: [['yeu', 'thich', 'dam me', 'khong thich'], ['cham chi', 'kien tri', 'chiu kho', 'suc khoe', 'kien thuc', 'trach nhiem', 'cong nghe', 'yeu thien nhien']], kwn: ['Nêu ý thích', 'Phẩm chất, năng lực'], model: 'Em thích nghề kĩ sư trồng trọt vì muốn làm ra nông sản sạch. Người làm nghề cần yêu thiên nhiên, chăm chỉ, chịu khó, có kiến thức về cây trồng và biết ứng dụng công nghệ.' }
  ],
  tasks: ['Kể tên 5 cây trồng ở địa phương em và xếp vào nhóm.', 'Tìm hiểu một mô hình trồng trọt công nghệ cao ở Việt Nam.', 'Phỏng vấn một người làm nghề trồng trọt về công việc của họ.'] },
/* ───── 2 ───── */
{ n: 2, t: 0, title: 'Làm đất, bón phân lót và đất trồng', cover: '02_1_1', sticker: 'farm_3',
  recall: [
    { img: '02_2_8', fit: true, more: ['02_2_9'], t: '**Đất trồng tốt** phải **tơi xốp** (giữ nước, chứa nhiều **không khí – oxy** cho rễ hô hấp), giàu chất dinh dưỡng, có độ **pH phù hợp** (đa số cây ưa pH khoảng **6,0–6,5**). Đất chai cứng, nứt nẻ làm rễ khó phát triển.' },
    { img: '02_1_1', t: '**Làm đất** gồm: **cày đất** (xáo trộn lớp đất mặt, làm đất tơi xốp, vùi cỏ dại), **bừa/đập đất** (làm nhỏ đất, san phẳng), **lên luống** (dễ chăm sóc, chống ngập úng).' },
    { img: '02_1_2', more: ['02_1_3'], t: 'Mục đích làm đất: làm **đất tơi xốp**, tăng khả năng giữ nước và chất dinh dưỡng, **diệt cỏ dại**, mầm sâu bệnh, tạo điều kiện cho **rễ cây phát triển**.' },
    { img: '02_1_4', more: ['02_2_6', '02_2_7'], t: '**Bón phân lót:** bón **trước khi gieo trồng**, chủ yếu dùng **phân hữu cơ** (phân chuồng, phân xanh) và phân lân. Rải phân theo hốc hoặc theo hàng rồi lấp đất.' },
    { img: '🧪', fit: true, t: '**Phân đa lượng** (N, P, K) cây cần nhiều. **Phân vi lượng** (sắt Fe, kẽm Zn, bo B, đồng Cu…) cây cần ít nhưng **không thể thiếu**. (Magie Mg, canxi Ca, lưu huỳnh S là **trung lượng**.) Thiếu vi lượng lá **vàng nhưng gân còn xanh** do cây không tổng hợp được **diệp lục**. Đất có pH quá chua hoặc quá kiềm sẽ **khoá vi lượng**, rễ không hút được.' },
    { img: '02_2_4', fit: true, more: ['02_2_1', '02_2_2', '02_2_3', '02_2_5'], t: '**Dụng cụ, máy móc:** cuốc, xẻng, cào; trâu bò kéo cày; **máy xới, máy cày** giúp làm đất nhanh, giảm sức lao động.' }
  ],
  keys: ['Làm đất: cày → bừa, đập đất → lên luống; giúp đất tơi xốp, diệt cỏ dại.', 'Bón lót: trước khi gieo trồng, dùng phân hữu cơ, phân lân.', 'Thiếu vi lượng (Fe, Zn): lá vàng gân xanh; pH lệch làm khoá vi lượng.'],
  mind: { center: 'Chuẩn bị đất trồng', img: '02_2_8', extra: ['nén chặt đất', 'sau thu hoạch'], branches: [
    { label: 'Đất tốt', color: '#8B5E3C', img: '02_2_8', items: ['{{Tơi xốp}}, có oxy cho rễ', 'pH khoảng {{6,0–6,5}}'] },
    { label: 'Làm đất', color: '#3A9A3F', img: '02_1_1', items: ['{{Cày}} đất', '{{Bừa}}, đập đất', 'Lên {{luống}}'] },
    { label: 'Bón lót', color: '#E08A1E', img: '02_1_4', items: ['Bón {{trước khi}} gieo trồng', 'Dùng phân {{hữu cơ}}, phân lân'] },
    { label: 'Vi lượng', color: '#C0398B', img: '🧪', items: ['Sắt, {{kẽm}}, bo', 'Thiếu: lá vàng, {{gân xanh}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Vì sao đất trồng cần tơi xốp?', o: ['Để giữ nước và chứa nhiều không khí (oxy) cho rễ hô hấp', 'Để đất nặng hơn', 'Để cây không cần tưới nước', 'Để cỏ dại mọc nhiều'], a: 0 },
    { t: 'order', lv: 1, q: 'Sắp xếp các công việc làm đất theo thứ tự.', items: [['02_1_1', 'Cày đất'], ['02_1_2', 'Bừa, đập đất cho nhỏ'], ['02_1_3', 'Lên luống'], ['02_1_4', 'Bón phân lót']] },
    { t: 'mcq', lv: 1, q: 'Bón phân lót được thực hiện vào thời điểm nào?', o: ['Trước khi gieo trồng', 'Khi cây ra hoa', 'Sau khi thu hoạch', 'Khi cây bị sâu'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Loại phân thường dùng để bón lót là:', o: ['Phân hữu cơ (phân chuồng, phân xanh)', 'Thuốc trừ sâu', 'Chất kích thích ra hoa', 'Nước vôi'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Lên luống có tác dụng gì?', o: ['Dễ chăm sóc, chống ngập úng, tăng bề dày lớp đất trồng', 'Làm đất chai cứng hơn', 'Giảm năng suất', 'Để trâu bò dễ đi lại'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Cây có biểu hiện lá vàng nhưng gân lá vẫn còn xanh. Nguyên nhân thường gặp là gì?', o: ['Thiếu phân vi lượng (sắt, kẽm) nên không tổng hợp đủ diệp lục', 'Thừa nước tưới', 'Thừa ánh sáng', 'Bị gió thổi mạnh'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Cày đất giúp vùi lấp cỏ dại, làm đất tơi xốp.', true], ['Phân vi lượng cây cần ít nên có thể bỏ qua hoàn toàn.', false], ['Đất quá chua hoặc quá kiềm làm rễ khó hút vi lượng.', true], ['Máy xới giúp giảm sức lao động khi làm đất.', true]] },
    { t: 'short', lv: 2, q: 'Sắt, kẽm thuộc nhóm phân bón nào (đa lượng hay vi lượng)?', a: ['vi lượng', 'vi luong', 'phân vi lượng'] },
    { t: 'mcq', lv: 3, ctx: 'Đất vườn nhà Hà chai cứng, nước tưới đọng trên mặt, rễ cây kém phát triển.', q: 'Biện pháp cải tạo nào phù hợp nhất?', o: ['Xới đất, trộn thêm phân hữu cơ, trấu hun để đất tơi xốp', 'Nén chặt đất hơn nữa', 'Tưới thật nhiều nước', 'Bón nhiều phân hoá học một lúc'], a: 0 },
    { t: 'essay', lv: 3, q: 'Luống cà chua nhà Hà có lá non vàng, gân lá vẫn xanh; đo pH đất thấy 4,5. Hãy chẩn đoán nguyên nhân và đề xuất 2 bước khắc phục.', kw: [['vi luong', 'sat', 'kem', 'magie', 'fe', 'zn', 'mg'], ['ph', 'chua', 'khoa'], ['phun', 'phan bon la'], ['voi', '6', 'huu co', 'vi sinh']], kwn: ['Thiếu vi lượng', 'pH quá chua khoá vi lượng', 'Phun phân bón lá vi lượng', 'Bón vôi, phân hữu cơ đưa pH về 6,0–6,5'], model: 'Chẩn đoán: cây thiếu vi lượng (sắt, kẽm) nên không tổng hợp được diệp lục. Nguyên nhân sâu xa là đất quá chua (pH 4,5) đã khoá vi lượng, rễ không hút được.\nBước 1: Phun phân bón lá có vi lượng để cây hấp thu nhanh qua lá.\nBước 2: Bón vôi và phân hữu cơ vi sinh để điều chỉnh pH đất về khoảng 6,0–6,5.' }
  ],
  tasks: ['Quan sát đất vườn nhà em: tơi xốp hay chai cứng?', 'Thử đo pH đất bằng giấy quỳ (nếu có) cùng thầy cô.', 'Ủ phân hữu cơ từ vỏ rau, lá cây.'] },
/* ───── 3 ───── */
{ n: 3, t: 0, title: 'Gieo trồng, chăm sóc và phòng trừ sâu bệnh', cover: '03_1', sticker: 'farm_4',
  recall: [
    { img: '03_2_1', fit: true, more: ['03_2_2'], t: '**Gieo trồng:** gieo **đúng thời vụ**, đúng **mật độ, khoảng cách**, độ nông sâu phù hợp. Có thể **gieo hạt** hoặc **trồng cây con**.' },
    { img: '03_2_5', fit: true, more: ['03_2_6'], t: '**Chăm sóc:** **tỉa, dặm** cây (bỏ cây yếu, trồng bù chỗ thiếu); **làm cỏ, vun xới**; tưới nước; **bón thúc** (bón khi cây đang sinh trưởng).' },
    { img: '03_2_3', fit: true, more: ['03_2_4'], t: '**Tưới nước:** tưới **nhỏ giọt** (tiết kiệm nước), **phun mưa**, tưới thấm, tưới tràn. Ứng dụng tưới tự động theo cảm biến độ ẩm.' },
    { img: '03_2_10', fit: true, more: ['03_2_9', '03_2_11'], t: '**Sâu bệnh hại** làm cây sinh trưởng kém, giảm **năng suất và chất lượng**. Dấu hiệu: lá thủng, lá vàng úa, đốm, thối, côn trùng bám.' },
    { img: '03_2_7', fit: true, more: ['03_2_8', '03_2_12'], t: '**Phòng trừ sâu bệnh:** **phòng là chính**; biện pháp **canh tác** (vệ sinh đồng ruộng, luân canh), **thủ công** (bắt sâu, ngắt lá), **sinh học** (thiên địch, chế phẩm sinh học), **hoá học** (thuốc, chỉ dùng khi cần, đúng **4 đúng**, mặc **đồ bảo hộ**), bẫy đèn.' }
  ],
  keys: ['Gieo trồng: đúng thời vụ, mật độ, khoảng cách.', 'Chăm sóc: tỉa dặm, làm cỏ vun xới, tưới nước, bón thúc.', 'Phòng trừ sâu bệnh: phòng là chính; ưu tiên biện pháp canh tác, thủ công, sinh học; hoá học là cuối cùng.'],
  mind: { center: 'Gieo trồng và chăm sóc', img: '03_1', extra: ['phun thuốc liên tục', 'tưới tràn mãi'], branches: [
    { label: 'Gieo trồng', color: '#3A9A3F', img: '03_2_1', items: ['Đúng {{thời vụ}}', 'Đúng {{mật độ}}, khoảng cách'] },
    { label: 'Chăm sóc', color: '#E08A1E', img: '03_2_6', items: ['{{Tỉa}}, dặm cây', 'Làm cỏ, {{vun xới}}', 'Bón {{thúc}}'] },
    { label: 'Tưới nước', color: '#2F8FD8', img: '03_2_3', items: ['Tưới {{nhỏ giọt}} tiết kiệm nước', 'Phun mưa, tưới thấm'] },
    { label: 'Phòng trừ sâu bệnh', color: '#E0533D', img: '03_2_7', items: ['{{Phòng}} là chính', 'Sinh học: dùng {{thiên địch}}', 'Hoá học: mặc đồ {{bảo hộ}}'] }
  ] },
  q: [
    { t: 'match', lv: 1, q: 'Nối hình với công việc chăm sóc cây trồng.', pairs: [[['03_2_3', ''], 'Tưới nhỏ giọt'], [['03_2_6', ''], 'Vun xới'], [['03_2_7', ''], 'Bắt sâu bằng tay'], [['03_2_8', ''], 'Bẫy đèn bắt côn trùng']] },
    { t: 'mcq', lv: 1, q: 'Bón thúc là bón phân vào thời điểm nào?', o: ['Khi cây đang sinh trưởng, phát triển', 'Trước khi gieo trồng', 'Sau khi thu hoạch', 'Khi làm đất'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Nguyên tắc phòng trừ sâu bệnh hại cây trồng là:', o: ['Phòng là chính', 'Chỉ dùng thuốc hoá học', 'Đợi cây chết mới xử lí', 'Không cần phòng trừ'], a: 0 },
    { t: 'sort', lv: 2, q: 'Xếp các việc làm vào nhóm biện pháp phòng trừ sâu bệnh.', bins: ['Thủ công', 'Sinh học', 'Hoá học'], items: [['Bắt sâu, ngắt bỏ lá bệnh', 0], ['Dùng bẫy đèn', 0], ['Nuôi ong mắt đỏ diệt sâu', 1], ['Dùng chế phẩm vi sinh', 1], [['03_2_12', 'Phun thuốc trừ sâu'], 2]] },
    { t: 'mcq', lv: 2, q: 'Tưới nhỏ giọt có ưu điểm gì?', o: ['Tiết kiệm nước, cung cấp nước đều đến gốc cây', 'Tốn nhiều nước nhất', 'Làm ngập úng ruộng', 'Rửa trôi phân bón'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Tỉa bỏ cây yếu, dặm cây vào chỗ thiếu giúp đảm bảo mật độ.', true], ['Khi phun thuốc trừ sâu không cần đeo khẩu trang.', false], ['Luân canh giúp hạn chế sâu bệnh.', true], ['Thuốc hoá học nên dùng thường xuyên kể cả khi không có sâu.', false]] },
    { t: 'mcq', lv: 2, img: '03_2_10', q: 'Lá cây như trong hình là dấu hiệu của:', o: ['Cây bị sâu hại ăn lá', 'Cây thừa phân', 'Cây thiếu ánh sáng', 'Cây vừa được tưới'], a: 0 },
    { t: 'short', lv: 3, q: 'Dùng sinh vật có ích (ong mắt đỏ, bọ rùa…) để tiêu diệt sâu hại thuộc biện pháp phòng trừ nào?', a: ['sinh học', 'sinh hoc', 'biện pháp sinh học'] },
    { t: 'mcq', lv: 3, ctx: 'Ruộng rau của Hà có vài cây bị sâu xanh ăn lá, số lượng sâu còn ít.', q: 'Hà nên ưu tiên làm gì?', o: ['Bắt sâu bằng tay, ngắt bỏ lá bị hại, theo dõi thường xuyên', 'Phun thuốc hoá học liều cao cho cả ruộng', 'Nhổ bỏ cả ruộng rau', 'Mặc kệ'], a: 0 },
    { t: 'essay', lv: 3, q: 'Nêu các biện pháp phòng trừ sâu bệnh an toàn khi trồng rau ở nhà và giải thích vì sao nên hạn chế thuốc hoá học.', kw: [['bat sau', 'thu cong', 'ngat'], ['sinh hoc', 'thien dich', 'che pham'], ['ve sinh', 'luan canh', 'giong khoe'], ['o nhiem', 'doc', 'suc khoe', 'moi truong', 'ton du']], kwn: ['Thủ công', 'Sinh học', 'Canh tác', 'Tác hại thuốc hoá học'], model: 'Em vệ sinh vườn, chọn giống khoẻ, luân canh; bắt sâu, ngắt lá bệnh bằng tay; dùng chế phẩm sinh học hoặc thiên địch. Hạn chế thuốc hoá học vì thuốc độc hại cho người, gây ô nhiễm môi trường, tồn dư trên rau và giết cả sinh vật có ích.' }
  ],
  tasks: ['Lập lịch chăm sóc (tưới, làm cỏ, bón thúc) cho một luống rau.', 'Làm bẫy dính màu vàng bắt côn trùng từ bìa nhựa.', 'Quan sát và ghi lại dấu hiệu sâu bệnh trên cây ở vườn trường.'] },
/* ───── 4 ───── */
{ n: 4, t: 0, title: 'Thu hoạch sản phẩm trồng trọt', cover: '04_1_7', sticker: 'farm_1',
  recall: [
    { img: '04_1_1', fit: true, t: '**Yêu cầu khi thu hoạch:** thu **đúng thời điểm** (đúng độ chín), **nhanh gọn**, **cẩn thận** để sản phẩm không dập nát, giữ được chất lượng.' },
    { img: '04_1_1', fit: true, more: ['04_1_9', '04_1_2'], t: '**Hái:** dùng cho quả (cam, xoài, cà chua), rau ăn lá, chè.' },
    { img: '04_1_3', fit: true, more: ['04_1_4'], t: '**Nhổ:** dùng cho cây có củ nằm nông, đất tơi: lạc, cà rốt, su hào.' },
    { img: '04_1_5', fit: true, t: '**Đào:** dùng cho cây có củ nằm sâu trong đất: khoai lang, sắn, khoai tây.' },
    { img: '04_1_6', fit: true, more: ['04_1_7', '04_1_8'], t: '**Cắt:** dùng cho lúa, rau cải, bắp cải. Hiện nay dùng **máy gặt đập liên hợp** giúp thu hoạch lúa nhanh, giảm hao hụt.' }
  ],
  keys: ['Thu hoạch đúng thời điểm, nhanh gọn, cẩn thận.', '4 phương pháp: hái – nhổ – đào – cắt.', 'Cơ giới hoá thu hoạch: máy gặt đập liên hợp.'],
  mind: { center: 'Thu hoạch sản phẩm trồng trọt', img: '04_1_7', extra: ['xay', 'thu sớm thật sớm'], branches: [
    { label: 'Yêu cầu', color: '#3A9A3F', img: '04_1_1', items: ['Đúng {{thời điểm}}', 'Nhanh gọn, {{cẩn thận}}'] },
    { label: 'Phương pháp', color: '#E08A1E', img: '04_1_5', items: ['{{Hái}}: quả, chè', '{{Nhổ}}: lạc, cà rốt', '{{Đào}}: khoai lang, sắn', '{{Cắt}}: lúa, rau cải'] },
    { label: 'Cơ giới hoá', color: '#2F8FD8', img: '04_1_7', items: ['Máy {{gặt đập}} liên hợp'] }
  ] },
  q: [
    { t: 'match', lv: 1, q: 'Nối cây trồng với phương pháp thu hoạch phù hợp.', pairs: [[['04_1_1', 'Cam'], 'Hái'], [['04_1_3', 'Lạc'], 'Nhổ'], [['04_1_5', 'Khoai lang'], 'Đào'], [['04_1_6', 'Lúa'], 'Cắt']] },
    { t: 'mcq', lv: 1, q: 'Yêu cầu chung khi thu hoạch sản phẩm trồng trọt là gì?', o: ['Đúng thời điểm, nhanh gọn, cẩn thận', 'Càng sớm càng tốt', 'Thu hoạch khi trời mưa', 'Không cần dụng cụ'], a: 0 },
    { t: 'mcq', lv: 1, img: '04_1_7', q: 'Máy trong hình dùng để làm gì?', o: ['Gặt và tách hạt lúa', 'Cày đất', 'Phun thuốc', 'Tưới nước'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Vì sao khoai lang, sắn phải thu hoạch bằng cách đào?', o: ['Vì củ nằm sâu trong đất, nhổ dễ gãy củ', 'Vì củ nằm trên ngọn cây', 'Vì lá rất to', 'Vì thân cây có gai'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Thu hoạch quá sớm làm giảm năng suất và chất lượng.', true], ['Quả nên được ném mạnh vào sọt cho nhanh.', false], ['Lúa có thể thu hoạch bằng máy gặt đập liên hợp.', true], ['Lạc thường được thu hoạch bằng cách hái.', false]] },
    { t: 'mcq', lv: 2, q: 'Thu hoạch rau cải bắp nên dùng phương pháp nào?', o: ['Cắt', 'Đào', 'Nhổ cả rễ rồi đào', 'Hái từng lá'], a: 0 },
    { t: 'short', lv: 2, q: 'Phương pháp thu hoạch dùng cho cà rốt, lạc, su hào là gì?', a: ['nhổ', 'nho'] },
    { t: 'mcq', lv: 3, ctx: 'Gia đình Hà trồng 2 ha lúa, sắp đến mùa mưa bão.', q: 'Giải pháp thu hoạch nào hợp lí?', o: ['Thuê máy gặt đập liên hợp, thu nhanh khi lúa chín, trước khi mưa bão', 'Đợi sau bão mới thu', 'Cắt dần bằng liềm trong 2 tháng', 'Thu khi lúa còn xanh'], a: 0 },
    { t: 'essay', lv: 3, q: 'Vì sao phải thu hoạch đúng thời điểm? Nêu ví dụ.', kw: [['nang suat', 'chat luong'], ['som', 'muon', 'chin', 'xanh', 'hong', 'nay mam', 'rung']], kwn: ['Đảm bảo năng suất, chất lượng', 'Ví dụ thu sớm/muộn'], model: 'Thu hoạch đúng thời điểm giúp sản phẩm đạt năng suất và chất lượng cao nhất. Ví dụ: lúa thu sớm hạt lép, thu muộn hạt rụng hoặc nảy mầm; quả thu muộn bị chín nẫu, hỏng.' }
  ],
  tasks: ['Cùng người lớn thu hoạch một loại rau, quả ở nhà đúng cách.', 'Lập bảng: tên cây – phương pháp thu hoạch – dụng cụ.', 'Tìm hiểu cách bảo quản nông sản sau thu hoạch ở địa phương.'] },
/* ───── 5 ───── */
{ n: 5, t: 0, title: 'Nhân giống vô tính cây trồng', cover: '05_1_3', sticker: 'farm_11',
  recall: [
    { img: '05_2_6', fit: true, t: '**Nhân giống vô tính** tạo cây mới từ **một phần của cây mẹ** (cành, lá, thân, rễ). Cây con **giữ được đặc tính tốt** của cây mẹ, nhanh ra hoa, quả. Gồm: **giâm cành**, **chiết cành**, **ghép**, nuôi cấy mô.' },
    { img: '05_1_1', fit: true, t: '**Giâm cành – B1:** chọn cành bánh tẻ (không quá non, không quá già), **cắt vát 45°** dài 5–10 cm. Cắt vát giúp **tăng diện tích tiếp xúc** để ra nhiều rễ, dễ cắm vào đất.' },
    { img: '05_1_2', fit: true, t: '**B2:** nhúng gốc cành vào **chất kích thích ra rễ** (nhóm **Auxin** như **IBA, NAA**) giúp cành ra rễ nhanh, nhiều.' },
    { img: '05_1_3', fit: true, more: ['05_1_4'], t: '**B3:** cắm cành vào giá thể ẩm (nghiêng). **B4:** **che nắng**, **phun sương** giữ ẩm để cành không bị héo.' },
    { img: '05_2_2', fit: true, more: ['05_2_1', '05_2_3'], t: '**Chiết cành:** khoanh vỏ, bó **bầu đất** quanh vết khoanh; khi rễ mọc kín bầu thì cắt cành đem trồng.' },
    { img: '05_2_5', fit: true, more: ['05_2_4', '05_2_9'], t: '**Ghép:** gắn mắt ghép hoặc cành ghép của cây tốt lên **gốc ghép** khoẻ, quấn chặt bằng dây nilon.' }
  ],
  keys: ['Vô tính: cây con giữ đặc tính cây mẹ.', 'Giâm cành: cắt vát 45° → nhúng Auxin (IBA, NAA) → cắm vào giá thể → che nắng, phun sương.', 'Chiết cành: khoanh vỏ, bó bầu đất. Ghép: gắn mắt/cành ghép lên gốc ghép.'],
  mind: { center: 'Nhân giống vô tính', img: '05_1_3', extra: ['gieo hạt', 'cắt ngang'], branches: [
    { label: 'Giâm cành', color: '#3A9A3F', img: '05_1_1', items: ['Cắt vát {{45°}}', 'Nhúng chất kích rễ {{Auxin}}', 'Che nắng, {{phun sương}}'] },
    { label: 'Chiết cành', color: '#8B5E3C', img: '05_2_2', items: ['{{Khoanh vỏ}} cành', 'Bó {{bầu đất}}'] },
    { label: 'Ghép', color: '#2F8FD8', img: '05_2_5', items: ['Gắn mắt ghép lên {{gốc ghép}}'] },
    { label: 'Ưu điểm', color: '#E08A1E', img: '05_2_6', items: ['Giữ {{đặc tính}} cây mẹ', 'Nhanh ra {{hoa}}, quả'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Khi giâm cành, vì sao nên cắt vát gốc cành khoảng 45°?', o: ['Tăng diện tích tiếp xúc để cành ra nhiều rễ, dễ cắm vào đất', 'Để cành đẹp hơn', 'Để cành không cần tưới', 'Để cành nhanh héo'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Chất kích thích ra rễ dùng trong giâm cành thuộc nhóm nào?', o: ['Auxin (IBA, NAA)', 'Thuốc trừ sâu', 'Phân đạm', 'Vôi bột'], a: 0 },
    { t: 'order', lv: 1, q: 'Sắp xếp các bước giâm cành.', items: [['05_1_1', 'Cắt vát cành bánh tẻ'], ['05_1_2', 'Nhúng gốc vào chất kích thích ra rễ'], ['05_1_3', 'Cắm cành vào giá thể'], ['05_1_4', 'Che nắng, phun sương giữ ẩm']] },
    { t: 'match', lv: 1, q: 'Nối hình với phương pháp nhân giống.', pairs: [[['05_2_2', ''], 'Chiết cành (bó bầu)'], [['05_2_5', ''], 'Ghép'], [['05_1_3', ''], 'Giâm cành'], [['05_2_6', ''], 'Cành ra rễ trong nước']] },
    { t: 'mcq', lv: 2, q: 'Ưu điểm của nhân giống vô tính là gì?', o: ['Cây con giữ được đặc tính tốt của cây mẹ, nhanh ra hoa quả', 'Cây con khác hẳn cây mẹ', 'Cần rất nhiều hạt giống', 'Cây sống rất lâu mới ra quả'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Nên chọn cành bánh tẻ để giâm.', true], ['Sau khi giâm cần để cành dưới nắng gắt cho nhanh ra rễ.', false], ['Phun sương giúp cành giâm không bị mất nước, héo.', true], ['Chiết cành phải khoanh vỏ trước khi bó bầu.', true]] },
    { t: 'mcq', lv: 2, q: 'Vì sao sau khi giâm cành phải che nắng và phun sương?', o: ['Cành chưa có rễ, cần giảm thoát hơi nước để không bị héo', 'Để cành mau ra hoa', 'Để diệt sâu', 'Để cành mọc lá to'], a: 0 },
    { t: 'short', lv: 3, q: 'Cành giâm nên được cắt vát một góc khoảng bao nhiêu độ?', a: ['45', '45 độ', '45°'] },
    { t: 'mcq', lv: 3, ctx: 'Hà giâm 20 cành hoa hồng nhưng sau 1 tuần nhiều cành bị héo, thối gốc. Hà cắt ngang gốc, cắm vào đất sũng nước và để ngoài nắng.', q: 'Hà cần điều chỉnh gì?', o: ['Cắt vát 45°, nhúng Auxin, dùng giá thể tơi thoáng vừa ẩm, che nắng và phun sương', 'Tưới nhiều nước hơn nữa', 'Cắm sâu hết cả cành xuống đất', 'Để ngoài nắng lâu hơn'], a: 0 },
    { t: 'essay', lv: 3, q: 'Trình bày quy trình giâm cành và giải thích ý nghĩa của 2 thao tác: cắt vát 45° và nhúng chất kích thích ra rễ.', kw: [['cat vat', '45'], ['auxin', 'kich thich', 'iba', 'naa'], ['gia the', 'cam'], ['che nang', 'phun suong', 'giu am'], ['dien tich', 'tiep xuc', 'nhanh', 'nhieu re']], kwn: ['Cắt vát', 'Nhúng Auxin', 'Cắm vào giá thể', 'Che nắng, giữ ẩm', 'Giải thích'], model: 'B1: Cắt vát 45° cành bánh tẻ dài 5–10 cm. B2: Nhúng gốc vào chất kích thích ra rễ (Auxin: IBA, NAA). B3: Cắm cành vào giá thể ẩm. B4: Che nắng, phun sương giữ ẩm.\nCắt vát làm tăng diện tích tiếp xúc nên cành ra nhiều rễ, dễ cắm. Auxin kích thích tế bào phân chia tạo rễ nhanh và nhiều hơn.' }
  ],
  tasks: ['Thực hành giâm cành rau muống, hoa hồng hoặc cây lưỡi hổ.', 'Ghi nhật kí theo dõi số ngày cành ra rễ.', 'So sánh cành có nhúng và không nhúng chất kích thích (nếu có).'] },
/* ───── 6 ───── */
{ n: 6, t: 1, title: 'Rừng ở Việt Nam và trồng, bảo vệ rừng', cover: 'r3_2', sticker: 'farm_10',
  recall: [
    { img: 'r9_1', fit: true, more: ['r9_2', 'r9_3', 'r9_4'], t: '**Vai trò của rừng:** **điều hoà không khí**, cung cấp oxy; **chống xói mòn, lũ lụt**, chắn gió, chắn sóng; là nơi sống của **động vật**; cung cấp **gỗ, lâm sản**; phục vụ du lịch, nghiên cứu.' },
    { img: 'r3_1', fit: true, more: ['r3_2', 'r3_3'], t: '**Các loại rừng:** **Rừng phòng hộ** (đầu nguồn, ven biển: chắn gió, chống xói mòn); **Rừng đặc dụng** (vườn quốc gia, khu bảo tồn: bảo tồn sinh vật); **Rừng sản xuất** (khai thác gỗ, lâm sản).' },
    { img: 'rung1', t: 'Rừng **còn nguyên vẹn** giữ đất, giữ nước, suối trong, làng mạc yên bình.' },
    { img: 'rung3', more: ['rung2', 'rung4'], t: 'Khi rừng **bị chặt phá**, đất bị **xói mòn, sạt lở**, gây **lũ quét**, nước đục ngầu, làng mạc bị tàn phá.' },
    { img: 'g4_1', fit: true, more: ['g4_2', 'g4_3', 'g4_4'], t: '**Trồng cây con có bầu:** đào hố → bón phân lót → **rạch bỏ vỏ bầu** → đặt cây vào giữa hố → **lấp đất, nén chặt** → vun gốc.' },
    { img: 'r9_9', fit: true, more: ['r9_5', 'r9_8'], t: '**Chăm sóc rừng** sau trồng: làm cỏ, vun xới, bón phân, tỉa cây, trồng dặm. **Bảo vệ rừng:** không chặt phá, **phòng cháy rừng**, báo cho **kiểm lâm** khi thấy vi phạm.' }
  ],
  keys: ['Vai trò: điều hoà không khí, chống xói mòn, lũ lụt, nơi sống của động vật, cung cấp gỗ.', 'Rừng phòng hộ – đặc dụng – sản xuất.', 'Trồng cây con có bầu: đào hố, bón lót, rạch vỏ bầu, đặt cây, lấp đất.'],
  mind: { center: 'Rừng Việt Nam', img: 'r3_2', extra: ['đốt rẫy', 'rừng giải trí'], branches: [
    { label: 'Vai trò', color: '#1F7A5A', img: 'r9_2', items: ['{{Điều hoà}} không khí', 'Chống {{xói mòn}}, lũ lụt', 'Nơi sống của {{động vật}}'] },
    { label: 'Loại rừng', color: '#3A9A3F', img: 'r3_1', items: ['Rừng {{phòng hộ}}', 'Rừng {{đặc dụng}}', 'Rừng {{sản xuất}}'] },
    { label: 'Trồng rừng', color: '#8B5E3C', img: 'g4_3', items: ['Đào hố, bón {{phân lót}}', 'Rạch bỏ {{vỏ bầu}}', 'Lấp đất, {{nén chặt}}'] },
    { label: 'Bảo vệ', color: '#E0533D', img: 'r9_9', items: ['Phòng {{cháy rừng}}', 'Báo cho {{kiểm lâm}}'] }
  ] },
  q: [
    { t: 'match', lv: 1, q: 'Nối hình với loại rừng.', pairs: [[['r3_1', ''], 'Rừng phòng hộ ven biển'], [['r3_2', ''], 'Rừng đặc dụng (bảo tồn)'], [['r3_3', ''], 'Rừng sản xuất']] },
    { t: 'mcq', lv: 1, q: 'Rừng đặc dụng có vai trò chủ yếu là gì?', o: ['Bảo tồn thiên nhiên, nguồn gen sinh vật, nghiên cứu khoa học', 'Khai thác gỗ để bán', 'Trồng lúa', 'Xây khu công nghiệp'], a: 0 },
    { t: 'order', lv: 1, q: 'Sắp xếp các bước trồng cây rừng có bầu.', items: [['g4_1', 'Đào hố, cho phân lót'], ['g4_2', 'Rạch bỏ vỏ bầu'], ['g4_3', 'Đặt cây vào giữa hố'], ['g4_4', 'Lấp đất, nén chặt, vun gốc']] },
    { t: 'mcq', lv: 2, img: 'rung4', q: 'Hiện tượng trong hình là hậu quả chủ yếu của việc gì?', o: ['Chặt phá rừng bừa bãi', 'Trồng thêm rừng', 'Bón phân cho cây', 'Tưới nhỏ giọt'], a: 0 },
    { t: 'sort', lv: 2, q: 'Việc làm nào bảo vệ rừng, việc nào gây hại rừng?', bins: ['Bảo vệ rừng', 'Gây hại rừng'], items: [[['r9_9', 'Tuần tra cùng kiểm lâm'], 0], ['Trồng cây gây rừng', 0], [['r9_5', 'Chặt cây bừa bãi'], 1], [['r9_8', 'Đốt lửa gây cháy rừng'], 1], ['Săn bắt động vật hoang dã', 1], ['Phòng chống cháy rừng mùa khô', 0]] },
    { t: 'tf4', lv: 2, q: 'Mỗi nhận định sau là đúng hay sai?', items: [['Rừng phòng hộ đầu nguồn giúp chống xói mòn, lũ lụt.', true], ['Khi trồng cây có bầu, cần giữ nguyên vỏ bầu nilon.', false], ['Sau khi trồng cần làm cỏ, vun xới, trồng dặm.', true], ['Rừng ngập mặn giúp chắn sóng, bảo vệ bờ biển.', true]] },
    { t: 'mcq', lv: 2, q: 'Vì sao phải rạch bỏ vỏ bầu trước khi trồng?', o: ['Để rễ cây phát triển ra đất, không bị bó chặt', 'Để cây nhẹ hơn', 'Để tiết kiệm phân', 'Để cây không cần tưới'], a: 0 },
    { t: 'short', lv: 3, q: 'Loại rừng trồng ven biển để chắn gió, chắn cát, chắn sóng thuộc nhóm rừng nào?', a: ['phòng hộ', 'rừng phòng hộ', 'phong ho'] },
    { t: 'mcq', lv: 3, ctx: 'Mùa khô, Hà thấy một nhóm người đốt lửa nướng thức ăn sát bìa rừng thông.', q: 'Hà nên làm gì?', o: ['Nhắc nhở dập tắt lửa, báo ngay cho kiểm lâm hoặc người lớn', 'Cùng tham gia nướng', 'Lặng lẽ bỏ đi', 'Mang thêm củi khô đến'], a: 0 },
    { t: 'essay', lv: 3, q: 'Quan sát dãy tranh rừng bị chặt phá (rừng xanh → đồi trọc → sạt lở, lũ quét). Hãy giải thích vì sao mất rừng gây lũ quét, sạt lở và đề xuất 2 việc học sinh có thể làm để bảo vệ rừng.', kw: [['re', 'giu dat', 'giu nuoc'], ['xoi mon', 'sat lo', 'lu'], ['trong cay', 'trong rung'], ['tuyen truyen', 'khong chat', 'chay rung', 'kiem lam', 'tiet kiem giay']], kwn: ['Rễ cây giữ đất, giữ nước', 'Mất rừng gây xói mòn, sạt lở', 'Trồng cây', 'Tuyên truyền, phòng cháy, tiết kiệm giấy'], model: 'Rễ cây giữ đất và giữ nước, tán rừng làm chậm dòng chảy. Khi rừng bị chặt, đất trơ trọi bị nước mưa cuốn trôi gây xói mòn, sạt lở, lũ quét. Học sinh có thể tham gia trồng cây, tuyên truyền không chặt phá và phòng cháy rừng, tiết kiệm giấy, báo kiểm lâm khi thấy vi phạm.' }
  ],
  tasks: ['Tham gia trồng một cây xanh ở trường hoặc nhà.', 'Vẽ tranh cổ động “Bảo vệ rừng – bảo vệ cuộc sống”.', 'Tìm hiểu một vườn quốc gia ở Việt Nam và giới thiệu với bạn.'] },
/* ───── 7 ★ ───── */
{ n: 7, t: 2, star: true, exam: true, title: 'Đề ôn giữa học kì 1', cover: '06_1', sticker: 'ha_4',
  examTitle: 'Đề ôn kiểm tra giữa học kì 1 – Công nghệ 7', examNote: 'Phần I: 8 câu trắc nghiệm (4 điểm). Phần II: 2 câu Đúng/Sai (2 điểm). Phần III: 2 câu trả lời ngắn (1 điểm). Phần IV: Tự luận tình huống cây cà chua (3 điểm). Thời gian làm bài 45 phút.',
  recall: [
    { img: '02_2_8', fit: true, t: 'Đất **tơi xốp** chứa nhiều khe hở → có **không khí (oxy)** cho rễ hô hấp, giữ nước tốt.' },
    { img: '05_1_1', fit: true, more: ['05_1_2'], t: 'Giâm cành: **cắt vát 45°** (tăng diện tích ra rễ), nhúng **Auxin (IBA, NAA)** kích thích ra rễ.' },
    { img: '🍃', fit: true, t: '**Lá vàng, gân xanh** = thiếu **vi lượng** (Fe, Zn) → cây không tổng hợp được **diệp lục**.' },
    { img: '🧪', fit: true, t: '**pH đất quá chua hoặc quá kiềm** làm **khoá vi lượng**. Khắc phục: **phun phân bón lá vi lượng** (hiệu quả nhanh) và **điều chỉnh pH về 6,0–6,5** bằng vôi + **phân hữu cơ vi sinh** (lâu dài).' },
    { img: '06_1', t: '**Dự án trồng rau an toàn** trên sân thượng: thùng xốp đục lỗ thoát nước, giá thể tơi xốp, tưới nhỏ giọt, phòng trừ sâu bằng biện pháp sinh học, ghi nhật kí theo dõi.' }
  ],
  keys: ['Dạng đề: trắc nghiệm, Đúng/Sai, trả lời ngắn, tự luận chẩn đoán – giải pháp.', 'Góc phản tỉnh: em tự đánh giá điều đã làm tốt và điều cần cải thiện.'],
  mind: { center: 'Bác sĩ cây trồng', img: 'ha_5', extra: ['thừa nước', 'thiếu ánh sáng'], branches: [
    { label: 'Triệu chứng', color: '#C9A100', img: '🍃', items: ['Lá non {{vàng}}', '{{Gân lá}} vẫn xanh'] },
    { label: 'Chẩn đoán', color: '#E0533D', img: '🧪', items: ['Thiếu {{vi lượng}} (Fe, Zn)', 'pH lệch làm {{khoá}} vi lượng'] },
    { label: 'Giải pháp', color: '#3A9A3F', img: '02_2_6', items: ['B1: Phun phân bón {{lá}} vi lượng', 'B2: Chỉnh pH về {{6,0–6,5}}', 'Bón phân hữu cơ {{vi sinh}}'] }
  ] },
  q: [
    { part: 'Phần I · Câu 1', t: 'mcq', lv: 1, pt: 0.5, q: 'Độ tơi xốp của đất có vai trò quan trọng nhất nào đối với rễ cây?', o: ['Cung cấp không khí (oxy) cho rễ hô hấp', 'Làm đất nặng hơn', 'Tăng số lượng cỏ dại', 'Làm rễ cây ngắn lại'], a: 0 },
    { part: 'Phần I · Câu 2', t: 'mcq', lv: 1, pt: 0.5, q: 'Khi giâm cành, gốc cành nên được cắt như thế nào?', o: ['Cắt vát một góc khoảng 45°', 'Cắt ngang 90°', 'Bẻ gãy bằng tay', 'Giữ nguyên không cắt'], a: 0 },
    { part: 'Phần I · Câu 3', t: 'mcq', lv: 1, pt: 0.5, q: 'IBA, NAA là các chất thuộc nhóm nào, dùng để làm gì?', o: ['Auxin, kích thích cành giâm ra rễ', 'Thuốc trừ sâu, diệt côn trùng', 'Phân đạm, làm lá xanh', 'Vôi, khử chua đất'], a: 0 },
    { part: 'Phần I · Câu 4', t: 'mcq', lv: 2, pt: 0.5, q: 'Cây có lá vàng nhưng gân lá vẫn xanh chủ yếu do:', o: ['Thiếu vi lượng (Fe, Zn) làm cây không tổng hợp đủ diệp lục', 'Thừa ánh sáng', 'Bị sâu ăn rễ', 'Được bón quá nhiều phân hữu cơ'], a: 0 },
    { part: 'Phần I · Câu 5', t: 'mcq', lv: 2, pt: 0.5, q: 'Vì sao đất có pH quá thấp (quá chua) làm cây thiếu vi lượng dù trong đất vẫn có?', o: ['pH lệch làm vi lượng bị “khoá”, rễ không hấp thu được', 'pH thấp làm cây ngừng quang hợp ngay', 'Vì đất chua không có nước', 'Vì đất chua có quá nhiều oxy'], a: 0 },
    { part: 'Phần I · Câu 6', t: 'mcq', lv: 1, pt: 0.5, q: 'Rừng ngập mặn ven biển giúp chắn sóng, chắn gió, bảo vệ đê. Đó là loại rừng nào?', o: ['Rừng phòng hộ', 'Rừng sản xuất', 'Rừng đặc dụng', 'Rừng trồng cây ăn quả'], a: 0 },
    { part: 'Phần I · Câu 7', t: 'mcq', lv: 1, pt: 0.5, q: 'Khoai lang, sắn thường được thu hoạch bằng phương pháp nào?', o: ['Đào hoặc nhổ', 'Hái', 'Cắt bằng liềm', 'Rung cây'], a: 0 },
    { part: 'Phần I · Câu 8', t: 'mcq', lv: 1, pt: 0.5, q: 'Nhóm nào gồm toàn cây lương thực?', o: ['Lúa, ngô, khoai', 'Chè, cà phê, cao su', 'Bông, đay, mía', 'Hoa hồng, hoa cúc, lan'], a: 0 },
    { part: 'Phần II · Câu 1', t: 'tf4', lv: 2, pt: 1, q: 'Hà kiểm tra luống cà chua vàng lá. Mỗi nhận định sau đúng hay sai?', items: [['Nên đo pH đất trước khi kết luận nguyên nhân.', true], ['Bón thật nhiều phân đạm sẽ khắc phục ngay chứng vàng lá gân xanh.', false], ['Phun phân bón lá vi lượng giúp cây hấp thu nhanh.', true], ['Bón vôi và phân hữu cơ vi sinh giúp đưa pH về mức phù hợp.', true]] },
    { part: 'Phần II · Câu 2', t: 'tf4', lv: 2, pt: 1, q: 'Về giâm cành hoa hồng:', items: [['Chọn cành bánh tẻ khoẻ mạnh.', true], ['Nhúng gốc vào Auxin giúp ra rễ nhanh.', true], ['Cắm cành vào đất sũng nước để nhanh ra rễ.', false], ['Đặt khay giâm dưới nắng gắt cả ngày.', false]] },
    { part: 'Phần III · Câu 1', t: 'short', lv: 1, pt: 0.5, q: 'Nhóm phân bón chứa sắt, kẽm, bo mà cây cần lượng rất ít gọi là phân gì?', a: ['vi lượng', 'phân vi lượng', 'vi luong'] },
    { part: 'Phần III · Câu 2', t: 'short', lv: 1, pt: 0.5, q: 'Khoảng pH đất phù hợp với đa số cây trồng (trong đó có cà chua) là bao nhiêu? (ví dụ: 6,0–6,5)', a: ['6-6,5', '6,0-6,5', '6 6 5', '6 0 6 5', '6.0-6.5', '6,0–6,5', '6 den 6 5', '6 0 den 6 5'] },
    { part: 'Phần IV · Tự luận', t: 'essay', lv: 3, pt: 3, ctx: 'Vườn cà chua của gia đình Hà: lá non chuyển vàng, gân lá vẫn xanh, cây còi cọc. Đo pH đất được 4,8. Gia đình đã bón đủ phân đạm.', q: 'a) Chẩn đoán nguyên nhân. b) Đề xuất giải pháp 2 bước (trước mắt và lâu dài). c) Góc phản tỉnh: em rút ra bài học gì khi chăm sóc cây?', kw: [['vi luong', 'sat', 'kem', 'magie'], ['ph', 'chua', 'khoa'], ['phun', 'bon la'], ['voi', 'huu co', 'vi sinh', '6'], ['quan sat', 'do ph', 'kiem tra', 'bai hoc', 'theo doi']], kwn: ['Thiếu vi lượng', 'pH quá chua khoá vi lượng', 'Trước mắt: phun phân bón lá', 'Lâu dài: vôi + hữu cơ vi sinh, pH 6,0–6,5', 'Phản tỉnh'], model: 'a) Cây thiếu vi lượng (sắt, kẽm) nên không tổng hợp đủ diệp lục. Nguyên nhân do đất quá chua (pH 4,8) làm khoá vi lượng, rễ không hút được dù đã bón đủ đạm.\nb) Trước mắt: phun phân bón lá có vi lượng để cây hấp thu nhanh qua lá. Lâu dài: bón vôi và phân hữu cơ vi sinh, điều chỉnh pH đất về khoảng 6,0–6,5.\nc) Bài học: cần quan sát kĩ triệu chứng, đo pH đất định kì, bón phân cân đối chứ không chỉ bón đạm.' }
  ],
  tasks: ['Thực hiện dự án nhỏ: trồng 1 thùng rau an toàn tại nhà và ghi nhật kí.', 'Làm thẻ “Bác sĩ cây trồng”: triệu chứng – nguyên nhân – cách khắc phục.', 'Viết 3 dòng phản tỉnh: điều em làm tốt và điều cần cải thiện.'] }
];
