import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">PREMIUM CARE SERVICE</span>
          <h1 className="text-3xl font-black text-white">건마사랑 코스별 서비스 안내</h1>
          <p className="text-xs text-gray-400">고객님의 컨디션과 취향에 맞춘 최상의 힐링 프로그램</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121214] border border-amber-500/20 p-6 rounded-2xl space-y-3">
            <div className="text-amber-400 text-2xl font-black">01</div>
            <h3 className="font-bold text-lg text-white">건식 / 타이 테라피</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              전신의 뭉친 근육과 스트레스받은 관절을 정성스럽게 풀어주는 스트레칭 중심의 전통 케어 코스입니다.
            </p>
          </div>

          <div className="bg-[#121214] border border-amber-500/20 p-6 rounded-2xl space-y-3">
            <div className="text-amber-400 text-2xl font-black">02</div>
            <h3 className="font-bold text-lg text-white">아로마 오일 케어</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              최고급 천연 오일을 사용하여 피부 자극 없이 부드럽게 혈액순환과 피로 해소를 돕는 릴렉싱 코스입니다.
            </p>
          </div>

          <div className="bg-[#121214] border border-amber-500/20 p-6 rounded-2xl space-y-3">
            <div className="text-amber-400 text-2xl font-black">03</div>
            <h3 className="font-bold text-lg text-white">VIP 스웨디시</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              림프 순환을 촉진하고 섬세한 압으로 지친 몸과 마음을 최고의 상태로 리프레시해 드리는 시그니처 케어입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}