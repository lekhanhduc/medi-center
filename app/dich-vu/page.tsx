import type { Metadata } from "next";
import ServiceFilter from "@/components/ServiceFilter";

export const metadata: Metadata = {
  title: "Chuyên khoa - Phòng khám Đa khoa Nghệ An Medi-Center",
  description: "Đa dạng chuyên khoa với đội ngũ bác sĩ giàu kinh nghiệm tại Phòng khám Nghệ An Medi-Center",
};

export default function DichVu() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chuyên khoa</h1>
          <p className="text-xl text-blue-50">Đa dạng chuyên khoa với đội ngũ bác sĩ giàu kinh nghiệm</p>
        </div>
      </section>

      <ServiceFilter />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần tư vấn thêm về dịch vụ?</h2>
          <p className="text-xl text-blue-50 mb-8">Liên hệ với chúng tôi để được tư vấn chi tiết</p>
          <a
            href="tel:0123456789"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Gọi ngay: 0123 456 789
          </a>
        </div>
      </section>
    </main>
  );
}
