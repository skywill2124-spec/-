import { ArrowRight, BookOpen, Info } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Aviation Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-sm font-semibold mb-6 tracking-wider">
            국제항공관광협회
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-balance">
            항공관광 전문가<br />
            실무 교육의 새로운 패러다임
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed text-balance">
            급변하는 글로벌 항공 및 관광 시장에서 단순 스펙을 넘어선 <strong className="text-white">실무 인증</strong>으로 당신의 경쟁력을 높이세요. 산업체 현장 직무를 100% 반영한 검증된 자격증입니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#certificates" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              <BookOpen className="w-5 h-5 mr-2" />
              자격증 과정 보기
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-medium transition-colors">
              <Info className="w-5 h-5 mr-2" />
              협회 소개
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-colors">
              상세 문의하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
