import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1121] text-slate-400 py-16 border-t border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-10">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">국제항공관광협회</h2>
            <p className="text-sm text-slate-400 mb-6 font-medium">International Air Tourism Association</p>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              글로벌 항공 및 관광 산업의 지속 가능한 발전과 네트워크 강화를 위한 비영리 단체입니다. 차세대 전문가 양성을 위해 최선을 다하겠습니다.
            </p>
            <p className="text-sm text-slate-500">
              고유번호: 138-82-84811
            </p>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold text-white mb-6">문의처</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>IATA4294@naver.com</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>070-8808-0635</span>
              </li>
              <li className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>대한민국 서울특별시</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} International Air Tourism Association. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
