import { Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức - Phòng khám Đa khoa Nghệ An Medi-Center",
  description: "Tin tức y tế, sự kiện và thông báo từ Phòng khám Đa khoa Nghệ An Medi-Center",
};

const news = [
  {
    id: 1,
    title: "Khai trương phòng khám hiện đại tại Nghĩa Lộc",
    excerpt: "Phòng khám Đa khoa Nghệ An Medi-Center chính thức khai trương với trang thiết bị y tế hiện đại, đội ngũ bác sĩ giàu kinh nghiệm...",
    date: "15/03/2026",
    author: "Admin",
    category: "Sự kiện",
    image: "🏥",
  },
  {
    id: 2,
    title: "Chương trình khám sức khỏe miễn phí cho người cao tuổi",
    excerpt: "Nhân dịp khai trương, phòng khám tổ chức chương trình khám sức khỏe miễn phí cho người cao tuổi trên 60 tuổi tại địa phương...",
    date: "10/03/2026",
    author: "BS. Nguyễn Văn An",
    category: "Chương trình",
    image: "❤️",
  },
  {
    id: 3,
    title: "Phòng ngừa bệnh tim mạch: Những điều cần biết",
    excerpt: "Bệnh tim mạch là nguyên nhân gây tử vong hàng đầu. Tìm hiểu cách phòng ngừa hiệu quả để bảo vệ sức khỏe tim mạch của bạn...",
    date: "05/03/2026",
    author: "BS. Lê Minh Cường",
    category: "Sức khỏe",
    image: "💓",
  },
  {
    id: 4,
    title: "Chăm sóc sức khỏe bà mẹ và trẻ em",
    excerpt: "Hướng dẫn chăm sóc sức khỏe toàn diện cho bà mẹ mang thai và trẻ nhỏ, từ dinh dưỡng đến tiêm chủng phòng bệnh...",
    date: "01/03/2026",
    author: "BS. Trần Thị Bình",
    category: "Sức khỏe",
    image: "👶",
  },
  {
    id: 5,
    title: "Tầm soát ung thư sớm - Chìa khóa cứu sống",
    excerpt: "Phát hiện ung thư ở giai đoạn sớm giúp tăng tỷ lệ điều trị thành công lên đến 90%. Tìm hiểu về các xét nghiệm tầm soát...",
    date: "25/02/2026",
    author: "BS. Hoàng Văn Em",
    category: "Sức khỏe",
    image: "🔬",
  },
  {
    id: 6,
    title: "Mùa dịch cúm: Cách phòng tránh hiệu quả",
    excerpt: "Mùa dịch cúm đang đến gần. Cùng tìm hiểu các biện pháp phòng tránh và khi nào cần đến gặp bác sĩ...",
    date: "20/02/2026",
    author: "BS. Phạm Thu Dung",
    category: "Sức khỏe",
    image: "🤧",
  },
];

export default function TinTuc() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin tức & Sự kiện</h1>
          <p className="text-xl text-blue-50">Cập nhật thông tin y tế và hoạt động của phòng khám</p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8 md:p-12 text-white">
                <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Tin nổi bật
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {news[0].title}
                </h2>
                <p className="text-lg text-blue-50 mb-6">
                  {news[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-blue-50 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{news[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{news[0].author}</span>
                  </div>
                </div>
                <Link
                  href={`/tin-tuc/${news[0].id}`}
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Đọc thêm
                  <ChevronRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tin tức mới nhất</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-50 h-48 flex items-center justify-center text-6xl">
                  {article.image}
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/tin-tuc/${article.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                  >
                    Đọc thêm
                    <ChevronRight className="ml-1" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin tức y tế</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Nhận thông tin về sức khỏe, chương trình khuyến mãi và sự kiện mới nhất từ chúng tôi
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
