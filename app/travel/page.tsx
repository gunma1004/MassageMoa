export default function TravelPage() {
  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">LOCAL TRAVEL GUIDE</span>
          <h1 className="text-3xl font-black text-white">수도권 힐링 여행지 안내</h1>
          <p className="text-xs text-gray-400">피로를 씻어내기 좋은 서울·경기·인천 추천 명소</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#121214] border border-white/10 p-6 rounded-2xl space-y-2">
            <span className="text-amber-400 text-xs font-bold">서울 코스</span>
            <h3 className="font-bold text-lg text-white">남산 둘레길 & 한강 드라이브</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              도심 속 탁 트인 야경과 한강 야경 드라이브 코스로 하루의 지친 피로를 가볍게 비워내 보세요.
            </p>
          </div>

          <div className="bg-[#121214] border border-white/10 p-6 rounded-2xl space-y-2">
            <span className="text-amber-400 text-xs font-bold">경기 코스</span>
            <h3 className="font-bold text-lg text-white">가평 아침고요수목원 & 양평 드라이브</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              울창한 숲길과 깨끗한 자연 속에서 산림욕을 즐기며 맑은 공기를 마실 수 있는 힐링 코스입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}