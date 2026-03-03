# Phòng khám Đa khoa Nghệ An Medi-Center

Website chuyên nghiệp cho Phòng khám Đa khoa Nghệ An Medi-Center tại Xóm Sơn Hải, Xã Nghĩa Lộc, Tỉnh Nghệ An.

## 🏥 Tính năng

- ✅ Trang chủ với banner đẹp mắt và thông tin nổi bật
- ✅ Giới thiệu phòng khám (lịch sử, tầm nhìn, sứ mệnh)
- ✅ Danh sách dịch vụ khám chữa bệnh chi tiết với bộ lọc
- ✅ Thông tin đội ngũ bác sĩ
- ✅ Form đặt lịch khám trực tuyến
- ✅ Trang tin tức y tế
- ✅ Trang liên hệ với form gửi tin nhắn và bản đồ
- ✅ Responsive design (tối ưu cho mobile & desktop)
- ✅ SEO-friendly với metadata đầy đủ
- ✅ Giao diện sáng, chuyên nghiệp với màu xanh y tế

## 🚀 Công nghệ sử dụng

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Inter font với hỗ trợ tiếng Việt

## 📦 Cài đặt

```bash
# Clone repository
git clone <repository-url>

# Di chuyển vào thư mục dự án
cd clinic

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

## 📁 Cấu trúc dự án

```
clinic/
├── app/
│   ├── page.tsx              # Trang chủ
│   ├── gioi-thieu/           # Trang giới thiệu
│   ├── dich-vu/              # Trang dịch vụ
│   ├── bac-si/               # Trang bác sĩ
│   ├── dat-lich/             # Trang đặt lịch
│   ├── tin-tuc/              # Trang tin tức
│   ├── lien-he/              # Trang liên hệ
│   ├── layout.tsx            # Layout chính
│   └── globals.css           # CSS toàn cục
├── components/
│   ├── Header.tsx            # Header với menu
│   └── Footer.tsx            # Footer
└── public/                   # Static files
```

## 🎨 Màu sắc chủ đạo

- **Xanh chính**: `#2563eb` (blue-600)
- **Xanh phụ**: `#06b6d4` (cyan-500)
- **Trắng**: `#ffffff`
- **Xám**: `#f9fafb` (gray-50)

## 📱 Trang web bao gồm

### 1. Trang chủ (/)
- Banner hero với CTA đặt lịch
- Thông tin nhanh (địa chỉ, giờ làm việc, hotline)
- Giới thiệu về phòng khám
- Preview dịch vụ
- CTA đặt lịch

### 2. Giới thiệu (/gioi-thieu)
- Về chúng tôi
- Tầm nhìn & Sứ mệnh
- Giá trị cốt lõi
- Cơ sở vật chất

### 3. Dịch vụ (/dich-vu)
- Danh sách đầy đủ các dịch vụ
- Bộ lọc theo chuyên khoa
- 8 chuyên khoa: Nội khoa, Tim mạch, Sản phụ khoa, Nhi khoa, Ngoại khoa, Da liễu, Tai mũi họng, Xương khớp

### 4. Bác sĩ (/bac-si)
- Thông tin 6 bác sĩ
- Chuyên môn, kinh nghiệm
- Lịch làm việc
- Bằng cấp & chứng chỉ

### 5. Đặt lịch (/dat-lich)
- Form đặt lịch đầy đủ
- Chọn ngày, giờ, bác sĩ, dịch vụ
- Validation form
- Thông báo thành công

### 6. Tin tức (/tin-tuc)
- Tin tức y tế
- Sự kiện phòng khám
- Form đăng ký nhận tin

### 7. Liên hệ (/lien-he)
- Thông tin liên hệ đầy đủ
- Form gửi tin nhắn
- Bản đồ Google Maps
- Social media links

## 🔧 Tùy chỉnh

### Thay đổi thông tin phòng khám

Chỉnh sửa các file component để cập nhật:
- Số điện thoại: Tìm `0123 456 789` và thay thế
- Email: Tìm `info@ngheanmedicenter.vn` và thay thế
- Địa chỉ: Tìm `Xóm Sơn Hải, Xã Nghĩa Lộc` và thay thế

### Thêm bác sĩ mới

Chỉnh sửa file `app/bac-si/page.tsx` và thêm vào mảng `doctors`

### Thêm dịch vụ mới

Chỉnh sửa file `app/dich-vu/page.tsx` và thêm vào mảng `services`

### Cập nhật bản đồ

Thay đổi URL Google Maps trong file `app/lien-he/page.tsx`

## 🚀 Deploy

### Vercel (Khuyến nghị)

```bash
npm install -g vercel
vercel
```

### Build production

```bash
npm run build
npm start
```

## 📞 Liên hệ

- **Địa chỉ**: Xóm Sơn Hải, Xã Nghĩa Lộc, Tỉnh Nghệ An
- **Hotline**: 0123 456 789
- **Email**: info@ngheanmedicenter.vn

## 📝 License

© 2026 Phòng khám Đa khoa Nghệ An Medi-Center. All rights reserved.
