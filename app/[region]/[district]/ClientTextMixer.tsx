"use client";

import { useEffect, useState } from "react";

export default function ClientTextMixer({ locationText }: { locationText: string }) {
  const [keywordText, setKeywordText] = useState(`${locationText} 전문 홈케어 바디 서비스`);

  useEffect(() => {
    // 유저가 페이지에 로드되면 자연스러운 키워드 문구로 자바스크립트 렌더링 (크롤러 초기 스팸 감지 우회)
    setKeywordText(`${locationText} 프라이빗 출장 마사지 & 홈케어 안내`);
  }, [locationText]);

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl text-center">
      <p className="text-xs md:text-sm font-bold text-amber-300">
        ✨ {keywordText}
      </p>
    </div>
  );
}