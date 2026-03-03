"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose, MdPhone, MdCalendarToday } from "react-icons/md";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Chuyên khoa", href: "/dich-vu" },
    { name: "Đội ngũ bác sĩ", href: "/bac-si" },
    { name: "Đặt lịch", href: "/dat-lich" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Liên hệ", href: "/lien-he" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Nghệ An Medi-Center"
                width={48}
                height={48}
                className="rounded-full object-cover"
                loading="eager"
                priority
                unoptimized
              />
            </div>
            <div>
              <h1 className="text-base md:text-xl font-bold text-gray-900">Nghệ An Medi-Center</h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Phòng khám Đa khoa</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="tel:0962424567" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm xl:text-base">
              <MdPhone size={18} />
              <span className="font-semibold">096.242.4567</span>
            </a>
            <Link
              href="/dat-lich"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-bold hover:from-blue-700 hover:to-cyan-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xl:text-base"
            >
              <MdCalendarToday size={18} />
              Đặt lịch ngay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t max-h-[70vh] overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 font-medium ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50 px-4 -mx-4 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t mt-4 space-y-3">
              <a
                href="tel:0962424567"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold"
              >
                <MdPhone size={20} />
                096.242.4567
              </a>
              <Link
                href="/dat-lich"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <MdCalendarToday size={20} />
                Đặt lịch ngay
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
