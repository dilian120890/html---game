/* Bộ tiêu chí mặc định (cô sửa được ngay trong app, mục "Bộ tiêu chí").
   Mỗi biểu hiện: mã (giữ đúng mã trong KHDH), nhóm, biểu hiện, Bloom, cách đo, ngưỡng 3 mức,
   câu ghi nhận (mức cao nhất), câu gợi mở khi CHT, câu gợi mở khi HT.
   Lưu ý: số trong câu mẫu là ngưỡng, cô thay bằng số thực tế của từng con khi chỉnh nhận xét. */

const GROUPS = { pc: 'Phẩm chất', nlc: 'Năng lực chung', dt: 'Năng lực đặc thù' };

/* Thang đánh giá. Tiểu học theo TT27: 3 mức. THCS theo TT22 (kết quả rèn luyện, học tập): 4 mức. */
const SCALES = {
  th: { levels: [
      { v: 1, k: 'CHT', name: 'Chưa hoàn thành', tone: 'low' },
      { v: 2, k: 'HT', name: 'Hoàn thành', tone: 'mid' },
      { v: 3, k: 'HTT', name: 'Hoàn thành tốt', tone: 'top' }],
    cut: [1.75, 2.5] },
  thcs: { levels: [
      { v: 1, k: 'CĐ', name: 'Chưa đạt', tone: 'low' },
      { v: 2, k: 'Đ', name: 'Đạt', tone: 'mid' },
      { v: 3, k: 'K', name: 'Khá', tone: 'mid2' },
      { v: 4, k: 'T', name: 'Tốt', tone: 'top' }],
    cut: [1.75, 2.75, 3.5] }
};

