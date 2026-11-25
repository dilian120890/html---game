/* Công nghệ 4 · Kết nối tri thức · Ôn tập học kì 1 — "Khu vườn của em" */
const APP = {
  id: 'cn4', name: 'Khu vườn của em', nameEn: 'My little garden', sub: 'Ôn tập Công nghệ 4 · Học kì 1',
  school: 'th', bilingual: true,
  hero: '00_1', finale: '00_6', mascot: 'ch_2',
  poses: { hi: '00_3_1', think: '00_3_3', good: '00_3_5', try: '00_4_4', win: '00_3_6' },
  theme: { main: '#3AA85A', 'main-d': '#2A7F43', soft: '#DFF3E3', accent: '#F26B4F' },
  intro: 'Chào các bạn! Mình là <b>Lan</b>, còn đây là <b>ong Vo Vo</b>. Khu vườn của mình đang chờ các bạn chăm sóc. Mỗi chặng có 4 bước: <b>đọc kiến thức cần nhớ</b>, <b>điền sơ đồ tư duy</b>, <b>trả lời câu hỏi ôn tập</b> và <b>vận dụng</b>. Qua mỗi chặng, chậu cây của chúng mình lại lớn thêm một chút!',
  introEn: "Hi! I'm Lan and this is Buzzy the bee. Finish each stage to help our plant grow!"
};
const TOPICS = [
  { name: 'Hoa và cây cảnh quanh em', en: 'Flowers and ornamental plants', color: '#E0533D', soft: '#FFE6DF' },
  { name: 'Trồng hoa, cây cảnh trong chậu', en: 'Growing plants in pots', color: '#3AA85A', soft: '#DFF3E3' },
  { name: 'Ôn tập cuối học kì 1', en: 'End-of-term review', color: '#E08A1E', soft: '#FFF0D6' }
];
const STAGES = [
/* ───── 1 ───── */
{ n: 1, t: 0, title: 'Lợi ích của hoa và cây cảnh', en: 'Benefits of flowers and plants', cover: '01_1', sticker: '00_5_1',
  recall: [
    { img: '01_2_1', t: 'Hoa dùng để **trang trí**, **thờ cúng** trong những ngày lễ, Tết.', te: 'Flowers decorate homes and altars on holidays.' },
    { img: '01_2_4', t: 'Hoa dùng làm **quà tặng** để bày tỏ tình cảm với người thân, thầy cô.', te: 'Flowers are lovely gifts.' },
    { img: '01_2_9', t: 'Hoa dùng để trang trí nhà cửa, hội trường, **tiệc cưới**.', te: 'Flowers decorate houses, halls and weddings.' },
    { img: '01_2_3', more: ['01_2_8'], t: 'Cây cảnh giúp **làm sạch không khí**, làm đẹp phòng ở, góc học tập và giúp ta **thư giãn**.', te: 'Plants clean the air and help us relax.' },
    { img: '01_2_5', more: ['01_2_6'], t: 'Cây xanh tạo **bóng mát**, làm **đẹp cảnh quan** đường phố, công viên.', te: 'Trees give shade and make streets beautiful.' },
    { img: '01_2_7', t: 'Trồng và bán hoa, cây cảnh mang lại **thu nhập** (giá trị kinh tế) cho người trồng.', te: 'Growing and selling flowers brings money.' }
  ],
  keys: ['Hoa: trang trí, làm quà tặng, dùng trong lễ Tết.', 'Cây cảnh: làm sạch không khí, tạo bóng mát, giúp thư giãn.', 'Trồng hoa, cây cảnh còn mang lại thu nhập.'],
  w: [['02_1_1', 'hoa', 'flower'], ['02_1_10', 'cây cảnh', 'ornamental plant'], ['01_2_4', 'quà tặng', 'gift'], ['01_2_5', 'bóng mát', 'shade'], ['01_2_3', 'không khí trong lành', 'fresh air'], ['01_2_7', 'bán hoa', 'sell flowers']],
  mind: { center: 'Lợi ích của hoa, cây cảnh', ce: 'Benefits', img: '01_1', extra: ['ồn ào', 'bụi bẩn'], branches: [
    { label: 'Hoa', le: 'Flowers', color: '#E0533D', img: '02_1_1', items: ['Trang trí nhà cửa, {{tiệc cưới}}, hội trường', 'Làm {{quà tặng}} người thân, thầy cô', 'Dùng để {{thờ cúng}} ngày lễ, Tết'] },
    { label: 'Cây cảnh', le: 'Plants', color: '#3AA85A', img: '02_1_10', items: ['Làm {{sạch}} không khí', 'Tạo {{bóng mát}} cho đường phố', 'Giúp con người {{thư giãn}}'] },
    { label: 'Kinh tế', le: 'Money', color: '#E08A1E', img: '01_2_7', items: ['Trồng và {{bán}} hoa, cây cảnh', 'Mang lại {{thu nhập}} cho người trồng'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, img: '01_2_4', q: 'Bạn nhỏ trong hình dùng hoa để làm gì?', o: ['Làm quà tặng cô giáo', 'Làm thức ăn', 'Làm thuốc chữa bệnh', 'Làm đồ chơi'], a: 0, ex: 'Hoa thường được dùng làm quà tặng để bày tỏ tình cảm.' },
    { t: 'mcq', lv: 1, img: '01_2_5', q: 'Hàng cây xanh trên vỉa hè mang lại lợi ích gì?', o: ['Tạo bóng mát, làm đẹp đường phố', 'Làm đường bẩn hơn', 'Che khuất biển báo', 'Làm ồn ào hơn'], a: 0, ex: 'Cây xanh tạo bóng mát và làm đẹp cảnh quan.' },
    { t: 'tf', lv: 1, img: '01_2_3', q: 'Cây lưỡi hổ đặt trong phòng giúp không khí trong lành hơn.', a: true, ex: 'Lưỡi hổ là cây cảnh giúp lọc không khí.' },
    { t: 'match', lv: 1, q: 'Nối mỗi hình với lợi ích của hoa, cây cảnh.', pairs: [[['01_2_1', ''], 'Thờ cúng ngày Tết'], [['01_2_9', ''], 'Trang trí tiệc cưới'], [['01_2_7', ''], 'Bán để có thu nhập'], [['01_2_8', ''], 'Làm đẹp góc học tập']] },
    { t: 'sort', lv: 2, q: 'Xếp mỗi việc vào đúng nhóm lợi ích.', bins: ['Làm đẹp, trang trí', 'Tốt cho sức khoẻ, môi trường'], items: [['Cắm hoa trên bàn tiếp khách', 0], ['Trồng cây xanh lọc không khí', 1], ['Treo giỏ hoa trước hiên nhà', 0], ['Trồng cây tạo bóng mát sân trường', 1], ['Kết cổng hoa ngày cưới', 0], ['Đặt cây xanh cho mắt thư giãn', 1]] },
    { t: 'mcq', lv: 2, q: 'Vì sao nhiều gia đình trồng hoa, cây cảnh để bán?', o: ['Để có thêm thu nhập', 'Để cây mau chết', 'Để không phải chăm sóc', 'Để làm ô nhiễm môi trường'], a: 0, ex: 'Hoa, cây cảnh có giá trị kinh tế, mang lại thu nhập.' },
    { t: 'tf4', lv: 2, q: 'Mỗi ý sau đúng hay sai?', items: [['Hoa chỉ để ngắm, không có lợi ích nào khác.', false], ['Cây cảnh trong nhà giúp con người thư giãn.', true], ['Hoa có thể dùng làm quà tặng.', true], ['Cây xanh làm không khí bẩn hơn.', false]] },
    { t: 'mcq', lv: 2, q: 'Ngày Tết, nhiều gia đình bày loại hoa nào để trang trí, thờ cúng?', o: ['Hoa đào, hoa mai, hoa cúc', 'Cây xương rồng', 'Cây lúa', 'Cây rau muống'], a: 0 },
    { t: 'mcq', lv: 3, ctx: 'Lớp em muốn góc học tập thêm xanh và mát mắt.', q: 'Em nên chọn cách nào?', o: ['Đặt một chậu cây nhỏ gần cửa sổ', 'Đặt cây thật to chắn hết cửa sổ', 'Treo hoa giả bám đầy bụi', 'Không đặt gì cả'], a: 0, ex: 'Chậu cây nhỏ gần cửa sổ vừa đủ sáng cho cây, vừa không che ánh sáng của lớp.' },
    { t: 'essay', lv: 3, q: 'Em hãy kể 2 lợi ích của hoa hoặc cây cảnh mà em thấy ở nhà hoặc ở trường.', kw: [['trang tri', 'dep'], ['khong khi', 'bong mat', 'thu gian', 'qua', 'tho', 'thu nhap', 'ban', 'mat']], kwn: ['Làm đẹp, trang trí', 'Một lợi ích khác'], model: 'Ở trường em có hàng cây tạo bóng mát cho sân chơi. Ở nhà, mẹ đặt lọ hoa trên bàn để trang trí cho đẹp.' }
  ],
  tasks: ['Kể cho người thân nghe 3 lợi ích của hoa, cây cảnh.', 'Cùng bố mẹ chọn một chỗ trong nhà để đặt một chậu cây xanh.', 'Quan sát cây xanh ở trường và nói xem cây giúp gì cho em.'] },
/* ───── 2 ───── */
{ n: 2, t: 0, title: 'Một số loại hoa, cây cảnh phổ biến', en: 'Common flowers and plants', cover: '02_1_2', sticker: '00_5_2',
  recall: [
    { img: '02_1_1', more: ['02_2_5'], t: 'Hoa **hồng**: nhiều màu, rất thơm, thân có **gai**.', te: 'Rose: many colours, sweet smell, thorny stem.' },
    { img: '02_1_2', t: 'Hoa **cúc**: nhiều cánh nhỏ, thường màu **vàng**, hay bày dịp Tết.', te: 'Chrysanthemum: many small petals, often yellow.' },
    { img: '02_1_3', more: ['02_1_4', '02_2_4'], t: 'Hoa **đào** màu hồng (miền Bắc), hoa **mai** màu vàng, 5 cánh (miền Nam) nở vào dịp **Tết**.', te: 'Peach blossoms (pink) and apricot blossoms (yellow) bloom at Tet.' },
    { img: '02_1_7', more: ['02_2_3'], t: 'Hoa **sen** sống dưới **nước**, lá to tròn, có gương sen.', te: 'Lotus lives in water.' },
    { img: '02_1_5', more: ['02_1_6'], t: 'Hoa **lan**, hoa **loa kèn** có màu đẹp, thường dùng để trang trí, cắm lọ.', te: 'Orchids and lilies are used for decoration.' },
    { img: '02_1_12', more: ['02_2_1'], t: 'Cây **xương rồng** có **gai**, chịu hạn tốt, ít phải tưới nước.', te: 'Cactus has spines and needs little water.' },
    { img: '02_1_9', more: ['02_2_2'], t: 'Cây **lưỡi hổ** lá dài, cứng, có viền vàng, giúp **lọc không khí**.', te: 'Snake plant has long stiff leaves and cleans the air.' },
    { img: '02_1_10', more: ['02_2_6', '02_1_11', '02_1_8'], t: 'Cây **kim tiền**, **trầu bà**, **vạn niên thanh** có lá xanh, hợp đặt trong nhà.', te: 'ZZ plant, pothos and dieffenbachia are green indoor plants.' }
  ],
  keys: ['Hoa: hồng, cúc, đào, mai, lan, sen, loa kèn.', 'Cây cảnh lá: xương rồng, lưỡi hổ, kim tiền, trầu bà, vạn niên thanh.', 'Nhận biết qua: màu hoa, hình dạng lá, thân (có gai hay không), nơi sống.'],
  w: [['02_1_1', 'hoa hồng', 'rose'], ['02_1_2', 'hoa cúc', 'chrysanthemum'], ['02_1_3', 'hoa đào', 'peach blossom'], ['02_1_4', 'hoa mai', 'apricot blossom'], ['02_1_7', 'hoa sen', 'lotus'], ['02_1_5', 'hoa lan', 'orchid'], ['02_1_12', 'xương rồng', 'cactus'], ['02_1_9', 'lưỡi hổ', 'snake plant']],
  mind: { center: 'Hoa, cây cảnh phổ biến', ce: 'Common plants', img: '02_1_2', extra: ['rễ', 'hoa giấy'], branches: [
    { label: 'Cây hoa', le: 'Flowers', color: '#E0533D', img: '02_1_1', items: ['Hoa hồng: thân có {{gai}}, rất thơm', 'Hoa {{sen}}: sống dưới nước', 'Hoa {{đào}}: màu hồng, nở dịp Tết', 'Hoa {{mai}}: màu vàng, 5 cánh'] },
    { label: 'Cây cảnh lá', le: 'Leafy plants', color: '#3AA85A', img: '02_1_9', items: ['{{Xương rồng}}: có gai, chịu hạn', '{{Lưỡi hổ}}: lá dài, viền vàng', 'Kim tiền, {{trầu bà}}: đặt trong nhà'] },
    { label: 'Cách nhận biết', le: 'How to tell', color: '#2F8FD8', img: '02_2_4', items: ['Quan sát {{màu}} của hoa', 'Quan sát hình dạng {{lá}}, thân'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Hình nào là hoa sen?', o: [['02_1_7', ''], ['02_1_1', ''], ['02_1_2', ''], ['02_1_5', '']], a: 0, ex: 'Hoa sen sống dưới nước, lá to tròn.' },
    { t: 'mcq', lv: 1, img: '02_1_4', q: 'Đây là hoa gì?', o: ['Hoa mai', 'Hoa đào', 'Hoa hồng', 'Hoa cúc'], a: 0, ex: 'Hoa mai màu vàng, có 5 cánh.' },
    { t: 'mcq', lv: 1, img: '02_2_1', q: 'Hình phóng to là thân của cây nào?', o: ['Cây xương rồng', 'Cây kim tiền', 'Cây hoa sen', 'Cây trầu bà'], a: 0, ex: 'Thân xương rồng mọng nước, có nhiều gai.' },
    { t: 'match', lv: 1, q: 'Nối tên với hình phù hợp.', pairs: [['Hoa hồng', ['02_1_1', '']], ['Hoa cúc', ['02_1_2', '']], ['Cây lưỡi hổ', ['02_1_9', '']], ['Cây trầu bà', ['02_1_11', '']]] },
    { t: 'mcq', lv: 2, q: 'Loài cây nào chịu hạn tốt, ít phải tưới nước?', o: ['Xương rồng', 'Hoa sen', 'Trầu bà', 'Hoa hồng'], a: 0 },
    { t: 'sort', lv: 2, q: 'Xếp mỗi cây vào đúng nhóm.', bins: ['Cây hoa', 'Cây cảnh lá'], items: [[['02_1_6', 'Loa kèn'], 0], [['02_1_3', 'Đào'], 0], [['02_1_5', 'Lan'], 0], [['02_1_8', 'Vạn niên thanh'], 1], [['02_1_10', 'Kim tiền'], 1], [['02_1_9', 'Lưỡi hổ'], 1]] },
    { t: 'tf', lv: 2, q: 'Hoa đào và hoa mai thường nở vào dịp Tết Nguyên đán.', a: true },
    { t: 'tf4', lv: 2, q: 'Mỗi ý sau đúng hay sai?', items: [['Hoa sen sống ở dưới nước.', true], ['Cây xương rồng có lá to, mềm.', false], ['Thân cây hoa hồng có gai.', true], ['Hoa mai thường có màu tím.', false]] },
    { t: 'short', lv: 2, q: 'Loài hoa nào sống dưới nước, lá to tròn, có gương?', a: ['hoa sen', 'sen'] },
    { t: 'mcq', lv: 3, ctx: 'Bạn Bin muốn đặt một chậu cây ở bàn học, cây nhỏ và ít phải chăm sóc.', q: 'Bin nên chọn cây nào?', o: ['Cây lưỡi hổ nhỏ', 'Cây hoa sen', 'Cây đào thật to', 'Cây phượng'], a: 0, ex: 'Lưỡi hổ nhỏ gọn, dễ sống, ít tưới và còn lọc không khí.' },
    { t: 'essay', lv: 3, q: 'Em thích loài hoa hoặc cây cảnh nào nhất? Nêu 2 đặc điểm giúp em nhận ra nó.', kw: [['hoa', 'cay'], ['mau', 'la', 'gai', 'canh', 'than', 'thom', 'nuoc', 'vang', 'hong', 'do']], kwn: ['Tên hoa, cây', 'Đặc điểm (màu, lá, thân, gai…)'], model: 'Em thích hoa hồng. Hoa hồng có nhiều màu như đỏ, hồng, trắng, rất thơm, thân cây có gai.' }
  ],
  tasks: ['Kể tên 3 loài hoa, cây cảnh trồng ở nhà hoặc ở trường.', 'Vẽ một loài hoa em thích, ghi tên và màu hoa.', 'Hỏi ông bà, bố mẹ: Tết nhà mình thường chơi hoa gì?'] },
/* ───── 3 ───── */
{ n: 3, t: 1, title: 'Vật liệu và dụng cụ trồng cây trong chậu', en: 'Materials and tools', cover: '03_1_5', sticker: '00_5_3',
  recall: [
    { img: '03_1_1', fit: true, more: ['03_1_2', '03_1_3', '03_1_4'], t: 'Các loại **chậu**: đất nung, nhựa, sứ, chậu treo. Đáy chậu phải có **lỗ thoát nước**.', te: 'Pots: clay, plastic, ceramic, hanging. A pot needs drainage holes.' },
    { img: '03_1_5', fit: true, more: ['03_1_6', '03_1_7'], t: '**Giá thể** (đất trồng): đất, **xơ dừa**, **trấu hun** giúp đất tơi xốp, giữ ẩm.', te: 'Growing mix: soil, coco fibre, burnt rice husk.' },
    { img: '03_1_8', fit: true, t: '**Sỏi** hoặc viên **đất nung (Leca)** rải ở đáy chậu giúp **thoát nước**, rễ cây thoáng khí, không bị úng.', te: 'Pebbles or clay balls at the bottom help water drain.' },
    { img: '♻️', fit: true, t: 'Có thể làm chậu từ **chai nhựa tái chế**. Nhớ nhờ người lớn **đục lỗ** ở đáy để nước thoát ra.', te: 'A recycled plastic bottle can be a pot. Make holes at the bottom.' },
    { img: '03_1_9', fit: true, more: ['03_1_10', '03_1_11', '03_1_12'], t: '**Dụng cụ**: xẻng nhỏ (xúc, xới đất), bình tưới, **bình phun sương**, **găng tay** bảo vệ tay.', te: 'Tools: trowel, watering can, spray bottle, gloves.' },
    { img: '03_2_1', more: ['03_2_2', '03_2_3'], t: '**An toàn**: đeo găng tay khi làm đất; xong việc **rửa sạch** dụng cụ và **rửa tay** bằng xà phòng.', te: 'Wear gloves, clean tools and wash your hands.' },
    { img: '03_2_4', more: ['03_2_5', '03_2_6'], t: 'Không đùa nghịch, ném đất; thấy vật sắc nhọn thì báo người lớn; cất dụng cụ **gọn gàng**.', te: 'Do not play rough; put tools away neatly.' }
  ],
  keys: ['Vật liệu: chậu, giá thể (đất, xơ dừa, trấu hun), sỏi hoặc viên đất nung.', 'Dụng cụ: xẻng nhỏ, bình tưới, bình phun sương, găng tay.', 'Làm vườn an toàn: đeo găng tay, cất dụng cụ gọn gàng, rửa tay sau khi làm.'],
  w: [['03_1_1', 'chậu', 'pot'], ['03_1_5', 'đất', 'soil'], ['03_1_8', 'sỏi', 'pebbles'], ['03_1_9', 'xẻng nhỏ', 'trowel'], ['03_1_10', 'bình tưới', 'watering can'], ['03_1_11', 'bình phun sương', 'spray bottle'], ['03_1_12', 'găng tay', 'gloves']],
  mind: { center: 'Trồng cây trong chậu cần gì?', ce: 'What do we need?', img: '03_1_5', extra: ['nồi cơm', 'kéo giấy'], branches: [
    { label: 'Chậu', le: 'Pots', color: '#E08A1E', img: '03_1_1', items: ['Chậu đất nung, nhựa, sứ, {{chậu treo}}', 'Đáy chậu có {{lỗ}} thoát nước', 'Chai nhựa {{tái chế}} cũng làm được chậu'] },
    { label: 'Giá thể', le: 'Growing mix', color: '#8B5E3C', img: '03_1_6', items: ['Đất, {{xơ dừa}}, trấu hun', 'Sỏi, viên {{đất nung}} lót đáy chậu'] },
    { label: 'Dụng cụ', le: 'Tools', color: '#2F8FD8', img: '03_1_9', items: ['{{Xẻng}} nhỏ để xúc đất', 'Bình {{tưới}}, bình phun sương', '{{Găng tay}} bảo vệ tay'] },
    { label: 'An toàn', le: 'Safety', color: '#E0533D', img: '03_2_3', items: ['{{Rửa tay}} sau khi làm vườn', 'Cất dụng cụ {{gọn gàng}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, img: '03_1_9', q: 'Dụng cụ này dùng để làm gì?', o: ['Xúc đất, xới đất', 'Tưới nước', 'Cắt giấy', 'Phun sương'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Em chọn dụng cụ dùng để phun sương cho lá cây.', o: [['03_1_11', ''], ['03_1_10', ''], ['03_1_9', ''], ['03_1_12', '']], a: 0, ex: 'Bình phun sương tưới nhẹ, đều lên lá.' },
    { t: 'match', lv: 1, q: 'Nối hình vật liệu với tên gọi.', pairs: [[['03_1_6', ''], 'Xơ dừa'], [['03_1_7', ''], 'Trấu hun'], [['03_1_8', ''], 'Sỏi'], [['03_1_4', ''], 'Chậu treo']] },
    { t: 'mcq', lv: 1, q: 'Vì sao đáy chậu cần có lỗ?', o: ['Để nước thừa thoát ra, rễ không bị úng', 'Để chậu nhẹ hơn', 'Để trang trí cho đẹp', 'Để giun chui vào'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Rải một lớp viên đất nung (Leca) hoặc sỏi ở đáy chậu nhằm mục đích gì?', o: ['Giúp thoát nước, rễ cây thoáng khí', 'Làm chậu nặng để trang trí', 'Cung cấp phân bón cho cây', 'Giữ cho đất luôn ướt sũng'], a: 0, ex: 'Viên đất nung xốp, nhẹ, giúp nước thừa thoát nhanh và rễ được thở.' },
    { t: 'mcq', lv: 2, ctx: 'Lan dùng chai nhựa cũ làm chậu trồng cây.', q: 'Lan cần làm gì để cây không bị úng nước?', o: ['Nhờ người lớn đục vài lỗ nhỏ ở đáy chai', 'Đổ đầy nước vào chai', 'Bịt kín đáy chai', 'Sơn màu cho chai'], a: 0 },
    { t: 'sort', lv: 2, q: 'Phân loại: vật liệu hay dụng cụ?', bins: ['Vật liệu', 'Dụng cụ'], items: [[['03_1_5', 'Đất'], 0], [['03_1_6', 'Xơ dừa'], 0], [['03_1_1', 'Chậu'], 0], [['03_1_9', 'Xẻng'], 1], [['03_1_10', 'Bình tưới'], 1], [['03_1_12', 'Găng tay'], 1]] },
    { t: 'tf4', lv: 2, q: 'Khi làm vườn, mỗi ý sau đúng hay sai?', items: [['Nên đeo găng tay khi trộn đất.', true], ['Có thể ném đất vào bạn cho vui.', false], ['Rửa tay bằng xà phòng sau khi làm.', true], ['Để xẻng, kéo bừa bãi trên lối đi.', false]] },
    { t: 'tf', lv: 2, img: '03_2_6', q: 'Để dụng cụ làm vườn trên lối đi như trong hình là đúng.', a: false, ex: 'Dụng cụ để bừa bãi có thể làm người khác vấp ngã, bị thương. Cần cất gọn.' },
    { t: 'mcq', lv: 3, img: '03_2_5', ctx: 'Bạn Bin đang bới đất thì thấy một mảnh thuỷ tinh vỡ.', q: 'Bin nên làm gì?', o: ['Dừng lại, báo người lớn để nhặt bỏ an toàn', 'Dùng tay không nhặt ngay', 'Vùi mảnh thuỷ tinh xuống đất', 'Ném mảnh thuỷ tinh ra đường'], a: 0 },
    { t: 'essay', lv: 3, q: 'Em cần chuẩn bị những vật liệu và dụng cụ gì để trồng một cây con vào chậu?', kw: [['chau'], ['dat', 'gia the', 'xo dua', 'trau', 'soi'], ['xeng', 'binh tuoi', 'gang tay', 'binh phun']], kwn: ['Chậu', 'Đất, giá thể', 'Dụng cụ'], model: 'Em cần chậu có lỗ thoát nước, sỏi lót đáy, đất trồng trộn xơ dừa và cây con. Dụng cụ gồm xẻng nhỏ, bình tưới và găng tay.' }
  ],
  tasks: ['Tìm một chai nhựa cũ, nhờ người lớn đục lỗ ở đáy để làm chậu tái chế.', 'Kể tên 3 dụng cụ làm vườn có ở nhà em.', 'Sau khi làm vườn, rửa sạch dụng cụ và rửa tay bằng xà phòng.'] },
/* ───── 4 ───── */
{ n: 4, t: 1, title: 'Gieo hạt hoa, cây cảnh trong chậu', en: 'Sowing seeds', cover: '04_1_3', sticker: '00_5_4',
  recall: [
    { img: '04_2_1', fit: true, more: ['04_2_2', '04_2_3', '04_2_4'], t: '**Chọn hạt giống tốt**: hạt **to, mẩy**, không lép, không mốc, không bị sâu mọt.', te: 'Choose big, full seeds. No mould, no holes.' },
    { img: '04_2_5', fit: true, t: 'Có thể dùng **gói hạt giống** mua ở cửa hàng, nhớ xem hạn sử dụng.', te: 'You can buy seed packets.' },
    { img: '04_1_2', t: 'Ngâm hạt trong **nước ấm** vài giờ giúp hạt **nhanh nảy mầm**.', te: 'Soak seeds in warm water so they sprout faster.' },
    { img: '04_1_1', more: ['04_1_3'], t: '**Bước 1:** Cho **giá thể** vào khay hoặc chậu. **Bước 2:** **Gieo hạt** đều vào từng ô.', te: 'Step 1: fill the tray. Step 2: sow the seeds.' },
    { img: '04_1_4', more: ['04_1_5'], t: '**Bước 3:** **Phủ một lớp đất mỏng** lên hạt. **Bước 4:** Tưới nhẹ bằng **bình phun sương**.', te: 'Step 3: cover with a thin layer. Step 4: mist with water.' },
    { img: '04_2_6', fit: true, t: 'Giữ đất luôn **ẩm**, đặt khay nơi **thoáng, có ánh sáng**. Vài ngày sau hạt sẽ **nảy mầm**.', te: 'Keep it moist and bright. Seeds will sprout.' }
  ],
  keys: ['Chọn hạt to, mẩy, không lép, không mốc, không sâu mọt.', 'Các bước: cho giá thể → gieo hạt → phủ đất mỏng → tưới phun sương.', 'Sau khi gieo: giữ ẩm, để nơi thoáng, có ánh sáng.'],
  w: [['04_2_1', 'hạt giống', 'seed'], ['04_2_6', 'nảy mầm', 'sprout'], ['04_1_1', 'khay gieo hạt', 'seed tray'], ['04_1_5', 'phun sương', 'mist']],
  mind: { center: 'Gieo hạt trong chậu', ce: 'Sowing seeds', img: '04_2_6', extra: ['ngập nước', 'lép'], branches: [
    { label: 'Chọn hạt', le: 'Choose seeds', color: '#E08A1E', img: '04_2_1', items: ['Hạt to, {{mẩy}}', 'Không lép, không {{mốc}}, không sâu mọt'] },
    { label: 'Các bước gieo', le: 'Steps', color: '#3AA85A', img: '04_1_3', items: ['Cho {{giá thể}} vào chậu, khay', 'Gieo {{hạt}} đều vào từng ô', 'Phủ một lớp {{đất mỏng}}', 'Tưới bằng bình {{phun sương}}'] },
    { label: 'Sau khi gieo', le: 'After sowing', color: '#2F8FD8', img: '04_1_5', items: ['Giữ đất luôn {{ẩm}}', 'Đặt nơi thoáng, có {{ánh sáng}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Hạt nào là hạt giống tốt, nên chọn để gieo?', o: [['04_2_1', ''], ['04_2_2', ''], ['04_2_3', ''], ['04_2_4', '']], a: 0, ex: 'Hạt tốt to, mẩy, không lép, không mốc, không sâu mọt.' },
    { t: 'match', lv: 1, q: 'Nối hình hạt với nhận xét đúng.', pairs: [[['04_2_2', ''], 'Hạt lép'], [['04_2_3', ''], 'Hạt bị mốc'], [['04_2_4', ''], 'Hạt bị sâu mọt'], [['04_2_6', ''], 'Hạt nảy mầm']] },
    { t: 'mcq', lv: 1, img: '04_1_5', q: 'Lan dùng dụng cụ gì để tưới nước cho hạt vừa gieo?', o: ['Bình phun sương', 'Xô nước to', 'Vòi nước mạnh', 'Xẻng nhỏ'], a: 0, ex: 'Tưới nhẹ bằng bình phun sương để hạt không bị trôi.' },
    { t: 'order', lv: 2, q: 'Sắp xếp các bước gieo hạt theo đúng thứ tự.', items: [['04_1_1', 'Cho giá thể vào khay'], ['04_1_3', 'Gieo hạt vào từng ô'], ['04_1_4', 'Phủ lớp đất mỏng lên hạt'], ['04_1_5', 'Phun sương giữ ẩm']] },
    { t: 'mcq', lv: 2, q: 'Vì sao chỉ phủ một lớp đất mỏng lên hạt?', o: ['Để mầm dễ nhú lên khỏi mặt đất', 'Để chim dễ ăn hạt', 'Để đất khô thật nhanh', 'Để tiết kiệm chậu'], a: 0 },
    { t: 'tf', lv: 2, q: 'Sau khi gieo hạt, cần tưới thật nhiều nước cho ngập chậu.', a: false, ex: 'Tưới ngập làm hạt bị thối. Chỉ cần giữ đất ẩm.' },
    { t: 'mcq', lv: 2, q: 'Ngâm hạt trong nước ấm trước khi gieo giúp gì?', o: ['Hạt nhanh nảy mầm hơn', 'Hạt to gấp đôi', 'Hạt đổi màu', 'Hạt không cần tưới nữa'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Mỗi ý sau đúng hay sai?', items: [['Nên chọn hạt lép để gieo.', false], ['Đặt khay gieo hạt ở nơi thoáng, có ánh sáng.', true], ['Giữ cho giá thể luôn ẩm.', true], ['Phủ đất thật dày lên hạt.', false]] },
    { t: 'mcq', lv: 3, ctx: 'Lan gieo hạt đã 10 ngày mà chưa thấy mầm. Đất trong khay lúc nào cũng ngập nước.', q: 'Nguyên nhân có thể là gì?', o: ['Tưới quá nhiều làm hạt bị thối', 'Khay quá đẹp', 'Hạt quá to', 'Trời quá mát'], a: 0 },
    { t: 'short', lv: 3, q: 'Hạt giống tốt là hạt to và … (điền 1 từ)', a: ['mẩy', 'chắc', 'mẩy chắc'], ex: 'Hạt giống tốt: to, mẩy, không lép.' },
    { t: 'essay', lv: 3, q: 'Em hãy viết các bước gieo hạt hoa vào chậu.', kw: [['gia the', 'dat'], ['gieo'], ['phu', 'lap'], ['tuoi', 'phun']], kwn: ['Cho giá thể', 'Gieo hạt', 'Phủ đất mỏng', 'Tưới phun sương'], model: 'Bước 1: Cho giá thể vào chậu.\nBước 2: Gieo hạt đều lên mặt giá thể.\nBước 3: Phủ một lớp đất mỏng lên hạt.\nBước 4: Tưới nhẹ bằng bình phun sương, đặt chậu nơi thoáng.' }
  ],
  tasks: ['Cùng người lớn gieo vài hạt (đậu xanh hoặc hạt hoa) vào cốc nhựa có lỗ ở đáy.', 'Mỗi ngày phun sương giữ ẩm và ghi lại ngày hạt nảy mầm.', 'Vẽ cây mầm của em sau 1 tuần.'] },
/* ───── 5 ───── */
{ n: 5, t: 1, title: 'Trồng cây con trong chậu', en: 'Planting a seedling', cover: '05_1_3', sticker: '00_5_5',
  recall: [
    { img: '05_2_1', fit: true, more: ['05_2_5', '05_2_2', '05_2_3', '05_2_6'], t: '**Chọn cây con khoẻ**: thân thẳng, lá xanh; không héo, không gãy ngọn, không sâu bệnh.', te: 'Choose a healthy seedling: straight stem, green leaves.' },
    { img: '05_1_1', t: '**Bước 1:** Rải lớp **sỏi** (hoặc viên đất nung) ở **đáy chậu** cho thoát nước.', te: 'Step 1: put pebbles at the bottom.' },
    { img: '05_1_2', t: '**Bước 2:** Cho **đất (giá thể)** vào khoảng nửa chậu.', te: 'Step 2: add soil to half the pot.' },
    { img: '05_1_3', t: '**Bước 3:** Đặt **cây con** thẳng đứng vào **giữa** chậu.', te: 'Step 3: place the seedling in the middle.' },
    { img: '05_1_4', t: '**Bước 4:** **Lấp đất** kín gốc, ấn nhẹ cho cây đứng vững.', te: 'Step 4: fill with soil and press gently.' },
    { img: '05_1_5', t: '**Bước 5:** **Tưới nước** nhẹ nhàng quanh gốc cây.', te: 'Step 5: water gently.' }
  ],
  keys: ['Chọn cây con khoẻ: thân thẳng, lá xanh, không héo, không sâu.', '5 bước: rải sỏi → cho đất → đặt cây → lấp đất, ấn nhẹ → tưới nước.'],
  w: [['05_2_1', 'cây con', 'seedling'], ['05_1_3', 'đặt cây', 'place the plant'], ['05_1_5', 'tưới nước', 'water'], ['03_1_8', 'sỏi', 'pebbles']],
  mind: { center: 'Trồng cây con vào chậu', ce: 'Planting', img: '05_1_3', extra: ['ngọn', 'nghiêng'], branches: [
    { label: 'Chọn cây con', le: 'Choose', color: '#3AA85A', img: '05_2_1', items: ['Thân {{thẳng}}, lá xanh', 'Không {{héo}}, không gãy ngọn', 'Không bị {{sâu}} ăn lá'] },
    { label: 'Các bước trồng', le: 'Steps', color: '#E08A1E', img: '05_1_4', items: ['Rải {{sỏi}} ở đáy chậu', 'Cho {{đất}} vào nửa chậu', 'Đặt cây con vào {{giữa}} chậu', '{{Lấp đất}}, ấn nhẹ quanh gốc', '{{Tưới nước}} nhẹ nhàng'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Em chọn cây con khoẻ để trồng.', o: [['05_2_1', ''], ['05_2_2', ''], ['05_2_3', ''], ['05_2_6', '']], a: 0, ex: 'Cây khoẻ: thân thẳng, lá xanh, không héo, không gãy, không sâu.' },
    { t: 'match', lv: 1, q: 'Nối hình cây con với nhận xét.', pairs: [[['05_2_2', ''], 'Cây bị héo'], [['05_2_3', ''], 'Cây gãy ngọn'], [['05_2_6', ''], 'Lá bị sâu ăn'], [['05_2_5', ''], 'Cây khoẻ, có nụ']] },
    { t: 'mcq', lv: 1, img: '05_1_1', q: 'Lan đang làm bước nào?', o: ['Rải sỏi ở đáy chậu', 'Tưới nước', 'Bón phân', 'Cắt tỉa lá'], a: 0 },
    { t: 'order', lv: 2, q: 'Sắp xếp các bước trồng cây con vào chậu.', items: [['05_1_1', 'Rải sỏi ở đáy chậu'], ['05_1_2', 'Cho đất vào chậu'], ['05_1_3', 'Đặt cây con vào giữa chậu'], ['05_1_4', 'Lấp đất, ấn nhẹ gốc'], ['05_1_5', 'Tưới nước']] },
    { t: 'mcq', lv: 2, q: 'Sau khi đặt cây vào chậu, vì sao cần ấn nhẹ đất quanh gốc?', o: ['Để cây đứng vững', 'Để đất bay đi', 'Để rễ lộ ra ngoài', 'Để chậu đẹp hơn'], a: 0 },
    { t: 'tf', lv: 2, q: 'Nên tưới nước nhẹ nhàng ngay sau khi trồng cây con.', a: true },
    { t: 'tf4', lv: 2, q: 'Mỗi ý sau đúng hay sai?', items: [['Đặt cây con nghiêng sát thành chậu.', false], ['Lấp đất kín gốc cây.', true], ['Chọn cây có lá xanh, thân thẳng.', true], ['Trồng cây con đang bị héo úa.', false]] },
    { t: 'mcq', lv: 3, ctx: 'Lan vừa trồng cây con xong, đến trưa thấy cây hơi rũ lá.', q: 'Lan nên làm gì?', o: ['Đặt chậu chỗ râm mát vài ngày, giữ đất đủ ẩm', 'Phơi chậu ngoài nắng gắt', 'Nhổ cây lên trồng lại nhiều lần', 'Không tưới nữa'], a: 0, ex: 'Cây mới trồng cần chỗ râm mát và đủ ẩm để bén rễ.' },
    { t: 'short', lv: 3, q: 'Ở đáy chậu, ta rải lớp gì để nước thừa thoát ra dễ dàng?', a: ['sỏi', 'lớp sỏi', 'đất nung', 'viên đất nung', 'leca'] },
    { t: 'essay', lv: 3, q: 'Em hãy nêu cách chọn một cây con khoẻ để trồng.', kw: [['than', 'thang'], ['xanh'], ['heo', 'sau', 'gay', 'benh']], kwn: ['Thân thẳng', 'Lá xanh', 'Không héo, sâu, gãy'], model: 'Cây con khoẻ có thân thẳng, cứng cáp, lá xanh tươi, không bị héo, không gãy ngọn và không bị sâu bệnh.' }
  ],
  tasks: ['Cùng người lớn trồng một cây con vào chậu theo 5 bước.', 'Đặt tên cho cây của em và dán nhãn lên chậu.', 'Vẽ cây ngày đầu tiên để so sánh sau 2 tuần.'] },
/* ───── 6 ───── */
{ n: 6, t: 1, title: 'Chăm sóc hoa, cây cảnh trong chậu', en: 'Caring for potted plants', cover: '06_1', sticker: '00_5_6',
  recall: [
    { img: '06_2_7', more: ['06_2_1', '06_2_2'], t: '**Tưới nước** đủ ẩm. Thiếu nước cây **héo**, đất nứt; tưới **quá nhiều** cây bị **úng**, vàng lá.', te: 'Water enough. Too little: wilting. Too much: rotting.' },
    { img: '06_2_4', more: ['06_2_3'], t: 'Đặt cây nơi có **ánh sáng** phù hợp. Thiếu sáng cây **vươn dài, yếu**; nắng quá gắt làm **cháy lá**.', te: 'Give the right amount of light.' },
    { img: '06_2_8', more: ['06_2_6'], t: '**Làm cỏ**: nhổ cỏ dại để cây không bị tranh nước và chất dinh dưỡng.', te: 'Pull out weeds.' },
    { img: '06_2_9', t: '**Bón phân** đúng lượng để cây lớn nhanh, ra nhiều hoa.', te: 'Add the right amount of fertiliser.' },
    { img: '06_2_5', t: 'Bắt **sâu**, cắt bỏ lá sâu, lá úa để cây khoẻ mạnh.', te: 'Remove pests and bad leaves.' },
    { img: '06_1', t: 'Thường xuyên **quan sát** cây để phát hiện sớm vấn đề. Em là **bác sĩ cây** nhí!', te: 'Check your plants often. Be a little plant doctor!' }
  ],
  keys: ['Chăm sóc: tưới nước, đặt nơi đủ sáng, làm cỏ, bón phân, bắt sâu, cắt lá hỏng.', 'Dấu hiệu: héo – thiếu nước; vàng úng – thừa nước; vươn dài – thiếu sáng; cháy lá – nắng gắt.'],
  w: [['06_2_7', 'tưới nước', 'water'], ['06_2_9', 'bón phân', 'fertilise'], ['06_2_8', 'nhổ cỏ', 'weed'], ['06_2_5', 'sâu', 'caterpillar'], ['06_2_4', 'ánh sáng', 'sunlight']],
  mind: { center: 'Chăm sóc hoa, cây cảnh', ce: 'Plant care', img: '06_2_7', extra: ['tưới ngập', 'bóng tối'], branches: [
    { label: 'Tưới nước', le: 'Water', color: '#2F8FD8', img: '06_2_1', items: ['Tưới đủ {{ẩm}}, không để úng', 'Thiếu nước, cây bị {{héo}}'] },
    { label: 'Ánh sáng', le: 'Light', color: '#E08A1E', img: '06_2_4', items: ['Thiếu sáng, cây {{vươn dài}}, yếu', 'Nắng quá gắt làm {{cháy lá}}'] },
    { label: 'Làm cỏ, bón phân', le: 'Weed, feed', color: '#3AA85A', img: '06_2_9', items: ['Nhổ {{cỏ dại}} quanh gốc', '{{Bón phân}} đúng lượng'] },
    { label: 'Phòng sâu bệnh', le: 'Pests', color: '#E0533D', img: '06_2_5', items: ['Bắt {{sâu}}, cắt lá bị hỏng', 'Thường xuyên {{quan sát}} cây'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, img: '06_2_1', q: 'Cây trong hình đang gặp vấn đề gì?', o: ['Thiếu nước', 'Thừa ánh sáng', 'Có quá nhiều hoa', 'Bị bón quá nhiều phân'], a: 0, ex: 'Đất nứt nẻ, lá héo rũ là dấu hiệu cây thiếu nước.' },
    { t: 'match', lv: 1, q: 'Bác sĩ cây: nối hình với “bệnh” của cây.', pairs: [[['06_2_2', ''], 'Tưới quá nhiều, cây bị úng'], [['06_2_3', ''], 'Thiếu ánh sáng'], [['06_2_5', ''], 'Bị sâu ăn lá'], [['06_2_6', ''], 'Nhiều cỏ dại']] },
    { t: 'mcq', lv: 1, img: '06_2_9', q: 'Lan đang làm công việc chăm sóc nào?', o: ['Bón phân', 'Tưới nước', 'Nhổ cỏ', 'Gieo hạt'], a: 0 },
    { t: 'mcq', lv: 2, q: 'Vì sao phải nhổ cỏ dại trong chậu cây?', o: ['Cỏ dại tranh nước và chất dinh dưỡng của cây', 'Cỏ dại giúp cây ra nhiều hoa', 'Cỏ dại làm đất tơi xốp', 'Để chậu nhẹ hơn'], a: 0 },
    { t: 'sort', lv: 2, q: 'Việc nào nên làm, việc nào không nên làm?', bins: ['Nên làm', 'Không nên làm'], items: [['Tưới nước khi đất khô', 0], ['Tưới ngập nước hằng ngày', 1], ['Bắt sâu trên lá', 0], ['Để cây trong tủ tối', 1], ['Nhổ cỏ dại quanh gốc', 0], ['Bón thật nhiều phân một lúc', 1]] },
    { t: 'tf', lv: 2, img: '06_2_4', q: 'Để cây dưới nắng gắt cả ngày làm lá cây bị cháy, khô mép.', a: true },
    { t: 'tf4', lv: 2, q: 'Mỗi ý sau đúng hay sai?', items: [['Nên tưới cây vào sáng sớm hoặc chiều mát.', true], ['Cây thiếu ánh sáng sẽ vươn dài, yếu.', true], ['Lá vàng úa cứ để nguyên, không cần cắt.', false], ['Bón phân càng nhiều cây càng tốt.', false]] },
    { t: 'mcq', lv: 3, img: '06_2_3', ctx: 'Chậu cúc của Lan đặt trong góc phòng tối. Thân cây mọc dài, gầy, nghiêng về phía cửa sổ.', q: 'Em khuyên Lan làm gì?', o: ['Chuyển chậu ra chỗ có nhiều ánh sáng hơn', 'Tưới thêm thật nhiều nước', 'Cắt bỏ hết lá', 'Bón thêm nhiều phân'], a: 0 },
    { t: 'mcq', lv: 3, ctx: 'Gia đình Lan đi chơi 3 ngày, không ai ở nhà tưới cây.', q: 'Cách nào giúp chậu cây không bị khô héo?', o: ['Tưới đủ ẩm trước khi đi, đặt chậu nơi râm mát có đĩa lót giữ nước', 'Phơi chậu ngoài nắng', 'Đổ ngập nước rồi bịt kín chậu', 'Cắt hết lá cây'], a: 0 },
    { t: 'essay', lv: 3, q: 'Cây hoa của em có lá bị sâu ăn thủng lỗ chỗ. Em sẽ chăm sóc cây thế nào?', kw: [['sau'], ['cat', 'tia', 'ngat', 'bo la'], ['quan sat', 'theo doi', 'kiem tra', 'nguoi lon']], kwn: ['Bắt sâu', 'Cắt bỏ lá hỏng', 'Theo dõi cây, nhờ người lớn'], model: 'Em đeo găng tay bắt sâu trên lá, cắt bỏ những lá bị hỏng, rồi hằng ngày quan sát cây. Nếu sâu nhiều thì em nhờ người lớn giúp.' }
  ],
  tasks: ['Lập bảng theo dõi: mỗi ngày ghi đã tưới nước, nhổ cỏ, bắt sâu cho cây chưa.', 'Làm “bác sĩ cây”: kiểm tra một chậu cây ở nhà và nói cây đang khoẻ hay cần giúp gì.', 'Hướng dẫn em nhỏ hoặc bạn bè cách tưới cây đúng cách.'] },
/* ───── 7 ★ ───── */
{ n: 7, t: 2, star: true, exam: true, title: 'Đề ôn cuối học kì 1', en: 'End-of-term practice test', cover: '01_2_8', sticker: '00_3_6',
  examTitle: 'Đề ôn kiểm tra cuối học kì 1 – Công nghệ 4', examNote: 'Phần I: 8 câu trắc nghiệm. Phần II: Đúng/Sai, sắp xếp, tình huống và thiết kế góc học tập xanh. Câu hỏi theo 3 mức: Nhận biết, Kết nối, Vận dụng.',
  recall: [
    { img: '🌱', fit: true, t: '**Gieo hạt** trong chậu: cho đất vào chậu, **gieo hạt** đều, phủ một lớp **đất mỏng**, rồi **tưới nhẹ** cho đất ẩm.', te: 'Sow seeds, cover with a thin layer of soil, water gently.' },
    { img: '03_1_8', fit: true, t: 'Viên **đất nung (Leca)** nhẹ, **xốp**, lót đáy chậu giúp **thoát nước**, rễ cây **thoáng khí**.', te: 'Light clay balls help water drain and roots breathe.' },
    { img: '♻️', fit: true, t: '**Chậu tái chế** từ chai nhựa: nhờ người lớn **đục lỗ** hoặc khoét **rãnh chữ V** ở đáy cho nước thoát.', te: 'Recycled bottle pots need holes at the bottom.' },
    { img: '01_2_8', t: 'Cây xanh ở **góc học tập** giúp **lọc không khí**, mát mắt, giúp em **thư giãn** khi học.', te: 'Plants on your desk clean the air and relax your eyes.' },
    { img: '02_1_12', fit: true, more: ['02_1_9'], t: 'Góc học tập nên chọn cây **nhỏ, dễ sống, ít tưới**: sen đá, xương rồng, lưỡi hổ, nha đam. Đặt gần **cửa sổ** có ánh sáng.', te: 'Choose small, easy plants and put them near a window.' },
    { img: '🍽️', fit: true, more: ['03_1_11'], t: 'Đặt **đĩa lót** dưới chậu để hứng nước, giữ bàn khô ráo; tưới lá nhẹ bằng **bình phun sương**.', te: 'Use a saucer under the pot and a spray bottle.' }
  ],
  keys: ['Ôn lại cả 6 chặng: lợi ích, các loại hoa cây cảnh, vật liệu dụng cụ, gieo hạt, trồng cây con, chăm sóc.', 'Dạng đề: trắc nghiệm A, B, C, D; Đúng/Sai; sắp xếp; tình huống; thiết kế góc học tập xanh.'],
  w: [['🌱', 'gieo hạt', 'sow seeds'], ['03_1_8', 'viên đất nung', 'clay balls'], ['♻️', 'tái chế', 'recycle'], ['01_2_8', 'góc học tập', 'study corner'], ['🍽️', 'đĩa lót', 'saucer']],
  mind: { center: 'Góc học tập xanh của em', ce: 'My green study corner', img: '01_2_8', extra: ['tủ tối', 'cây thật to'], branches: [
    { label: 'Chọn cây', le: 'Plant', color: '#3AA85A', img: '02_1_9', items: ['Cây nhỏ, {{dễ sống}}, ít tưới', 'Ví dụ: sen đá, {{lưỡi hổ}}, nha đam'] },
    { label: 'Chọn chậu', le: 'Pot', color: '#E08A1E', img: '03_1_1', items: ['Chậu {{đất nung}} hoặc chậu tái chế', 'Đáy chậu có {{lỗ}} thoát nước', 'Lót đáy bằng viên {{Leca}}'] },
    { label: 'Vị trí', le: 'Place', color: '#2F8FD8', img: '01_2_3', items: ['Gần {{cửa sổ}}, có ánh sáng', 'Đặt {{đĩa lót}} hứng nước'] },
    { label: 'Lợi ích', le: 'Benefits', color: '#E0533D', img: '01_2_8', items: ['{{Lọc}} không khí', 'Giúp mắt {{thư giãn}}'] }
  ] },
  q: [
    { part: 'Phần I · Câu 1', t: 'mcq', lv: 1, pt: 1, q: 'Sau khi gieo hạt vào chậu, em cần làm gì tiếp theo?', o: ['Phủ một lớp đất mỏng lên hạt rồi tưới nhẹ', 'Đổ thật nhiều nước cho ngập chậu', 'Đè chặt đất bằng vật nặng', 'Để chậu khô, không tưới'], a: 0, ex: 'Lớp đất mỏng giữ ẩm cho hạt, tưới nhẹ để hạt không bị trôi.' },
    { part: 'Phần I · Câu 2', t: 'mcq', lv: 1, pt: 1, q: 'Viên đất nung (Leca) lót ở đáy chậu có tác dụng gì?', o: ['Giúp thoát nước, rễ cây thoáng khí', 'Làm chậu nặng hơn', 'Thay cho phân bón', 'Giữ nước làm đất luôn ngập'], a: 0 },
    { part: 'Phần I · Câu 3', t: 'mcq', lv: 1, pt: 1, q: 'Khi dùng chai nhựa làm chậu tái chế, cần làm gì ở đáy chai?', o: ['Đục lỗ hoặc khoét rãnh để nước thoát ra', 'Dán kín đáy bằng băng dính', 'Đổ đầy cát cho nặng', 'Không cần làm gì'], a: 0 },
    { part: 'Phần I · Câu 4', t: 'mcq', lv: 1, pt: 1, q: 'Đặt cây xanh ở góc học tập mang lại lợi ích gì?', o: ['Lọc không khí, giúp mắt thư giãn', 'Làm phòng tối hơn', 'Làm bàn học chật chội', 'Thu hút muỗi'], a: 0 },
    { part: 'Phần I · Câu 5', t: 'mcq', lv: 1, pt: 1, q: 'Loài cây nào hợp đặt trên bàn học vì nhỏ, dễ sống, ít phải tưới?', o: ['Sen đá', 'Cây phượng', 'Cây đào to', 'Cây hoa sen'], a: 0 },
    { part: 'Phần I · Câu 6', t: 'mcq', lv: 2, pt: 1, q: 'Vì sao nên đặt chậu cây ở góc học tập gần cửa sổ?', o: ['Vì cây cần ánh sáng để sống khoẻ', 'Để cây dễ bị rơi', 'Để che hết ánh sáng', 'Để cây không cần tưới'], a: 0 },
    { part: 'Phần I · Câu 7', t: 'mcq', lv: 2, pt: 1, q: 'Dụng cụ nào giúp tưới nhẹ, đều lên lá cây nhỏ trên bàn học?', o: ['Bình phun sương', 'Xô nước', 'Vòi nước lớn', 'Xẻng nhỏ'], a: 0 },
    { part: 'Phần I · Câu 8', t: 'mcq', lv: 2, pt: 1, q: 'Đặt đĩa lót dưới chậu cây trên bàn học để làm gì?', o: ['Hứng nước thừa, giữ bàn học khô ráo', 'Để chậu cao hơn', 'Chỉ để trang trí', 'Để cây không cần tưới'], a: 0 },
    { part: 'Phần II · Câu 9', t: 'tf4', lv: 2, q: 'Bin chuẩn bị trồng cây cho góc học tập. Mỗi ý sau đúng hay sai?', items: [['Chọn cây lưỡi hổ vì dễ sống, lọc không khí.', true], ['Dùng chậu kín đáy để nước không chảy ra bàn.', false], ['Đặt chậu trong góc tủ tối cho cây khỏi héo.', false], ['Lót đáy chậu bằng viên đất nung Leca.', true]] },
    { part: 'Phần II · Câu 10', t: 'order', lv: 2, q: 'Sắp xếp các bước trồng cây con trong chậu.', items: ['Rải sỏi ở đáy chậu', 'Cho đất vào khoảng một nửa chậu', 'Đặt cây con vào giữa chậu', 'Lấp đất, ấn nhẹ quanh gốc', 'Tưới nhẹ nước cho đất ẩm'] },
    { part: 'Phần II · Câu 11', t: 'mcq', lv: 3, ctx: 'Chậu cây trên bàn học của Lan bị vàng lá, đất lúc nào cũng sũng nước, đáy chậu không có lỗ.', q: 'Cách khắc phục đúng nhất là gì?', o: ['Đổi sang chậu có lỗ thoát nước, lót viên Leca, tưới ít lại', 'Tưới thêm nhiều nước', 'Đặt chậu vào tủ tối', 'Bón thật nhiều phân'], a: 0 },
    { part: 'Phần II · Câu 12', t: 'essay', lv: 3, pt: 2, q: 'Em hãy thiết kế góc học tập xanh: chọn cây gì, chậu gì, đặt ở đâu, chăm sóc thế nào? Giải thích ngắn gọn.', kw: [['sen da', 'luoi ho', 'nha dam', 'xuong rong', 'trau ba', 'kim tien'], ['dat nung', 'tai che', 'chau'], ['cua so', 'anh sang'], ['dia lot', 'phun suong', 'tuoi']], kwn: ['Chọn cây phù hợp', 'Chọn chậu', 'Vị trí có ánh sáng', 'Cách chăm sóc'], model: 'Em chọn cây lưỡi hổ vì cây nhỏ, dễ sống, lọc không khí. Em trồng trong chậu đất nung có lỗ thoát nước, lót viên Leca ở đáy. Em đặt chậu gần cửa sổ để cây có ánh sáng, dưới chậu có đĩa lót hứng nước. Mỗi tuần em phun sương và tưới ít nước khi đất khô.' }
  ],
  tasks: ['Gieo vài hạt đậu vào chậu nhỏ, tưới nhẹ mỗi ngày và ghi lại ngày hạt nảy mầm.', 'Vẽ sơ đồ góc học tập xanh của em: bàn học, cửa sổ, chậu cây.', 'Làm một chậu cây tái chế từ chai nhựa (nhờ người lớn đục lỗ).'] }
];
