# Hướng dẫn Tùy chỉnh Website

## 📝 Cập nhật Thông tin Liên hệ

### 1. Số điện thoại
Tìm và thay thế `0123 456 789` trong các file:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/ChatWidget.tsx`
- `app/page.tsx`
- `app/lien-he/page.tsx`

### 2. Email
Tìm và thay thế `info@ngheanmedicenter.vn` trong:
- `components/Footer.tsx`
- `app/lien-he/page.tsx`

### 3. Địa chỉ
Địa chỉ hiện tại: **Xóm Sơn Hải, Xã Nghĩa Lộc, Tỉnh Nghệ An**

Nếu cần thay đổi, tìm và cập nhật trong:
- `components/Footer.tsx`
- `app/page.tsx`
- `app/lien-he/page.tsx`

## 🗺️ Cập nhật Google Maps

File: `app/lien-he/page.tsx`

Thay đổi URL trong iframe:
```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  // Thay bằng URL embed từ Google Maps của bạn
/>
```

**Cách lấy URL Google Maps:**
1. Truy cập [Google Maps](https://maps.google.com)
2. Tìm địa chỉ phòng khám
3. Click "Share" > "Embed a map"
4. Copy URL trong thẻ iframe

## 👨‍⚕️ Thêm/Sửa Bác sĩ

File: `app/bac-si/page.tsx`

Thêm bác sĩ mới vào mảng `doctors`:
```typescript
{
  name: "BS. Họ Tên",
  specialty: "Bác sĩ Chuyên khoa",
  experience: "X năm kinh nghiệm",
  education: "Đại học Y ...",
  schedule: "Thứ 2, 4, 6: 8:00 - 17:00",
  achievements: [
    "Chứng chỉ hành nghề",
    "Chuyên khoa I/II ...",
  ],
}
```

Cũng cập nhật trong `app/page.tsx` (section Đội ngũ bác sĩ).

## 🏥 Thêm/Sửa Chuyên khoa

File: `components/ServiceFilter.tsx`

Thêm chuyên khoa mới:
```typescript
{
  id: "chuyen-khoa-moi",
  category: "Tên Chuyên khoa",
  icon: IconName, // Import từ lucide-react
  items: [
    { 
      name: "Tên dịch vụ", 
      desc: "Mô tả ngắn" 
    },
    // Thêm các dịch vụ khác...
  ]
}
```

## 📰 Thêm Tin tức

File: `app/tin-tuc/page.tsx`

Thêm bài viết mới vào mảng `news`:
```typescript
{
  id: 7,
  title: "Tiêu đề bài viết",
  excerpt: "Mô tả ngắn...",
  date: "DD/MM/YYYY",
  author: "Tên tác giả",
  category: "Danh mục",
  image: "🏥", // Emoji hoặc URL ảnh
}
```

## 🎨 Thay đổi Màu sắc

File: `app/globals.css` và các component

Màu chính hiện tại:
- **Xanh chính**: `blue-600` (#2563eb)
- **Xanh phụ**: `cyan-500` (#06b6d4)

Để thay đổi, tìm và thay thế class Tailwind:
- `bg-blue-600` → `bg-[màu-mới]`
- `text-blue-600` → `text-[màu-mới]`
- `from-blue-600` → `from-[màu-mới]`

## 📱 Cập nhật Social Media

### Facebook
File: `components/ChatWidget.tsx`

Thay đổi URL:
```typescript
href="https://m.me/your-facebook-page"
// Thay bằng link Facebook Page của bạn
```

File: `components/Footer.tsx`
```typescript
href="https://facebook.com/your-page"
```

### Zalo
File: `components/ChatWidget.tsx`
```typescript
href="https://zalo.me/0123456789"
// Thay số điện thoại Zalo của bạn
```

## 🖼️ Thêm Hình ảnh Thực tế

### Thay thế Placeholder
Hiện tại website dùng emoji và gradient làm placeholder.

Để thêm ảnh thực:
1. Đặt ảnh vào folder `public/images/`
2. Import và sử dụng Next.js Image component:

```typescript
import Image from "next/image";

<Image
  src="/images/phong-kham.jpg"
  alt="Phòng khám"
  width={800}
  height={600}
  className="rounded-xl"
/>
```

### Ảnh cần thêm:
- Logo phòng khám (thay icon "M" trong Header)
- Ảnh phòng khám (trang chủ, giới thiệu)
- Ảnh bác sĩ (trang bác sĩ)
- Ảnh tin tức (trang tin tức)

## ⏰ Thay đổi Giờ làm việc

Tìm và thay đổi "Thứ 2 - CN: 7:00 - 20:00" trong:
- `app/page.tsx`
- `components/Footer.tsx`
- `app/lien-he/page.tsx`

## 🎯 Tùy chỉnh Hero Banner

File: `app/page.tsx`

Sửa nội dung slides trong mảng `heroSlides`:
```typescript
{
  id: 1,
  title: "Tiêu đề của bạn",
  description: "Mô tả...",
  cta: "Text nút",
  ctaLink: "/link",
  bgGradient: "from-blue-600 via-blue-500 to-cyan-500"
}
```

Thay đổi thời gian tự động chuyển slide (mặc định 5 giây):
```typescript
const timer = setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
}, 5000); // Thay đổi số này (milliseconds)
```

## 📋 Tùy chỉnh Form Đặt lịch

File: `app/dat-lich/page.tsx`

### Thêm khung giờ khám:
```typescript
<option value="18:00">18:00</option>
<option value="19:00">19:00</option>
```

### Thêm bác sĩ vào dropdown:
```typescript
<option value="BS. Tên mới">BS. Tên mới - Chuyên khoa</option>
```

### Thêm dịch vụ:
```typescript
<option value="Dịch vụ mới">Dịch vụ mới</option>
```

## 🔧 Tích hợp Backend

### Email Notification
Cài đặt Nodemailer:
```bash
npm install nodemailer
```

Tạo API route: `app/api/dat-lich/route.ts`
```typescript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Gửi email logic
  
  return NextResponse.json({ success: true });
}
```

Cập nhật form submit trong `app/dat-lich/page.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/dat-lich', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

## 📊 Thêm Google Analytics

File: `app/layout.tsx`

Thêm Script component:
```typescript
import Script from 'next/script';

// Trong component
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔐 Biến môi trường

Tạo file `.env.local`:
```env
# Email
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key

# Facebook
NEXT_PUBLIC_FACEBOOK_PAGE_ID=your-page-id

# Zalo
NEXT_PUBLIC_ZALO_OA_ID=your-oa-id
```

## 💡 Tips

1. **Backup trước khi sửa**: Luôn tạo backup trước khi thay đổi code
2. **Test trên local**: Chạy `npm run dev` để test trước khi deploy
3. **Responsive**: Kiểm tra trên mobile sau mỗi thay đổi
4. **SEO**: Cập nhật metadata trong mỗi page
5. **Performance**: Tối ưu ảnh trước khi upload (WebP format, < 200KB)

## 🆘 Hỗ trợ

Nếu gặp vấn đề, tham khảo:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
