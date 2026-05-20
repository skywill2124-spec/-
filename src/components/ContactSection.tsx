import { useState } from "react";
import { Send, Clock } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-blue-600 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -tralslate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-5/12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              글로벌 인재의 요람,<br />
              귀 대학과 함께 만듭니다.
            </h2>
            <p className="text-blue-100 text-lg mb-10 text-balance">
              학생들에게는 꿈을, 학과에는 최고의 경쟁력을 약속드립니다. 자격증 과정 도입, 산학 협력, 시험 일정 등 궁금한 점이 있으시면 언제든 문의해주세요. 작성해주신 내용은 담당자가 확인 후 신속하게 답변 드리겠습니다.
            </p>
            
            <div className="bg-blue-700/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/30">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-blue-200 mr-3" />
                <h4 className="font-bold">연락처 정보</h4>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                평일 09:00 - 18:00 (점심시간 12:00 - 13:00)<br />
                문의 남겨주시면 24시간 이내 답변 드립니다.
              </p>
              <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">
                대한민국 서울특별시
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-800 shadow-2xl relative">
              {status === "success" ? (
                <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center z-20">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">문의가 성공적으로 접수되었습니다.</h3>
                  <p className="text-slate-600 mb-8">
                    관심을 가져주셔서 감사합니다.<br/>
                    담당자가 내용 확인 후 기재해주신 연락처로 빠른 시일 내에 연락드리겠습니다.
                  </p>
                  <button onClick={() => setStatus("idle")} className="px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium text-slate-700 transition">
                    새로운 문의 작성하기
                  </button>
                </div>
              ) : null}

              <h3 className="text-2xl font-bold text-slate-900 mb-2">도입 협의 문의하기</h3>
              <p className="text-slate-500 mb-8 text-sm">대학 및 교육기관 자격증 도입 관련 상세 상담을 신청하세요.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">기관 / 대학명</label>
                    <input required type="text" placeholder="OO대학교 항공서비스학과" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">담당자 정보 (이름/직함)</label>
                    <input required type="text" placeholder="홍길동 교수" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition" />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">연락처 (이메일 또는 전화번호)</label>
                    <input required type="text" placeholder="example@email.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition" />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">문의내용</label>
                    <textarea required rows={4} placeholder="도입 희망 시기, 예상 인원, 궁금한 점 등을 자유롭게 적어주세요." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition resize-none"></textarea>
                  </div>
                </div>
                
                <button disabled={status === "submitting"} type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === "submitting" ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      전송 중...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      문의하기 <Send className="w-5 h-5 ml-2" />
                    </span>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">
                  보내주신 개인정보는 문의 답변 용도로만 사용됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
