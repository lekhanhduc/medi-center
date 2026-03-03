"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdCalendarToday, MdPhone, MdLocationOn, MdAccessTime, MdFavorite, MdPeople, MdStars, MdChevronRight, MdChevronLeft } from "react-icons/md";
import { FaStethoscope, FaBaby, FaHeartbeat, FaVial, FaMicroscope, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSlides = [
  {
    id: 1,
    title: "Chăm sóc sức khỏe toàn diện tại Nghệ An",
    description: "Dịch vụ đa chuyên khoa – Trang thiết bị hiện đại – Đội ngũ bác sĩ giàu kinh nghiệm",
    cta: "Đặt lịch khám",
    ctaLink: "/dat-lich",
  }
];
const specialties = [
  { name: "Nội tổng quát", icon: FaStethoscope, desc: "Khám và điều trị các bệnh nội khoa" },
  { name: "Nhi khoa", icon: FaBaby, desc: "Chăm sóc sức khỏe trẻ em toàn diện" },
  { name: "Tim mạch", icon: FaHeartbeat, desc: "Chẩn đoán và điều trị bệnh tim mạch" },
  { name: "Tai Mũi Họng", icon: FaStethoscope, desc: "Khám và điều trị bệnh TMH" },
  { name: "Xét nghiệm", icon: FaVial, desc: "Xét nghiệm máu, nước tiểu, sinh hóa" },
  { name: "Chẩn đoán hình ảnh", icon: FaMicroscope, desc: "Siêu âm, X-quang kỹ thuật số" },
];

const doctors = [
  {
    name: "BS. Lê Minh Cường",
    specialty: "Bác sĩ Tim mạch",
    experience: "18 năm kinh nghiệm",
    description: "Chuyên khoa II Tim mạch, Thạc sĩ Y học. Chuyên gia hàng đầu trong điều trị bệnh lý tim mạch phức tạp.",
    initial: "C"
  },
  {
    name: "BS. Nguyễn Văn An",
    specialty: "Bác sĩ Nội khoa",
    experience: "15 năm kinh nghiệm",
    description: "Chuyên khoa I Nội tổng quát. Chuyên gia điều trị các bệnh lý nội khoa mãn tính và cấp tính.",
    initial: "A"
  },
  {
    name: "BS. Trần Thị Bình",
    specialty: "Bác sĩ Sản phụ khoa",
    experience: "12 năm kinh nghiệm",
    description: "Chuyên khoa I Sản phụ khoa. Chuyên gia chăm sóc sức khỏe sinh sản và thai sản toàn diện.",
    initial: "B"
  },
  {
    name: "BS. Phạm Thu Dung",
    specialty: "Bác sĩ Nhi khoa",
    experience: "10 năm kinh nghiệm",
    description: "Chuyên khoa I Nhi khoa. Chuyên gia điều trị và chăm sóc sức khỏe trẻ em từ sơ sinh đến 16 tuổi.",
    initial: "D"
  },
];

const processSteps = [
  { step: "1", title: "Đặt lịch", desc: "Đặt lịch online hoặc gọi hotline" },
  { step: "2", title: "Tiếp nhận", desc: "Làm thủ tục và đăng ký khám" },
  { step: "3", title: "Khám & tư vấn", desc: "Bác sĩ khám và tư vấn điều trị" },
  { step: "4", title: "Thanh toán", desc: "Thanh toán và nhận kết quả" },
];

const testimonials = [
  {
    name: "Chị Nguyễn Thị Lan",
    content: "Đội ngũ bác sĩ chuyên môn cao, tận tâm và chu đáo. Tôi rất hài lòng với chất lượng dịch vụ khám chữa bệnh tại đây.",
    rating: 5,
    avatar: "L"
  },
  {
    name: "Anh Trần Văn Hùng",
    content: "Phòng khám hiện đại, trang thiết bị tiên tiến. Bác sĩ giỏi chuyên môn, tư vấn rất chi tiết và dễ hiểu.",
    rating: 5,
    avatar: "H"
  },
  {
    name: "Chị Lê Thị Mai",
    content: "Quy trình khám bệnh chuyên nghiệp, không phải chờ đợi lâu. Nhân viên thân thiện, nhiệt tình hỗ trợ.",
    rating: 5,
    avatar: "M"
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner.jpg"
            alt="Phòng khám Đa khoa Nghệ An Medi-Center"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-blue-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                <span className="text-white font-semibold text-sm md:text-base">Phòng khám uy tín tại Nghệ An</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white">
                Chăm sóc sức khỏe<br />
                <span className="text-cyan-300">toàn diện</span> tại Nghệ An
              </h1>

              {/* Description */}
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-50 leading-relaxed">
                Dịch vụ đa chuyên khoa – Trang thiết bị hiện đại<br className="hidden md:block" />
                Đội ngũ bác sĩ giàu kinh nghiệm
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/dat-lich"
                  className="group inline-flex items-center justify-center bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  <MdCalendarToday className="mr-2 md:mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Đặt lịch khám ngay
                </Link>
                <Link
                  href="/lien-he"
                  className="group inline-flex items-center justify-center bg-transparent text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all border-2 border-white backdrop-blur-sm"
                >
                  <MdPhone className="mr-2 md:mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Liên hệ tư vấn
                </Link>
              </div>

              {/* Quick Info */}
              <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg flex-shrink-0">
                    <MdLocationOn size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-200">Địa chỉ</p>
                    <p className="font-semibold text-sm md:text-base">Xã Nghĩa Lộc, Nghệ An</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg flex-shrink-0">
                    <MdAccessTime size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-200">Giờ làm việc</p>
                    <p className="font-semibold text-sm md:text-base">7:00 - 20:00 hàng ngày</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg flex-shrink-0">
                    <MdPhone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-200">Hotline</p>
                    <a href="tel:0123456789" className="font-semibold text-sm md:text-base hover:text-cyan-300 transition-colors">0123 456 789</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Reduced opacity */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent"></div>
      </section>

      {/* Quick Info */}
      <section className="py-6 md:py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4">
              <MdLocationOn className="text-blue-600 flex-shrink-0" size={28} />
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">Địa chỉ</p>
                <p className="text-gray-600 text-xs md:text-sm">Xóm Sơn Hải, Xã Nghĩa Lộc, Nghệ An</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <MdAccessTime className="text-blue-600 flex-shrink-0" size={28} />
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">Giờ làm việc</p>
                <p className="text-gray-600 text-xs md:text-sm">Thứ 2 - CN: 7:00 - 20:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <MdPhone className="text-blue-600 flex-shrink-0" size={28} />
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">Hotline</p>
                <a href="tel:0123456789" className="text-blue-600 hover:underline font-semibold text-xs md:text-sm">0123 456 789</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl h-[300px] md:h-[400px] flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl mb-4">🏥</div>
                  <p className="text-lg md:text-xl font-semibold">Phòng khám hiện đại</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Phòng khám Đa khoa Nghệ An Medi-Center
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Địa chỉ y tế tin cậy tại Nghệ An, cam kết mang đến dịch vụ chăm sóc sức khỏe 
                đạt chuẩn quốc tế với đội ngũ chuyên môn hàng đầu và công nghệ tiên tiến.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1 flex-shrink-0">
                    <MdStars className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Đội ngũ y bác sĩ hàng đầu</p>
                    <p className="text-gray-600 text-xs md:text-sm">Chuyên môn cao, kinh nghiệm lâu năm, tốt nghiệp các trường y danh tiếng</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1 flex-shrink-0">
                    <MdFavorite className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Công nghệ y tế tiên tiến</p>
                    <p className="text-gray-600 text-xs md:text-sm">Trang thiết bị hiện đại nhập khẩu, đảm bảo chẩn đoán chính xác tuyệt đối</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1 flex-shrink-0">
                    <MdPeople className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Chất lượng dịch vụ vượt trội</p>
                    <p className="text-gray-600 text-xs md:text-sm">Quy trình khám chữa bệnh chuẩn quốc tế, chăm sóc tận tâm từng bệnh nhân</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center text-blue-600 font-semibold text-base md:text-lg hover:text-blue-700"
              >
                Xem chi tiết
                <MdChevronRight className="ml-1" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Chuyên khoa nổi bật
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Đa dạng dịch vụ y tế chất lượng cao
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 md:p-8 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-200 group cursor-pointer"
                >
                  <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{specialty.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/dich-vu"
              className="inline-flex items-center bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-colors"
            >
              Xem tất cả chuyên khoa
              <MdChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Slider */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đội ngũ bác sĩ
            </h2>
            <p className="text-xl text-gray-600">
              Chuyên gia y tế hàng đầu với trình độ chuyên môn cao và tâm huyết nghề nghiệp
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: '.doctor-button-next',
                prevEl: '.doctor-button-prev',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-4"
            >
              {doctors.map((doctor, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group h-full">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-400 h-48 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-5xl font-bold text-blue-600">{doctor.initial}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                      <p className="text-gray-600 text-sm mb-4">{doctor.experience}</p>
                      <p className="text-gray-700 mb-4">{doctor.description}</p>
                      <Link
                        href="/bac-si"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                      >
                        Xem chi tiết
                        <MdChevronRight className="ml-1" size={16} />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              className="doctor-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10 hidden md:block"
              aria-label="Previous doctors"
            >
              <MdChevronLeft size={24} />
            </button>
            <button
              className="doctor-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10 hidden md:block"
              aria-label="Next doctors"
            >
              <MdChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/bac-si"
              className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700"
            >
              Xem tất cả bác sĩ
              <MdChevronRight className="ml-1" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quy trình khám bệnh
            </h2>
            <p className="text-xl text-gray-600">
              Đơn giản, nhanh chóng và tiện lợi
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tin tức & Kiến thức sức khỏe
            </h2>
            <p className="text-xl text-gray-600">
              Cập nhật thông tin y tế hữu ích
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Phòng ngừa bệnh tim mạch: Những điều cần biết", date: "05/03/2026", emoji: "💓" },
              { title: "Chăm sóc sức khỏe bà mẹ và trẻ em", date: "01/03/2026", emoji: "👶" },
              { title: "Tầm soát ung thư sớm - Chìa khóa cứu sống", date: "25/02/2026", emoji: "🔬" },
            ].map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-50 h-48 flex items-center justify-center text-6xl">
                  {article.emoji}
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                    {article.title}
                  </h3>
                  <Link
                    href="/tin-tuc"
                    className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                  >
                    Đọc thêm
                    <MdChevronRight className="ml-1" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tin-tuc"
              className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700"
            >
              Xem tất cả tin tức
              <MdChevronRight className="ml-1" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đánh giá từ bệnh nhân
            </h2>
            <p className="text-xl text-gray-600">
              Niềm tin và sự hài lòng của bạn là động lực của chúng tôi
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-blue-600',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !w-8',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" size={18} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic">"{testimonial.content}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Đặt lịch khám ngay hôm nay để được tư vấn miễn phí
          </h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Đội ngũ bác sĩ chuyên nghiệp luôn sẵn sàng chăm sóc sức khỏe của bạn và gia đình
          </p>
          <Link
            href="/dat-lich"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors shadow-2xl"
          >
            <MdCalendarToday className="mr-3" size={28} />
            ĐẶT LỊCH NGAY
          </Link>
        </div>
      </section>
    </main>
  );
}