const PC_NLC = [
  { code: '1.1.1', g: 'pc', name: 'Yêu nước: Yêu quý, giữ gìn cảnh quan lớp học, trường học và thiên nhiên xung quanh', bloom: 'C3',
    measure: 'Số lần có hành vi giữ gìn (nhặt rác, tắt điện, chăm cây, xếp đồ) trên 5 lần quan sát', t: ['Dưới 3/5 lần', '3–4/5 lần', '5/5 lần và nhắc bạn cùng làm'],
    ok: 'Con luôn giữ gìn cảnh quan lớp học, trường học và biết nhắc các bạn cùng bảo vệ cây xanh, đồ dùng chung.',
    low: 'Khi con tập nhặt rác, tắt điện và chăm cây mỗi ngày, lớp học của mình sẽ sạch đẹp hơn nhờ có con.',
    mid: 'Con đã biết giữ gìn đồ dùng và cảnh quan lớp học. Khi con nhắc thêm các bạn cùng làm, cả lớp sẽ có một góc học tập xanh, sạch hơn.' },
  { code: '1.2.1', g: 'pc', name: 'Nhân ái: Quan tâm, giúp đỡ, động viên bạn trong học tập', bloom: 'C3',
    measure: 'Số lần giúp đỡ, động viên bạn trên 5 lần hoạt động nhóm', t: ['0–1/5 lần', '2–3/5 lần', '4–5/5 lần'],
    ok: 'Con quan tâm đến các bạn, chủ động giúp bạn khi bạn gặp khó và biết động viên bạn cùng cố gắng.',
    low: 'Khi con để ý và hỏi han bạn bên cạnh nhiều hơn, con sẽ có thêm bạn thân và nhóm mình học vui hơn.',
    mid: 'Con đã giúp đỡ bạn khi cô gợi ý. Khi con tự nhận ra bạn cần giúp và chủ động hỏi han, các bạn sẽ rất quý con.' },
  { code: '1.3.1', g: 'pc', name: 'Chăm chỉ: Hoàn thành nhiệm vụ học tập được giao đúng thời hạn', bloom: 'C3',
    measure: 'Số nhiệm vụ hoàn thành đúng hạn trên 5 nhiệm vụ giao', t: ['0–2/5 nhiệm vụ', '3–4/5 nhiệm vụ', '5/5 nhiệm vụ và tự tìm hiểu thêm'],
    ok: 'Con chăm chỉ, hoàn thành đầy đủ và đúng hạn các nhiệm vụ học tập, còn tự tìm hiểu thêm điều mình thích.',
    low: 'Khi con hoàn thành từng nhiệm vụ nhỏ ngay trong giờ học, con sẽ thấy bài học dễ hơn và tự tin hơn.',
    mid: 'Con đã hoàn thành phần lớn nhiệm vụ được giao. Khi con làm đủ tất cả nhiệm vụ đúng hạn, kết quả học tập của con sẽ tiến bộ rõ.' },
  { code: '1.4.1', g: 'pc', name: 'Trung thực: Nói đúng sự thật, dũng cảm nhận lỗi', bloom: 'C3',
    measure: 'Số lần báo đúng kết quả, tự nhận lỗi trên 5 tình huống quan sát', t: ['Dưới 3/5 lần', '3–4/5 lần', '5/5 lần'],
    ok: 'Con thật thà, luôn báo đúng kết quả bài làm của mình và dũng cảm nhận lỗi khi làm chưa đúng.',
    low: 'Khi con mạnh dạn nói thật và nhận lỗi, cô và các bạn sẽ tin con hơn và giúp con sửa nhanh hơn.',
    mid: 'Con đã biết nói thật khi được hỏi. Khi con tự nhận lỗi ngay lúc mình làm chưa đúng, con sẽ được mọi người tin tưởng hơn.' },
  { code: '1.5.1', g: 'pc', name: 'Trách nhiệm: Giữ gìn đồ dùng, làm tốt phần việc của mình trong nhóm', bloom: 'C3',
    measure: 'Số lần hoàn thành phần việc nhóm giao và giữ gọn đồ dùng trên 5 lần quan sát', t: ['Dưới 3/5 lần', '3–4/5 lần', '5/5 lần'],
    ok: 'Con có trách nhiệm, làm tốt phần việc nhóm giao và luôn giữ gọn gàng đồ dùng của mình, của lớp.',
    low: 'Khi con nhận một việc nhỏ trong nhóm và làm đến cùng, nhóm mình sẽ hoàn thành nhanh hơn nhờ có con.',
    mid: 'Con đã làm phần việc của mình khi được nhắc. Khi con tự giác làm xong mà không cần nhắc, con sẽ là thành viên nhóm đáng tin cậy.' },
  { code: '2.1.1', g: 'nlc', name: 'Tự chủ và tự học: Tự giác ôn tập, tự hoàn thành các chặng ôn tập trên app', bloom: 'C3',
    measure: 'Tỉ lệ chặng ôn tập hoàn thành trên app (app tự tính) và số lần tự làm lại để đạt 3 sao', t: ['Dưới 50% số chặng', '50–79% số chặng', 'Từ 80% số chặng, tự làm lại để đạt 3 sao'], app: 'done',
    ok: 'Con tự giác ôn tập, hoàn thành hầu hết các chặng ôn tập và còn tự làm lại để đạt kết quả tốt hơn.',
    low: 'Khi con dành mỗi ngày một ít thời gian ôn một chặng trên app, con sẽ nhớ bài lâu và tự tin hơn khi kiểm tra.',
    mid: 'Con đã hoàn thành một phần các chặng ôn tập. Khi con ôn đủ các chặng còn lại và tự làm lại câu sai, con sẽ nắm bài chắc hơn.' },
  { code: '2.2.1', g: 'nlc', name: 'Giao tiếp và hợp tác: Nêu ý kiến đúng chủ đề, lắng nghe và chờ bạn nói xong', bloom: 'C3',
    measure: 'Số lần nêu ý kiến đúng chủ đề và không ngắt lời trên 5 lần thảo luận nhóm', t: ['0–1/5 lần', '2–3/5 lần', '4–5/5 lần'],
    ok: 'Con tập trung lắng nghe khi các bạn trao đổi và biết chờ bạn nói xong rồi mới nêu ý kiến của mình.',
    low: 'Khi rèn thêm thói quen lắng nghe và chờ bạn nói xong, con sẽ hiểu bạn hơn và phối hợp với nhóm nhịp nhàng hơn.',
    mid: 'Con đã mạnh dạn nêu ý kiến trong nhóm. Khi con lắng nghe trọn ý của bạn trước khi nói, nhóm mình sẽ thảo luận hiệu quả hơn.' },
  { code: '2.3.1', g: 'nlc', name: 'Giải quyết vấn đề và sáng tạo: Đặt câu hỏi, đề xuất cách làm cho nhiệm vụ', bloom: 'C4',
    measure: 'Số cách làm con tự đề xuất và số gợi ý cô cần đưa', t: ['Cần hướng dẫn từng bước', 'Nêu được 1 cách, cần tối đa 1 gợi ý', 'Tự nêu được từ 2 cách trở lên'],
    ok: 'Con hay đặt câu hỏi và tự nghĩ ra nhiều cách khác nhau để giải quyết nhiệm vụ cô giao.',
    low: 'Khi con thử tự nghĩ một cách làm trước rồi mới hỏi cô, con sẽ tiến bộ nhanh và thấy học thú vị hơn.',
    mid: 'Con đã tìm được một cách làm khi có gợi ý. Khi con thử nghĩ thêm cách thứ hai, con sẽ giải quyết vấn đề linh hoạt hơn.' }
];

