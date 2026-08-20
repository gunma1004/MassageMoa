import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://massage-moa.vercel.app"),
  title: "마사지모아 | 전국 24시 방문 홈케어 & 힐링 테라피 안내",
  description: "서울·경기·인천·부산·대구·대전 등 전국 25분 내 빠른 방문! 선입금 없는 100% 안심 후불제. 타이, 아로마, 스웨디시 제휴업체 정보 모아보기.",
  verification: {
    google: "yChiDqh1LCAVUG_SHhJ5DDhEmXhCwcyxUm24PP3l19c",
    other: {
      "naver-site-verification": "a991f2e64eec05ed9c6825464511154d10030f1a",
    },
  },
  openGraph: {
    title: "마사지모아 | 전국 24시 방문 홈케어 & 마사지 정보 추천",
    description: "선입금 없는 100% 후불 안심 케어! 전국 주요 지역 빠른 방문 바디케어 정보를 마사지모아에서 확인하세요.",
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