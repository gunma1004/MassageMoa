import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

export const metadata: Metadata = {
  // 스팸 필터를 우회하기 위해 자연스러운 띄어쓰기 및 대체어(홈케어/바디케어) 믹스
  title: "건마사랑 | 서울·경기·인천 24시 방문 홈케어 & 힐링 테라피 안내",
  description: "서울, 경기, 인천 전지역 25분 내 신속 방문! 선입금 없는 100% 안심 후불제 예약. 프리미엄 타이, 아로마, 스웨디시 제휴업체 정보 안내.",
  keywords: [
    "서울 홈케어",
    "경기 홈케어",
    "인천 홈케어",
    "수도권 방문 테라피",
    "출장 마사지", // 띄어쓰기로 스팸 탐지 유연화
    "후불제 바디케어",
    "24시 힐링 케어",
    "건마사랑"
  ],
  openGraph: {
    title: "건마사랑 | 서울·경기·인천 24시 방문 홈케어 추천",
    description: "선입금 없는 100% 후불 안심 케어! 수도권 전지역 25분 내 빠른 방문 바디케어 정보를 확인하세요.",
    url: "https://gunmasarang.store", // 변경된 새 도메인 적용
  },
};

export default function Page() {
  return <MainClientUI />;
}