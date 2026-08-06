import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "건마사랑 | 서울·경기·인천 24시 출장마사지 홈케어 추천",
  description: "서울, 경기, 인천 전지역 25분 내 신속 방문! 선입금 0원 100% 후불제 안심 예약. 스웨디시, 타이, 아로마 마사지 및 프라이빗 힐링 서비스 제공.",
  
  // 🔍 구글 & 네이버 소유 확인 태그 추가 위치
  verification: {
    google: "8lf7yFKYW3BrCgdlVOzLZP967z_uCQE3N1KzAuQD358",
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
      <body>{children}</body>
    </html>
  );
}