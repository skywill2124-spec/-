import { Clock, CheckSquare, GraduationCap, Banknote, LineChart, Star, Users, Route } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Exam Info Grid */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">검정 체계 및 합격 기준</h2>
            <p className="text-lg text-slate-600">
              국제항공관광협회의 자격 시험은 공정하고 체계적인 평가 시스템을 통해 실무 역량을 검증합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
              <CheckSquare className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-sm text-slate-500 mb-1">검정 방법</div>
              <div className="font-bold text-slate-900">4지 객관식 필기 시험</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
              <Clock className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-sm text-slate-500 mb-1">시험 시간</div>
              <div className="font-bold text-slate-900">총 60분<br/><span className="text-xs font-normal text-slate-500">(50문항 기준)</span></div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
              <GraduationCap className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-sm text-slate-500 mb-1">응시 자격</div>
              <div className="font-bold text-slate-900">전문학사 이상<br/><span className="text-xs font-normal text-slate-500">(학력 제한 없음)</span></div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
              <Banknote className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-sm text-slate-500 mb-1">검정 수수료</div>
              <div className="font-bold text-slate-900">종목당 100,000원<br/><span className="text-xs font-normal text-slate-500">(교육비 별도)</span></div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 lg:col-span-1 col-span-2">
              <LineChart className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-sm text-slate-500 mb-1">합격 기준</div>
              <div className="font-bold text-slate-900">평균 60점 이상</div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">취업 경쟁력 강화 혜택</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mr-6">
                <LineChart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">직무 역량 가시화</h4>
                <p className="text-slate-600">항공사 채용 시 실무 지식에 대한 객관적 증빙 자료로 활용</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mr-6">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">가산점 및 우대</h4>
                <p className="text-slate-600">주요 협력 항공사 및 관광 기업 지원 시 채용 가점 포인트</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mr-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">전문가 네트워크</h4>
                <p className="text-slate-600">협회 주관 세미나 및 산업체 교류 행사 우선 초청</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mr-6">
                <Route className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">커리어 로드맵</h4>
                <p className="text-slate-600">전공 심화 과정을 통한 단계별 전문가 성장 경로 확보</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
