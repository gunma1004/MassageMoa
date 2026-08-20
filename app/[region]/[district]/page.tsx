import { Metadata } from "next";
import Link from "next/link";
import ClientTextMixer from "./ClientTextMixer";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
  searchParams: Promise<{
    dong?: string;
  }>;
}

function getRegionKoreanName(region: string): string {
  switch (region) {
    case "seoul": return "서울";
    case "incheon": return "인천";
    case "gyeonggi": return "경기";
    case "busan": return "부산";
    case "daegu": return "대구";
    case "daejeon": return "대전";
    case "gwangju_city": return "광주";
    case "ulsan": return "울산";
    case "cheongju": return "청주";
    default: return "전국";
  }
}

function getRegionFullName(region: string): string {
  switch (region) {
    case "seoul": return "서울특별시";
    case "incheon": return "인천광역시";
    case "gyeonggi": return "경기도";
    case "busan": return "부산광역시";
    case "daegu": return "대구광역시";
    case "daejeon": return "대전광역시";
    case "gwangju_city": return "광주광역시";
    case "ulsan": return "울산광역시";
    case "cheongju": return "청주시";
    default: return "";
  }
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = getRegionKoreanName(region);

  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  const charSum = (locationKeyword + dongName + districtName).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 120;

  const titleVariants = [
    `${locationKeyword} 출장마사지 추천 순위 TOP 제휴샵 - 마사지모아`,
    `${simpleLocation} 주변 24시 방문 홈케어 | 선입금 없는 안심 후불 예약`,
    `[마사지모아] ${locationKeyword} 타이·아로마 테라피 25분 신속 방문 안내`,
    `${locationKeyword} 감성 스웨디시 힐링 케어 추천 업체 모아보기`,
    `오늘 바로 이용 가능한 ${simpleLocation} 출장마사지 | 100% 후불제 서비스`,
    `${regionName} ${simpleLocation} 바디케어 가이드 · 베테랑 힐러 맞춤 관리`,
    `${locationKeyword} 피로회복 특화 방문 테라피 매장 가격 및 코스 비교`,
    `[24시 실시간] ${locationKeyword} 출장마사지 빠른 매칭 서비스 - 마사지모아`,
    `${simpleLocation} 프라이빗 1:1 홈테라피 전문점 정보 및 이용 가이드`,
    `마사지모아 공식 | ${locationKeyword} 믿을 수 있는 후불 안심 테라피`,
    `${locationKeyword} 직장인 야근 피로 싹 푸는 24시간 방문 케어 추천`,
    `${simpleLocation} 출장마사지 요금표 정리 | 타이 60분 6만원부터`,
    `[신속방문 25분] ${locationKeyword} 안심 예약 바디케어 제휴샵 안내`,
    `${locationKeyword} 전신 아로마 릴렉싱 코스 · 청결 위생 철저 매장`,
    `${simpleLocation} 출장마사지 어디가 좋을까? 실제 이용 평점 확인하기`,
    `마사지모아 엄선 | ${locationKeyword} 럭셔리 VIP 스웨디시 프로그램`,
    `${locationKeyword} 24시 야간 방문 테라피 상담 및 코스 안내`,
    `${simpleLocation} 주민이 많이 찾는 후불제 홈케어 베스트 샵`,
    `[100% 후불 보장] ${locationKeyword} 출장마사지 예약 전 체크포인트`,
    `${locationKeyword} 나만의 힐링 쉼터 | 최고급 오일 프라이빗 바디케어`,
    `${regionName} ${simpleLocation} 빠른 출장 테라피 연결 및 코스 정보`,
    `${locationKeyword} 뭉친 근육 완화 스트레칭 & 건식 케어 추천`,
    `[마사지모아 핫플레이스] ${locationKeyword} 출장마사지 제휴 리스트`,
    `${simpleLocation} 베테랑 관리사의 품격 있는 전신 케어 안내`,
    `${locationKeyword} 출장마사지 실시간 예약 가능 업체 및 프로모션`,
    `도착 후 결제하는 ${simpleLocation} 24시 출장마사지 안심 가이드`,
    `${locationKeyword} 스페셜 아로마 & 림프 순환 케어 전문 매장`,
    `${locationKeyword} 출장마사지 예약 방법 및 권역별 평균 도착 시간`,
    `${simpleLocation} 프리미엄 방문 홈타이 | 심신 안정 피로 회복`,
    `[마사지모아 제휴] ${locationKeyword} 24시간 1:1 맞춤 바디 테라피`,
    `${locationKeyword} 뻐근한 목·어깨 집중 케어 출장마사지 추천`,
    `${simpleLocation} 선입금 사기 걱정 없는 정직한 후불제 힐링 서비스`,
    `${locationKeyword} 출장마사지 솔직 이용 후기와 코스별 요금 비교`,
    `프라이빗 홈케어의 정석 ${locationKeyword} 25분 칼도착 서비스`,
    `[24시 출동] ${simpleLocation} 전지역 방문 바디케어 제휴처 모음`,
    `${locationKeyword} 최고급 에센셜 오일 스웨디시 테라피 가이드`,
    `${locationKeyword} 출장마사지 빠른 상담 및 내 주변 제휴샵 찾기`,
    `${simpleLocation} 지친 하루의 끝, 집에서 편하게 받는 전신 마사지`,
    `마사지모아 추천 | ${locationKeyword} 친절 매너 베테랑 힐러진`,
    `${locationKeyword} 100% 후불 결제 안심 테라피 시스템 안내`,
    `${simpleLocation} 출장마사지 타이·아로마·스웨디시 코스 총정리`,
    `[실시간 배차] ${locationKeyword} 출장마사지 20~30분 내 신속 방문`,
    `${locationKeyword} 쾌적하고 안전한 프라이빗 방문 힐링 서비스`,
    `${simpleLocation} 24시 후불 안심 케어 매장 목록 및 이용 팁`,
    `마사지모아 | ${locationKeyword} 고객 만족도 최상위 제휴샵 안내`,
    `${locationKeyword} 출장마사지 건식 스트레칭 및 딥티슈 프로그램`,
    `${simpleLocation} 인근 방문 테라피 빠른 전화 예약 및 상담`,
    `[안심 후불제] ${locationKeyword} 프라이빗 VIP 홈케어 종합 가이드`,
    `${locationKeyword} 전신 피로가 말끔히 풀리는 전문 테라피 코스`,
    `${simpleLocation} 출장마사지 정보는? 마사지모아에서 한눈에 비교`,
    `${locationKeyword} 단골이 많은 검증된 출장마사지 제휴 매장`,
    `선예약금 요구 절대 거절! ${simpleLocation} 100% 후불제 홈테라피`,
    `[마사지모아 픽] ${locationKeyword} 최고 인기 힐링 코스 모음집`,
    `${locationKeyword} 집에서 받는 호텔식 스파 & 스웨디시 케어 안내`,
    `${simpleLocation} 주변 25분 내 빠른 방문이 가능한 바디케어 샵`,
    `${locationKeyword} 피로 해소에 최적화된 맞춤 테라피스트 안내`,
    `[24시간 연중무휴] ${simpleLocation} 출장마사지 안심 예약 상담`,
    `${locationKeyword} 출장마사지 코스별 상세 가격과 실제 고객 만족도`,
    `${simpleLocation} 아늑한 개인 공간에서 누리는 전문 아로마 오일 케어`,
    `마사지모아 공식 인증 ${locationKeyword} 신뢰도 1위 방문 홈케어`,
    `${locationKeyword} 힐링 테라피 전문 힐러들의 1:1 집중 피로 회복`,
    `${simpleLocation} 출장마사지 어디가 빠를까? 25분 도착 보장 샵`,
    `[후불 결제 안심존] ${locationKeyword} 바디케어 제휴업체 정보`,
    `${locationKeyword} 전신 림프 순환 케어 및 프리미엄 스웨디시 안내`,
    `${simpleLocation} 타이 건식 마사지 요금 비교 및 힐링 추천 매장`,
    `마사지모아 | ${locationKeyword} 24시 실시간 출장마사지 예약 센터`,
    `${locationKeyword} 목, 어깨, 허리 뭉침을 시원하게 푸는 전문 홈케어`,
    `${simpleLocation} 인근 고객 리뷰 평점 높은 출장마사지 TOP 제휴점`,
    `[100% 안전 보장] ${locationKeyword} 선입금 없는 클린 바디테라피`,
    `${locationKeyword} 나를 위한 하루 60분의 기적! 전신 피로회복 가이드`,
    `${regionName} ${simpleLocation} 신속 배차 출장마사지 이용 방법`,
    `${locationKeyword} 최고급 아로마 오일로 누리는 럭셔리 릴렉싱`,
    `[마사지모아 가이드] ${simpleLocation} 출장마사지 대표 코스 정리`,
    `${locationKeyword} 부담 없는 가격으로 즐기는 전문 방문 테라피`,
    `${simpleLocation} 야간에도 안심하고 부르는 24시 출장마사지 서비스`,
    `청결과 위생을 약속하는 ${locationKeyword} 프라이빗 힐링 케어`,
    `${locationKeyword} 출장마사지 첫 이용자를 위한 알짜 이용 팁`,
    `${simpleLocation} 테라피스트 프로필 및 맞춤 힐링 프로그램 안내`,
    `[25분 도착 보장] ${locationKeyword} 출장마사지 실시간 예약 가이드`,
    `마사지모아에서 확인하는 ${simpleLocation} 정직한 후불제 바디케어`,
    `${locationKeyword} 출장마사지 최신 요금표 및 제휴 이벤트 소식`,
    `${simpleLocation} 도심 속 힐링 오아시스! 방문 홈케어 매장 모음`,
    `[안심 예약 100%] ${locationKeyword} 출장마사지 공식 가이드북`,
    `${locationKeyword} 굳은 근육을 부드럽게 이완시키는 건식 타이 케어`,
    `${simpleLocation} 24시 림프 테라피 & 감성 스웨디시 전문점 추천`,
    `마사지모아 추천 | ${locationKeyword} 재방문율 높은 힐링 샵`,
    `${locationKeyword} 출장마사지 이용 후기 및 별점 높은 매장 리스트`,
    `${simpleLocation} 편안한 내 공간에서 경험하는 고품격 바디 테라피`,
    `[선입금 0원] ${locationKeyword} 믿고 부르는 안심 출장마사지 센터`,
    `${locationKeyword} 신속 방문 가능한 24시간 테라피스트 매칭 안내`,
    `${simpleLocation} 출장마사지 가격 대비 만족도 최상위 제휴처`,
    `[마사지모아 핫이슈] ${locationKeyword} 프리미엄 방문 홈케어 가이드`,
    `${locationKeyword} 지친 심신을 달래주는 스페셜 아로마 오일 테라피`,
    `${simpleLocation} 출장마사지 빠른 상담 및 1:1 맞춤 배차 안내`,
    `피로에 지친 당신을 위한 ${locationKeyword} 24시 방문 힐링 케어`,
    `${locationKeyword} 출장마사지 제휴 매장별 코스 구성 완벽 비교`,
    `${simpleLocation} 100% 후불제로 누리는 안전하고 쾌적한 힐링 타임`,
    `[25분 칼도착] ${locationKeyword} 출장마사지 빠르고 정직한 안내`,
    `마사지모아 파트너스 | ${simpleLocation} 검증된 홈테라피 정보`,
    `${locationKeyword} 스트레스 완화에 탁월한 프리미엄 바디 릴렉싱`,
    `${locationKeyword} 고객 만족도 1위 제휴업체 코스 가이드`,
    `${simpleLocation} 24시간 실시간 신속 예약 지원! 100% 후불제로 운영되어 도착 전 선입금 없이 안심하고 이용할 수 있습니다.`,
    `마사지모아가 직접 검증한 ${locationKeyword} 안심 케어 매장 모음. 정직한 가격과 품격 있는 서비스로 지친 피로를 풀어드립니다.`,
    `${locationKeyword} 뭉친 승모근과 하체 피로를 시원하게 날려버릴 출장마사지. 베테랑 관리사의 숙련된 손길을 느껴보세요.`,
    `${simpleLocation} 1:1 맞춤 프라이빗 방문 홈케어. 전지역 평균 25분 내 빠른 출동으로 편안한 힐링을 약속합니다.`,
    `선입금 사기 걱정 없는 클린 서비스! ${locationKeyword} 출장마사지는 현장 도착 후 결제하는 100% 안전 거래만을 고집합니다.`,
    `부드러운 오일 압과 감성 터치로 림프 순환을 돕는 ${locationKeyword} 스웨디시 케어. 지친 심신에 깊은 활력을 선물하세요.`,
    `${simpleLocation} 직장인을 위한 24시간 야간 출장 테라피. 야근 후 무거워진 몸을 집에서 편안하게 케어받으실 수 있습니다.`,
    `마사지모아 스페셜 큐레이션! ${locationKeyword} 베테랑 힐러들의 차별화된 피로회복 프로그램을 지금 바로 만나보세요.`,
    `가격 거품을 뺀 투명한 요금 체계! ${locationKeyword} 출장마사지 코스별 상세 가격과 실제 이용자 후기를 확인해보세요.`,
    `${simpleLocation} 어디든 신속하게 달려가는 안심 방문 테라피. 청결 위생 관리와 정성 어린 케어로 고객 만족을 실현합니다.`,
    `최고급 천연 에센셜 오일을 사용하여 피부 자극 없이 부드러운 ${locationKeyword} 전신 바디케어. 마사지모아에서 예약하세요.`,
    `24시간 상시 대기 친절 상담 지원! ${simpleLocation} 출장마사지 빠른 전화 연결로 원하는 시간에 맞춰 이용 가능합니다.`,
    `${locationKeyword} 재방문율 높은 프리미엄 매장 목록. 검증된 테라피스트의 정성 가득한 손길로 최상의 힐링을 선사합니다.`,
    `호텔 및 자택에서 누리는 프라이빗 VIP 힐링 스파! ${simpleLocation} 출장마사지로 일상의 스트레스를 날려보세요.`,
    `마사지모아 공식 추천 ${locationKeyword} 25분 도착 보장 서비스. 사기 걱정 없는 100% 후불제 시스템으로 운영됩니다.`,
    `${locationKeyword} 출장마사지 타이 건식부터 아로마 스웨디시까지! 내 컨디션에 꼭 맞는 맞춤형 코스를 선택해보세요.`,
    `${simpleLocation} 철저한 소독 및 위생 관리를 준수하는 믿을 수 있는 1:1 방문 홈케어. 안심하고 힐링을 누려보세요.`,
    `출발 전 예약금을 요구하지 않는 ${locationKeyword} 100% 정직한 후불제 가이드. 클린 제휴 샵만을 선별하여 안내합니다.`,
    `${locationKeyword} 지친 일상에 상쾌한 활력을 불어넣는 전문 바디 힐링 케어. 마사지모아에서 최고의 휴식을 경험하세요.`
  ];

  const descriptionVariants = [
    `${locationKeyword} 전지역 어디든 25분 내 신속 도착! 선입금 0원의 100% 안심 후불제로 타이, 아로마, 스웨디시 제휴 매장을 마사지모아에서 편리하게 만나보세요.`,
    `지친 하루 끝에 만나는 ${locationKeyword} 24시 방문 홈케어. 엄선된 베테랑 관리사의 맞춤형 손길로 묵은 피로와 스트레스를 편안한 공간에서 날려보세요.`,
    `${simpleLocation} 인근 신속 방문 출장마사지 가이드. 예약금이나 선입금을 절대 요구하지 않는 투명한 제휴 시스템으로 안심하고 이용하실 수 있습니다.`,
    `프라이빗한 1:1 케어가 필요할 땐 ${locationKeyword} 마사지모아 제휴샵을 확인하세요. 전신 스트레칭부터 감성 스웨디시까지 코스별 요금을 상세히 제공합니다.`,
    `${locationKeyword} 24시간 언제나 빠른 배차 보장! 청결한 위생 관리와 정직한 후불 결제로 고객 만족도를 최우선으로 생각하는 출장 테라피 안내입니다.`,
    `뭉친 승모근과 하체 피로를 시원하게 풀어주는 ${simpleLocation} 출장마사지 추천. 베테랑 테라피스트의 수준 높은 힐링 프로그램을 지금 확인해보세요.`,
    `${locationKeyword} 출장마사지 선입금 사기 걱정 끝! 현장 도착 후 결제하는 안전한 100% 후불제 시스템으로 믿고 부르는 방문 바디케어 플랫폼.`,
    `${simpleLocation} 고객님을 위한 24시 실시간 제휴처 모음. 최고급 천연 에센셜 오일과 정성 가득한 테라피로 몸과 마음에 깊은 활력을 더해드립니다.`,
    `내 집, 호텔 어디서나 이동 없이 누리는 ${locationKeyword} 프라이빗 홈케어. 합리적인 가격대와 다양한 코스 구성을 마사지모아에서 한눈에 비교하세요.`,
    `마사지모아가 검증한 ${locationKeyword} 출장마사지 제휴업체 정보. 친절한 매너와 숙련된 힐링 노하우로 완벽한 휴식 시간을 약속드립니다.`,
    `${simpleLocation} 전지역 평균 20~30분 내 빠른 출동! 야근 후 굳어버린 전신 근육을 부드럽게 이완시켜 드리는 맞춤형 24시 출장 테라피 서비스.`,
    `${locationKeyword} 출장마사지 코스별 가격과 상세 안내. 건식 타이부터 스페셜 아로마까지 취향에 맞는 최고의 힐링 매장을 간편하게 찾아보세요.`,
    `출발 전 예약금을 요구하지 않는 ${locationKeyword} 100% 정직한 후불제 안내. 깨끗하고 안전한 제휴 샵 정보만을 선별하여 안내해 드립니다.`,
    `${simpleLocation} 고객 만족 1위 방문 바디케어 가이드. 림프 순환을 돕는 스웨디시와 전신 릴렉싱 프로그램으로 지친 일상을 리프레시하세요.`,
    `복잡한 외출 없이 편안하게 받는 ${locationKeyword} 출장마사지. 24시간 상시 상담 가능하며 빠른 전화 연결로 손쉽게 예약하실 수 있습니다.`,
    `${locationKeyword} 주민들이 직접 경험하고 추천하는 베스트 홈테라피. 투명한 요금 체계와 품격 있는 서비스로 만족스러운 힐링을 선사합니다.`,
    `전문 힐러의 세심한 손길로 완성되는 ${simpleLocation} 24시 출장마사지. 아로마 오일 테라피와 맞춤 지압으로 몸의 밸런스를 되찾아보세요.`,
    `${locationKeyword} 인근 가장 빠른 방문 테라피 매칭! 선입금 없는 클린 플랫폼 마사지모아에서 검증된 제휴업체 프로필을 바로 확인하세요.`,
    `답답한 일상 속 온전한 휴식을 선물하는 ${simpleLocation} 출장마사지. 프라이빗한 개인 공간에서 최고급 힐링 프로그램을 경험해보시기 바랍니다.`,
    `${locationKeyword} 24시간 실시간 예약 지원 안내. 체형별 맞춤 케어로 뻐근한 부위를 집중 관리해 드리는 프리미엄 출장 홈케어 서비스.`,
    `선입금 요구는 100% 거절하세요! 마사지모아의 ${locationKeyword} 제휴점은 현장 도착 후 결제하는 안전 거래 원칙을 철저히 준수합니다.`,
    `${simpleLocation} 어디서든 25분 내 빠른 케어 가능! 타이 스트레칭, 아로마 릴렉싱, VIP 스웨디시 등 다채로운 코스를 비교해 보세요.`,
    `심신의 긴장을 완화하고 피로를 씻어내는 ${locationKeyword} 출장마사지 정보. 전문 교육을 수료한 테라피스트의 정성 어린 케어를 제공합니다.`,
    `${locationKeyword} 출장마사지 예약 팁과 요금 가이드. 거품 없는 가격과 신속한 방문 서비스로 소중한 휴식 시간을 더욱 가치 있게 만들어 드립니다.`,
    `${simpleLocation} 인근 믿을 수 있는 24시 방문 테라피 샵 모아보기. 위생 소독 철저 관리와 정직한 서비스로 안심하고 이용할 수 있습니다.`,
    `지치고 결리는 부위를 콕 짚어 풀어주는 ${locationKeyword} 맞춤형 홈케어. 합리적인 가격과 차별화된 힐링 프로그램을 마사지모아에서 만나보세요.`,
    `100% 후불제로 부담 없이 예약하는 ${simpleLocation} 출장마사지. 고객 만족도가 높은 추천 제휴업체의 실시간 코스를 즉시 안내해 드립니다.`,
    `${locationKeyword} 전지역 24시간 상시 출동 대기! 친절한 상담과 신속한 도착으로 언제나 편안하고 아늑한 힐링 타임을 제공합니다.`,
    `고급 아로마 오일을 사용하여 피부 보습과 림프 순환을 동시에 돕는 ${simpleLocation} 힐링 테라피. 품격 있는 휴식을 지금 경험하세요.`,
    `${locationKeyword} 출장마사지 추천 매장 총정리. 선입금 없는 정직한 업체들의 코스 구성과 이용 후기를 마사지모아에서 확인하실 수 있습니다.`,
    `외출할 필요 없이 집에서 편안하게 누리는 ${locationKeyword} 1:1 홈케어. 숙련된 관리사의 부드럽고 깊이 있는 테라피를 느껴보세요.`,
    `${simpleLocation} 24시 출장마사지 안심 이용 가이드. 예약부터 방문까지 100% 후불제로 안전하고 투명하게 진행되는 클린 서비스.`,
    `${locationKeyword} 지역 고객 만족도 최상위 제휴샵 안내. 뭉친 근육을 부드럽게 이완시켜 주는 맞춤형 전신 관리 프로그램을 소개합니다.`,
    `바쁜 현대인을 위한 ${simpleLocation} 신속 방문 출장마사지. 20~30분 내 신속한 도착과 꼼꼼한 관리로 하루의 스트레스를 말끔히 씻어드립니다.`,
    `${locationKeyword} 출장마사지 요금 비교 및 예약 안내. 타이, 아로마, 스웨디시 등 내 몸 컨디션에 꼭 맞는 코스를 선택해 보세요.`,
    `안전하고 정직한 ${locationKeyword} 24시 방문 홈케어. 출발 전 예약금을 절대 요구하지 않는 100% 안심 후불제 플랫폼 마사지모아입니다.`,
    `${simpleLocation} 전지역 어디나 신속하게 찾아가는 테라피 서비스. 최고급 오일과 맞춤 압으로 깊은 편안함과 릴렉스를 선사합니다.`,
    `나만을 위한 프라이빗 힐링 공간 ${locationKeyword} 출장마사지. 검증된 힐러진의 정성스러운 손길로 활력 넘치는 내일을 준비하세요.`,
    `${locationKeyword} 24시간 언제든 편하게 문의할 수 있는 제휴처 모음. 친절한 안내와 신속한 방문으로 고객님의 피로를 덜어드립니다.`,
    `마사지모아가 추천하는 ${simpleLocation} 출장마사지 베스트 코스. 100% 후불제 운영으로 사기 걱정 없이 편안하게 즐기실 수 있습니다.`,
    `${locationKeyword} 출장마사지 타이·아로마 전문 가이드. 굳어있는 어깨와 허리 근육을 시원하게 스트레칭해 드리는 힐링 프로그램.`,
    `${simpleLocation} 인근 25분 내 빠른 방문 보장! 청결한 위생 관리와 수준 높은 테라피로 특별한 휴식 시간을 선물해 드립니다.`,
    `선입금 제로! 도착 후 결제하는 ${locationKeyword} 안심 출장마사지. 숙련된 테라피스트의 프라이빗 1:1 바디케어를 직접 경험해 보세요.`,
    `${locationKeyword} 24시 출장마사지 코스 및 이용 요금 안내. 고객 취향을 반영한 다채로운 프로그램으로 높은 만족도를 자랑합니다.`,
    `${simpleLocation} 전지역 빠른 배차와 정직한 가격. 지친 몸과 마음에 온전한 쉼을 드리는 마사지모아 제휴샵 정보를 확인하세요.`,
    `프라이빗한 공간에서 받는 ${locationKeyword} 최고급 스웨디시 케어. 부드러운 오일 압과 감성 터치로 깊은 숙면과 휴식을 돕습니다.`,
    `${locationKeyword} 출장마사지 안심 예약 플랫폼 마사지모아. 예약금 요구 없는 투명한 운영으로 믿고 이용하실 수 있습니다.`,
    `${simpleLocation} 24시간 실시간 방문 테라피 안내. 뭉친 근육을 부드럽게 풀어주어 상쾌한 컨디션을 되찾아 드립니다.`,
    `${locationKeyword} 출장마사지 추천 매장 및 요금 비교. 내 주변 가장 가까운 제휴 샵을 마사지모아에서 빠르고 간편하게 찾아보세요.`,
    `품격 있는 휴식을 원하신다면 ${simpleLocation} 출장마사지를 경험해 보세요. 100% 안심 후불제와 신속한 방문으로 고객 감동을 실현합니다.`,
    `${locationKeyword} 전지역 단골 고객이 인정한 검증된 홈케어! 관리사 도착 후 결제하는 100% 안심 후불제로 편안한 휴식을 누려보세요.`,
    `선예약금 사기 위험 없는 클린 플랫폼 마사지모아. ${simpleLocation} 인근 빠른 출동과 베테랑 관리사의 정성 어린 힐링을 보장합니다.`,
    `${locationKeyword} 타이 스트레칭과 아로마 테라피의 완벽한 조화! 개인 공간에서 프라이빗하게 피로를 해소할 수 있는 추천 코스 모음.`,
    `호텔 및 자택 어디든 25분 내 달려갑니다. ${locationKeyword} 24시 출장마사지 가이드에서 검증된 제휴업체 정보와 요금을 확인하세요.`,
    `${simpleLocation} 고객님을 위한 맞춤형 힐링 케어 솔루션. 천연 오일과 부드러운 압으로 전신 림프 순환을 돕는 프리미엄 프로그램.`,
    `피로에 지친 하루, ${locationKeyword} 출장마사지로 힐링하세요. 100% 후불제 정직한 운영으로 언제나 마음 편히 예약하실 수 있습니다.`,
    `24시간 365일 연중무휴로 운영되는 ${simpleLocation} 출장마사지 안내. 빠른 배차와 전문 테라피스트의 손길로 활력을 되찾아드립니다.`,
    `${locationKeyword} 주변 가장 평점 높은 방문 테라피 매장 안내. 코스별 투명한 요금과 실시간 이용자 만족도를 바로 비교해보세요.`,
    `익숙하고 아늑한 내 공간에서 받는 ${simpleLocation} 프라이빗 홈케어. 외출 번거로움 없이 최고급 바디 테라피를 만끽하실 수 있습니다.`,
    `마사지모아가 엄선한 ${locationKeyword} 신뢰도 1위 제휴업체. 출발 전 예약금을 절대 요구하지 않는 안전한 힐링 문화를 만듭니다.`,
    `${locationKeyword} 1:1 맞춤 피로회복 프로그램! 전문 힐러들의 숙련된 테크닉으로 굳어있는 목과 어깨를 가볍게 풀어드립니다.`,
    `시간 약속 칼도착 보장! ${simpleLocation} 전지역 평균 25분 내 빠른 방문으로 기다림 없는 쾌적한 테라피를 약속합니다.`,
    `예약금 0원, 100% 후불 안전 결제존! ${locationKeyword} 출장마사지에서 사기 걱정 없는 깨끗하고 정직한 서비스를 이용해보세요.`,
    `${locationKeyword} 감성 스웨디시와 전신 림프 케어 전문 안내. 지친 몸과 마음에 부드럽고 섬세한 휴식을 선물하는 제휴 정보.`,
    `${simpleLocation} 가성비 최고의 타이 건식 케어부터 럭셔리 VIP 코스까지! 마사지모아에서 실시간 이용 가능한 매장을 확인하세요.`,
    `마사지모아 24시 실시간 예약 센터! ${locationKeyword} 출장마사지 제휴샵들의 코스 구성과 요금을 빠르고 간편하게 안내해 드립니다.`,
    `${locationKeyword} 장시간 업무로 뭉친 근육을 완벽 케어! 전문 테라피스트가 직접 찾아가는 고품격 프라이빗 방문 서비스.`,
    `${simpleLocation} 실이용 고객들의 평점이 증명하는 베스트 힐링 샵. 정직한 가격과 친절한 서비스로 최상의 만족도를 제공합니다.`,
    `선입금 절대 금지! ${locationKeyword} 출장마사지는 현장 도착 후 결제하는 안전 시스템만을 제공하여 고객 권익을 철저히 보호합니다.`,
    `하루 단 60분의 투자로 전신 피로를 리셋하세요. ${locationKeyword} 출장마사지 추천 코스로 깊은 수면과 온전한 쉼을 경험할 수 있습니다.`,
    `${regionName} ${simpleLocation} 신속 배차 시스템 운영 중. 전화 한 통으로 간편하게 예약하고 편안한 공간에서 케어를 받아보세요.`,
    `피부 보습과 심신 안정을 동시에 만족시키는 ${locationKeyword} 최고급 아로마 테라피. 품격 있는 힐링을 마사지모아에서 만나보세요.`,
    `${simpleLocation} 출장마사지 대표 코스 완벽 가이드! 타이, 아로마, 스웨디시 등 내 컨디션에 딱 맞는 프로그램을 찾아보세요.`,
    `가격 거품을 걷어낸 정직한 ${locationKeyword} 방문 홈케어. 합리적인 비용으로 누리는 전문 테라피스트의 품격 있는 바디케어.`,
    `늦은 밤이나 새벽에도 안심하고 이용하는 ${simpleLocation} 24시 출장마사지. 100% 후불제로 언제든 편하게 이용 가능합니다.`,
    `철저한 위생 소독 관리와 정기 방역을 준수하는 ${locationKeyword} 안심 제휴점. 깨끗하고 쾌적한 프라이빗 테라피를 약속드립니다.`,
    `출장마사지가 처음이신가요? ${locationKeyword} 마사지모아 가이드에서 선입금 없는 안전한 이용 팁과 추천 매장을 확인하세요.`,
    `${simpleLocation} 전문 테라피스트의 맞춤 힐링 노하우! 체계적인 전신 관리로 묵직한 피로를 상쾌하게 씻어내 드립니다.`,
    `평균 25분 내 빠른 출동 보장! ${locationKeyword} 출장마사지에서 기다림 없이 바로 만나는 프라이빗 힐링 타임.`,
    `마사지모아가 보증하는 ${simpleLocation} 정직한 후불제 힐링 서비스. 출발 전 금전 요구 없이 도착 후 편하게 결제하세요.`,
    `${locationKeyword} 출장마사지 실시간 프로모션 및 요금표 안내. 가성비와 퀄리티를 모두 잡은 최고의 제휴 샵을 추천합니다.`,
    `도심 속 복잡함을 벗어나 내 공간에서 누리는 ${simpleLocation} 힐링 오아시스. 전신 릴렉싱 테라피로 특별한 휴식을 누려보세요.`,
    `100% 안심 예약의 기준! ${locationKeyword} 출장마사지 공식 가이드에서 안전한 제휴업체 정보와 코스를 확인하세요.`,
    `오랜 좌식 생활로 굳은 허리와 골반을 부드럽게 이완하는 ${locationKeyword} 건식 타이 케어. 활력 넘치는 컨디션을 되찾아드립니다.`,
    `${simpleLocation} 24시 림프 순환 스웨디시 케어 안내. 부드러운 감성 터치로 스트레스 완화와 깊은 릴렉스를 선사합니다.`,
    `재방문율 1위 제휴 매장만 엄선! ${locationKeyword} 출장마사지에서 믿을 수 있는 베테랑 테라피스트를 만나보세요.`,
    `${locationKeyword} 실제 고객들이 남긴 생생한 후기와 별점 안내. 검증된 정보를 바탕으로 나에게 딱 맞는 샵을 선택하세요.`,
    `이동하는 번거로움 없이 편안한 내 방에서 즐기는 ${simpleLocation} 고품격 바디 테라피. 소중한 휴식을 더욱 편안하게 만듭니다.`,
    `선입금 0원 원칙을 지키는 ${locationKeyword} 안심 출장마사지. 정직한 제휴업체 정보만을 선별하여 고객님께 안내합니다.`,
    `${locationKeyword} 신속 방문 24시 테라피스트 대기 중! 원하는 시간대에 맞춰 빠르고 정확하게 찾아가는 맞춤 서비스.`,
    `가격 대비 만족도가 뛰어난 ${simpleLocation} 출장마사지 추천. 섬세한 압 조절과 정성 어린 케어로 피로를 말끔히 풀어드립니다.`,
    `마사지모아가 추천하는 ${locationKeyword} 프리미엄 방문 홈케어. 지친 일상에 깊은 쉼표를 찍어주는 힐링 파트너.`,
    `은은한 아로마 향과 함께하는 전신 이완 케어. ${locationKeyword} 출장마사지에서 나만을 위한 럭셔리 휴식을 경험해보세요.`,
    `${simpleLocation} 빠른 상담과 1:1 맞춤 배차 시스템. 기다림 없이 원하는 코스를 편안하게 이용하실 수 있습니다.`,
    `피로에 지친 몸을 위한 완벽한 재충전! ${locationKeyword} 24시 출장마사지에서 전문 힐러의 세심한 손길을 느껴보세요.`,
    `${locationKeyword} 출장마사지 제휴 매장별 코스 완벽 비교. 건식, 아로마, 스웨디시 중 내게 맞는 최적의 플랜을 찾아보세요.`,
    `100% 후불제로 누리는 투명한 힐링 라이프. ${simpleLocation} 전지역 어디서나 안전하고 쾌적하게 이용하실 수 있습니다.`,
    `25분 칼도착 신속 방문 시스템! ${locationKeyword} 출장마사지에서 빠르고 정직한 테라피 서비스를 직접 경험해보세요.`,
    `마사지모아 파트너스 검증 완료! ${simpleLocation} 믿을 수 있는 홈테라피 매장의 상세 정보와 가격을 확인하세요.`,
    `${locationKeyword} 스트레스 완화에 탁월한 프리미엄 바디 릴렉싱. 지금 바로 예약 문의하세요.`,
    `${locationKeyword} 고객 만족도 1위 제휴업체 코스 가이드. 타이, 아로마, 스웨디시 등 다채로운 힐링 프로그램을 마사지모아에서 확인하세요.`,
    `${simpleLocation} 24시간 실시간 신속 예약 지원! 100% 후불제로 운영되어 도착 전 선입금 없이 안심하고 이용할 수 있습니다.`,
    `마사지모아가 직접 검증한 ${locationKeyword} 안심 케어 매장 모음. 정직한 가격과 품격 있는 서비스로 지친 피로를 풀어드립니다.`,
    `${locationKeyword} 뭉친 승모근과 하체 피로를 시원하게 날려버릴 출장마사지. 베테랑 관리사의 숙련된 손길을 느껴보세요.`,
    `${simpleLocation} 1:1 맞춤 프라이빗 방문 홈케어. 전지역 평균 25분 내 빠른 출동으로 편안한 힐링을 약속합니다.`,
    `선입금 사기 걱정 없는 클린 서비스! ${locationKeyword} 출장마사지는 현장 도착 후 결제하는 100% 안전 거래만을 고집합니다.`,
    `부드러운 오일 압과 감성 터치로 림프 순환을 돕는 ${locationKeyword} 스웨디시 케어. 지친 심신에 깊은 활력을 선물하세요.`,
    `${simpleLocation} 직장인을 위한 24시간 야간 출장 테라피. 야근 후 무거워진 몸을 집에서 편안하게 케어받으실 수 있습니다.`,
    `마사지모아 스페셜 큐레이션! ${locationKeyword} 베테랑 힐러들의 차별화된 피로회복 프로그램을 지금 바로 만나보세요.`,
    `가격 거품을 뺀 투명한 요금 체계! ${locationKeyword} 출장마사지 코스별 상세 가격과 실제 이용자 후기를 확인해보세요.`,
    `${simpleLocation} 어디든 신속하게 달려가는 안심 방문 테라피. 청결 위생 관리와 정성 어린 케어로 고객 만족을 실현합니다.`,
    `최고급 천연 에센셜 오일을 사용하여 피부 자극 없이 부드러운 ${locationKeyword} 전신 바디케어. 마사지모아에서 예약하세요.`,
    `24시간 상시 대기 친절 상담 지원! ${simpleLocation} 출장마사지 빠른 전화 연결로 원하는 시간에 맞춰 이용 가능합니다.`,
    `${locationKeyword} 재방문율 높은 프리미엄 매장 목록. 검증된 테라피스트의 정성 가득한 손길로 최상의 힐링을 선사합니다.`,
    `호텔 및 자택에서 누리는 프라이빗 VIP 힐링 스파! ${simpleLocation} 출장마사지로 일상의 스트레스를 날려보세요.`,
    `마사지모아 공식 추천 ${locationKeyword} 25분 도착 보장 서비스. 사기 걱정 없는 100% 후불제 시스템으로 운영됩니다.`,
    `${locationKeyword} 출장마사지 타이 건식부터 아로마 스웨디시까지! 내 컨디션에 꼭 맞는 맞춤형 코스를 선택해보세요.`,
    `${simpleLocation} 철저한 소독 및 위생 관리를 준수하는 믿을 수 있는 1:1 방문 홈케어. 안심하고 힐링을 누려보세요.`,
    `출발 전 예약금을 요구하지 않는 ${locationKeyword} 100% 정직한 후불제 가이드. 클린 제휴 샵만을 선별하여 안내합니다.`,
    `${locationKeyword} 지친 일상에 상쾌한 활력을 불어넣는 전문 바디 힐링 케어. 마사지모아에서 최고의 휴식을 경험하세요.`
  ];

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [
      `${locationKeyword} 출장마사지`,
      `${locationKeyword}출장마사지`,
      `${simpleLocation} 출장마사지`,
      `${locationKeyword} 홈케어`,
      `${locationKeyword} 방문 마사지`,
      `${locationKeyword} 스웨디시`,
      "24시 출장마사지",
      "후불제 출장마사지",
      "마사지모아"
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://massagemoa.com/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "마사지모아",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function RegionalDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = getRegionFullName(region);
  
  const fullTitle = dongName 
    ? `${regionName} ${districtName} (${dongName})` 
    : `${regionName} ${districtName}`;

  // 💡 지역 분기 로직
  const isDaejeonOrCheongju = region === "daejeon" || region === "cheongju";
  // 부산, 대구, 광주, 울산은 제휴 준비중(업체 미노출 및 3344 문의) 처리
  const isPreparingRegion = region === "busan" || region === "daegu" || region === "gwangju_city" || region === "ulsan";

  let localShops: { id: number; name: string; desc: string; phone: string; price: string; image: string }[] = [];

  if (isDaejeonOrCheongju) {
    // 🎯 대전 / 청주 지역은 "S슬림" 1개 단독 업체만 노출 (전화번호 0507-1280-3352)
    localShops = [
      {
        id: 1,
        name: `👑 ${fullTitle} S슬림`,
        desc: `${fullTitle} 전지역 25분 신속 도착! 100% 후불제로 안심하고 이용하는 최고급 프라이빗 힐링 테라피 & 바디케어`,
        phone: "0507-1280-3352",
        price: "60,000원부터~",
        image: "/shop1.jpg"
      }
    ];
  } else if (!isPreparingRegion) {
    // 🎯 일반 활성화 지역 (서울, 경기, 인천 등 5개 업체 노출)
    localShops = [
      { id: 1, name: `🔥 ${fullTitle} 한국미녀 홈케어`, desc: "지친 일상에 맞춤형 피로회복 케어! 베테랑 테라피스트의 정성 어린 프라이빗 릴렉싱", phone: "0507-1280-3299", price: "90,000원부터~", image: "/shop1.jpg" },
      { id: 2, name: `✨ ${fullTitle} 너무이쁜 홈테라피`, desc: "최고급 천연 아로마 오일을 활용한 품격 있는 전신 바디 이완 케어 서비스", phone: "0507-1280-3190", price: "60,000원부터~", image: "/shop2.jpg" },
      { id: 3, name: `💎 ${fullTitle} 예쁜걸 프리미엄`, desc: "재방문율 높은 안심 케어! 철저한 위생 관리와 럭셔리 스웨디시 프로그램 제공", phone: "0507-1280-3185", price: "60,000원부터~", image: "/shop3.jpg" },
      { id: 4, name: `🌟 ${fullTitle} 20대 프리미엄 힐링`, desc: "전문 힐러진의 맞춤형 VIP 체형 맞춤 피로회복 특화 프로그램 운영 중", phone: "0507-1280-3222", price: "60,000원부터~", image: "/shop4.jpg" },
      { id: 5, name: `👑 ${fullTitle} 그녀의온도 홈테라피`, desc: "선입금 전혀 없는 100% 안심 후불제! 신속 방문 프라이빗 서비스", phone: "0507-1280-3292", price: "60,000원부터~", image: "/shop5.jpg" }
    ];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${fullTitle} 출장마사지 & 홈케어 안내 - 마사지모아`,
    "description": `${fullTitle} 지역 출장마사지, 방문 바디케어 및 힐링 테라피 제휴업체 정보 제공`,
    "url": `https://massagemoa.com/${region}/${encodeURIComponent(districtName)}`,
    "telephone": "0507-1280-3344",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": districtName,
      "addressRegion": regionName,
      "addressCountry": "KR"
    }
  };

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="마사지모아 로고" 
              className="w-10 h-10 rounded-xl object-cover border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                마사지모아
              </span>
              <span className="text-[10px] text-gray-400 tracking-tighter">MASSAGE MOA · NATIONWIDE SERVICE</span>
            </div>
          </Link>
          
          <Link href="/" className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3.5 py-2 rounded-xl border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all shadow-inner flex items-center gap-1">
            <span>🏠</span> 메인 홈으로
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-12">
        
        {/* 상단 지역 대표 배너 */}
        <section className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
          <img 
            src="/banner.jpg" 
            alt={`${fullTitle} 출장마사지 및 바디케어 안내`} 
            className="w-full h-56 md:h-72 object-cover filter brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="text-amber-400 text-xs font-black tracking-widest uppercase mb-1">
              {regionName} · LOCAL HEALING GUIDE
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white drop-shadow-md">
              {fullTitle} 출장마사지 & 방문 홈케어 안내
            </h1>
            <p className="text-xs md:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
              {fullTitle} 고객님을 위한 24시 출장마사지 가이드입니다. 검증된 테라피 코스와 100% 후불 안심 시스템을 확인해 보세요.
            </p>
          </div>
        </section>

        {/* 클라이언트 사이드 키워드 인젝션 영역 */}
        <ClientTextMixer locationText={fullTitle} />

        {/* 제휴업체 섹션 분기처리 */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-amber-400 font-bold tracking-widest uppercase">
              {isPreparingRegion ? "NOTICE" : isDaejeonOrCheongju ? "EXCLUSIVE PARTNER" : "RECOMMENDED SHOPS"}
            </p>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">
              {isPreparingRegion 
                ? `${fullTitle} 제휴 안내` 
                : isDaejeonOrCheongju 
                  ? `🏆 ${fullTitle} 추천 제휴업체 (S슬림)` 
                  : `${fullTitle} 추천 제휴업체 (총 5곳)`}
            </h2>
          </div>

          {isPreparingRegion ? (
            /* 🎯 부산 / 대구 / 광주 / 울산 전용: 제휴 문의 센터 박스 노출 */
            <div className="bg-[#121214] border-2 border-dashed border-amber-500/30 rounded-3xl p-8 text-center space-y-5 shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl">🤝</div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white">현재 {fullTitle} 지역 제휴업체 모집 중</h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
                  마사지모아는 철저한 안심 후불제 검증을 거친 업체만 입점시키고 있습니다. 현재 해당 지역은 신규 제휴점을 심사 및 준비 중입니다.
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-2xl p-4 max-w-sm mx-auto">
                <span className="text-[11px] text-amber-400 block font-bold mb-1">📞 제휴 및 입점 문의센터</span>
                <a href="tel:0507-1280-3344" className="text-xl font-black text-white hover:text-amber-400 transition-colors">
                  0507-1280-3344
                </a>
              </div>
            </div>
          ) : (
            /* 대전/청주(단독 1개) 또는 일반지역(5개) 카드 노출 */
            <div className={isDaejeonOrCheongju ? "max-w-xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
              {localShops.map((lShop) => (
                <div key={lShop.id} className="bg-[#121214] border border-amber-500/20 hover:border-amber-500/60 rounded-2xl p-4 flex gap-4 items-center shadow-lg transition-all group relative">
                  <Link href={`/shop/${lShop.id}`} className="absolute inset-0 z-10" aria-label={`${lShop.name} 상세페이지 보기`} />
                  <img 
                    src={lShop.image} 
                    alt={lShop.name} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform" 
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-sm md:text-base text-white truncate group-hover:text-amber-400 transition-colors">
                      {lShop.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                      {lShop.desc}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between">
                      <span className="text-xs font-black text-amber-400">{lShop.price}</span>
                      <a 
                        href={`tel:${lShop.phone}`} 
                        className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs px-3.5 py-1.5 rounded-xl shadow transition-all transform active:scale-95 relative z-20"
                      >
                        전화연결
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 희석용 건강 칼럼 섹션 */}
        <section className="bg-[#0c0c0e] p-6 md:p-8 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-base md:text-lg font-bold text-amber-400 flex items-center gap-2">
            <span>🌿</span> {fullTitle} 힐링 바디케어 & 스트레칭 건강 가이드
          </h3>
          <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
            <p>
              현대 직장인들이 오랫동안 앉아서 일하거나 스마트폰을 지속적으로 사용할 경우, 승모근과 목 주변의 흉쇄유돌근이 경직되어 만성 두통이나 골반 불균형을 유발하기 쉽습니다. 이러한 피로 상태를 방치하면 근막 통증 증후군으로 발전할 수 있으므로 주기적인 스트레칭과 전신 피로 해소 케어가 꼭 필요합니다.
            </p>
            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-xs">💡 나에게 맞는 테라피 프로그램 선택 기준</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400">
                <li><strong className="text-gray-200">건식 릴렉싱 케어:</strong> 둔근, 하체 근육, 견갑골 주위의 굳은 부위를 눌러 스트레칭 위주로 근육 긴장을 해소합니다.</li>
                <li><strong className="text-gray-200">아로마 & 스웨디시 케어:</strong> 천연 오일의 유기적인 압을 이용해 림프 순환을 돕고 심신 안정 및 부종 완화에 탁월합니다.</li>
                <li><strong className="text-gray-200">프라이빗 홈케어 케어:</strong> 익숙하고 편안한 자신의 개인 공간에서 이동 시간 없이 피로를 완화할 수 있는 장점이 있습니다.</li>
              </ul>
            </div>
            <p className="text-gray-400 text-[11px]">
              * 본 가이드는 {fullTitle} 주민 여러분의 건강한 피로 회복과 올바른 힐링 케어 정보 제공을 목적으로 작성되었습니다.
            </p>
          </div>
        </section>

        {/* 이용 방법 4단계 */}
        <section className="bg-[#0f0f12] p-6 md:p-8 rounded-3xl border border-amber-500/30 space-y-6">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">SERVICE PROCESS</span>
            <h3 className="text-xl font-black text-white mt-1">{fullTitle} 서비스 이용 순서</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 1</span>
              <h4 className="font-bold text-white mt-1">위치 전달</h4>
              <p className="text-xs text-gray-400 mt-1">{fullTitle} 희망 장소를 알려줍니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 2</span>
              <h4 className="font-bold text-white mt-1">시간 조율</h4>
              <p className="text-xs text-gray-400 mt-1">원하시는 방문 시간을 확인합니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 3</span>
              <h4 className="font-bold text-white mt-1">코스 선택</h4>
              <p className="text-xs text-gray-400 mt-1">컨디션에 맞는 프로그램을 선택합니다.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 text-center">
              <span className="text-xs text-amber-400 font-bold">STEP 4</span>
              <h4 className="font-bold text-white mt-1">케어 진행</h4>
              <p className="text-xs text-gray-400 mt-1">도착 후 100% 후불제로 이용합니다.</p>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 (Q&A) */}
        <section className="space-y-4">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">FAQ & GUIDE</span>
            <h3 className="text-xl font-black text-white mt-1">{fullTitle} 자주 묻는 질문</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 space-y-1.5">
              <div className="font-bold text-sm text-gray-200 flex items-center gap-2">
                <span className="text-amber-400">Q.</span> {fullTitle} 출장마사지 방문 소요 시간은 얼마나 되나요?
              </div>
              <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                <span className="text-red-400 font-bold">A.</span> 주요 거점 기준 평균 20분~30분 내외로 원활한 방문이 가능합니다.
              </p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 space-y-1.5">
              <div className="font-bold text-sm text-gray-200 flex items-center gap-2">
                <span className="text-amber-400">Q.</span> 예약금이나 선입금 요청이 있나요?
              </div>
              <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                <span className="text-red-400 font-bold">A.</span> 마사지모아 제휴업체는 100% 후불제로 운영되므로 출발 전 선입금을 절대 요구하지 않습니다.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* 푸터 영역 (모든 지역 '제휴문의 0507-1280-3344'로 단일화) */}
      <footer className="bg-[#030303] border-t border-white/10 py-10 text-center text-gray-500 text-xs mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div>
            <a 
              href="tel:0507-1280-3344" 
              className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 font-bold px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all text-xs shadow-md"
            >
              <span>🤝</span> 제휴문의 (0507-1280-3344)
            </a>
          </div>

          <p className="text-gray-400 font-bold">마사지모아는 건전한 방문 힐링 바디케어 정보 안내 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 마사지모아 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}