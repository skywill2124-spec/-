import { Plane } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className={`flex items-center gap-2 font-bold text-xl ${scrolled ? "text-slate-900" : "text-white"}`}>
          <div className={`p-2 rounded-lg ${scrolled ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}>
            <Plane className="w-5 h-5" />
          </div>
          <span>국제항공관광협회</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`font-medium hover:text-blue-500 transition ${scrolled ? "text-slate-600" : "text-slate-200"}`}>
            협회 소개
          </a>
          <a href="#certificates" className={`font-medium hover:text-blue-500 transition ${scrolled ? "text-slate-600" : "text-slate-200"}`}>
            10대 전문 자격증
          </a>
          <a href="#garuda" className={`font-medium hover:text-blue-500 transition ${scrolled ? "text-slate-600" : "text-slate-200"}`}>
            가루다항공 연수
          </a>
          <a 
            href="#contact" 
            className={`px-5 py-2.5 rounded-lg font-medium transition ${
              scrolled 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-white text-blue-600 hover:bg-slate-100"
            }`}
          >
            문의하기
          </a>
        </div>
      </div>
    </nav>
  );
}
