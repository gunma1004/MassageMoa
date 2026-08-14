import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  title: '건마사랑 | 서울·경기·인천 24시 방문 홈케어 & 힐링 테라피 안내',
  description: '서울·경기·인천 25분 내 빠른 방문! 선입금 없는 100% 안심 후불제. 타이, 아로마, 스웨디시 힐링 테라피 정보 안내.',
  openGraph: {
    title: '건마사랑 | 서울·경기·인천 24시 방문 홈케어 추천',
    description: '선입금 없는 100% 후불 안심 케어! 수도권 전지역 25분 내 빠른 방문 바디케어 정보를 확인하세요.',
    url: 'https://www.gunmasarang.store',
    siteName: '건마사랑',
    locale: 'ko_KR',
    type: 'website',
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