/* Năng lực đặc thù. app: 'all' = lấy kết quả mọi chặng ôn tập; 'review' = chỉ các chặng Ôn tập / Đề mẫu. */
const DT = {
  tnxh: [
    { code: 'a', g: 'dt', name: 'Nhận thức khoa học: Nêu, kể tên, mô tả được sự vật, hiện tượng đã học', bloom: 'C1–C2', app: 'all',
      measure: 'Số câu đúng trên 10 câu hỏi (kết quả chặng ôn tập trên app: 3 sao = HTT, 2 sao = HT, 1 sao/chưa đạt = CHT)', t: ['Dưới 5/10 câu', '5–8/10 câu', '9–10/10 câu'],
      ok: 'Con nắm chắc kiến thức đã học, kể tên và mô tả đúng các sự vật, hiện tượng trong bài.',
      low: 'Khi con ôn lại phần "Kiến thức cần nhớ" trên app mỗi tối, con sẽ nhớ bài và trả lời đúng nhiều câu hơn.',
      mid: 'Con đã trả lời đúng 7/10 câu hỏi ôn tập. Khi con xem lại các câu sai và làm lại chặng ôn tập, con sẽ đúng hết 10/10.' },
    { code: 'b', g: 'dt', name: 'Tìm hiểu môi trường tự nhiên và xã hội: Quan sát, so sánh, phân loại theo tiêu chí', bloom: 'C3–C4',
      measure: 'Số đối tượng xếp đúng trên 10 đối tượng theo tiêu chí', t: ['Dưới 6/10', '6–8/10', '9–10/10 và tự nêu tiêu chí'],
      ok: 'Con quan sát kĩ, so sánh và phân loại đúng các sự vật, hiện tượng, còn tự nêu được tiêu chí phân loại của mình.',
      low: 'Khi con quan sát thật kĩ từng hình và hỏi "giống nhau, khác nhau ở đâu", con sẽ phân loại đúng nhiều hơn.',
      mid: 'Con đã xếp đúng 8/10 đối tượng theo tiêu chí cô đưa ra. Khi con tự nêu tiêu chí phân loại của mình, con sẽ phân loại nhanh và đúng hết 10/10.' },
    { code: 'c', g: 'dt', name: 'Vận dụng kiến thức, kĩ năng: Xử lí tình huống an toàn, vệ sinh trong cuộc sống', bloom: 'C3', app: 'review',
      measure: 'Số tình huống xử lí đúng trên 4 tình huống (đề mẫu, ôn tập chủ đề trên app)', t: ['0–1/4 tình huống', '2–3/4 tình huống', '4/4 tình huống và giải thích được vì sao'],
      ok: 'Con biết vận dụng điều đã học để xử lí đúng các tình huống ở nhà, ở trường và nơi công cộng.',
      low: 'Khi con thử nói "nếu là mình, mình sẽ làm gì" trong mỗi tình huống, con sẽ biết giữ an toàn cho bản thân tốt hơn.',
      mid: 'Con đã xử lí đúng 3/4 tình huống. Khi con giải thích thêm vì sao làm như vậy, con sẽ vận dụng được vào nhiều tình huống mới.' }
  ],
  kh: [
    { code: 'a', g: 'dt', name: 'Nhận thức khoa học tự nhiên: Nêu, mô tả, giải thích được tính chất, hiện tượng đã học', bloom: 'C1–C2', app: 'all',
      measure: 'Số câu đúng trên 10 câu hỏi (kết quả chặng ôn tập trên app)', t: ['Dưới 5/10 câu', '5–8/10 câu', '9–10/10 câu'],
      ok: 'Con nắm chắc kiến thức khoa học, nêu và giải thích đúng các tính chất, hiện tượng đã học.',
      low: 'Khi con ôn lại phần kiến thức cần nhớ và sơ đồ tư duy trên app, con sẽ nhớ và giải thích được hiện tượng tốt hơn.',
      mid: 'Con đã trả lời đúng 7/10 câu hỏi. Khi con tự giải thích "vì sao" cho mỗi đáp án, con sẽ hiểu bài sâu hơn và đúng hết 10/10.' },
    { code: 'b', g: 'dt', name: 'Tìm hiểu môi trường tự nhiên: Quan sát, làm thí nghiệm đơn giản, ghi lại kết quả', bloom: 'C3–C4',
      measure: 'Số bước thí nghiệm thực hiện đúng trên 4 bước (dự đoán, làm, quan sát, kết luận)', t: ['0–1/4 bước', '2–3/4 bước', '4/4 bước, tự nêu dự đoán'],
      ok: 'Con làm thí nghiệm cẩn thận, tự nêu dự đoán, ghi lại kết quả và rút ra được kết luận đúng.',
      low: 'Khi con làm từng bước thí nghiệm theo thứ tự cùng nhóm và ghi lại điều mình thấy, con sẽ khám phá được nhiều điều thú vị.',
      mid: 'Con đã làm đúng các bước thí nghiệm. Khi con tự nêu dự đoán trước và so sánh với kết quả, con sẽ tư duy như một nhà khoa học nhỏ.' },
    { code: 'c', g: 'dt', name: 'Vận dụng kiến thức, kĩ năng: Giải thích hiện tượng, đề xuất cách bảo vệ môi trường, sức khoẻ', bloom: 'C3', app: 'review',
      measure: 'Số tình huống giải thích, xử lí đúng trên 4 tình huống', t: ['0–1/4 tình huống', '2–3/4 tình huống', '4/4 tình huống'],
      ok: 'Con biết dùng kiến thức khoa học để giải thích hiện tượng hằng ngày và đề xuất việc làm bảo vệ môi trường.',
      low: 'Khi con tìm ví dụ ở nhà cho mỗi bài học (như nước, ánh sáng, âm thanh), con sẽ thấy khoa học gần gũi và dễ nhớ hơn.',
      mid: 'Con đã giải thích đúng 3/4 tình huống. Khi con tự tìm thêm ví dụ trong cuộc sống, con sẽ vận dụng linh hoạt hơn.' }
  ],
  cn: [
    { code: 'a', g: 'dt', name: 'Nhận thức công nghệ: Nêu được tác dụng, cấu tạo, đặc điểm của sản phẩm, quy trình công nghệ', bloom: 'C1–C2', app: 'all',
      measure: 'Số câu đúng trên 10 câu hỏi (kết quả chặng ôn tập trên app)', t: ['Dưới 5/10 câu', '5–8/10 câu', '9–10/10 câu'],
      ok: 'Con nắm chắc kiến thức công nghệ, nêu đúng tác dụng và đặc điểm của các sản phẩm, quy trình đã học.',
      low: 'Khi con ôn lại phần kiến thức cần nhớ trên app và tự kể tên đồ vật ở nhà, con sẽ nhớ bài lâu hơn.',
      mid: 'Con đã trả lời đúng 7/10 câu hỏi. Khi con làm lại các chặng còn câu sai, con sẽ nắm chắc và đúng hết 10/10.' },
    { code: 'b', g: 'dt', name: 'Giao tiếp công nghệ: Đọc, dùng kí hiệu, hình vẽ, thuật ngữ để trình bày về sản phẩm công nghệ', bloom: 'C2–C3',
      measure: 'Số thông tin đọc, trình bày đúng trên 5 thông tin (nhãn, sơ đồ, bản vẽ, kí hiệu)', t: ['0–2/5 thông tin', '3–4/5 thông tin', '5/5 thông tin'],
      ok: 'Con đọc hiểu đúng kí hiệu, hình vẽ và dùng đúng thuật ngữ khi trình bày về sản phẩm công nghệ.',
      low: 'Khi con tập đọc kĩ hình vẽ và gọi đúng tên từng bộ phận, con sẽ trình bày về sản phẩm rõ ràng hơn.',
      mid: 'Con đã đọc đúng phần lớn kí hiệu, hình vẽ. Khi con dùng thêm thuật ngữ khi trình bày, bạn nghe sẽ hiểu ý con ngay.' },
    { code: 'c', g: 'dt', name: 'Sử dụng công nghệ: Sử dụng đúng cách, an toàn đồ dùng, dụng cụ, sản phẩm công nghệ', bloom: 'C3',
      measure: 'Số thao tác đúng, an toàn trên 5 thao tác thực hành', t: ['0–2/5 thao tác', '3–4/5 thao tác', '5/5 thao tác, nhắc bạn cùng an toàn'],
      ok: 'Con thực hành đúng các thao tác, sử dụng dụng cụ an toàn và biết nhắc bạn cùng làm đúng cách.',
      low: 'Khi con làm chậm lại, nhìn cô làm mẫu và thực hiện lần lượt từng thao tác, con sẽ sử dụng an toàn và đúng hơn.',
      mid: 'Con đã thực hiện đúng 4/5 thao tác. Khi con nhớ thêm bước kiểm tra an toàn trước khi dùng, con sẽ thực hành thành thạo.' },
    { code: 'd', g: 'dt', name: 'Đánh giá công nghệ: Nhận xét ưu, nhược điểm và lựa chọn sản phẩm công nghệ phù hợp', bloom: 'C5',
      measure: 'Số ý nhận xét đúng (ưu điểm, nhược điểm, lí do chọn) trên 3 ý', t: ['0–1/3 ý', '2/3 ý', '3/3 ý, có lí do thuyết phục'],
      ok: 'Con biết nhận xét ưu, nhược điểm của sản phẩm và nêu được lí do chọn sản phẩm phù hợp.',
      low: 'Khi con tập nói một điều tốt và một điều chưa tốt của mỗi đồ vật, con sẽ biết chọn đồ dùng phù hợp hơn.',
      mid: 'Con đã nêu được ưu điểm của sản phẩm. Khi con nói thêm nhược điểm và lí do chọn, nhận xét của con sẽ thuyết phục hơn.' },
    { code: 'e', g: 'dt', name: 'Thiết kế kĩ thuật: Đề xuất ý tưởng, làm được sản phẩm đơn giản theo yêu cầu', bloom: 'C6',
      measure: 'Số tiêu chí sản phẩm đạt trên 4 tiêu chí (đúng yêu cầu, chắc chắn, đẹp, có ý tưởng riêng)', t: ['0–1/4 tiêu chí', '2–3/4 tiêu chí', '4/4 tiêu chí'],
      ok: 'Con có ý tưởng sáng tạo và tự làm được sản phẩm đúng yêu cầu, chắc chắn và đẹp.',
      low: 'Khi con vẽ phác ý tưởng trước rồi làm từng bước, sản phẩm của con sẽ hoàn thiện và đẹp hơn.',
      mid: 'Con đã làm được sản phẩm đúng yêu cầu. Khi con thêm một ý tưởng riêng của mình, sản phẩm sẽ độc đáo và nổi bật hơn.' }
  ],
  toan: [
    { code: 'a', g: 'dt', name: 'Tư duy và lập luận toán học: Giải thích được cách làm, nêu được lí do', bloom: 'C2–C4',
      measure: 'Số bài con tự giải thích được cách làm trên 5 bài', t: ['0–1/5 bài', '2–3/5 bài', '4–5/5 bài'],
      ok: 'Con trình bày mạch lạc cách làm và giải thích được vì sao mình chọn phép tính đó.',
      low: 'Khi con tập nói "vì sao con làm phép tính này" sau mỗi bài, con sẽ hiểu bài chắc và ít nhầm hơn.',
      mid: 'Con đã làm đúng các bài cơ bản. Khi con giải thích thêm vì sao làm như vậy, con sẽ tự tin làm cả bài khó.' },
    { code: 'b', g: 'dt', name: 'Mô hình hoá toán học: Chuyển bài toán có lời văn thành phép tính, sơ đồ', bloom: 'C3',
      measure: 'Số bài toán lời văn chọn đúng phép tính, sơ đồ trên 5 bài', t: ['0–2/5 bài', '3–4/5 bài', '5/5 bài, tự vẽ sơ đồ'],
      ok: 'Con đọc hiểu bài toán, tự vẽ sơ đồ và chọn đúng phép tính cho mọi bài toán có lời văn.',
      low: 'Khi con gạch chân dữ kiện và vẽ sơ đồ đoạn thẳng trước khi tính, con sẽ chọn đúng phép tính hơn.',
      mid: 'Con đã chọn đúng phép tính ở 4/5 bài. Khi con vẽ thêm sơ đồ cho bài khó, con sẽ làm đúng hết 5/5 bài.' },
    { code: 'c', g: 'dt', name: 'Giải quyết vấn đề toán học: Thực hiện đúng các bước giải và kiểm tra lại kết quả', bloom: 'C3–C4',
      measure: 'Số bài giải đúng đủ các bước và có thử lại trên 5 bài', t: ['0–2/5 bài', '3–4/5 bài', '5/5 bài, tự thử lại'],
      ok: 'Con giải bài đúng các bước, trình bày rõ ràng và luôn tự kiểm tra lại kết quả.',
      low: 'Khi con làm lần lượt từng bước và thử lại phép tính, con sẽ phát hiện và sửa lỗi sai kịp thời.',
      mid: 'Con đã giải đúng 4/5 bài. Khi con tập thói quen thử lại kết quả, con sẽ đúng hết các bài.' },
    { code: 'd', g: 'dt', name: 'Giao tiếp toán học: Dùng đúng thuật ngữ, kí hiệu để trình bày, trao đổi', bloom: 'C2',
      measure: 'Số lần trình bày đúng thuật ngữ, kí hiệu trên 5 lần chia sẻ', t: ['0–1/5 lần', '2–3/5 lần', '4–5/5 lần'],
      ok: 'Con dùng đúng thuật ngữ, kí hiệu toán học và mạnh dạn chia sẻ cách làm với cả lớp.',
      low: 'Khi con tập nói lại cách làm bằng các từ toán học như "tổng, hiệu, gấp, giảm", con sẽ trình bày rõ ràng hơn.',
      mid: 'Con đã trình bày được cách làm. Khi con dùng thêm đúng thuật ngữ toán học, bạn nghe sẽ hiểu ngay ý con.' },
    { code: 'e', g: 'dt', name: 'Sử dụng công cụ, phương tiện học toán: Dùng thước, que tính, đồng hồ... đúng cách', bloom: 'C3',
      measure: 'Số thao tác dùng dụng cụ đúng trên 5 thao tác', t: ['0–2/5 thao tác', '3–4/5 thao tác', '5/5 thao tác'],
      ok: 'Con sử dụng thành thạo các dụng cụ học toán và đo, vẽ chính xác.',
      low: 'Khi con luyện đặt thước đúng vạch 0 và đọc kết quả cẩn thận, con sẽ đo vẽ chính xác hơn.',
      mid: 'Con đã sử dụng đúng phần lớn dụng cụ. Khi con kiểm tra lại số đo một lần nữa, kết quả sẽ chính xác hoàn toàn.' }
  ]
};

