import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

export const metadata: Metadata = {
  title: "건마사랑 | 서울·경기·인천 24시 출장마사지 추천 1등 플랫폼",
  description: "서울시 출장마사지, 경기도 출장마사지, 인천시 출장마사지 25분 내 신속 방문! 선입금 없는 100% 후불제, 프리미엄 타이·아로마·스웨디시 제휴업체 추천.",
  keywords: [
    "서울시 출장마사지",
    "경기도 출장마사지",
    "인천시 출장마사지",
    "서울 출장마사지",
    "경기 출장마사지",
    "인천 출장마사지",
    "수도권 출장마사지",
    "후불제 출장마사지",
    "24시 출장마사지",
    "건마사랑"
  ],
  openGraph: {
    title: "건마사랑 | 서울·경기·인천 24시 출장마사지 추천",
    description: "선입금 없는 100% 후불 안심 케어! 수도권 전지역 25분 내 빠른 방문 마사지 정보를 확인하세요.",
  },
};

export default function Page() {
  return <MainClientUI />;
}