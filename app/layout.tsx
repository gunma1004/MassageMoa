import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "건마사랑 | 서울·경기·인천 24시 출장마사지 추천 1등 플랫폼",
  // 80자 이내로 다듬은 페이지 설명 (공백 포함 76자)
  description: "서울, 경기, 인천 전지역 25분 내 신속 방문! 선입금 없는 100% 후불제 안심 예약. 타이, 아로마, 스웨디시 프리미엄 힐링 서비스 제공.",
  
  openGraph: {
    title: "건마사랑 | 서울·경기·인천 24시 출장마사지 추천",
    description: "선입금 없는 100% 후불 안심 케어! 수도권 전지역 25분 내 빠른 방문 마사지 정보를 확인하세요.",
  },

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
      <body>{children}</body>
    </html>
  );
}