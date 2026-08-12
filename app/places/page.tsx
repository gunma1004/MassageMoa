export default function PlacesPage() {
  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">HOT PLACES</span>
          <h1 className="text-3xl font-black text-white">내 주변 맛집 & 편안한 휴식 공간</h1>
          <p className="text-xs text-gray-400">지역별 검증된 맛집과 편안하게 쉴 수 있는 가이드 정보</p>
        </div>

        <div className="bg-[#121214] border border-white/10 p-6 rounded-2xl space-y-3 text-center">
          <p className="text-sm text-gray-300">
            서울, 경기, 인천 주요 거점 지역의 실시간 이용 가능한 맛집 및 숙소 연계 정보를 계속 업데이트 중입니다.
          </p>
        </div>
      </div>
    </div>
  );
}