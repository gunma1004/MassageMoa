export default function PricesPage() {
  const priceList = [
    { title: "타이 건식 케어 (60분)", price: "60,000원부터", desc: "전신 피로 해소 기본 스트레칭 프로그램" },
    { title: "아로마 오일 케어 (60분)", price: "70,000원부터", desc: "천연 아로마 오일을 활용한 부드러운 전신 릴렉싱" },
    { title: "감성 스웨디시 (60분)", price: "90,000원부터", desc: "림프 순환과 심신 안정을 돕는 VIP 프리미엄 케어" },
    { title: "한국인 베테랑 VIP 코스 (60분)", price: "140,000원부터", desc: "맞춤형 피로회복 특화 시그니처 힐링 프로그램" },
  ];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">TRANSPARENT PRICE</span>
          <h1 className="text-3xl font-black text-white">투명한 코스별 가격 안내</h1>
          <p className="text-xs text-gray-400">100% 후불제 안심 예약 / 도착 전 선입금 절대 금지</p>
        </div>

        <div className="space-y-4">
          {priceList.map((item, idx) => (
            <div key={idx} className="bg-[#121214] border border-amber-500/20 p-5 rounded-2xl flex justify-between items-center">
              <div>
                <h3 className="font-bold text-white text-sm md:text-base">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
              </div>
              <span className="text-amber-400 font-black text-base md:text-lg bg-amber-500/10 px-3.5 py-1.5 rounded-xl border border-amber-500/20">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}