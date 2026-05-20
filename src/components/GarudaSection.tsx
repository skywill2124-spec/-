import { Plane, Star, MapPin, CheckCircle, Award } from "lucide-react";

export default function GarudaSection() {
  return (
    <section id="garuda" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/public/garuda-training.jpg"  
                alt="garuda-training" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">Garuda Indonesia</span>
                    <span className="px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">5-Star Airline</span>
                  </div>
                  <h3 className="text-2xl font-bold">글로벌 항공사 현장실습</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-balance">
                가루다항공<br />
                <span className="text-blue-600">현장실습 프로그램</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                인도네시아 국영 항공사 가루다항공의 트레이닝 센터에서 진행되는 독점적인 객실승무원 교육 및 글로벌 현장 체험 프로그램입니다.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Star className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">가루다항공 개요</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• 인도네시아 국영 항공사</li>
                    <li>• 스카이트랙스 5성급 항공사</li>
                    <li>• 전 세계 광범위한 국제선/국내선 네트워크</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">가루다항공 비행훈련센터 실습</h4>
                  <p className="text-slate-600 mb-2">실제 승무원들이 훈련받는 GITC의 최첨단 시설에서 체계적인 교육과정을 이수합니다.</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• 항공 안전 실습: 비상 착수, 도어 개폐, 슬라이드 훈련</li>
                    <li>• 고객 서비스 기술: 기내 매뉴얼, 문화 교육, 롤플레잉</li>
                    <li>• 멘토링 시스템: 현직 직원 1:1 매칭</li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">공식 수료증 수여</h4>
                  <p className="text-slate-600">
                    Garuda Indonesia Flight Training Center 명의 수료증 수여. 실제 항공기와 동일한 환경에서의 현장감 넘치는 실습 교육으로 직무 역량 증빙 활용.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
                프로그램 도입 문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
