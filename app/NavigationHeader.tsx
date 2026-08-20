"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavigationHeader() {
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const regionList = [
    { name: "📍 서울 지역", href: `/seoul/${encodeURIComponent("서울특별시")}` },
    { name: "📍 경기 지역", href: `/gyeonggi/${encodeURIComponent("경기도")}` },
    { name: "📍 인천 지역", href: `/incheon/${encodeURIComponent("인천광역시")}` },
    { name: "📍 부산 지역", href: `/busan/${encodeURIComponent("부산광역시")}` },
    { name: "📍 대구 지역", href: `/daegu/${encodeURIComponent("대구광역시")}` },
    { name: "📍 대전 지역", href: `/daejeon/${encodeURIComponent("대전광역시")}` },
    { name: "📍 광주 지역", href: `/gwangju_city/${encodeURIComponent("광주광역시")}` },
    { name: "📍 울산 지역", href: `/ulsan/${encodeURIComponent("울산광역시")}` },
    { name: "📍 청주 지역", href: `/cheongju/${encodeURIComponent("청주시")}` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img 
            src="/logo.png" 
            alt="마사지모아 로고" 
            className="w-9 h-9 rounded-xl object-cover border border-amber-500/40 group-hover:scale-105 transition-transform" 
          />
          <span className="text-lg font-black tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            마사지모아
          </span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
          <Link href="/services" className="hover:text-amber-400 transition-colors">
            서비스
          </Link>
          <Link href="/prices" className="hover:text-amber-400 transition-colors">
            가격안내
          </Link>
          <Link href="/travel" className="hover:text-amber-400 transition-colors">
            지역여행
          </Link>
          <Link href="/places" className="hover:text-amber-400 transition-colors">
            맛집·숙소
          </Link>

          {/* 지역안내 드롭다운 */}
          <div 
            className="relative cursor-pointer py-2"
            onMouseEnter={() => setIsRegionOpen(true)}
            onMouseLeave={() => setIsRegionOpen(false)}
          >
            <button className="hover:text-amber-400 transition-colors flex items-center gap-1 text-xs font-bold text-gray-300">
              지역안내
              <span className="text-[10px] text-amber-400">▼</span>
            </button>

            {isRegionOpen && (
              <div className="absolute top-full left-0 w-40 bg-[#121214] border border-amber-500/30 rounded-2xl shadow-2xl py-2 space-y-1 text-xs z-50 max-h-72 overflow-y-auto">
                {regionList.map((r, idx) => (
                  <Link 
                    key={idx} 
                    href={r.href} 
                    className="block px-4 py-1.5 hover:bg-amber-500/10 hover:text-amber-400 transition-colors"
                  >
                    {r.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/reviews" className="text-amber-400 font-extrabold hover:text-yellow-300 transition-colors flex items-center gap-1 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/30">
            <span>💬</span> 생생후기
          </Link>
        </nav>

        {/* 우측 전화 CTA & 모바일 햄버거 토글 */}
        <div className="flex items-center gap-2">
          <a 
            href="tel:0507-1280-3344"
            className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-xs px-3.5 py-2 rounded-xl shadow transition-all active:scale-95"
          >
            📞 빠른 문의
          </a>

          {/* 모바일 햄버거 버튼 */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-colors"
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-2 text-xs font-bold text-gray-300">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <Link 
              href="/services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/10 hover:text-amber-400 text-center"
            >
              서비스
            </Link>
            <Link 
              href="/prices" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/10 hover:text-amber-400 text-center"
            >
              가격안내
            </Link>
            <Link 
              href="/travel" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/10 hover:text-amber-400 text-center"
            >
              지역여행
            </Link>
            <Link 
              href="/places" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/10 hover:text-amber-400 text-center"
            >
              맛집·숙소
            </Link>
          </div>

          <Link 
            href="/reviews" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 font-black"
          >
            💬 생생후기 보러가기
          </Link>

          <div className="pt-2 border-t border-white/5">
            <span className="text-[11px] text-amber-400 font-bold block mb-2 px-1">📍 지역별 바로가기</span>
            <div className="grid grid-cols-3 gap-1.5">
              {regionList.map((r, idx) => (
                <Link
                  key={idx}
                  href={r.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-center text-[11px] rounded-lg bg-black/40 border border-white/5 hover:border-amber-500/40 hover:text-amber-400 truncate"
                >
                  {r.name.replace("📍 ", "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}