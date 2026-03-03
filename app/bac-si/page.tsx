import { GraduationCap, Clock, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đội ngũ bác sĩ - Phòng khám Đa khoa Nghệ An Medi-Center",
  description: "Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm và chuyên nghiệp tại Phòng khám Nghệ An Medi-Center",
};

const doctors = [
  {
    name: "BS. Nguyễn Văn An",
    specialty: "Bác sĩ Nội khoa",
    experience: "15 năm kinh nghiệm",
    education: "Đại học Y Hà Nội",
    schedule: "Thứ 2, 4, 6: 8:00 - 17:00",
    achievements: ["Chứng chỉ hành nghề", "Chuyên khoa I Nội tổng quát"],
  },
  {
    name: "BS. Trần Thị Bình",
    specialty: "Bác sĩ Sản phụ khoa",
    experience: "12 năm kinh nghiệm",
    education: "Đại học Y Huế",
    schedule: "Thứ 2, 3, 5: 8:00 - 17:00",
    achievements: ["Chứng chỉ hành nghề", "Chuyên khoa I Sản phụ khoa"],
  },
  {
    name: "BS. Lê Minh Cường",
    specialty: "Bác sĩ Tim mạch",
    experience: "18 năm kinh nghiệm",
    education: "Đại học Y Dược TP.HCM",
    schedule: "Thứ 3, 5, 7: 8:00 - 17:00",
    achievements: ["Chứng chỉ hành nghề", "Chuyên khoa II Tim mạch", "Thạc sĩ Y học"],
  },
  {
    name: "BS. Phạm Thu Dung",
    specialty: "Bác sĩ Nhi khoa",
    experience: "10 năm kinh nghiệm",
    education: "Đại học Y Hà Nội",
    schedule: "Thứ 2, 4, 6, 7: 8:00 - 17:00",
    achievements: ["Chứng chỉ hành nghề", "Chuyên khoa I Nhi khoa"],
  },
  {
    name: "BS. Hoàng Văn Em",
    specialty: "Bác sĩ Ngoại khoa",
    experience: "14 năm kinh nghiệm",
    education: "Đại học Y Thái Bình",
    schedule: "Thứ 2, 3, 4, 5: 8:00 - 17:00",
    achievements: ["Chứng chỉ hành nghề", "Chuyên khoa I Ngoại tổng quát"],
  },
  {
    name: "BS. Đỗ Thị Phương",
    specialty: "Bác sĩ Da liễu",
    experience: "8 năm kinh nghiệm",
    education: "Đại học Y Hà Nội",
    schedule: "Thứ 3, 5, 6: 8:00 - 17:00",
    achievements: ["Chứng chỉ hành nghề", "Chuyên khoa I Da liễu"],
  },
];

export default function BacSi() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đội ngũ bác sĩ</h1>
          <p className="text-xl text-blue-50">Bác sĩ giàu kinh nghiệm, tận tâm và chuyên nghiệp</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Đội ngũ bác sĩ của chúng tôi được đào tạo bài bản tại các trường đại học y khoa uy tín, 
              có nhiều năm kinh nghiệm trong khám và điều trị. Chúng tôi luôn cập nhật kiến thức y khoa 
              mới nhất để mang đến dịch vụ chăm sóc sức khỏe tốt nhất cho bệnh nhân.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Avatar */}
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 h-48 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-blue-600">
                      {doctor.name.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Award className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{doctor.experience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{doctor.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{doctor.schedule}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs font-semibold text-gray-500 mb-2">CHỨNG CHỈ & BẰNG CẤP</p>
                    <ul className="space-y-1">
                      {doctor.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Đặt lịch khám với bác sĩ</h2>
          <p className="text-xl text-gray-600 mb-8">
            Chọn bác sĩ phù hợp và đặt lịch khám ngay hôm nay
          </p>
          <a
            href="/dat-lich"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Đặt lịch ngay
          </a>
        </div>
      </section>
    </main>
  );
}
