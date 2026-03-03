import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phòng khám Đa khoa Nghệ An Medi-Center | Chăm sóc sức khỏe toàn diện",
  description: "Phòng khám Đa khoa Nghệ An Medi-Center tại Xóm Sơn Hải, Xã Nghĩa Lộc, Nghệ An. Cung cấp dịch vụ khám chữa bệnh chuyên nghiệp với đội ngũ bác sĩ giàu kinh nghiệm.",
  keywords: "phòng khám nghệ an, khám bệnh nghệ an, bác sĩ nghệ an, đặt lịch khám bệnh, phòng khám nghĩa lộc, phòng khám đa khoa nghệ an",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Phòng khám Đa khoa Nghệ An Medi-Center",
    description: "Chăm sóc sức khỏe toàn diện tại Nghệ An",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
