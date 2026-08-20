import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

export const metadata: Metadata = {
  // 검색 엔진 스팸 필터를 우회하면서 신뢰감을 주는 자연스러운 문구 믹스
  title: "마사지모아 | 전국 24시 방문 홈케어 & 프리미엄 힐링 테라피 안내",
  description: "서울, 경기, 인천, 부산, 대구, 대전 전지역 25분 내 신속 방문! 선입금 없는 100% 안심 후불제 예약. 타이, 아로마, 스웨디시 제휴업체 정보 안내.",
  keywords: [
    "마사지모아",
    "서울 홈케어",
    "경기 홈케어",
    "인천 홈케어",
    "부산 마사지",
    "대구 홈타이",
    "대전 바디케어",
    "방문 테라피",
    "후불제 바디케어",
    "24시 힐링 케어"
  ],
  openGraph: {
    title: "마사지모아 | 전국 24시 방문 홈케어 & 마사지 추천",
    description: "선입금 없는 100% 후불 안심 케어! 전국 주요 도시 빠른 방문 바디케어 정보를 한눈에 모아보세요.",
    url: "https://massagemoa.com", // 💡 추후 구매하신 마사지모아 도메인 주소로 변경하세요.
  },
};

export default function Page() {
  return <MainClientUI />;
}