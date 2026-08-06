import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;

  const dongName = dong && dong.length > 0 ? decodeURIComponent(dong[0]) : "";
  const districtName = decodeURIComponent(district);
  const regionName = region === "seoul" ? "서울시" : region === "incheon" ? "인천시" : "경기도";

  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();

  return {
    title: `${locationKeyword} 출장마사지 추천 | 24시 안심 후불제 건마사랑`,
    description: `${locationKeyword} 출장마사지 1등 플랫폼 건마사랑! 선입금 없는 100% 후불제, 25분 내 빠른 신속 방문. 타이, 아로마, 스웨디시 코스 가격 및 실시간 제휴업체 정보 제공.`,
    keywords: [
      `${locationKeyword} 출장마사지`,
      `${locationKeyword} 홈케어`,
      `${locationKeyword} 방문마사지`,
      `${locationKeyword} 타이마사지`,
      `${locationKeyword} 스웨디시`,
      "후불제 출장마사지",
      "건마사랑"
    ],
    openGraph: {
      title: `${locationKeyword} 출장마사지 추천 - 100% 후불제 건마사랑`,
      description: `${locationKeyword} 어디든 25분 내 실시간 신속 방문! 검증된 24시 제휴업체 정보와 코스별 요금을 확인하세요.`,
      url: `https://gunmasarang.shop/${region}/${encodeURIComponent(districtName)}/${dongName ? encodeURIComponent(dongName) : ""}`,
    },
  };
}

