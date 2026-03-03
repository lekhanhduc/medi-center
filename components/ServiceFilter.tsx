"use client";

import { useState } from "react";
import { Heart, Stethoscope, Baby, Activity, TestTube, Microscope, Eye, Ear, Bone } from "lucide-react";

const services = [
  {
    id: "noi-khoa",
    category: "Nội khoa",
    icon: Stethoscope,
    items: [
      { name: "Khám nội tổng quát", desc: "Khám và tư vấn các bệnh lý nội khoa thường gặp" },
      { name: "Khám tiêu hóa", desc: "Chẩn đoán và điều trị các bệnh về dạ dày, ruột, gan mật" },
      { name: "Khám hô hấp", desc: "Điều trị viêm phổi, hen suyễn, COPD và các bệnh hô hấp" },
      { name: "Khám thần kinh", desc: "Chẩn đoán và điều trị đau đầu, đột quỵ, Parkinson" },
    ]
  },
  {
    id: "tim-mach",
    category: "Tim mạch",
    icon: Heart,
    items: [
      { name: "Khám tim mạch", desc: "Khám và tư vấn các bệnh lý tim mạch" },
      { name: "Điện tim", desc: "Đo điện tim, phát hiện rối loạn nhịp tim" },
      { name: "Siêu âm tim", desc: "Đánh giá chức năng và cấu trúc tim" },
      { name: "Đo huyết áp 24h", desc: "Theo dõi huyết áp liên tục trong 24 giờ" },
    ]
  },
  {
    id: "san-phu-khoa",
    category: "Sản phụ khoa",
    icon: Baby,
    items: [
      { name: "Khám thai", desc: "Theo dõi thai kỳ, siêu âm thai định kỳ" },
      { name: "Khám phụ khoa", desc: "Khám và điều trị các bệnh phụ khoa" },
      { name: "Tư vấn kế hoạch hóa gia đình", desc: "Tư vấn các biện pháp tránh thai an toàn" },
      { name: "Điều trị vô sinh", desc: "Tư vấn và hỗ trợ điều trị vô sinh hiếm muộn" },
    ]
  },
  {
    id: "nhi-khoa",
    category: "Nhi khoa",
    icon: Baby,
    items: [
      { name: "Khám nhi tổng quát", desc: "Khám sức khỏe định kỳ cho trẻ em" },
      { name: "Tiêm chủng", desc: "Tiêm phòng các bệnh truyền nhiễm cho trẻ" },
      { name: "Dinh dưỡng trẻ em", desc: "Tư vấn dinh dưỡng, theo dõi tăng trưởng" },
      { name: "Điều trị bệnh nhi", desc: "Điều trị các bệnh thường gặp ở trẻ em" },
    ]
  },
  {
    id: "ngoai-khoa",
    category: "Ngoại khoa",
    icon: Activity,
    items: [
      { name: "Phẫu thuật nhỏ", desc: "Cắt u nhỏ, khâu vết thương, dẫn lưu áp xe" },
      { name: "Khám chấn thương", desc: "Xử lý các chấn thương, gãy xương" },
      { name: "Nội soi", desc: "Nội soi dạ dày, đại tràng chẩn đoán" },
      { name: "Tư vấn phẫu thuật", desc: "Tư vấn các ca phẫu thuật lớn" },
    ]
  },
  {
    id: "da-lieu",
    category: "Da liễu",
    icon: Eye,
    items: [
      { name: "Khám da liễu", desc: "Điều trị mụn, viêm da, dị ứng da" },
      { name: "Điều trị nấm", desc: "Điều trị nấm da, nấm móng" },
      { name: "Thẩm mỹ da", desc: "Trị sẹo, nám, tàn nhang" },
      { name: "Laser điều trị", desc: "Laser trị mụn, trẻ hóa da" },
    ]
  },
  {
    id: "tai-mui-hong",
    category: "Tai mũi họng",
    icon: Ear,
    items: [
      { name: "Khám TMH", desc: "Khám và điều trị bệnh tai mũi họng" },
      { name: "Nội soi TMH", desc: "Nội soi tai, mũi, họng chẩn đoán" },
      { name: "Điều trị viêm", desc: "Viêm tai, viêm xoang, viêm amidan" },
      { name: "Lấy dị vật", desc: "Lấy dị vật tai, mũi, họng" },
    ]
  },
  {
    id: "xuong-khop",
    category: "Xương khớp",
    icon: Bone,
    items: [
      { name: "Khám xương khớp", desc: "Khám và điều trị bệnh xương khớp" },
      { name: "Vật lý trị liệu", desc: "Phục hồi chức năng vận động" },
      { name: "Điều trị đau", desc: "Điều trị đau cột sống, đau khớp" },
      { name: "Chấn thương thể thao", desc: "Xử lý chấn thương khi chơi thể thao" },
    ]
  },
];

export default function ServiceFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(s => s.id === selectedCategory);

  return (
    <>
      {/* Filter */}
      <section className="py-8 bg-white border-b sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tất cả
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedCategory(service.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === service.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {service.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.category}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
