"use client";

import { FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoCall } from "react-icons/io5";

export default function ChatWidget() {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40">
      {/* Floating label */}
      <div className="mb-4 md:mb-6 bg-blue-600 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-xl whitespace-nowrap animate-bounce text-center">
        Liên hệ ngay!
      </div>

      {/* Icons group */}
      <div className="flex flex-col gap-3 md:gap-4 items-end">
        {/* Zalo Button */}
        <a
          href="https://zalo.me/0123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label="Chat qua Zalo"
        >
          <div className="bg-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 border-2 border-blue-500 flex items-center justify-center">
            <SiZalo className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
          </div>
        </a>

        {/* Facebook Messenger Button */}
        <a
          href="https://m.me/your-facebook-page"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label="Chat qua Facebook Messenger"
        >
          <div className="bg-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 border-2 border-blue-600 flex items-center justify-center">
            <FaFacebookMessenger className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
          </div>
        </a>

        {/* Phone Button with Pulse Animation */}
        <a
          href="tel:0123456789"
          className="group relative"
          aria-label="Gọi điện thoại"
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50"></span>
          
          {/* Button */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center">
            <IoCall className="w-8 h-8 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
}