export default async function RegionalDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  
  const dongName = dong && dong.length > 0 ? decodeURIComponent(dong[0]) : "";
  const districtName = decodeURIComponent(district);
  const regionName = region === "seoul" ? "서울특별시" : region === "incheon" ? "인천광역시" : "경기도";
  
  const fullTitle = `${regionName} ${districtName} ${dongName}`.trim();

  const localShops = [
    {
      id: 1,
      name: `🔥 ${fullTitle} 한국미녀홈타이`,
      desc: "서울·경기·인천 전지역 신속 방문! 정성 가득한 테라피 & 릴렉싱 프로그램",
      phone: "0507-1280-3299",
      price: "90,000원부터~",
      image: "/shop1.jpg"
    },
    {
      id: 2,
      name: `✨ ${fullTitle} 너무이쁜홈타이`,
      desc: "품격 있는 힐링을 선사하는 최고급 오일 프라이빗 방문 테라피 서비스",
      phone: "0507-1280-3190",
      price: "60,000원부터~",
      image: "/shop2.jpg"
    },
    {
      id: 3,
      name: `💎 ${fullTitle} 예쁜걸홈타이`,
      desc: "재방문율 1위! 칼도착 25분 보장, 철저한 위생 관리와 럭셔리 케어",
      phone: "0507-1280-3185",
      price: "60,000원부터~",
      image: "/shop3.jpg"
    },
    {
      id: 4,
      name: `🌟 ${fullTitle} 20대프리미엄홈케어`,
      desc: "전문 힐러들의 맞춤형 VIP 피로회복 특화 프로그램 진행 중",
      phone: "0507-1280-3222",
      price: "60,000원부터~",
      image: "/shop4.jpg"
    },
    {
      id: 5,
      name: `👑 ${fullTitle} 20대그녀의온도홈타이`,
      desc: "선입금 없는 100% 후불제! 수도권 전지역 평균 25분 내 실시간 도착",
      phone: "0507-1280-3292",
      price: "60,000원부터~",
      image: "/shop5.jpg"
    }
  ];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="건마사랑 로고" 
              className="w-10 h-10 rounded-xl object-cover border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                건마사랑
              </span>
              <span className="text-[10px] text-gray-400 tracking-tighter">SEOUL · GYEONGGI · INCHEON</span>
            </div>
          </Link>
          
          <Link href="/" className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3.5 py-2 rounded-xl border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all shadow-inner flex items-center gap-1">
            <span>🏠</span> 메인 홈으로
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-12">
        
        {/* 상단 지역 대표 배너 */}
        <section className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
          <img 
            src="/banner.jpg" 
            alt={`${fullTitle} 출장마사지 안내 이미지`} 
            className="w-full h-56 md:h-72 object-cover filter brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="text-amber-400 text-xs font-black tracking-widest uppercase mb-1">
              {regionName.toUpperCase()} · LOCAL PREMIUM GUIDE
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white drop-shadow-md">
              {fullTitle} 출장마사지 지역 안내
            </h1>
            <p className="text-xs md:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
              {fullTitle} 이용을 알아볼 때 필요한 지역 전달부터 최종 예약 확인까지 순서대로 안내해 드립니다.
            </p>
          </div>
        </section>

        {/* 동네 추천 제휴업체 5개 카드리스트 */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-amber-400 font-bold tracking-widest uppercase">OUR NEIGHBORHOOD SHOPS</p>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">
              {fullTitle} 출장마사지 추천 업체 (총 5곳)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localShops.map((lShop) => (
              <div key={lShop.id} className="bg-[#121214] border border-amber-500/20 hover:border-amber-500/60 rounded-2xl p-4 flex gap-4 items-center shadow-lg transition-all group relative">
                <Link href={`/shop/${lShop.id}`} className="absolute inset-0 z-10" aria-label={`${lShop.name} 상세페이지 보기`} />
                <img 
                  src={lShop.image} 
                  alt={lShop.name} 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform" 
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-sm md:text-base text-white truncate group-hover:text-amber-400 transition-colors">
                    {lShop.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                    {lShop.desc}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs font-black text-amber-400">{lShop.price}</span>
                    <a 
                      href={`tel:${lShop.phone}`} 
                      className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs px-3.5 py-1.5 rounded-xl shadow transition-all transform active:scale-95 relative z-20"
                    >
                      전화연결
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 이용 방법 4단계 */}
        <section className="bg-[#0f0f12] p-6 md:p-8 rounded-3xl border border-amber-500/30 space-y-6">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">HOW TO USE</span>
            <h3 className="text-xl font-black text-white mt-1">{fullTitle} 이용 방법</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 1</span>
              <h4 className="font-bold text-white mt-1">문의 준비</h4>
              <p className="text-xs text-gray-400 mt-1">{fullTitle} 지역명을 정확히 전달합니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 2</span>
              <h4 className="font-bold text-white mt-1">가능 여부</h4>
              <p className="text-xs text-gray-400 mt-1">희망 시간과 대체 가능한 시간대를 알려줍니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 3</span>
              <h4 className="font-bold text-white mt-1">코스 확인</h4>
              <p className="text-xs text-gray-400 mt-1">이용 시간과 안내받을 내용을 비교해 선택합니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 4</span>
              <h4 className="font-bold text-white mt-1">예약 정리</h4>
              <p className="text-xs text-gray-400 mt-1">지역, 시간, 코스를 확인하고 예약을 정합니다.</p>
            </div>
          </div>
        </section>

        {/* 실제 고객 후기 */}
        <section className="space-y-4">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">REAL REVIEWS</span>
            <h3 className="text-xl font-black text-white mt-1">{fullTitle} 실제 이용 고객 후기</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0f0f12] p-5 rounded-2xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-black text-sm">★★★★★ 5.0</span>
                <span className="text-[11px] text-gray-500">실이용 고객</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                &quot;{fullTitle} 지역이라 문의드렸는데 예상보다 빠르게 25분 만에 오셨어요. 피로가 쌓였을 때 이용하기 딱 좋습니다.&quot;
              </p>
            </div>
            <div className="bg-[#0f0f12] p-5 rounded-2xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-black text-sm">★★★★★ 5.0</span>
                <span className="text-[11px] text-gray-500">단골 고객</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                &quot;선입금 전혀 없이 도착해서 눈으로 직접 확인 후 결제하는 시스템이라 정말 안심하고 부릅니다.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 (Q&A) */}
        <section className="space-y-4">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">FAQ & QUESTIONS</span>
            <h3 className="text-xl font-black text-white mt-1">{fullTitle} 자주 묻는 질문</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 space-y-1.5">
              <div className="font-bold text-sm text-gray-200 flex items-center gap-2">
                <span className="text-amber-400">Q.</span> {fullTitle} 방문까지 시간이 얼마나 소요되나요?
              </div>
              <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                <span className="text-red-400 font-bold">A.</span> 평균 20분~30분 내로 신속하게 방문 서비스가 가능합니다. 도로 사정에 따라 차이가 날 수 있습니다.
              </p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 space-y-1.5">
              <div className="font-bold text-sm text-gray-200 flex items-center gap-2">
                <span className="text-amber-400">Q.</span> 선입금이나 예약금이 따로 있나요?
              </div>
              <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                <span className="text-red-400 font-bold">A.</span> 건마사랑 제휴업체는 100% 후불제로 운영되므로 도착 전 선입금을 절대 요구하지 않습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 예약 전 체크포인트 */}
        <section className="bg-black/80 p-5 rounded-2xl border border-white/10">
          <h4 className="text-amber-400 font-bold text-sm mb-2 flex items-center gap-1.5">
            <span>📌</span> {fullTitle} 예약 전 확인사항
          </h4>
          <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
            <li>예약 시 <strong>{fullTitle}</strong> 정확한 주소지(자택, 숙소 등)를 명확하게 말씀해 주세요.</li>
            <li>희망하시는 시간 20~30분 전에 미리 연락 주시면 더욱 원활한 스케줄 조율이 가능합니다.</li>
          </ul>
        </section>

      </main>

      {/* 푸터 영역 */}
      <footer className="bg-[#030303] border-t border-white/10 py-10 text-center text-gray-500 text-xs mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          
          <div>
            <a 
              href="tel:0507-1280-3344" 
              className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 font-bold px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all text-xs shadow-md"
            >
              <span>🤝</span> 제휴문의 (0507-1280-3344)
            </a>
          </div>

          <p className="text-gray-400 font-bold">건마사랑은 건전하고 안전한 제휴 마사지 정보 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 건마사랑 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}