/* Môn theo khối. app = mã app ôn tập (nếu có) để lấy minh chứng tự động. */
const SUBJECTS = {
  tnxh: { name: 'Tự nhiên và Xã hội', fw: 'tnxh' },
  kh: { name: 'Khoa học', fw: 'kh' },
  cn: { name: 'Công nghệ', fw: 'cn' },
  toan: { name: 'Toán', fw: 'toan' }
};
const CLASS_SUBJECTS = {
  '1G1': [['tnxh', 'tnxh1'], ['toan', '']],
  '2G1': [['tnxh', 'tnxh2'], ['toan', '']],
  '3G1': [['tnxh', 'tnxh3'], ['cn', 'cn3'], ['toan', '']],
  '4G1': [['kh', 'kh4'], ['cn', 'cn4'], ['toan', '']],
  '6G1': [['cn', 'cn6']],
  '7G1': [['cn', 'cn7']],
  '8G1': [['cn', 'cn8']]
};

/* Các giai đoạn năm học 2026 – 2027 (cô sửa ngày ở đây nếu lịch trường khác). */
const PERIODS = [
  { id: 'gk1', name: 'Giữa học kì I', from: '2026-09-05', to: '2026-11-01' },
  { id: 'ck1', name: 'Cuối học kì I', from: '2026-11-02', to: '2027-01-17' },
  { id: 'gk2', name: 'Giữa học kì II', from: '2027-01-18', to: '2027-03-21' },
  { id: 'cn', name: 'Cuối năm học', from: '2027-03-22', to: '2027-05-31' },
  { id: 'all', name: 'Cả năm học', from: '2026-08-15', to: '2027-06-30' }
];
