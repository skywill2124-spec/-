import { Globe, FileText, Award, Network } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "국제 세미나",
    desc: "정기적인 컨퍼런스를 통해 최신 산업 정보 교류 및 강력한 인적 네트워크 형성"
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: "산업 보고서 발간",
    desc: "글로벌 항공/관광 시장 동향분석, 미래 전망 및 전략적 정책 제언 연례 보고서 제공"
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "자격 과정",
    desc: "현장 중심의 전문 인재 양성을 위한 10대 핵심 자격 인증 및 온/오프라인 교육 운영"
  },
  {
    icon: <Network className="w-8 h-8 text-blue-600" />,
    title: "회원사 지원 연계",
    desc: "글로벌 파트너십 매칭, 마케팅 지원 및 기업별 맞춤형 정책 자문 서비스"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">협회 소개</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-balance">
            전 세계 항공 및 관광 산업의 지속 가능한 발전과 글로벌 네트워크 강화를 위해 설립된 비영리 단체로서, 지식 공유와 협력을 위한 오픈 플랫폼을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
