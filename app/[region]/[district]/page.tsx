"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Metadata } from "next";
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

// 💡 네이버 로봇이 명확히 수집할 수 있도록 개선된 메타데이터 생성 함수
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
  const variantIndex = charSum % 20;

  const titleVariants = [
    /* 0 */ `${locationKeyword} 출장마사지 추천 | 24시 빠른방문 힐링 케어 - 건마사랑`,
    /* 1 */ `[건마사랑] ${locationKeyword} 출장마사지 안내 · 100% 안심 후불제`,
    /* 2 */ `${simpleLocation} 출장마사지 24시 전문 안내 | ${regionName} 프라이빗 홈케어`,
    /* 3 */ `${locationKeyword} 출장마사지 제휴업체 정보 및 후불제 예약 가이드`,
    /* 4 */ `${locationKeyword} 출장마사지 빠른 방문 24시 | 스웨디시 & 아로마 전문`,
    /* 5 */ `건마사랑 | ${simpleLocation} 출장마사지 안심 후불제 힐링 테라피`,
    /* 6 */ `${locationKeyword} 출장마사지 신속 도착 · 선입금 없는 정직한 바디케어`,
    /* 7 */ `${regionName} ${simpleLocation} 출장마사지 24시 예약 및 제휴 코스 안내`,
    /* 8 */ `${locationKeyword} 출장마사지 강추 | 프라이빗 1:1 맞춤형 피로회복`,
    /* 9 */ `[24시 방문] ${locationKeyword} 출장마사지 추천 업체 모음 · 건마사랑`,
    /* 10 */ `${simpleLocation} 출장마사지 릴렉싱 케어 | 후불제 홈테라피 가이드`,
    /* 11 */ `${locationKeyword} 출장마사지 25분 내 빠르게 달려갑니다 - 건마사랑`,
    /* 12 */ `프라이빗 힐링 ${locationKeyword} 출장마사지 | 타이·아로마·스웨디시`,
    /* 13 */ `${locationKeyword} 출장마사지 24시 엄선된 제휴업체 및 요금 안내`,
    /* 14 */ `${simpleLocation} 출장마사지 잘하는 곳 | 100% 후불 안심 테라피`,
    /* 15 */ `${locationKeyword} 출장마사지 신속한 예약 서비스 | 건마사랑 공식`,
    /* 16 */ `[건마사랑 24시] ${locationKeyword} 출장마사지 베테랑 힐러 케어`,
    /* 17 */ `${locationKeyword} 출장마사지 가이드 | 스웨디시·아로마·홈케어`,
    /* 18 */ `${simpleLocation} 출장마사지 24시간 언제나 빠르게 출동합니다`,
    /* 19 */ `${locationKeyword} 출장마사지 선입금 X | 안심 후불 바디케어`
  ];

  const descriptionVariants = [
    /* 0 */ `${locationKeyword} 출장마사지 25분 내 빠른 방문! 선입금 요청 절대 없는 100% 안심 후불제. 타이, 아로마, 스웨디시 제휴업체 코스 안내.`,
    /* 1 */ `프라이빗한 피로 회복! ${locationKeyword} 인근 24시 출장마사지 및 홈케어 가이드. 베테랑 테라피스트의 맞춤 힐링 케어를 확인하세요.`,
    /* 2 */ `${locationKeyword} 전지역 신속 출장마사지 예약. 부담 없는 후불제 시스템과 정직한 코스 정보 제공, 건마사랑 공식 안내.`,
    /* 3 */ `${simpleLocation} 고객님을 위한 24시 안심 출장마사지 & 바디케어. 스웨디시, 아로마 릴렉싱 정보 및 빠른 전화 연결 서비스.`,
    /* 4 */ `${locationKeyword} 출장마사지 찾고 계신가요? 100% 후불제 운영으로 안심하고 즐기는 프라이빗 홈케어 전문 가이드입니다.`,
    /* 5 */ `지친 일상의 피로를 날려버릴 ${locationKeyword} 24시 출장마사지 안내. 빠른 신속 방문과 베테랑 힐러진의 품격 있는 서비스를 경험하세요.`,
    /* 6 */ `${locationKeyword} 어디서나 25분 내 도착! 선입금 없는 안심 후불제 출장마사지와 힐링 바디케어 코스를 엄선하여 소개합니다.`,
    /* 7 */ `${simpleLocation} 출장마사지 전문 제휴업체 모음. 24시간 언제든 편안한 개인 공간에서 이용하는 프리미엄 스웨디시 케어.`,
    /* 8 */ `${locationKeyword} 인근 믿을 수 있는 후불제 출장마사지 정보. 타이, 아로마, 전신 오일 테라피까지 한눈에 비교 확인하세요.`,
    /* 9 */ `건마사랑에서 보장하는 ${locationKeyword} 출장마사지 안심 서비스! 선입금 요구 없이 도착 후 결제하는 100% 안전 시스템.`,
    /* 10 */ `${locationKeyword} 24시 방문 홈케어 및 출장마사지 종합 안내. 맞춤형 힐링 케어로 묵은 피로를 시원하게 해소해 드립니다.`,
    /* 11 */ `${simpleLocation} 출장마사지 코스 및 이용 가격 안내. 24시간 친절 상담과 빠른 방문으로 고객 만족도를 높여드립니다.`,
    /* 12 */ `${locationKeyword} 출장마사지 릴렉싱 프로그램. 프라이빗한 맞춤 케어로 심신의 편안함과 활력을 찾아드립니다.`,
    /* 13 */ `${locationKeyword} 24시 출장마사지 예약 가이드. 선입금 사기 걱정 없는 100% 후불제 제휴업체 정보만 선별하여 전달합니다.`,
    /* 14 */ `${simpleLocation} 어디든 신속 방문하는 24시 출장마사지. 타이, 아로마, 스웨디시 등 나에게 딱 맞는 힐링 테라피 추천.`,
    /* 15 */ `${locationKeyword} 출장마사지 안심 안내! 예약금 요구 없는 정직한 100% 후불 시스템으로 편안하게 이용해 보세요.`,
    /* 16 */ `전문 힐러의 손길로 경험하는 ${locationKeyword} 출장마사지. 빠른 방문 시간과 합리적인 코스 정보를 확인하세요.`,
    /* 17 */ `${simpleLocation} 24시 방문 홈케어 & 출장마사지 서비스. 쌓인 스트레스와 뭉친 근육을 부드럽게 이완시켜 드립니다.`,
    /* 18 */ `${locationKeyword} 출장마사지 엄선된 제휴업체 정보 안내. 선입금 제로, 검증된 1:1 방문 맞춤 케어 프로그램을 제공합니다.`,
    /* 19 */ `${locationKeyword} 인근 25분 내 출동하는 출장마사지 서비스! 친절한 상담과 신속한 도착으로 언제나 편안하게 이용 가능합니다.`
  ];

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [
      `${locationKeyword} 출장마사지`,
      `${locationKeyword}출장마사지`,
      `${simpleLocation} 출장마사지`,
      `${locationKeyword} 홈케어`,
      "24시 출장마사지",
      "후불제 출장마사지",
      "건마사랑"
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://gunmasarang.vercel.app/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "건마사랑",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default function RegionalDetailPage({ params, searchParams }: PageProps) {
  const [resolvedData, setResolvedData] = useState<{ region: string; district: string; dongName: string } | null>(null);
  const [shuffledShops, setShuffledShops] = useState<any[]>([]);

  useEffect(() => {
    async function unwrapParams() {
      const p = await params;
      const sp = await searchParams;
      const reg = p.region;
      const dist = decodeURIComponent(p.district);
      const dong = sp.dong ? decodeURIComponent(sp.dong) : "";
      
      setResolvedData({ region: reg, district: dist, dongName: dong });

      const isDaejeonOrCheongju = reg === "daejeon" || reg === "cheongju";
      const isPreparingRegion = reg === "busan" || reg === "daegu" || reg === "gwangju_city" || reg === "ulsan";
      
      const regionFullName = getRegionFullName(reg);
      const fullTitle = dong ? `${regionFullName} ${dist} (${dong})` : `${regionFullName} ${dist}`;

      let baseShops: { id: number; name: string; desc: string; phone: string; price: string; image: string }[] = [];

      if (isDaejeonOrCheongju) {
        baseShops = [
          {
            id: 1,
            name: `👑 ${fullTitle} S슬림`,
            desc: `${fullTitle} 출장마사지 전지역 25분 신속 도착! 100% 후불제로 안심하고 이용하는 최고급 프라이빗 힐링 테라피`,
            phone: "0507-1280-3352",
            price: "60,000원부터~",
            image: "/shop1.jpg"
          }
        ];
      } else if (!isPreparingRegion) {
        baseShops = [
          { id: 1, name: `🔥 ${fullTitle} 한국미인홈케어`, desc: `${fullTitle} 출장마사지 전문! 베테랑 테라피스트의 정성 어린 프라이빗 릴렉싱`, phone: "0507-1280-3201", price: "90,000원부터~", image: "/shop1.jpg" },
          { id: 2, name: `✨ ${fullTitle} 오늘밤테라피`, desc: `${fullTitle} 24시 출장마사지, 최고급 천연 오일 전신 바디 이완 케어`, phone: "0507-1280-3199", price: "60,000원부터~", image: "/shop2.jpg" },
          { id: 3, name: `💎 ${fullTitle} 주주테라피`, desc: `재방문율 높은 안심 출장마사지! 철저한 위생 관리와 럭셔리 스웨디시 프로그램`, phone: "0507-1280-3197", price: "60,000원부터~", image: "/shop3.jpg" },
          { id: 4, name: `🌟 ${fullTitle} 퀸즈홈테라피`, desc: `전문 힐러진의 ${fullTitle} 출장마사지 맞춤형 VIP 피로회복 특화 프로그램`, phone: "0507-1280-3222", price: "60,000원부터~", image: "/shop4.jpg" },
          { id: 5, name: `👑 ${fullTitle} 한국골든테라피`, desc: `선입금 없는 100% 안심 후불제 ${fullTitle} 출장마사지 신속 방문 프라이빗 서비스`, phone: "0507-1280-3360", price: "60,000원부터~", image: "/shop5.jpg" }
        ];
      }

      const randomized = [...baseShops].sort(() => Math.random() - 0.5);
      setShuffledShops(randomized);
    }

    unwrapParams();
  }, [params, searchParams]);

  if (!resolvedData) {
    return <div className="bg-[#050505] text-white min-h-screen flex items-center justify-center">로딩 중...</div>;
  }

  const { region, district: districtName, dongName } = resolvedData;
  const regionName = getRegionFullName(region);
  const fullTitle = dongName ? `${regionName} ${districtName} (${dongName})` : `${regionName} ${districtName}`;

  const isDaejeonOrCheongju = region === "daejeon" || region === "cheongju";
  const isPreparingRegion = region === "busan" || region === "daegu" || region === "gwangju_city" || region === "ulsan";

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      
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

        {/* 제휴업체 섹션 */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-amber-400 font-bold tracking-widest uppercase">
              {isPreparingRegion ? "NOTICE" : isDaejeonOrCheongju ? "EXCLUSIVE PARTNER" : "RECOMMENDED SHOPS"}
            </p>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">
              {isPreparingRegion 
                ? `${fullTitle} 출장마사지 제휴 안내` 
                : isDaejeonOrCheongju 
                  ? `🏆 ${fullTitle} 출장마사지 추천 제휴업체 (S슬림)` 
                  : `${fullTitle} 출장마사지 추천 제휴업체 (총 5곳)`}
            </h2>
          </div>

          {isPreparingRegion ? (
            <div className="bg-[#121214] border-2 border-dashed border-amber-500/30 rounded-3xl p-8 text-center space-y-5 shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl">🤝</div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white">현재 {fullTitle} 출장마사지 제휴업체 모집 중</h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
                  건마사랑은 철저한 안심 후불제 검증을 거친 업체만 입점시키고 있습니다. 현재 해당 지역은 신규 제휴점을 심사 및 준비 중입니다.
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
              {shuffledShops.map((lShop) => (
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
            <span>🌿</span> {fullTitle} 출장마사지 & 바디케어 건강 가이드
          </h3>
          <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
            <p>
              {fullTitle} 지역에서 출장마사지를 찾으시는 분들을 위해, 현대 직장인들이 오랫동안 앉아서 일할 때 경직되는 승모근과 목 주변 근육을 풀어주는 릴렉싱 케어 정보를 안내해 드립니다.
            </p>
            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-xs">💡 나에게 맞는 출장마사지 프로그램 선택 기준</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400">
                <li><strong className="text-gray-200">건식 릴렉싱 케어:</strong> 둔근, 하체 근육, 견갑골 주위의 굳은 부위를 눌러 스트레칭 위주로 근육 긴장을 해소합니다.</li>
                <li><strong className="text-gray-200">아로마 & 스웨디시 케어:</strong> 천연 오일의 유기적인 압을 이용해 림프 순환을 돕고 심신 안정 및 부종 완화에 탁월합니다.</li>
                <li><strong className="text-gray-200">프라이빗 홈케어:</strong> 익숙하고 편안한 자신의 개인 공간에서 이동 시간 없이 피로를 완화할 수 있는 장점이 있습니다.</li>
              </ul>
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
          <p className="text-gray-400 font-bold">건마사랑은 건전한 출장마사지 및 방문 힐링 바디케어 정보 안내 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 건마사랑 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}