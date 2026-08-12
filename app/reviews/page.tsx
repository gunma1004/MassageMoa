export default function ReviewsPage() {
  const reviews = [
    { name: "서울 강남구 이용자", rate: "★★★★★ 5.0", text: "야근 후에 방문 홈케어 신청했는데 25분 만에 오셨어요. 어깨 뭉친 게 싹 풀렸네요!" },
    { name: "경기 수원시 이용자", rate: "★★★★★ 5.0", text: "선입금 없는 후불제라 마음 편하게 이용했습니다. 관리사분 마인드도 완전 굿입니다." },
    { name: "인천 연수구 이용자", rate: "★★★★★ 5.0", text: "스웨디시 코스 이용해봤는데 피로가 정말 싹 가셨습니다. 주말마다 부를 것 같아요." },
  ];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">REAL CUSTOMER REVIEWS</span>
          <h1 className="text-3xl font-black text-white">실제 이용 고객 생생 후기</h1>
          <p className="text-xs text-gray-400">검증된 100% 실이용 고객님들의 솔직한 후기입니다.</p>
        </div>

        <div className="space-y-4">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-[#121214] border border-amber-500/20 p-5 rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-bold text-sm">{rev.rate}</span>
                <span className="text-xs text-gray-500">{rev.name}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">&quot;{rev.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}