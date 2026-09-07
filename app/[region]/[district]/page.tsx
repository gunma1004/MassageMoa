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

// 🎯 Cloudflare 정적 Export 필수 함수 (정적 빌드 시 모든 지역 페이지 생성)
export async function generateStaticParams() {
  const regionList = [
    // 서울
    { region: "seoul", district: "종로구" },
    { region: "seoul", district: "중구" },
    { region: "seoul", district: "용산구" },
    { region: "seoul", district: "성동구" },
    { region: "seoul", district: "광진구" },
    { region: "seoul", district: "동대문구" },
    { region: "seoul", district: "중랑구" },
    { region: "seoul", district: "성북구" },
    { region: "seoul", district: "강북구" },
    { region: "seoul", district: "도봉구" },
    { region: "seoul", district: "노원구" },
    { region: "seoul", district: "은평구" },
    { region: "seoul", district: "서대문구" },
    { region: "seoul", district: "마포구" },
    { region: "seoul", district: "양천구" },
    { region: "seoul", district: "강서구" },
    { region: "seoul", district: "구로구" },
    { region: "seoul", district: "금천구" },
    { region: "seoul", district: "영등포구" },
    { region: "seoul", district: "동작구" },
    { region: "seoul", district: "관악구" },
    { region: "seoul", district: "서초구" },
    { region: "seoul", district: "강남구" },
    { region: "seoul", district: "송파구" },
    { region: "seoul", district: "강동구" },
    // 경기
    { region: "gyeonggi", district: "수원시 장안구" },
    { region: "gyeonggi", district: "수원시 권선구" },
    { region: "gyeonggi", district: "수원시 팔달구" },
    { region: "gyeonggi", district: "수원시 영통구" },
    { region: "gyeonggi", district: "성남시 수정구" },
    { region: "gyeonggi", district: "성남시 중원구" },
    { region: "gyeonggi", district: "성남시 분당구" },
    { region: "gyeonggi", district: "고양시 덕양구" },
    { region: "gyeonggi", district: "고양시 일산동구" },
    { region: "gyeonggi", district: "고양시 일산서구" },
    { region: "gyeonggi", district: "용인시 처인구" },
    { region: "gyeonggi", district: "용인시 기흥구" },
    { region: "gyeonggi", district: "용인시 수지구" },
    { region: "gyeonggi", district: "부천시 원미구" },
    { region: "gyeonggi", district: "부천시 소사구" },
    { region: "gyeonggi", district: "부천시 오정구" },
    { region: "gyeonggi", district: "안산시 상록구" },
    { region: "gyeonggi", district: "안산시 단원구" },
    { region: "gyeonggi", district: "안양시 만안구" },
    { region: "gyeonggi", district: "안양시 동안구" },
    { region: "gyeonggi", district: "남양주시" },
    { region: "gyeonggi", district: "화성시" },
    { region: "gyeonggi", district: "평택시" },
    { region: "gyeonggi", district: "의정부시" },
    { region: "gyeonggi", district: "파주시" },
    { region: "gyeonggi", district: "김포시" },
    { region: "gyeonggi", district: "시흥시" },
    { region: "gyeonggi", district: "광명시" },
    { region: "gyeonggi", district: "광주시" },
    { region: "gyeonggi", district: "하남시" },
    { region: "gyeonggi", district: "군포시" },
    { region: "gyeonggi", district: "오산시" },
    { region: "gyeonggi", district: "이천시" },
    { region: "gyeonggi", district: "안성시" },
    { region: "gyeonggi", district: "양주시" },
    { region: "gyeonggi", district: "포천시" },
    { region: "gyeonggi", district: "여주시" },
    { region: "gyeonggi", district: "동두천시" },
    { region: "gyeonggi", district: "가평군" },
    { region: "gyeonggi", district: "양평군" },
    { region: "gyeonggi", district: "연천군" },
    // 인천
    { region: "incheon", district: "중구" },
    { region: "incheon", district: "동구" },
    { region: "incheon", district: "미추홀구" },
    { region: "incheon", district: "연수구" },
    { region: "incheon", district: "남동구" },
    { region: "incheon", district: "부평구" },
    { region: "incheon", district: "계양구" },
    { region: "incheon", district: "서구" },
    { region: "incheon", district: "강화군" },
    { region: "incheon", district: "옹진군" },
    // 부산
    { region: "busan", district: "해운대구" },
    { region: "busan", district: "부산진구" },
    { region: "busan", district: "수영구" },
    { region: "busan", district: "사상구" },
    { region: "busan", district: "사하구" },
    { region: "busan", district: "동래구" },
    { region: "busan", district: "금정구" },
    { region: "busan", district: "남구" },
    // 대구
    { region: "daegu", district: "중구" },
    { region: "daegu", district: "수성구" },
    { region: "daegu", district: "동구" },
    { region: "daegu", district: "서구" },
    { region: "daegu", district: "남구" },
    { region: "daegu", district: "북구" },
    { region: "daegu", district: "달서구" },
    { region: "daegu", district: "달성군" },
    // 대전
    { region: "daejeon", district: "서구" },
    { region: "daejeon", district: "유성구" },
    { region: "daejeon", district: "중구" },
    { region: "daejeon", district: "동구" },
    { region: "daejeon", district: "대덕구" },
    // 광주
    { region: "gwangju_city", district: "서구" },
    { region: "gwangju_city", district: "북구" },
    { region: "gwangju_city", district: "광산구" },
    { region: "gwangju_city", district: "동구" },
    { region: "gwangju_city", district: "남구" },
    // 울산
    { region: "ulsan", district: "남구" },
    { region: "ulsan", district: "중구" },
    { region: "ulsan", district: "북구" },
    { region: "ulsan", district: "동구" },
    { region: "ulsan", district: "울주군" },
    // 청주
    { region: "cheongju", district: "흥덕구" },
    { region: "cheongju", district: "서원구" },
    { region: "cheongju", district: "상당구" },
    { region: "cheongju", district: "청원구" },
  ];

  return regionList.map((item) => ({
    region: item.region,
    district: item.district,
  }));
}

