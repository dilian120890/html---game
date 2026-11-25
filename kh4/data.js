/* Khoa học 4 · Kết nối tri thức · Ôn tập học kì 1 — "Phòng thí nghiệm nhí" */
const APP = {
  id: 'kh4', name: 'Phòng thí nghiệm nhí', nameEn: 'Little science lab', sub: 'Ôn tập Khoa học 4 · Học kì 1',
  school: 'th', bilingual: true,
  hero: 'hero', finale: 'finale', mascot: '🧑‍🔬',
  poses: { hi: '🧑‍🔬', think: '🤔', good: '🥳', try: '💪', win: '🏆' },
  theme: { main: '#2F8FD8', 'main-d': '#1F6AA8', soft: '#DDEFFC', accent: '#F2A33A' },
  intro: 'Chào các bạn! Mình là <b>nhà khoa học nhí Minh</b>. Phòng thí nghiệm có 6 góc khám phá: <b>nước</b>, <b>không khí</b>, <b>gió</b>, <b>ánh sáng</b>, <b>âm thanh</b> và <b>nhiệt</b>. Mỗi chặng có 4 bước: <b>đọc kiến thức cần nhớ</b>, <b>điền sơ đồ tư duy</b>, <b>trả lời câu hỏi ôn tập</b> và <b>vận dụng</b>. Cuối cùng là đề ôn cuối học kì 1. Bắt đầu thôi!',
  introEn: "Hi! I'm Minh, a little scientist. Explore water, air, wind, light, sound and heat with me!"
};
const SVGS = {
  hero: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE6FF"/><stop offset="1" stop-color="#EAF7FF"/></linearGradient></defs><rect width="800" height="420" fill="url(#s)"/><circle cx="680" cy="80" r="48" fill="#FFD43B"/><g stroke="#FFD43B" stroke-width="8" stroke-linecap="round"><path d="M680 10v-0M680 150v10M610 80h-14M764 80h14M630 30l-10-10M730 130l10 10M730 30l10-10M630 130l-10 10"/></g><g fill="#fff"><ellipse cx="170" cy="90" rx="70" ry="30"/><ellipse cx="220" cy="75" rx="50" ry="32"/><ellipse cx="420" cy="70" rx="60" ry="24"/></g><g fill="#5BB8F5"><path d="M190 140c0 0-12 18-12 26a12 12 0 0 0 24 0c0-8-12-26-12-26z"/><path d="M230 150c0 0-10 15-10 22a10 10 0 0 0 20 0c0-7-10-22-10-22z"/></g><rect y="320" width="800" height="100" fill="#8FD67A"/><path d="M0 350 Q200 320 400 350 T800 340 V420 H0z" fill="#6CC05A"/><g transform="translate(120 230)"><rect x="-6" y="0" width="12" height="100" fill="#8A6A4A"/><g fill="#F26B4F"><path d="M0 0 L-50 -20 L-10 -10z"/><path d="M0 0 L20 -50 L10 -10z"/><path d="M0 0 L50 20 L10 10z"/><path d="M0 0 L-20 50 L-10 10z"/></g><circle r="7" fill="#333"/></g><g transform="translate(330 250)"><rect x="-4" y="0" width="8" height="80" fill="#666"/><path d="M-60 0h120" stroke="#666" stroke-width="5"/><path d="M-60 -18a18 18 0 0 0 0 36z" fill="#F2A33A"/><path d="M60 -18a18 18 0 0 1 0 36z" fill="#F2A33A"/></g><g transform="translate(520 230)" fill="none" stroke="#7B5CD6" stroke-width="6" stroke-linecap="round"><path d="M0 30 a30 30 0 0 1 0 -60"/><path d="M-20 45 a50 50 0 0 1 0 -90"/><circle cx="25" cy="0" r="14" fill="#7B5CD6"/></g><g transform="translate(640 250)"><path d="M0 0 L120 -60" stroke="#FFD43B" stroke-width="8" stroke-linecap="round"/><path d="M0 0 L120 60" stroke="#FFD43B" stroke-width="8" stroke-linecap="round" opacity=".6"/><rect x="-30" y="-14" width="34" height="28" rx="6" fill="#444"/></g></svg>`,
  finale: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420"><rect width="800" height="420" fill="#FFF4D6"/><g fill="#F2A33A"><circle cx="100" cy="80" r="10"/><circle cx="700" cy="70" r="12"/><circle cx="640" cy="330" r="9"/><circle cx="160" cy="320" r="11"/></g><g fill="#2F8FD8"><rect x="200" y="60" width="14" height="14" transform="rotate(20 207 67)"/><rect x="580" y="120" width="14" height="14" transform="rotate(40 587 127)"/><rect x="90" y="200" width="14" height="14"/></g><path d="M330 120h140v60a70 70 0 0 1-140 0z" fill="#FFC531" stroke="#D99A00" stroke-width="6"/><path d="M330 135h-40a40 40 0 0 0 40 50M470 135h40a40 40 0 0 1-40 50" fill="none" stroke="#D99A00" stroke-width="8"/><rect x="385" y="245" width="30" height="40" fill="#D99A00"/><rect x="340" y="285" width="120" height="26" rx="6" fill="#8A6A4A"/><text x="400" y="185" font-size="56" text-anchor="middle" font-family="sans-serif">★</text><text x="400" y="370" font-size="34" text-anchor="middle" font-family="sans-serif" font-weight="700" fill="#1F6AA8">Nhà khoa học nhí xuất sắc!</text></svg>`
};
const TOPICS = [
  { name: 'Chất: Nước và không khí', en: 'Matter: water and air', color: '#2F8FD8', soft: '#DDEFFC' },
  { name: 'Năng lượng: Ánh sáng, âm thanh, nhiệt', en: 'Energy: light, sound, heat', color: '#F2A33A', soft: '#FFF0D6' },
  { name: 'Ôn tập cuối học kì 1', en: 'End-of-term review', color: '#E0533D', soft: '#FFE6DF' }
];
const STAGES = [
/* ───── 1 NƯỚC ───── */
{ n: 1, t: 0, title: 'Nước: tính chất, sự chuyển thể và bảo vệ nguồn nước', en: 'Water', cover: '💧', sticker: '💧',
  recall: [
    { img: '💧', fit: true, t: 'Nước tinh khiết **trong suốt, không màu, không mùi, không vị**. Nước **không có hình dạng nhất định**, chảy từ **cao xuống thấp**, lan ra mọi phía.', te: 'Pure water is clear, colourless, odourless and tasteless. It flows downward and spreads out.' },
    { img: '🧽', fit: true, t: 'Nước **thấm qua** một số vật (vải, giấy, bọt biển, đất) và **hoà tan** một số chất (muối, đường).', te: 'Water soaks into cloth, paper and sponge, and dissolves salt and sugar.' },
    { img: '🌼', fit: true, t: 'Cắm bông hoa trắng vào cốc nước pha màu: nước màu đi lên theo **những ống rất nhỏ** trong thân, làm cánh hoa đổi màu. Nhờ vậy cây hút nước từ rễ lên lá.', te: 'Coloured water travels up tiny tubes in the stem, so the white flower changes colour.' },
    { img: '🧊', fit: true, t: 'Nước có **3 thể**: **rắn** (nước đá), **lỏng** (nước), **khí** (hơi nước). Lỏng → khí: **bay hơi**. Khí → lỏng: **ngưng tụ**. Lỏng → rắn: **đông đặc**. Rắn → lỏng: **nóng chảy**.', te: 'Water has 3 states. Evaporation, condensation, freezing, melting.' },
    { img: '🌧️', fit: true, t: '**Vòng tuần hoàn của nước**: nước bay hơi → hơi nước bốc lên cao gặp lạnh **ngưng tụ** thành mây → **mưa** rơi xuống → chảy ra sông, biển, rồi lại bay hơi.', te: 'Water cycle: evaporation → clouds → rain → rivers and seas.' },
    { img: '🚰', fit: true, t: 'Bảo vệ nguồn nước: **không vứt rác**, xả nước thải bừa bãi; **tiết kiệm nước**. Làm sạch nước bằng **lọc**, **đun sôi** trước khi uống.', te: 'Protect water: no litter, save water, filter and boil it before drinking.' }
  ],
  keys: ['Tính chất: trong suốt, không màu, không mùi, không vị; chảy từ cao xuống thấp; thấm qua, hoà tan một số chất.', '3 thể của nước và 4 quá trình chuyển thể.', 'Vòng tuần hoàn: bay hơi → ngưng tụ → mưa.', 'Bảo vệ, tiết kiệm và làm sạch nước.'],
  w: [['💧', 'nước', 'water'], ['🧊', 'nước đá', 'ice'], ['♨️', 'hơi nước', 'water vapour'], ['☁️', 'mây', 'cloud'], ['🌧️', 'mưa', 'rain'], ['🚰', 'tiết kiệm nước', 'save water']],
  mind: { center: 'Nước', ce: 'Water', img: '💧', extra: ['có màu trắng', 'nóng chảy thành mây'], branches: [
    { label: 'Tính chất', le: 'Properties', color: '#2F8FD8', img: '💧', items: ['Trong suốt, không {{màu}}, không mùi, không vị', 'Chảy từ {{cao}} xuống thấp', '{{Hoà tan}} muối, đường'] },
    { label: 'Chuyển thể', le: 'States', color: '#7B5CD6', img: '🧊', items: ['Lỏng → khí: {{bay hơi}}', 'Khí → lỏng: {{ngưng tụ}}', 'Lỏng → rắn: {{đông đặc}}'] },
    { label: 'Vòng tuần hoàn', le: 'Water cycle', color: '#3AA85A', img: '🌧️', items: ['Hơi nước ngưng tụ thành {{mây}}', 'Mây tạo thành {{mưa}} rơi xuống'] },
    { label: 'Bảo vệ', le: 'Protect', color: '#E0533D', img: '🚰', items: ['Không vứt {{rác}} xuống sông, hồ', '{{Đun sôi}} nước trước khi uống'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Nước tinh khiết có tính chất nào sau đây?', o: ['Trong suốt, không màu, không mùi, không vị', 'Màu trắng đục, vị ngọt', 'Màu xanh, có mùi thơm', 'Không màu, vị mặn'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Nước ở thể lỏng biến thành hơi nước gọi là gì?', o: ['Bay hơi', 'Ngưng tụ', 'Đông đặc', 'Nóng chảy'], a: 0 },
    { t: 'tf', lv: 1, q: 'Nước chảy từ chỗ thấp lên chỗ cao.', a: false, ex: 'Nước chảy từ cao xuống thấp.' },
    { t: 'match', lv: 1, q: 'Nối mỗi quá trình với sự chuyển thể đúng.', pairs: [['Bay hơi', 'Lỏng → khí'], ['Ngưng tụ', 'Khí → lỏng'], ['Đông đặc', 'Lỏng → rắn'], ['Nóng chảy', 'Rắn → lỏng']] },
    { t: 'mcq', lv: 2, q: 'Đặt đĩa lạnh trên cốc nước nóng, dưới đĩa có những giọt nước. Đó là quá trình nào?', o: ['Ngưng tụ', 'Bay hơi', 'Đông đặc', 'Nóng chảy'], a: 0, ex: 'Hơi nước gặp đĩa lạnh ngưng tụ thành giọt nước.' },
    { t: 'order', lv: 2, q: 'Sắp xếp các bước của vòng tuần hoàn của nước.', items: ['Nước ở sông, biển bay hơi', 'Hơi nước bốc lên cao, gặp lạnh', 'Hơi nước ngưng tụ thành mây', 'Mưa rơi xuống, chảy ra sông, biển'] },
    { t: 'sort', lv: 2, q: 'Xếp mỗi vật vào đúng nhóm.', bins: ['Nước thấm qua', 'Nước không thấm qua'], items: [['Khăn vải', 0], ['Túi ni-lông', 1], ['Giấy ăn', 0], ['Cốc thuỷ tinh', 1], ['Bọt biển', 0], ['Áo mưa', 1]] },
    { t: 'short', lv: 2, q: 'Hoà muối vào nước, khuấy đều thì không thấy muối nữa. Nước có tính chất gì?', a: ['hoà tan', 'hoa tan', 'hoà tan muối', 'hoa tan mot so chat', 'hoà tan một số chất'] },
    { t: 'mcq', lv: 3, ctx: 'Nhà Lan dùng nước giếng hơi đục.', q: 'Lan nên làm gì để có nước uống an toàn?', o: ['Lọc nước cho trong rồi đun sôi', 'Uống ngay vì nước giếng sạch', 'Cho thêm đường vào nước', 'Để nước ngoài nắng một lúc'], a: 0 },
    { t: 'essay', lv: 3, q: 'Cắm một bông cúc trắng vào cốc nước pha màu đỏ. Sau một đêm, cánh hoa có màu đỏ. Em hãy giải thích vì sao.', kw: [['ong nho', 'ong rat nho', 'than', 'cuong', 'di len', 'hut'], ['canh hoa', 'len hoa', 'mau do', 'doi mau']], kwn: ['Nước màu đi lên theo ống nhỏ trong thân', 'Lên đến cánh hoa làm hoa đổi màu'], model: 'Nước màu đỏ đi lên theo những ống rất nhỏ trong thân hoa, lên đến cánh hoa nên cánh hoa có màu đỏ. Nhờ vậy cây hút được nước từ rễ đi lên thân và lá.' }
  ],
  tasks: ['Làm thí nghiệm cắm cọng cần tây hoặc bông hoa trắng vào cốc nước pha màu, quan sát sau một ngày.', 'Vẽ sơ đồ vòng tuần hoàn của nước vào vở.', 'Ghi lại 3 việc em làm để tiết kiệm nước ở nhà.'] },
/* ───── 2 KHÔNG KHÍ ───── */
{ n: 2, t: 0, title: 'Không khí: có ở đâu, tính chất và thành phần', en: 'Air', cover: '🎈', sticker: '🎈',
  recall: [
    { img: '🫧', fit: true, t: 'Không khí có ở **xung quanh ta** và trong **mọi chỗ rỗng** của vật. Ấn chai rỗng xuống nước hoặc bóp miếng bọt biển trong nước, ta thấy **bọt khí** nổi lên.', te: 'Air is all around us and inside empty spaces. Bubbles show it.' },
    { img: '🎈', fit: true, t: 'Không khí **trong suốt, không màu, không mùi, không vị**, **không có hình dạng** nhất định. Không khí có thể bị **nén lại** và **giãn ra**.', te: 'Air is clear and has no colour, smell or taste. It can be squeezed and can expand.' },
    { img: '🫁', fit: true, t: 'Thành phần chính: **ni-tơ** và **ô-xi**. Ngoài ra có **khí các-bô-níc**, hơi nước, bụi. **Ô-xi** cần cho sự **cháy** và sự **thở**.', te: 'Air is mainly nitrogen and oxygen. Oxygen is needed for burning and breathing.' },
    { img: '🎈', fit: true, t: 'Bóng bay bơm **khí heli** tự bay lên vì khí heli **nhẹ hơn không khí**.', te: 'Helium balloons rise because helium is lighter than air.' },
    { img: '🏭', fit: true, t: 'Không khí bị **ô nhiễm** do khói bụi xe cộ, nhà máy, đốt rác. Bảo vệ không khí: **trồng cây xanh**, đi xe đạp, **không đốt rác**, đeo khẩu trang.', te: 'Smoke and dust pollute the air. Plant trees and do not burn rubbish.' }
  ],
  keys: ['Không khí có ở xung quanh và trong chỗ rỗng của vật.', 'Tính chất: trong suốt, không màu, không mùi, không vị; bị nén và giãn ra.', 'Thành phần: ni-tơ, ô-xi (cần cho sự cháy, sự thở), khí các-bô-níc.', 'Bảo vệ bầu không khí trong lành.'],
  w: [['🌬️', 'không khí', 'air'], ['🫧', 'bọt khí', 'air bubble'], ['🫁', 'ô-xi', 'oxygen'], ['🎈', 'khí heli', 'helium'], ['🏭', 'ô nhiễm', 'pollution'], ['🌳', 'cây xanh', 'green trees']],
  mind: { center: 'Không khí', ce: 'Air', img: '🌬️', extra: ['có màu xanh', 'chỉ có ô-xi'], branches: [
    { label: 'Có ở đâu', le: 'Where', color: '#2F8FD8', img: '🫧', items: ['Xung quanh mọi {{vật}}', 'Trong các {{chỗ rỗng}} của vật'] },
    { label: 'Tính chất', le: 'Properties', color: '#7B5CD6', img: '🎈', items: ['Trong suốt, không màu, không {{mùi}}', 'Có thể bị {{nén}} lại và giãn ra'] },
    { label: 'Thành phần', le: 'Parts', color: '#3AA85A', img: '🫁', items: ['Chủ yếu là ni-tơ và {{ô-xi}}', 'Ô-xi cần cho sự {{cháy}} và sự thở'] },
    { label: 'Bảo vệ', le: 'Protect', color: '#E0533D', img: '🌳', items: ['Trồng {{cây xanh}}', 'Không {{đốt rác}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Ấn chai nhựa rỗng (không nắp) xuống chậu nước thấy bọt khí nổi lên. Điều đó cho thấy:', o: ['Trong chỗ rỗng của chai có không khí', 'Trong chai có nước', 'Nước biến thành không khí', 'Chai tự sinh ra khí'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Khí nào trong không khí cần cho sự cháy và sự thở?', o: ['Ô-xi', 'Ni-tơ', 'Khí heli', 'Hơi nước'], a: 0 },
    { t: 'tf4', lv: 1, q: 'Mỗi ý sau về không khí đúng hay sai?', items: [['Không khí trong suốt, không màu.', true], ['Không khí có mùi thơm.', false], ['Không khí có thể bị nén lại.', true], ['Không khí chỉ có ở ngoài trời.', false]] },
    { t: 'short', lv: 1, q: 'Bóng bay bơm khí gì thì tự bay lên cao?', a: ['heli', 'khí heli', 'khi heli', 'helium'] },
    { t: 'mcq', lv: 2, q: 'Vì sao bơm xe đạp đẩy được nhiều không khí vào săm xe?', o: ['Vì không khí có thể bị nén lại', 'Vì không khí có màu', 'Vì không khí nặng hơn nước', 'Vì không khí có hình dạng nhất định'], a: 0 },
    { t: 'sort', lv: 2, q: 'Xếp mỗi việc vào đúng nhóm.', bins: ['Làm ô nhiễm không khí', 'Bảo vệ không khí'], items: [['Đốt rác ngoài đường', 0], ['Trồng cây xanh', 1], ['Khói xe máy cũ', 0], ['Đi xe đạp đến trường', 1], ['Khói nhà máy chưa lọc', 0], ['Tưới nước đường để giảm bụi', 1]] },
    { t: 'mcq', lv: 2, q: 'Úp cốc thuỷ tinh lên ngọn nến đang cháy, một lúc sau nến tắt. Vì sao?', o: ['Hết ô-xi trong cốc để duy trì sự cháy', 'Cốc làm nến lạnh đi', 'Nến hết sáp', 'Có gió thổi tắt'], a: 0 },
    { t: 'match', lv: 2, q: 'Nối thí nghiệm với điều nó chứng minh.', pairs: [['Bóp bọt biển trong nước thấy bọt khí', 'Chỗ rỗng có không khí'], ['Bơm hơi vào quả bóng', 'Không khí bị nén lại'], ['Nến tắt khi úp cốc', 'Ô-xi cần cho sự cháy'], ['Bóng heli bay lên', 'Heli nhẹ hơn không khí']] },
    { t: 'mcq', lv: 3, ctx: 'Gần trường em có bãi rác hay bị đốt, khói bay vào lớp học.', q: 'Việc làm nào phù hợp nhất?', o: ['Báo người lớn, trồng thêm cây xanh và đề nghị không đốt rác', 'Đóng hết cửa và bật quạt thật to', 'Cùng đốt thêm rác cho nhanh hết', 'Không cần làm gì'], a: 0 },
    { t: 'essay', lv: 3, q: 'Em hãy nêu 2 việc em có thể làm để bảo vệ bầu không khí trong lành.', kw: [['trong cay', 'cay xanh'], ['khong dot', 'xe dap', 'di bo', 'khau trang', 'tat', 've sinh', 'quet', 'rac']], kwn: ['Trồng, chăm sóc cây xanh', 'Một việc khác (không đốt rác, đi xe đạp…)'], model: 'Em trồng và chăm sóc cây xanh ở nhà, ở trường. Em đi bộ hoặc đi xe đạp đến trường và không đốt rác.' }
  ],
  tasks: ['Làm thí nghiệm bóp miếng bọt biển trong chậu nước và kể lại điều em thấy.', 'Đếm số cây xanh quanh nhà em và đề xuất trồng thêm một cây.', 'Vẽ tranh "Bầu không khí trong lành".'] },
/* ───── 3 GIÓ ───── */
{ n: 3, t: 0, title: 'Gió, bão và mô hình đo sức gió', en: 'Wind and storms', cover: '🌬️', sticker: '🪁',
  recall: [
    { img: '🌬️', fit: true, t: '**Gió** là **không khí chuyển động**. Không khí chuyển động từ **nơi lạnh** đến **nơi nóng**.', te: 'Wind is moving air. Air moves from cold places to warm places.' },
    { img: '🪁', fit: true, t: 'Gió có lợi: làm **diều bay**, **quay chong chóng**, đẩy thuyền buồm, **tạo ra điện** (tua-bin gió), làm khô quần áo.', te: 'Wind flies kites, spins pinwheels, pushes sailboats and makes electricity.' },
    { img: '🌀', fit: true, t: '**Bão** là gió rất mạnh, kèm mưa lớn, gây **đổ cây, tốc mái nhà**. Phòng chống bão: nghe **dự báo thời tiết**, gia cố nhà cửa, **ở trong nhà** an toàn, tránh xa cây to, cột điện.', te: 'Storms are very strong winds. Listen to forecasts and stay safely indoors.' },
    { img: '🎡', fit: true, t: '**Phong kế** (máy đo gió) gồm các **cốc nhỏ** gắn trên trục. Gió càng mạnh, cốc **quay càng nhanh**.', te: 'An anemometer has small cups. The stronger the wind, the faster it spins.' },
    { img: '🔧', fit: true, t: 'Mô hình bị **kẹt** không quay: nới lỏng trục cho **ít ma sát**, xoay các miệng cốc **cùng một chiều** để đón gió.', te: 'If the model sticks, loosen the axle and turn all cups the same way.' }
  ],
  keys: ['Gió là không khí chuyển động, từ nơi lạnh đến nơi nóng.', 'Lợi ích của gió và tác hại của bão.', 'Cách phòng chống bão.', 'Phong kế đo sức gió: gió mạnh, cốc quay nhanh.'],
  w: [['🌬️', 'gió', 'wind'], ['🌀', 'bão', 'storm'], ['🪁', 'cánh diều', 'kite'], ['🎡', 'phong kế', 'anemometer'], ['📻', 'dự báo thời tiết', 'weather forecast']],
  mind: { center: 'Gió', ce: 'Wind', img: '🌬️', extra: ['từ nơi nóng đến nơi lạnh', 'ra đồng xem bão'], branches: [
    { label: 'Gió là gì', le: 'What', color: '#2F8FD8', img: '🌬️', items: ['Không khí {{chuyển động}}', 'Từ nơi {{lạnh}} đến nơi nóng'] },
    { label: 'Lợi ích', le: 'Uses', color: '#3AA85A', img: '🪁', items: ['Thả {{diều}}, quay chong chóng', 'Tua-bin gió tạo ra {{điện}}'] },
    { label: 'Bão', le: 'Storms', color: '#E0533D', img: '🌀', items: ['Gió rất {{mạnh}}, mưa lớn', 'Nghe {{dự báo}} thời tiết, ở trong nhà'] },
    { label: 'Đo sức gió', le: 'Measure', color: '#F2A33A', img: '🎡', items: ['Dụng cụ: {{phong kế}}', 'Gió mạnh, cốc quay càng {{nhanh}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Gió được hình thành do không khí chuyển động từ:', o: ['Nơi lạnh đến nơi nóng', 'Nơi nóng đến nơi lạnh', 'Dưới đất lên trời', 'Nơi có cây đến nơi không có cây'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Dụng cụ dùng để đo sức gió gọi là gì?', o: ['Phong kế', 'Nhiệt kế', 'Đồng hồ', 'Kính lúp'], a: 0 },
    { t: 'tf', lv: 1, q: 'Gió là không khí chuyển động.', a: true },
    { t: 'sort', lv: 2, q: 'Xếp mỗi điều vào đúng nhóm.', bins: ['Lợi ích của gió', 'Tác hại của bão'], items: [['Làm diều bay cao', 0], ['Làm đổ cây, tốc mái nhà', 1], ['Quay tua-bin tạo ra điện', 0], ['Làm đứt dây điện', 1], ['Làm khô quần áo', 0], ['Làm chìm thuyền', 1]] },
    { t: 'mcq', lv: 2, q: 'Khi đưa phong kế từ chỗ gió nhẹ ra chỗ gió mạnh, các cốc sẽ:', o: ['Quay nhanh hơn', 'Quay chậm hơn', 'Đứng yên', 'Quay ngược lại'], a: 0 },
    { t: 'tf4', lv: 2, q: 'Khi có bão, mỗi việc sau nên làm hay không nên làm? (Đúng = nên làm)', items: [['Theo dõi bản tin dự báo thời tiết.', true], ['Ra đồng thả diều.', false], ['Chằng chống nhà cửa.', true], ['Trú dưới gốc cây to.', false]] },
    { t: 'short', lv: 2, q: 'Gió càng mạnh thì chong chóng quay càng nhanh hay càng chậm?', a: ['nhanh', 'càng nhanh', 'cang nhanh', 'quay nhanh'] },
    { t: 'mcq', lv: 3, ctx: 'Nhóm em làm phong kế bằng 4 cốc giấy. Đặt trước quạt nhưng mô hình không quay.', q: 'Cách sửa phù hợp nhất là gì?', o: ['Nới lỏng trục quay cho ít ma sát, xoay miệng cốc cùng một chiều', 'Dán thêm băng dính quanh trục cho chắc', 'Tắt quạt đi', 'Thêm nhiều cốc nặng hơn'], a: 0 },
    { t: 'essay', lv: 3, q: 'Đài báo sắp có bão. Em hãy nêu 2 việc gia đình em cần làm để an toàn.', kw: [['du bao', 'nghe', 'theo doi', 'tin'], ['chang', 'gia co', 'trong nha', 'tranh', 'cay to', 'cot dien', 'du tru', 'den pin', 'nuoc']], kwn: ['Theo dõi dự báo thời tiết', 'Chằng chống nhà, ở trong nhà, dự trữ đồ cần thiết'], model: 'Gia đình em theo dõi bản tin dự báo thời tiết. Bố mẹ chằng chống nhà cửa, chuẩn bị đèn pin, nước uống và cả nhà ở trong nhà, không ra ngoài khi có bão.' }
  ],
  tasks: ['Làm một chiếc chong chóng giấy và thử ở chỗ gió mạnh, chỗ gió nhẹ.', 'Cùng nhóm làm phong kế bằng cốc giấy, đếm số vòng quay trước quạt ở 2 mức gió.', 'Ghi lại 3 việc cần làm khi có bão để nhắc người thân.'] },
/* ───── 4 ÁNH SÁNG ───── */
{ n: 4, t: 1, title: 'Ánh sáng, bóng tối và vai trò của ánh sáng', en: 'Light and shadow', cover: '🔦', sticker: '💡',
  recall: [
    { img: '☀️', fit: true, t: '**Vật tự phát sáng**: Mặt Trời, bóng đèn đang sáng, ngọn lửa. **Vật được chiếu sáng**: Mặt Trăng, bàn, ghế, quyển sách.', te: 'Luminous: the Sun, a lit lamp, fire. Lit objects: the Moon, tables, books.' },
    { img: '🔦', fit: true, t: 'Ánh sáng truyền theo **đường thẳng**.', te: 'Light travels in straight lines.' },
    { img: '🪟', fit: true, t: 'Vật **cho ánh sáng truyền qua**: kính trong, mica trong, nước trong. Vật **cản sáng**: tấm gỗ, bìa các-tông, quyển sách.', te: 'Transparent: clear glass, clear plastic. Opaque: wood, cardboard, books.' },
    { img: '👤', fit: true, t: '**Bóng tối** ở phía sau vật cản sáng. Vật **lại gần** đèn, bóng **to ra**; vật **ra xa** đèn, bóng **nhỏ đi**.', te: 'A shadow forms behind an opaque object. Closer to the lamp, bigger shadow.' },
    { img: '🌱', fit: true, t: 'Ánh sáng giúp **cây xanh quang hợp**, giúp con người và động vật **nhìn thấy**, sưởi ấm.', te: 'Light helps plants make food and helps us see.' },
    { img: '👓', fit: true, t: 'Bảo vệ mắt: **không nhìn thẳng** vào Mặt Trời hay đèn quá sáng; đọc, viết **đủ ánh sáng**, ngồi đúng tư thế.', te: 'Protect your eyes: never look at the Sun; read in good light.' }
  ],
  keys: ['Vật tự phát sáng và vật được chiếu sáng.', 'Ánh sáng truyền theo đường thẳng.', 'Vật cho ánh sáng truyền qua và vật cản sáng.', 'Bóng tối: gần đèn bóng to, xa đèn bóng nhỏ.', 'Vai trò của ánh sáng và bảo vệ mắt.'],
  w: [['💡', 'ánh sáng', 'light'], ['☀️', 'Mặt Trời', 'the Sun'], ['👤', 'bóng tối', 'shadow'], ['🔦', 'đèn pin', 'torch'], ['🪟', 'kính trong', 'clear glass'], ['👓', 'bảo vệ mắt', 'protect eyes']],
  mind: { center: 'Ánh sáng', ce: 'Light', img: '💡', extra: ['đường cong', 'Mặt Trăng tự phát sáng'], branches: [
    { label: 'Nguồn sáng', le: 'Sources', color: '#F2A33A', img: '☀️', items: ['Tự phát sáng: {{Mặt Trời}}, đèn đang sáng', 'Được chiếu sáng: {{Mặt Trăng}}, bàn ghế'] },
    { label: 'Truyền sáng', le: 'Travels', color: '#2F8FD8', img: '🔦', items: ['Truyền theo đường {{thẳng}}', 'Cho ánh sáng truyền qua: kính {{trong}}', 'Cản sáng: tấm {{gỗ}}, bìa các-tông'] },
    { label: 'Bóng tối', le: 'Shadow', color: '#7B5CD6', img: '👤', items: ['Ở {{phía sau}} vật cản sáng', 'Vật lại gần đèn, bóng {{to ra}}'] },
    { label: 'Vai trò', le: 'Uses', color: '#3AA85A', img: '🌱', items: ['Cây xanh {{quang hợp}}', 'Giúp ta {{nhìn thấy}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Vật nào sau đây tự phát sáng?', o: ['Mặt Trời', 'Mặt Trăng', 'Quyển sách', 'Cái gương'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Vật nào dưới đây là vật cản sáng?', o: ['Tấm bìa các-tông', 'Tấm kính trong', 'Tấm mica trong', 'Túi ni-lông trong'], a: 0 },
    { t: 'tf', lv: 1, q: 'Ánh sáng truyền theo đường thẳng.', a: true },
    { t: 'sort', lv: 2, q: 'Xếp mỗi vật vào đúng nhóm.', bins: ['Cho ánh sáng truyền qua', 'Cản sáng'], items: [['Kính cửa sổ trong', 0], ['Tấm gỗ', 1], ['Nước trong', 0], ['Quyển vở', 1], ['Hộp mica trong', 0], ['Bức tường', 1]] },
    { t: 'mcq', lv: 2, q: 'Đưa con rối lại gần đèn pin, bóng con rối trên màn sẽ:', o: ['To ra', 'Nhỏ đi', 'Không đổi', 'Biến mất'], a: 0 },
    { t: 'short', lv: 2, q: 'Bóng tối xuất hiện ở phía nào của vật cản sáng (phía trước hay phía sau)?', a: ['phía sau', 'phia sau', 'sau', 'đằng sau', 'dang sau'] },
    { t: 'tf4', lv: 2, q: 'Mỗi ý sau đúng hay sai?', items: [['Mặt Trăng là vật tự phát sáng.', false], ['Cây xanh cần ánh sáng để quang hợp.', true], ['Đọc sách nơi thiếu ánh sáng làm hại mắt.', true], ['Nên nhìn thẳng vào Mặt Trời để quan sát.', false]] },
    { t: 'match', lv: 1, q: 'Nối mỗi vật với nhóm đúng.', pairs: [['Ngọn nến đang cháy', 'Tự phát sáng'], ['Mặt Trăng', 'Được chiếu sáng'], ['Tấm kính trong', 'Cho ánh sáng truyền qua'], ['Tấm gỗ', 'Cản sáng']] },
    { t: 'mcq', lv: 3, ctx: 'Lớp em làm rạp hát bóng. Bóng nhân vật trên màn quá nhỏ, khán giả khó nhìn.', q: 'Em làm thế nào để bóng to hơn?', o: ['Đưa nhân vật lại gần đèn hơn', 'Đưa nhân vật ra xa đèn hơn', 'Tắt đèn đi', 'Thay nhân vật bằng tấm kính trong'], a: 0 },
    { t: 'essay', lv: 3, q: 'Em hãy nêu 2 việc nên làm để bảo vệ mắt khi học bài.', kw: [['du anh sang', 'du sang', 'den', 'anh sang'], ['tu the', 'khoang cach', 'khong nhin', 'nghi', 'mat troi', 'xa']], kwn: ['Học nơi đủ ánh sáng', 'Ngồi đúng tư thế, không nhìn vào nguồn sáng mạnh'], model: 'Em học bài ở nơi đủ ánh sáng, có đèn bàn. Em ngồi đúng tư thế, mắt cách vở vừa phải, không nhìn thẳng vào Mặt Trời hay đèn quá sáng.' }
  ],
  tasks: ['Dùng đèn pin và bàn tay tạo bóng con vật trên tường, thử đưa tay lại gần, ra xa đèn.', 'Tìm trong nhà 3 vật cho ánh sáng truyền qua và 3 vật cản sáng.', 'Kiểm tra góc học tập của em đã đủ ánh sáng chưa.'] },
/* ───── 5 ÂM THANH ───── */
{ n: 5, t: 1, title: 'Âm thanh và sự truyền âm thanh', en: 'Sound', cover: '🔔', sticker: '🥁',
  recall: [
    { img: '🥁', fit: true, t: 'Âm thanh do các vật **rung động** phát ra. Gõ trống, mặt trống rung; khi nói, **dây thanh quản** rung.', te: 'Sound is made by vibrating objects.' },
    { img: '🧱', fit: true, t: 'Âm thanh truyền qua **chất khí**, **chất lỏng**, **chất rắn**. Truyền qua chất rắn tốt nhất: **rắn > lỏng > khí**. Âm thanh **không truyền qua chân không**.', te: 'Sound travels through gases, liquids and solids; solids are best.' },
    { img: '📢', fit: true, t: 'Càng ra **xa** nguồn âm, âm thanh nghe càng **nhỏ**.', te: 'The farther from the source, the quieter the sound.' },
    { img: '🥤', fit: true, t: '**Điện thoại cốc giấy**: dây phải **kéo căng** thì rung động mới truyền qua dây sang cốc kia. Dây **chùng** thì không nghe rõ.', te: 'In a paper-cup phone, the string must be tight.' },
    { img: '🎶', fit: true, t: 'Âm thanh giúp ta **giao tiếp**, học tập, nghe nhạc, báo hiệu (chuông, còi). **Tiếng ồn** to, kéo dài gây **hại tai**, mệt mỏi.', te: 'Sound helps us talk and enjoy music. Noise harms our ears.' },
    { img: '🌳', fit: true, t: 'Chống tiếng ồn: **trồng cây xanh**, đóng cửa, bịt tai khi quá ồn, **nói nhỏ** nơi công cộng, vặn nhỏ loa.', te: 'Reduce noise: plant trees, close doors, speak softly.' }
  ],
  keys: ['Âm thanh do vật rung động phát ra.', 'Truyền qua rắn, lỏng, khí (rắn tốt nhất); không truyền qua chân không.', 'Xa nguồn âm, nghe nhỏ hơn.', 'Điện thoại cốc giấy cần dây căng.', 'Lợi ích của âm thanh, tác hại và cách chống tiếng ồn.'],
  w: [['🔔', 'âm thanh', 'sound'], ['〰️', 'rung động', 'vibration'], ['📢', 'tiếng ồn', 'noise'], ['🥤', 'điện thoại cốc giấy', 'paper-cup phone'], ['🎶', 'âm nhạc', 'music'], ['👂', 'tai', 'ear']],
  mind: { center: 'Âm thanh', ce: 'Sound', img: '🔔', extra: ['chân không', 'dây chùng'], branches: [
    { label: 'Nguồn gốc', le: 'Source', color: '#7B5CD6', img: '🥁', items: ['Do vật {{rung động}} phát ra'] },
    { label: 'Truyền âm', le: 'Travel', color: '#2F8FD8', img: '🧱', items: ['Qua chất rắn, {{lỏng}}, khí', 'Chất {{rắn}} truyền tốt nhất', 'Càng xa nghe càng {{nhỏ}}'] },
    { label: 'Đồ chơi', le: 'Toy', color: '#F2A33A', img: '🥤', items: ['Điện thoại cốc giấy: dây phải {{căng}}'] },
    { label: 'Cuộc sống', le: 'Life', color: '#E0533D', img: '🎶', items: ['Giúp {{giao tiếp}}, nghe nhạc', '{{Tiếng ồn}} gây hại tai', 'Trồng {{cây xanh}} để giảm ồn'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Âm thanh được phát ra khi nào?', o: ['Khi vật rung động', 'Khi vật đứng yên', 'Khi chiếu sáng vào vật', 'Khi vật bị lạnh'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Âm thanh KHÔNG truyền qua được môi trường nào?', o: ['Chân không', 'Chất rắn', 'Chất lỏng', 'Chất khí'], a: 0 },
    { t: 'order', lv: 2, q: 'Sắp xếp các môi trường theo khả năng truyền âm, từ tốt nhất đến kém nhất.', items: ['Chất rắn', 'Chất lỏng', 'Chất khí'] },
    { t: 'tf', lv: 1, q: 'Khi nói, dây thanh quản trong cổ ta rung động.', a: true },
    { t: 'short', lv: 2, q: 'Gõ thìa vào thành bể nước, bạn áp tai vào bể vẫn nghe tiếng. Âm thanh đã truyền qua chất rắn và chất gì?', a: ['lỏng', 'chất lỏng', 'chat long', 'nước', 'nuoc'] },
    { t: 'mcq', lv: 2, q: 'Vì sao đứng càng xa loa thì nghe càng nhỏ?', o: ['Âm thanh yếu dần khi truyền ra xa', 'Loa ngừng rung', 'Không khí chặn hết âm thanh', 'Tai bị hỏng'], a: 0 },
    { t: 'sort', lv: 2, q: 'Xếp mỗi việc vào đúng nhóm.', bins: ['Giảm tiếng ồn', 'Gây tiếng ồn'], items: [['Trồng hàng cây quanh trường', 0], ['Bật loa to giữa trưa', 1], ['Nói nhỏ trong thư viện', 0], ['Bóp còi xe liên tục', 1], ['Đóng cửa khi đường ồn', 0], ['La hét trong lớp', 1]] },
    { t: 'tf4', lv: 2, q: 'Về chiếc điện thoại cốc giấy, mỗi ý sau đúng hay sai?', items: [['Dây phải kéo căng mới nghe rõ.', true], ['Dây chùng chạm đất vẫn nghe rõ như thường.', false], ['Âm thanh truyền qua sợi dây.', true], ['Không cần nói vào cốc.', false]] },
    { t: 'mcq', lv: 3, ctx: 'Nam và An chơi điện thoại cốc giấy nhưng An không nghe thấy tiếng. Sợi dây đang võng xuống đất.', q: 'Hai bạn cần làm gì?', o: ['Lùi xa nhau để kéo căng dây, không cho dây chạm vật khác', 'Đứng lại gần nhau hơn cho dây chùng thêm', 'Cắt bớt cốc', 'Nói thật nhỏ'], a: 0 },
    { t: 'essay', lv: 3, q: 'Nhà em gần đường lớn, rất ồn. Em hãy đề xuất 2 cách giảm tiếng ồn cho phòng học của em.', kw: [['cay', 'cay xanh'], ['dong cua', 'rem', 'kinh', 'cach am', 'xop', 'tham', 'bit tai']], kwn: ['Trồng cây xanh', 'Đóng cửa, treo rèm dày, dùng vật cách âm'], model: 'Em trồng cây xanh trước nhà để cản bớt tiếng ồn. Khi học, em đóng cửa sổ và treo rèm dày để âm thanh từ đường vào ít hơn.' }
  ],
  tasks: ['Làm điện thoại cốc giấy với bạn, thử khi dây căng và khi dây chùng.', 'Áp tai xuống mặt bàn, nhờ bạn gõ nhẹ đầu bàn bên kia, so với khi không áp tai.', 'Liệt kê 3 nguồn tiếng ồn quanh nhà và cách giảm.'] },
/* ───── 6 NHIỆT ───── */
{ n: 6, t: 1, title: 'Sự truyền nhiệt, vật dẫn nhiệt tốt và kém', en: 'Heat', cover: '🌡️', sticker: '🔥',
  recall: [
    { img: '🌡️', fit: true, t: 'Dùng **nhiệt kế** để đo nhiệt độ. Vật **nóng hơn** có nhiệt độ **cao hơn**.', te: 'A thermometer measures temperature.' },
    { img: '☕', fit: true, t: 'Nhiệt truyền từ vật **nóng hơn** sang vật **lạnh hơn**. Vật nhận nhiệt **nóng lên**, vật toả nhiệt **lạnh đi**.', te: 'Heat moves from hotter to colder objects.' },
    { img: '🍳', fit: true, t: 'Vật **dẫn nhiệt tốt**: kim loại (sắt, nhôm, đồng, inox). Vật **dẫn nhiệt kém**: gỗ, nhựa, vải, len, bông, không khí.', te: 'Metals conduct heat well. Wood, plastic, cloth and air conduct heat poorly.' },
    { img: '🧤', fit: true, t: 'Ứng dụng: nồi làm bằng **kim loại** để nấu nhanh, **cán nồi** bằng gỗ, nhựa để khỏi bỏng; dùng **lót tay** vải khi bê nồi nóng.', te: 'Pots are metal, handles are wood or plastic; use oven gloves.' },
    { img: '🧥', fit: true, t: 'Mùa đông mặc **áo len, áo bông** giữ ấm vì chúng và lớp không khí bên trong **dẫn nhiệt kém**.', te: 'Wool coats keep us warm because they conduct heat poorly.' }
  ],
  keys: ['Nhiệt kế đo nhiệt độ.', 'Nhiệt truyền từ vật nóng hơn sang vật lạnh hơn.', 'Dẫn nhiệt tốt: kim loại. Dẫn nhiệt kém: gỗ, nhựa, vải, len, không khí.', 'Ứng dụng trong đời sống.'],
  w: [['🌡️', 'nhiệt kế', 'thermometer'], ['🔥', 'nóng', 'hot'], ['🧊', 'lạnh', 'cold'], ['🍳', 'kim loại', 'metal'], ['🪵', 'gỗ', 'wood'], ['🧥', 'áo len', 'wool coat']],
  mind: { center: 'Nhiệt', ce: 'Heat', img: '🌡️', extra: ['từ lạnh sang nóng', 'gỗ dẫn nhiệt tốt'], branches: [
    { label: 'Đo nhiệt độ', le: 'Measure', color: '#E0533D', img: '🌡️', items: ['Dùng {{nhiệt kế}}'] },
    { label: 'Truyền nhiệt', le: 'Transfer', color: '#F2A33A', img: '☕', items: ['Từ vật {{nóng}} hơn sang vật lạnh hơn', 'Vật nhận nhiệt {{nóng lên}}'] },
    { label: 'Dẫn nhiệt tốt', le: 'Good', color: '#2F8FD8', img: '🍳', items: ['{{Kim loại}}: sắt, nhôm, đồng'] },
    { label: 'Dẫn nhiệt kém', le: 'Poor', color: '#3AA85A', img: '🪵', items: ['{{Gỗ}}, nhựa, vải', 'Len, bông, {{không khí}}'] }
  ] },
  q: [
    { t: 'mcq', lv: 1, q: 'Dụng cụ nào dùng để đo nhiệt độ?', o: ['Nhiệt kế', 'Phong kế', 'Thước kẻ', 'Cân'], a: 0 },
    { t: 'mcq', lv: 1, q: 'Nhiệt truyền theo chiều nào?', o: ['Từ vật nóng hơn sang vật lạnh hơn', 'Từ vật lạnh hơn sang vật nóng hơn', 'Chỉ truyền trong nước', 'Không truyền đi'], a: 0 },
    { t: 'sort', lv: 1, q: 'Xếp mỗi vật liệu vào đúng nhóm.', bins: ['Dẫn nhiệt tốt', 'Dẫn nhiệt kém'], items: [['Sắt', 0], ['Gỗ', 1], ['Nhôm', 0], ['Nhựa', 1], ['Đồng', 0], ['Len', 1]] },
    { t: 'tf', lv: 2, q: 'Thả thìa inox vào cốc nước nóng, một lúc sau cán thìa nóng lên vì inox dẫn nhiệt tốt.', a: true },
    { t: 'mcq', lv: 2, q: 'Vì sao cán xoong, chảo thường làm bằng gỗ hoặc nhựa?', o: ['Vì gỗ, nhựa dẫn nhiệt kém, cầm không bị bỏng', 'Vì gỗ, nhựa dẫn nhiệt tốt', 'Vì cho đẹp', 'Vì nặng hơn kim loại'], a: 0 },
    { t: 'short', lv: 2, q: 'Đặt cốc nước nóng vào chậu nước lạnh. Cốc nước nóng sẽ nóng lên hay lạnh đi?', a: ['lạnh đi', 'lanh di', 'lạnh', 'lanh', 'nguội đi', 'nguoi di', 'nguội'] },
    { t: 'tf4', lv: 2, q: 'Mỗi ý sau đúng hay sai?', items: [['Áo len giữ ấm vì len dẫn nhiệt kém.', true], ['Nồi nấu thường làm bằng kim loại để nấu nhanh chín.', true], ['Không khí dẫn nhiệt tốt.', false], ['Nên cầm trực tiếp quai nồi kim loại đang nóng.', false]] },
    { t: 'mcq', lv: 3, ctx: 'Mẹ nhờ em bê nồi canh vừa nấu xong, quai nồi bằng nhôm.', q: 'Em nên làm gì?', o: ['Dùng lót tay bằng vải dày để bê', 'Cầm trực tiếp bằng tay', 'Dùng khăn ướt mỏng', 'Dùng thìa nhôm để nhấc'], a: 0 },
    { t: 'essay', lv: 3, q: 'Vì sao mùa đông mặc nhiều lớp áo mỏng lại ấm? Em hãy giải thích.', kw: [['khong khi', 'lop khong khi', 'giua cac lop'], ['dan nhiet kem', 'giu nhiet', 'giu am', 'khong mat nhiet']], kwn: ['Giữa các lớp áo có lớp không khí', 'Không khí, vải dẫn nhiệt kém nên giữ ấm'], model: 'Giữa các lớp áo có những lớp không khí. Vải và không khí đều dẫn nhiệt kém nên hơi ấm của cơ thể khó thoát ra ngoài, ta thấy ấm hơn.' }
  ],
  tasks: ['Cùng người lớn đo nhiệt độ nước ấm và nước lạnh bằng nhiệt kế.', 'Tìm trong bếp 3 đồ dùng dẫn nhiệt tốt và 3 đồ dùng dẫn nhiệt kém.', 'Giải thích cho người thân vì sao nên dùng lót tay khi bê nồi nóng.'] },
/* ───── 7 ĐỀ ÔN CUỐI HKI ───── */
{ n: 7, t: 2, star: true, exam: true, title: 'Đề ôn cuối học kì 1', en: 'End-of-term practice test', cover: '📝', sticker: '🏆',
  examTitle: 'Đề ôn kiểm tra cuối học kì 1 – Khoa học 4', examNote: 'Phần I: 7 câu trắc nghiệm (3,5 điểm) và 5 câu trả lời ngắn (2,5 điểm). Phần II: 3 câu tự luận (4 điểm). Câu hỏi theo 3 mức: Nhận biết, Kết nối, Vận dụng.',
  recall: [
    { img: '💧', fit: true, t: '**Nước**: trong suốt, không màu, không mùi, không vị. Bay hơi, ngưng tụ, đông đặc, nóng chảy. Vòng tuần hoàn: bay hơi → mây → mưa.', te: 'Water: properties, changes of state, water cycle.' },
    { img: '🌬️', fit: true, t: '**Không khí** có ở khắp nơi, bị nén và giãn ra; ô-xi cần cho sự cháy, sự thở. **Gió** là không khí chuyển động; đo sức gió bằng **phong kế**.', te: 'Air and wind.' },
    { img: '🔦', fit: true, t: '**Ánh sáng** truyền thẳng. Vật cản sáng tạo **bóng tối** phía sau; gần đèn bóng to, xa đèn bóng nhỏ.', te: 'Light travels straight; shadows.' },
    { img: '🥁', fit: true, t: '**Âm thanh** do vật rung động; truyền qua rắn > lỏng > khí, không truyền qua chân không.', te: 'Sound comes from vibrations.' },
    { img: '🌡️', fit: true, t: '**Nhiệt** truyền từ vật nóng hơn sang vật lạnh hơn. Kim loại dẫn nhiệt tốt; gỗ, nhựa, len, không khí dẫn nhiệt kém.', te: 'Heat moves from hot to cold.' }
  ],
  keys: ['Ôn lại cả 6 chặng: nước, không khí, gió, ánh sáng, âm thanh, nhiệt.', 'Dạng đề: trắc nghiệm A, B, C, D; trả lời ngắn; tự luận giải thích, đề xuất cách làm.'],
  w: [['💧', 'nước', 'water'], ['🌬️', 'gió', 'wind'], ['💡', 'ánh sáng', 'light'], ['🔔', 'âm thanh', 'sound'], ['🌡️', 'nhiệt', 'heat']],
  mind: { center: 'Khoa học 4 · Học kì 1', ce: 'Science 4 · Term 1', img: '🧑‍🔬', extra: ['Mặt Trăng', 'chân không'], branches: [
    { label: 'Nước', le: 'Water', color: '#2F8FD8', img: '💧', items: ['Hơi nước gặp lạnh {{ngưng tụ}}', 'Mây tạo thành {{mưa}}'] },
    { label: 'Không khí, gió', le: 'Air, wind', color: '#7B5CD6', img: '🌬️', items: ['{{Ô-xi}} cần cho sự cháy', 'Đo sức gió bằng {{phong kế}}'] },
    { label: 'Ánh sáng', le: 'Light', color: '#F2A33A', img: '🔦', items: ['Truyền theo đường {{thẳng}}', 'Gần đèn, bóng {{to ra}}'] },
    { label: 'Âm thanh', le: 'Sound', color: '#E0533D', img: '🥁', items: ['Do vật {{rung động}}', 'Chất {{rắn}} truyền âm tốt nhất'] },
    { label: 'Nhiệt', le: 'Heat', color: '#3AA85A', img: '🌡️', items: ['Từ vật {{nóng}} sang vật lạnh', '{{Kim loại}} dẫn nhiệt tốt'] }
  ] },
  q: [
    { part: 'Phần I · Câu 1', t: 'mcq', lv: 1, pt: 0.5, q: 'Nước tinh khiết có những tính chất nào?', o: ['Có màu trắng đục, vị ngọt, không mùi', 'Trong suốt, không màu, không mùi, không vị', 'Trong suốt, màu xanh nhạt, có mùi thơm', 'Không màu, vị chua nhẹ, trong suốt'], a: 1 },
    { part: 'Phần I · Câu 2', t: 'mcq', lv: 1, pt: 0.5, q: 'Bóp nhẹ miếng bọt biển khô trong chậu nước thấy nhiều bọt khí thoát ra. Điều đó cho thấy:', o: ['Bọt biển tan trong nước', 'Trong chỗ rỗng của bọt biển có không khí', 'Nước biến thành không khí', 'Trong chậu không có nước'], a: 1 },
    { part: 'Phần I · Câu 3', t: 'mcq', lv: 1, pt: 0.5, q: 'Trong tự nhiên, gió được hình thành do không khí chuyển động từ:', o: ['Nơi nóng sang nơi lạnh', 'Nơi lạnh sang nơi nóng', 'Trên cao xuống lòng đất', 'Nơi có cây sang nơi không có cây'], a: 1 },
    { part: 'Phần I · Câu 4', t: 'mcq', lv: 1, pt: 0.5, q: 'Vật nào là vật cản sáng?', o: ['Tấm mica trong suốt', 'Khay thuỷ tinh trong', 'Tấm bìa các-tông', 'Màng ni-lông mỏng trong'], a: 2 },
    { part: 'Phần I · Câu 5', t: 'mcq', lv: 1, pt: 0.5, q: 'Âm thanh được phát ra từ một vật khi nào?', o: ['Khi vật đứng yên', 'Khi vật rung động', 'Khi chiếu ánh sáng vào vật', 'Khi vật lạnh đi'], a: 1 },
    { part: 'Phần I · Câu 6', t: 'mcq', lv: 1, pt: 0.5, q: 'Nhóm nào gồm toàn vật dẫn nhiệt tốt?', o: ['Sắt, nhôm, đồng', 'Gỗ, nhựa, vải', 'Len, bông, giấy', 'Sắt, gỗ, nhựa'], a: 0 },
    { part: 'Phần I · Câu 7', t: 'mcq', lv: 2, pt: 0.5, q: 'Kéo con rối ra xa đèn pin, bóng con rối trên màn sẽ:', o: ['To lên', 'Nhỏ đi', 'Giữ nguyên', 'Biến mất hẳn'], a: 1 },
    { part: 'Phần I · Câu 8', t: 'short', lv: 1, pt: 0.5, q: 'Khí nào trong không khí cần cho sự cháy và sự thở?', a: ['ô-xi', 'o-xi', 'oxi', 'ô xi', 'o xi', 'khí ô-xi', 'oxy'] },
    { part: 'Phần I · Câu 9', t: 'short', lv: 1, pt: 0.5, q: 'Dụng cụ dùng để đo sức gió có tên là gì?', a: ['phong kế', 'phong ke', 'máy đo gió', 'may do gio'] },
    { part: 'Phần I · Câu 10', t: 'short', lv: 2, pt: 0.5, q: 'Đặt đĩa lạnh lên miệng cốc nước nóng, dưới đĩa có giọt nước. Hiện tượng này gọi là gì?', a: ['ngưng tụ', 'ngung tu', 'sự ngưng tụ', 'su ngung tu'] },
    { part: 'Phần I · Câu 11', t: 'short', lv: 2, pt: 0.5, q: 'Sắp xếp 3 môi trường (lỏng, rắn, khí) theo khả năng truyền âm từ tốt nhất đến kém nhất.', a: ['rắn lỏng khí', 'ran long khi', 'rắn, lỏng, khí', 'chất rắn chất lỏng chất khí', 'chat ran chat long chat khi', 'ran > long > khi'] },
    { part: 'Phần I · Câu 12', t: 'short', lv: 2, pt: 0.5, q: 'Khi chơi điện thoại cốc giấy, sợi dây phải chùng hay căng thì mới nghe rõ?', a: ['căng', 'cang', 'kéo căng', 'keo cang', 'dây căng', 'day cang'] },
    { part: 'Phần II · Câu 13', t: 'essay', lv: 3, pt: 1.5, q: 'Cắm cành cúc trắng vào cốc nước pha màu đỏ, sau một đêm cánh hoa chuyển sang màu đỏ.\na) Vì sao cánh hoa đổi màu?\nb) Hiện tượng này giúp gì cho cây xanh trong tự nhiên?', kw: [['ong nho', 'ong rat nho', 'than', 'di len'], ['canh hoa', 'mau do', 'doi mau'], ['hut nuoc', 're', 'nuoi cay', 'van chuyen', 'len la']], kwn: ['Nước màu đi lên theo ống nhỏ trong thân', 'Lên đến cánh hoa', 'Giúp cây đưa nước từ rễ lên thân, lá'], model: 'a) Nước màu đỏ đi lên theo những ống rất nhỏ trong thân cành hoa, lên đến cánh hoa nên cánh hoa chuyển sang màu đỏ.\nb) Nhờ vậy cây xanh đưa được nước và chất khoáng từ rễ lên thân, cành, lá để nuôi cây.' },
    { part: 'Phần II · Câu 14', t: 'essay', lv: 3, pt: 1.5, q: 'Nhóm em làm phong kế bằng 4 cốc giấy gắn trên trục quay. Đặt trước quạt, mô hình bị kẹt không quay.\na) Phong kế dùng để làm gì?\nb) Em hãy đề xuất 2 cách sửa để mô hình quay được.', kw: [['do suc gio', 'do gio', 'manh hay yeu'], ['noi long', 'ma sat', 'truc', 'tron'], ['cung chieu', 'cung mot chieu', 'mieng coc', 'don gio', 'nhe hon']], kwn: ['Đo sức gió', 'Giảm ma sát ở trục quay', 'Xoay miệng cốc cùng một chiều / dùng cốc nhẹ'], model: 'a) Phong kế dùng để đo sức gió, cho biết gió mạnh hay yếu.\nb) Cách 1: nới lỏng chỗ gắn trục quay để giảm ma sát. Cách 2: xoay các miệng cốc cùng một chiều để đón được nhiều gió hơn.' },
    { part: 'Phần II · Câu 15', t: 'essay', lv: 2, pt: 1, q: 'Vì sao cán xoong, chảo thường làm bằng gỗ hoặc nhựa còn thân nồi làm bằng kim loại?', kw: [['kim loai', 'dan nhiet tot', 'nhanh chin', 'nhanh nong'], ['go', 'nhua', 'dan nhiet kem', 'khong bong', 'bong tay']], kwn: ['Kim loại dẫn nhiệt tốt, nấu nhanh chín', 'Gỗ, nhựa dẫn nhiệt kém, cầm không bỏng'], model: 'Thân nồi làm bằng kim loại vì kim loại dẫn nhiệt tốt, nấu thức ăn nhanh chín. Cán làm bằng gỗ hoặc nhựa vì chúng dẫn nhiệt kém, cầm vào không bị bỏng tay.' }
  ],
  tasks: ['Tự làm lại đề trong 40 phút, rồi so với đáp án.', 'Làm một sản phẩm nhỏ (chong chóng, điện thoại cốc giấy hoặc phong kế) và giới thiệu với người thân.', 'Ghi lại câu em làm sai và đọc lại kiến thức của chặng đó.'] }
];
