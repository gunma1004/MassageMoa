import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader"; // 👈 추가

export const metadata: Metadata = {
  title: "건마사랑 | 서울·경기·인천 24시 출장마사지 추천 1등 플랫폼",
  description: "서울, 경기, 인천 전지역 25분 내 신속 방문! 선입금 없는 100% 후불제 안심 예약.",
  verification: {
    google: "8lf7yFKYW3BrCgd1VOzLZP967Z_uCQE3N1KzAuQD358",
    other: {
      "naver-site-verification": "61c50b0d437b1bc55810319a2ec71b5a0ea65c9d",
    },
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
        {/* 🌟 최상단에 카테고리 헤더 배치 */}
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}