function getRegionKoreanName(region: string): string {
  switch (region) {
    case "seoul": return "서울";
    case "incheon": return "인천";
    case "gyeonggi": return "경기";
    case "busan": return "부산";
    case "daegu": return "대구";
    case "daejeon": return "대전";
    case "gwangju_city": return "광주";
    case "ulsan": return "울산";
    case "cheongju": return "청주";
    default: return "전국";
  }
}

function getRegionFullName(region: string): string {
  switch (region) {
    case "seoul": return "서울특별시";
    case "incheon": return "인천광역시";
    case "gyeonggi": return "경기도";
    case "busan": return "부산광역시";
    case "daegu": return "대구광역시";
    case "daejeon": return "대전광역시";
    case "gwangju_city": return "광주광역시";
    case "ulsan": return "울산광역시";
    case "cheongju": return "청주시";
    default: return "";
  }
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = getRegionKoreanName(region);

  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  const charSum = (locationKeyword + dongName + districtName).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 120;

// 🌟 제목 변수 (출장마사지 키워드 포함)
  const titleVariants = [
    `${locationKeyword} 출장마사지 추천 순위 TOP 제휴샵 - 마사지모아`,
    `${simpleLocation} 주변 24시 출장마사지 방문 홈케어 | 선입금 없는 안심 후불 예약`,
    `[마사지모아] ${locationKeyword} 출장마사지 타이·아로마 테라피 신속 방문`,
    `${locationKeyword} 출장마사지 감성 스웨디시 힐링 케어 추천 업체 모아보기`,
    `오늘 바로 이용 가능한 ${simpleLocation} 출장마사지 | 100% 후불제 서비스`,
    `${regionName} ${simpleLocation} 출장마사지 바디케어 가이드 · 베테랑 힐러 맞춤 관리`,
    `${locationKeyword} 피로회복 특화 출장마사지 방문 테라피 매장 가격 및 코스`,
    `[24시 실시간] ${locationKeyword} 출장마사지 빠른 매칭 서비스 - 마사지모아`,
    `${simpleLocation} 프라이빗 출장마사지 1:1 홈테라피 전문점 정보 및 가이드`,
    `마사지모아 공식 | ${locationKeyword} 출장마사지 믿을 수 있는 후불 안심 테라피`,
    `${locationKeyword} 출장마사지 직장인 야근 피로 싹 푸는 24시간 방문 케어`,
    `${simpleLocation} 출장마사지 요금표 정리 | 타이 60분 6만원부터`,
    `[신속방문 25분] ${locationKeyword} 출장마사지 안심 예약 바디케어 제휴샵`,
    `${locationKeyword} 출장마사지 전신 아로마 릴렉싱 코스 · 청결 위생 철저 매장`,
    `${simpleLocation} 출장마사지 어디가 좋을까? 실제 이용 평점 확인하기`,
    `마사지모아 엄선 | ${locationKeyword} 출장마사지 럭셔리 VIP 스웨디시 프로그램`,
    `${locationKeyword} 출장마사지 24시 야간 방문 테라피 상담 및 코스 안내`,
    `${simpleLocation} 주민이 찾는 후불제 홈케어 출장마사지 베스트 샵`,
    `[100% 후불 보장] ${locationKeyword} 출장마사지 예약 전 체크포인트`,
    `${locationKeyword} 출장마사지 나만의 힐링 쉼터 | 최고급 오일 프라이빗 바디케어`,
  ];

  // 🌟 설명 변수 (출장마사지 키워드가 명확히 포함되도록 정의)
  const descriptionVariants = [
    `${locationKeyword} 지역에서 자택, 오피스텔, 호텔 어디든 부를 수 있는 60,000원 특가 출장마사지 및 홈타이 제휴 업소 안내.`,
    `${simpleLocation} 전지역 25분 내 신속 방문하는 출장마사지 전문 힐러진의 100% 후불제 안심 홈케어 서비스.`,
    `지친 일상을 깨우는 정성 가득한 테라피! ${locationKeyword} 출장마사지 전문 제휴점에서 선입금 없이 안전하게 이용하세요.`,
    `품격 있는 힐링을 선사하는 프라이빗 케어. ${simpleLocation} 출장마사지 최고급 오일 테라피와 맞춤 지압을 만나보세요.`,
    `선입금 없는 100% 후불제 안심 이용! ${locationKeyword} 출장마사지 평균 25분 내 신속하게 방문해 드립니다.`,
  ];

  // 인덱스 범위 초과 방지 안전장치
  const safeTitleIndex = variantIndex % titleVariants.length;
  const safeDescIndex = variantIndex % descriptionVariants.length;

  const finalTitle = titleVariants[safeTitleIndex];
  const finalDescription = descriptionVariants[safeDescIndex];

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [
      `${locationKeyword} 출장마사지`,
      `${locationKeyword}출장마사지`,
      `${simpleLocation} 출장마사지`,
      `${locationKeyword} 홈케어`,
      `${locationKeyword} 방문 마사지`,
      `${locationKeyword} 스웨디시`,
      "24시 출장마사지",
      "후불제 출장마사지",
      "마사지모아"
    ],

export default async function RegionalDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = getRegionFullName(region);
  
  const fullTitle = dongName 
    ? `${regionName} ${districtName} (${dongName})` 
    : `${regionName} ${districtName}`;

  // 💡 지역 분기 로직
  const isDaejeonOrCheongju = region === "daejeon" || region === "cheongju";
  const isPreparingRegion = region === "busan" || region === "daegu" || region === "gwangju_city" || region === "ulsan";

  let localShops: { id: number; name: string; desc: string; phone: string; price: string; image: string }[] = [];

  if (isDaejeonOrCheongju) {
    localShops = [
      {
        id: 1,
        name: `👑 ${fullTitle} S슬림`,
        desc: `${fullTitle} 전지역 25분 신속 도착! 100% 후불제로 안심하고 이용하는 최고급 프라이빗 힐링 테라피 & 바디케어`,
        phone: "0507-1280-3352",
        price: "60,000원부터~",
        image: "/shop1.jpg"
      }
    ];
  } else if (!isPreparingRegion) {
    localShops = [
      { id: 1, name: `🔥 ${fullTitle} 한국미녀 홈케어`, desc: "지친 일상에 맞춤형 피로회복 케어! 베테랑 테라피스트의 정성 어린 프라이빗 릴렉싱", phone: "0507-1280-3299", price: "90,000원부터~", image: "/shop1.jpg" },
      { id: 2, name: `✨ ${fullTitle} 너무이쁜 홈테라피`, desc: "최고급 천연 아로마 오일을 활용한 품격 있는 전신 바디 이완 케어 서비스", phone: "0507-1280-3190", price: "60,000원부터~", image: "/shop2.jpg" },
      { id: 3, name: `💎 ${fullTitle} 예쁜걸 프리미엄`, desc: "재방문율 높은 안심 케어! 철저한 위생 관리와 럭셔리 스웨디시 프로그램 제공", phone: "0507-1280-3185", price: "60,000원부터~", image: "/shop3.jpg" },
      { id: 4, name: `🌟 ${fullTitle} 20대 프리미엄 힐링`, desc: "전문 힐러진의 맞춤형 VIP 체형 맞춤 피로회복 특화 프로그램 운영 중", phone: "0507-1280-3222", price: "60,000원부터~", image: "/shop4.jpg" },
      { id: 5, name: `👑 ${fullTitle} 그녀의온도 홈테라피`, desc: "선입금 전혀 없는 100% 안심 후불제! 신속 방문 프라이빗 서비스", phone: "0507-1280-3292", price: "60,000원부터~", image: "/shop5.jpg" }
    ];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${fullTitle} 출장마사지 & 홈케어 안내 - 마사지모아`,
    "description": `${fullTitle} 지역 출장마사지, 방문 바디케어 및 힐링 테라피 제휴업체 정보 제공`,
    "url": `https://massage-moa.vercel.app/${region}/${encodeURIComponent(districtName)}`,
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
              {regionName} · LOCAL HEALING GUIDE
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

        {/* 제휴업체 섹션 분기처리 */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-amber-400 font-bold tracking-widest uppercase">
              {isPreparingRegion ? "NOTICE" : isDaejeonOrCheongju ? "EXCLUSIVE PARTNER" : "RECOMMENDED SHOPS"}
            </p>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">
              {isPreparingRegion 
                ? `${fullTitle} 제휴 안내` 
                : isDaejeonOrCheongju 
                  ? `🏆 ${fullTitle} 추천 제휴업체 (S슬림)` 
                  : `${fullTitle} 추천 제휴업체 (총 5곳)`}
            </h2>
          </div>

          {isPreparingRegion ? (
            <div className="bg-[#121214] border-2 border-dashed border-amber-500/30 rounded-3xl p-8 text-center space-y-5 shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl">🤝</div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white">현재 {fullTitle} 지역 제휴업체 모집 중</h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
                  마사지모아는 철저한 안심 후불제 검증을 거친 업체만 입점시키고 있습니다. 현재 해당 지역은 신규 제휴점을 심사 및 준비 중입니다.
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-2xl p-4 max-w-sm mx-auto">
                <span className="text-[11px] text-amber-400 block font-bold mb-1">📞 제휴 및 입점 문의센터</span>
                <a href="tel:0507-1280-3344" className="text-xl font-black text-white hover:text-amber-400 transition-colors">
                  0507-1280-3344
                </a>
              </div>
            </div>
          ) : (
            <div className={isDaejeonOrCheongju ? "max-w-xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
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
          )}
        </section>

        {/* 건강 칼럼 섹션 */}
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
                <li><strong className="text-gray-200">프라이빗 홈케어:</strong> 익숙하고 편안한 자신의 개인 공간에서 이동 시간 없이 피로를 완화할 수 있는 장점이 있습니다.</li>
              </ul>
            </div>
            <p className="text-gray-400 text-[11px]">
              * 본 가이드는 {fullTitle} 주민 여러분의 건강한 피로 회복과 올바른 힐링 케어 정보 제공을 목적으로 작성되었습니다.
            </p>
          </div>
        </section>

        {/* 서비스 이용 순서 4단계 */}
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

        {/* Q&A */}
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
                <span className="text-red-400 font-bold">A.</span> 마사지모아 제휴업체는 100% 후불제로 운영되므로 출발 전 선입금을 절대 요구하지 않습니다.
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

          <p className="text-gray-400 font-bold">마사지모아는 건전한 방문 힐링 바디케어 정보 안내 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 마사지모아 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}