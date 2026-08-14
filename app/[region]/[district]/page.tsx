import { Metadata } from "next";
import Link from "next/link";
import ClientTextMixer from "./ClientTextMixer";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
  searchParams: Promise<{
    dong?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = region === "seoul" ? "서울" : region === "incheon" ? "인천" : "경기";

  // 검색 최적화를 위한 지역 키워드 조합
  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();

  return {
    // (지역명) 출장마사지 키워드를 제목, 설명, 키워드 전면에 배치
    title: `${locationKeyword} 출장마사지 | 24시 방문 홈케어 추천 - 건마사랑`,
    description: `${locationKeyword} 출장마사지 추천! 25분 내 빠른 방문, 선입금 없는 100% 안심 후불제. 타이, 아로마, 스웨디시 힐링 테라피 정보를 확인하세요.`,
    keywords: [
      `${locationKeyword} 출장마사지`,
      `${locationKeyword}출장마사지`,
      `${locationKeyword} 출장 마사지`,
      `${locationKeyword} 홈케어`,
      `${locationKeyword} 방문 마사지`,
      `${locationKeyword} 스웨디시`,
      "24시 출장마사지",
      "후불제 출장마사지",
      "건마사랑"
    ],
    openGraph: {
      title: `${locationKeyword} 출장마사지 24시 안심 추천 | 건마사랑`,
      description: `${locationKeyword} 출장마사지 & 프라이빗 바디케어. 선입금 없는 100% 후불제 시스템으로 안심하고 이용하세요.`,
      url: `https://gunmasarang.store/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "건마사랑",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function RegionalDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = region === "seoul" ? "서울특별시" : region === "incheon" ? "인천광역시" : "경기도";
  
  const fullTitle = dongName 
    ? `${regionName} ${districtName} (${dongName})` 
    : `${regionName} ${districtName}`;

  const localShops = [
    {
      id: 1,
      name: `🔥 ${fullTitle} 한국미녀 홈케어`,
      desc: "지친 일상에 맞춤형 피로회복 케어! 베테랑 테라피스트의 정성 어린 프라이빗 릴렉싱",
      phone: "0507-1280-3299",
      price: "90,000원부터~",
      image: "/shop1.jpg"
    },
    {
      id: 2,
      name: `✨ ${fullTitle} 너무이쁜 홈테라피`,
      desc: "최고급 천연 아로마 오일을 활용한 품격 있는 전신 바디 이완 케어 서비스",
      phone: "0507-1280-3190",
      price: "60,000원부터~",
      image: "/shop2.jpg"
    },
    {
      id: 3,
      name: `💎 ${fullTitle} 예쁜걸 프리미엄`,
      desc: "재방문율 높은 안심 케어! 철저한 위생 관리와 럭셔리 스웨디시 프로그램 제공",
      phone: "0507-1280-3185",
      price: "60,000원부터~",
      image: "/shop3.jpg"
    },
    {
      id: 4,
      name: `🌟 ${fullTitle} 20대 프리미엄 힐링`,
      desc: "전문 힐러진의 맞춤형 VIP 체형 맞춤 피로회복 특화 프로그램 운영 중",
      phone: "0507-1280-3222",
      price: "60,000원부터~",
      image: "/shop4.jpg"
    },
    {
      id: 5,
      name: `👑 ${fullTitle} 그녀의온도 홈테라피`,
      desc: "선입금 전혀 없는 100% 안심 후불제! 수도권 신속 방문 프라이빗 서비스",
      phone: "0507-1280-3292",
      price: "60,000원부터~",
      image: "/shop5.jpg"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${fullTitle} 출장마사지 & 홈케어 안내 - 건마사랑`,
    "description": `${fullTitle} 지역 출장마사지, 방문 바디케어 및 힐링 테라피 제휴업체 정보 제공`,
    "url": `https://gunmasarang.store/${region}/${encodeURIComponent(districtName)}`,
    "telephone": "0507-1280-3344",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": districtName,
      "addressRegion": regionName,
      "addressCountry": "KR"
    }
  };

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            alt={`${fullTitle} 출장마사지 및 바디케어 안내`} 
            className="w-full h-56 md:h-72 object-cover filter brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="text-amber-400 text-xs font-black tracking-widest uppercase mb-1">
              {regionName.toUpperCase()} · LOCAL HEALING GUIDE
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white drop-shadow-md">
              {fullTitle} 출장마사지 & 방문 홈케어 안내
            </h1>
            <p className="text-xs md:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
              {fullTitle} 고객님을 위한 24시 출장마사지 가이드입니다. 검증된 테라피 코스와 100% 후불 안심 시스템을 확인해 보세요.
            </p>
          </div>
        </section>

        {/* 클라이언트 사이드 키워드 인젝션 영역 */}
        <ClientTextMixer locationText={fullTitle} />

        {/* 제휴업체 5개 카드리스트 */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-amber-400 font-bold tracking-widest uppercase">RECOMMENDED HOME TAPE</p>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">
              {fullTitle} 추천 제휴업체 (총 5곳)
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

        {/* 희석용 건강 칼럼 섹션 */}
        <section className="bg-[#0c0c0e] p-6 md:p-8 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-base md:text-lg font-bold text-amber-400 flex items-center gap-2">
            <span>🌿</span> {fullTitle} 힐링 바디케어 & 스트레칭 건강 가이드
          </h3>
          <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
            <p>
              현대 직장인들이 오랫동안 앉아서 일하거나 스마트폰을 지속적으로 사용할 경우, 승모근과 목 주변의 흉쇄유돌근이 경직되어 만성 두통이나 골반 불균형을 유발하기 쉽습니다. 이러한 피로 상태를 방치하면 근막 통증 증후군으로 발전할 수 있으므로 주기적인 스트레칭과 전신 피로 해소 케어가 꼭 필요합니다.
            </p>
            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-xs">💡 나에게 맞는 테라피 프로그램 선택 기준</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400">
                <li><strong className="text-gray-200">건식 릴렉싱 케어:</strong> 둔근, 하체 근육, 견갑골 주위의 굳은 부위를 눌러 스트레칭 위주로 근육 긴장을 해소합니다.</li>
                <li><strong className="text-gray-200">아로마 & 스웨디시 케어:</strong> 천연 오일의 유기적인 압을 이용해 림프 순환을 돕고 심신 안정 및 부종 완화에 탁월합니다.</li>
                <li><strong className="text-gray-200">프라이빗 홈케어 케어:</strong> 익숙하고 편안한 자신의 개인 공간에서 이동 시간 없이 피로를 완화할 수 있는 장점이 있습니다.</li>
              </ul>
            </div>
            <p className="text-gray-400 text-[11px]">
              * 본 가이드는 {fullTitle} 주민 여러분의 건강한 피로 회복과 올바른 힐링 케어 정보 제공을 목적으로 작성되었습니다.
            </p>
          </div>
        </section>

        {/* 이용 방법 4단계 */}
        <section className="bg-[#0f0f12] p-6 md:p-8 rounded-3xl border border-amber-500/30 space-y-6">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">SERVICE PROCESS</span>
            <h3 className="text-xl font-black text-white mt-1">{fullTitle} 서비스 이용 순서</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 1</span>
              <h4 className="font-bold text-white mt-1">위치 전달</h4>
              <p className="text-xs text-gray-400 mt-1">{fullTitle} 희망 장소를 알려줍니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 2</span>
              <h4 className="font-bold text-white mt-1">시간 조율</h4>
              <p className="text-xs text-gray-400 mt-1">원하시는 방문 시간을 확인합니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 3</span>
              <h4 className="font-bold text-white mt-1">코스 선택</h4>
              <p className="text-xs text-gray-400 mt-1">컨디션에 맞는 프로그램을 선택합니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 4</span>
              <h4 className="font-bold text-white mt-1">케어 진행</h4>
              <p className="text-xs text-gray-400 mt-1">도착 후 100% 후불제로 이용합니다.</p>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 (Q&A) */}
        <section className="space-y-4">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">FAQ & GUIDE</span>
            <h3 className="text-xl font-black text-white mt-1">{fullTitle} 자주 묻는 질문</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 space-y-1.5">
              <div className="font-bold text-sm text-gray-200 flex items-center gap-2">
                <span className="text-amber-400">Q.</span> {fullTitle} 출장마사지 방문 소요 시간은 얼마나 되나요?
              </div>
              <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                <span className="text-red-400 font-bold">A.</span> 주요 거점 기준 평균 20분~30분 내외로 원활한 방문이 가능합니다.
              </p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 space-y-1.5">
              <div className="font-bold text-sm text-gray-200 flex items-center gap-2">
                <span className="text-amber-400">Q.</span> 예약금이나 선입금 요청이 있나요?
              </div>
              <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                <span className="text-red-400 font-bold">A.</span> 건마사랑 제휴업체는 100% 후불제로 운영되므로 출발 전 선입금을 절대 요구하지 않습니다.
              </p>
            </div>
          </div>
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

          <p className="text-gray-400 font-bold">건마사랑은 건전한 방문 힐링 바디케어 정보 안내 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 건마사랑 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}