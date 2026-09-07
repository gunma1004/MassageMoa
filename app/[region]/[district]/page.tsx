"use client";

import { useState, useEffect } from "react";
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

export default function RegionalDetailPage({ params, searchParams }: PageProps) {
  // 클라이언트 환경에서 비동기 params/searchParams 처리
  const [resolvedData, setResolvedData] = useState<{ region: string; district: string; dongName: string } | null>(null);
  
  // 새로고침 시 랜덤 섞인 샵 리스트를 담을 상태
  const [shuffledShops, setShuffledShops] = useState<any[]>([]);

  useEffect(() => {
    async function unwrapParams() {
      const p = await params;
      const sp = await searchParams;
      const reg = p.region;
      const dist = decodeURIComponent(p.district);
      const dong = sp.dong ? decodeURIComponent(sp.dong) : "";
      
      setResolvedData({ region: reg, district: dist, dongName: dong });

      // 지역별 기본 샵 데이터 정의
      const isDaejeonOrCheongju = reg === "daejeon" || reg === "cheongju";
      const isPreparingRegion = reg === "busan" || reg === "daegu" || reg === "gwangju_city" || reg === "ulsan";
      
      const regionFullName = getRegionFullName(reg);
      const fullTitle = dong ? `${regionFullName} ${dist} (${dong})` : `${regionFullName} ${dist}`;

      let baseShops = [];
      if (isDaejeonOrCheongju) {
        baseShops = [
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
        baseShops = [
          { id: 1, name: `🔥 ${fullTitle} 한국미녀 홈케어`, desc: "지친 일상에 맞춤형 피로회복 케어! 베테랑 테라피스트의 정성 어린 프라이빗 릴렉싱", phone: "0507-1280-3299", price: "90,000원부터~", image: "/shop1.jpg" },
          { id: 2, name: `✨ ${fullTitle} 너무이쁜 홈테라피`, desc: "최고급 천연 아로마 오일을 활용한 품격 있는 전신 바디 이완 케어 서비스", phone: "0507-1280-3190", price: "60,000원부터~", image: "/shop2.jpg" },
          { id: 3, name: `💎 ${fullTitle} 예쁜걸 프리미엄`, desc: "재방문율 높은 안심 케어! 철저한 위생 관리와 럭셔리 스웨디시 프로그램 제공", phone: "0507-1280-3185", price: "60,000원부터~", image: "/shop3.jpg" },
          { id: 4, name: `🌟 ${fullTitle} 20대 프리미엄 힐링`, desc: "전문 힐러진의 맞춤형 VIP 체형 맞춤 피로회복 특화 프로그램 운영 중", phone: "0507-1280-3222", price: "60,000원부터~", image: "/shop4.jpg" },
          { id: 5, name: `👑 ${fullTitle} 한국골든테라피`, desc: "선입금 전혀 없는 100% 안심 후불제! 신속 방문 프라이빗 서비스", phone: "0507-1280-3361", price: "60,000원부터~", image: "/shop5.jpg" }
        ];
      }

      // 페이지 진입/새로고침 시 무작위 랜덤 섞기
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

        {/* 제휴업체 섹션 (새로고침 시 랜덤 섞인 리스트 출력) */}
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