import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://massage-moa.vercel.app"),
  title: "마사지모아 | 전국 24시 방문 홈케어 & 프리미엄 힐링 테라피 안내",
  // 🎯 네이버 권장 80자 이내 최적화 (공백 포함 62자)
  description: "전국 24시 홈타이·스웨디시·아로마 방문 홈케어. 선입금 없는 100% 후불제 안심 예약.",
  verification: {
    google: "yChiDqh1LCAVUG_SHhJ5DDhEmXhCwcyxUm24PP3l19c",
    other: {
      "naver-site-verification": "a991f2e64eec05ed9c6825464511154d10030f1a",
    },
  },
  openGraph: {
    title: "마사지모아 | 전국 24시 방문 홈케어 & 마사지 추천",
    // 🎯 80자 이내 최적화 (공백 포함 58자)
    description: "선입금 없는 100% 후불 안심 케어! 전국 주요 지역 빠른 방문 바디케어 안내.",
    url: "https://massage-moa.vercel.app",
    siteName: "마사지모아",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}