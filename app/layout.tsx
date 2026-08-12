import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  title: "건마사랑 | 서울·경기·인천 24시 방문 홈케어 & 힐링 테라피 안내",
  description: "서울, 경기, 인천 전지역 25분 내 신속 방문! 선입금 없는 100% 안심 후불제 예약.",
  openGraph: {
    title: "건마사랑 | 서울·경기·인천 24시 방문 홈케어 추천",
    description: "선입금 없는 100% 후불 안심 케어! 수도권 전지역 25분 내 빠른 방문 바디케어 정보를 확인하세요.",
    url: "https://gunmasarang.store",
  },

  // 🌟 네이버 & 구글 소유권 확인 태그
  verification: {
    google: "GknTTTuCaz345Abse2oF1-4INGW46yME8VSNJI89Ox0",
    other: {
      "naver-site-verification": "db48a22290e6ada8f448de064ff33b14bb7ccb44",
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
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}