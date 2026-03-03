"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function LienHe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ</h1>
          <p className="text-xl text-blue-50">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Thông tin liên hệ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Địa chỉ</h3>
                    <p className="text-gray-600">
                      Xóm Sơn Hải, Xã Nghĩa Lộc<br />
                      Tỉnh Nghệ An, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Điện thoại</h3>
                    <p className="text-gray-600">
                      Hotline: <a href="tel:0962424567" className="text-blue-600 hover:underline">096.242.4567</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ngheanmedicenter.vn" className="text-blue-600 hover:underline">
                        info@ngheanmedicenter.vn
                      </a><br />
                      <a href="mailto:support@ngheanmedicenter.vn" className="text-blue-600 hover:underline">
                        support@ngheanmedicenter.vn
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Giờ làm việc</h3>
                    <p className="text-gray-600">
                      Thứ 2 - Chủ nhật: 7:00 - 20:00<br />
                      Cấp cứu 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-bold text-gray-900 mb-4">Kết nối với chúng tôi</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://zalo.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Gửi thành công!</h3>
                    <p className="text-gray-600">Chúng tôi sẽ liên hệ với bạn sớm nhất</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="Nhập họ và tên"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="email@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
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
                            placeholder="0123456789"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                          Chủ đề <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        >
                          <option value="">Chọn chủ đề</option>
                          <option value="Tư vấn dịch vụ">Tư vấn dịch vụ</option>
                          <option value="Đặt lịch khám">Đặt lịch khám</option>
                          <option value="Hỏi về bác sĩ">Hỏi về bác sĩ</option>
                          <option value="Góp ý">Góp ý</option>
                          <option value="Khác">Khác</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                          Nội dung <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                          placeholder="Nhập nội dung tin nhắn..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Send size={20} />
                        Gửi tin nhắn
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bản đồ</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg" style={{ height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.8!2d105.6!3d18.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQyJzAwLjAiTiAxMDXCsDM2JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Phòng khám Nghệ An Medi-Center"
              />
            </div>
            <p className="text-center text-gray-600 mt-4">
              Xóm Sơn Hải, Xã Nghĩa Lộc, Tỉnh Nghệ An, Việt Nam
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
