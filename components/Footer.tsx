import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-12 pb-24 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Nghệ An Medi-Center</h3>
            <p className="text-xs md:text-sm mb-3 md:mb-4">
              Phòng khám Đa khoa uy tín tại Nghệ An, cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/gioi-thieu" className="hover:text-white transition-colors">Giới thiệu</Link></li>
              <li><Link href="/dich-vu" className="hover:text-white transition-colors">Chuyên khoa</Link></li>
              <li><Link href="/bac-si" className="hover:text-white transition-colors">Đội ngũ bác sĩ</Link></li>
              <li><Link href="/tin-tuc" className="hover:text-white transition-colors">Tin tức</Link></li>
              <li><Link href="/dat-lich" className="hover:text-white transition-colors">Đặt lịch khám</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Chuyên khoa</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/dich-vu#noi-khoa" className="hover:text-white transition-colors">Nội khoa</Link></li>
              <li><Link href="/dich-vu#ngoai-khoa" className="hover:text-white transition-colors">Ngoại khoa</Link></li>
              <li><Link href="/dich-vu#san-phu-khoa" className="hover:text-white transition-colors">Sản phụ khoa</Link></li>
              <li><Link href="/dich-vu#nhi-khoa" className="hover:text-white transition-colors">Nhi khoa</Link></li>
              <li><Link href="/dich-vu#tim-mach" className="hover:text-white transition-colors">Tim mạch</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Liên hệ</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Xóm Sơn Hải, Xã Nghĩa Lộc, Tỉnh Nghệ An</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:0123456789" className="hover:text-white transition-colors">0123 456 789</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@ngheanmedicenter.vn" className="hover:text-white transition-colors break-all">info@ngheanmedicenter.vn</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-1" />
                <span>Thứ 2 - CN: 7:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Phòng khám Đa khoa Nghệ An Medi-Center. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}
