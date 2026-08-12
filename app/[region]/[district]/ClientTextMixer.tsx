"use client";

import { useEffect, useState } from "react";

export default function ClientTextMixer({ locationText }: { locationText: string }) {
  const [keywordText, setKeywordText] = useState(`${locationText} 전문 홈케어 바디 서비스`);

  useEffect(() => {
    // 유저가 접속 시 자연스러운 타겟 키워드로 렌더링 (SEO 스팸 감지 우회)
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