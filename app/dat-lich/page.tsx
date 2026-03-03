"use client";

import { useState } from "react";
import { Calendar, User, Phone, Mail, Clock, Stethoscope, MessageSquare, CheckCircle } from "lucide-react";

export default function DatLich() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    doctor: "",
    service: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi form (tích hợp API sau)
    console.log("Form data:", formData);
    setIsSubmitted(true);
    
    // Reset form sau 3 giây
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        doctor: "",
        service: "",
        notes: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Đặt lịch thành công!</h2>
          <p className="text-lg text-gray-600 mb-2">
            Cảm ơn bạn đã đặt lịch khám tại Nghệ An Medi-Center
          </p>
          <p className="text-gray-600">
            Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận lịch khám
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đặt lịch khám</h1>
          <p className="text-xl text-blue-50">Đặt lịch nhanh chóng, tiện lợi chỉ trong vài phút</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Họ tên */}
                <div>
                  <label htmlFor="fullName" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <User size={20} />
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Phone size={20} />
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Mail size={20} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Nhập email (không bắt buộc)"
                  />
                </div>

                {/* Ngày và giờ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <Calendar size={20} />
                      Ngày khám <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <Clock size={20} />
                      Giờ khám <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="">Chọn giờ</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                {/* Chọn bác sĩ */}
                <div>
                  <label htmlFor="doctor" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <User size={20} />
                    Chọn bác sĩ
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Bác sĩ bất kỳ</option>
                    <option value="BS. Nguyễn Văn An">BS. Nguyễn Văn An - Nội khoa</option>
                    <option value="BS. Trần Thị Bình">BS. Trần Thị Bình - Sản phụ khoa</option>
                    <option value="BS. Lê Minh Cường">BS. Lê Minh Cường - Tim mạch</option>
                    <option value="BS. Phạm Thu Dung">BS. Phạm Thu Dung - Nhi khoa</option>
                    <option value="BS. Hoàng Văn Em">BS. Hoàng Văn Em - Ngoại khoa</option>
                    <option value="BS. Đỗ Thị Phương">BS. Đỗ Thị Phương - Da liễu</option>
                  </select>
                </div>

                {/* Chọn dịch vụ */}
                <div>
                  <label htmlFor="service" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Stethoscope size={20} />
                    Dịch vụ khám <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="Khám nội tổng quát">Khám nội tổng quát</option>
                    <option value="Khám tim mạch">Khám tim mạch</option>
                    <option value="Khám sản phụ khoa">Khám sản phụ khoa</option>
                    <option value="Khám nhi khoa">Khám nhi khoa</option>
                    <option value="Khám ngoại khoa">Khám ngoại khoa</option>
                    <option value="Khám da liễu">Khám da liễu</option>
                    <option value="Khám tai mũi họng">Khám tai mũi họng</option>
                    <option value="Khám xương khớp">Khám xương khớp</option>
                  </select>
                </div>

                {/* Ghi chú */}
                <div>
                  <label htmlFor="notes" className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <MessageSquare size={20} />
                    Ghi chú
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Mô tả triệu chứng hoặc lý do khám (không bắt buộc)"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={24} />
                  Xác nhận đặt lịch
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Sau khi đặt lịch, chúng tôi sẽ liên hệ với bạn để xác nhận thông tin
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Lưu ý khi đặt lịch:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Vui lòng đến trước giờ hẹn 15 phút để làm thủ tục</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Mang theo CMND/CCCD và sổ khám bệnh (nếu có)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Nếu cần hủy lịch, vui lòng liên hệ trước 24 giờ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Hotline hỗ trợ: 0123 456 789</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
