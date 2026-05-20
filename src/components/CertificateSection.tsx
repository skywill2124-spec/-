import { ShieldAlert, ShieldCheck, Utensils, HeartHandshake, Users, Ticket, CreditCard, Bot, Leaf, Map } from "lucide-react";

const certificates = [
  {
    icon: <ShieldAlert className="w-7 h-7" />,
    title: "항공응급처치전문가",
    category: "항공 안전/응급 대처",
    desc: "기내 특수 환경에서의 응급 상황 판단 및 CPR/AED 전문 술기 적용 역량을 인증합니다.",
    tags: ["기내 응급 상황 대처", "CPR 및 AED 사용법", "승객 생명 보호 실무"]
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "글로벌항공서비스전문가",
    category: "항공 안전/응급 대처",
    desc: "항공 보안, 위기 대응 절차 및 안전 규정 준수 능력을 평가합니다.",
    tags: ["항공 보안 규정", "위기 대응 매뉴얼", "현장 운영 관리"]
  },
  {
    icon: <Utensils className="w-7 h-7" />,
    title: "기내 식음료 전문가",
    category: "서비스 전문가",
    desc: "항공기내 식음료 운영 및 관리 지식, 프리미엄 서비스 기술을 갖춘 전문가를 양성합니다.",
    tags: ["기내식 및 와인 서비스", "식음료 위생 관리", "프리미엄 서비스"]
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "CS서비스전문가",
    category: "서비스 전문가",
    desc: "고객만족 전략과 서비스 전문지식을 심화 수준으로 이해하고 솔루션을 제공합니다.",
    tags: ["고객 만족 전략", "서비스 프로세스 개선", "불만 고객 응대"]
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "국제서비스인성예절지도사",
    category: "서비스 전문가",
    desc: "글로벌 서비스 예절과 조직 특성에 맞춘 서비스 개선 수행 소양을 갖춘 전문가입니다.",
    tags: ["글로벌 매너", "서비스 마인드", "이미지 메이킹"]
  },
  {
    icon: <Ticket className="w-7 h-7" />,
    title: "국제선항공예약",
    category: "항공 운영 실무",
    desc: "국제선 항공편 예약 시스템을 활용해 고객 항공권 예약을 처리하고 관리합니다.",
    tags: ["PNR 작성 및 관리", "여정 변경 및 취소", "좌석 배정 시스템"]
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: "국제선항공운임발권",
    category: "항공 운영 실무",
    desc: "항공 운임 업무를 수행하고, 전자항공권 발행 및 환불 처리를 담당합니다.",
    tags: ["운임 규정 해석", "E-Ticket 발권", "환불 및 재발행"]
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI항공객실서비스전문가",
    category: "미래 가치",
    desc: "챗GPT 등 AI 도구를 활용한 승객 응대 및 데이터 분석 기술을 인증합니다.",
    tags: ["AI 도구 활용", "데이터 기반 고객 분석", "스마트 서비스"]
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "ESG항공경영전문가",
    category: "미래 가치",
    desc: "탄소중립, 사회적 책임, 윤리경영 전략 수립 전문가를 양성합니다.",
    tags: ["ESG 경영 전략", "탄소 중립 실천", "지속가능한 항공업"]
  },
  {
    icon: <Map className="w-7 h-7" />,
    title: "글로벌관광MICE전문가",
    category: "관광 및 MICE",
    desc: "국제회의, 전시회 등 MICE 프로그램의 전체 운영 계획 수립 역량을 평가합니다.",
    tags: ["행사 기획 및 운영", "예산 관리", "글로벌 커뮤니케이션"]
  }
];

export default function CertificateSection() {
  return (
    <section id="certificates" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3 block">Certification</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">10대 핵심 전문 자격증</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-balance">
            안전, 서비스, 경영, 그리고 AI와 ESG까지 아우르는 항공 관광 산업의 종합 교육 포트폴리오를 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {cert.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                  {cert.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[40px]">
                {cert.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-medium px-2 py-1 bg-blue-50/50 text-blue-700 rounded border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
