import { Heart, Target, Eye, Users, Award, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu - Phòng khám Đa khoa Nghệ An Medi-Center",
  description: "Tìm hiểu về lịch sử, tầm nhìn và sứ mệnh của Phòng khám Đa khoa Nghệ An Medi-Center",
};

export default function GioiThieu() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Giới thiệu</h1>
          <p className="text-xl text-blue-50">Phòng khám Đa khoa Nghệ An Medi-Center</p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Về chúng tôi</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Phòng khám Đa khoa Nghệ An Medi-Center được thành lập với sứ mệnh mang đến dịch vụ y tế chất lượng cao cho cộng đồng tại Nghệ An. Với đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại và quy trình khám chữa bệnh chuyên nghiệp, chúng tôi cam kết đem lại sự hài lòng và tin tưởng cho mọi bệnh nhân.
              </p>
              <p>
                Tọa lạc tại vị trí thuận lợi ở Xóm Sơn Hải, Xã Nghĩa Lộc, phòng khám của chúng tôi được thiết kế hiện đại, sạch sẽ và thoáng mát, tạo môi trường thoải mái cho bệnh nhân trong quá trình khám và điều trị.
              </p>
              <p>
                Chúng tôi không ngừng đầu tư vào công nghệ y tế tiên tiến và nâng cao trình độ chuyên môn của đội ngũ y bác sĩ để đáp ứng nhu cầu chăm sóc sức khỏe ngày càng cao của người dân.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
              <p className="text-gray-700">
                Trở thành phòng khám đa khoa hàng đầu tại Nghệ An, được tin tưởng và lựa chọn bởi cộng đồng nhờ chất lượng dịch vụ y tế xuất sắc, đội ngũ y bác sĩ tận tâm và cơ sở vật chất hiện đại.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
              <p className="text-gray-700">
                Cung cấp dịch vụ chăm sóc sức khỏe toàn diện, chất lượng cao với chi phí hợp lý. Đặt lợi ích và sức khỏe của bệnh nhân lên hàng đầu, không ngừng cải tiến để mang lại trải nghiệm tốt nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tận tâm</h3>
              <p className="text-gray-600">Chăm sóc bệnh nhân với sự tận tình và chu đáo</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chuyên nghiệp</h3>
              <p className="text-gray-600">Quy trình làm việc chuẩn mực và hiệu quả</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Đồng hành</h3>
              <p className="text-gray-600">Luôn bên cạnh bệnh nhân trong hành trình chữa bệnh</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hiện đại</h3>
              <p className="text-gray-600">Trang thiết bị và công nghệ y tế tiên tiến</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Cơ sở vật chất</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phòng khám chuyên khoa</h3>
                <p className="text-gray-600">Đầy đủ các phòng khám chuyên khoa với trang thiết bị hiện đại</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phòng xét nghiệm</h3>
                <p className="text-gray-600">Máy móc xét nghiệm tự động, cho kết quả nhanh chóng và chính xác</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phòng chẩn đoán hình ảnh</h3>
                <p className="text-gray-600">Siêu âm, X-quang kỹ thuật số với độ phân giải cao</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phòng điều trị</h3>
                <p className="text-gray-600">Không gian rộng rãi, sạch sẽ và thoải mái cho bệnh nhân</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
