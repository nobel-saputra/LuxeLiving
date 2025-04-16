import { Image, Facebook, Instagram, MessageCircleHeart, poppins } from "../../lib/ui";

export default function Footer() {
  return (
    <div className={`${poppins.className}`}>
      <footer className="bg-[#212529] text-white pt-10 pb-2 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo dan Sosial Media */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/images/footer/logo.png" alt="Logo" width={200} height={200} priority />
            <div className="flex space-x-10 mt-4">
              <a href="#" className="hover:scale-110 transition">
                <Facebook className="w-10 h-10" />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <Instagram className="w-10 h-10" />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <MessageCircleHeart className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-2">NAVIGATE</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-2">STAY UP TO DATE !</h3>
            <input type="email" placeholder="yourEmail@gmail.com" className="w-full px-4 py-2 bg-white rounded-md text-black mb-2" />
            <button className="w-28 bg-white text-[#212529] font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">Send</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-sm text-white font-medium ">© 2025 | Made Nobel Saputra · All Rights Reserved.</div>
      </footer>
    </div>
  );
}
