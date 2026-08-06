import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // 🌐 실제 적용할 도메인 주소
  const baseUrl = 'https://gunmasarang.shop';

  // 1. 메인 대표 홈 페이지
  const mainRoute: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. 메인 5개 제휴업체 상세 페이지 (/shop/1 ~ /shop/5)
  const shopRoutes: MetadataRoute.Sitemap = [1, 2, 3, 4, 5].map((id) => ({
    url: `${baseUrl}/shop/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. 주요 검색 노출용 구·동 지역 샘플 목록 (자동 URL 엔코딩 생성)
  const regionList = [
    // 서울 주요 권역
    { region: 'seoul', district: '강남구' },
    { region: 'seoul', district: '강남구', dong: '역삼동' },
    { region: 'seoul', district: '서초구' },
    { region: 'seoul', district: '송파구' },
    { region: 'seoul', district: '마포구' },
    { region: 'seoul', district: '영등포구' },
    { region: 'seoul', district: '용산구' },
    
    // 경기 주요 권역
    { region: 'gyeonggi', district: '수원시 장안구' },
    { region: 'gyeonggi', district: '수원시 장안구', dong: '조원2동' },
    { region: 'gyeonggi', district: '성남시 분당구' },
    { region: 'gyeonggi', district: '고양시 일산동구' },
    { region: 'gyeonggi', district: '용인시 수지구' },
    { region: 'gyeonggi', district: '부천시 원미구' },

    // 인천 주요 권역
    { region: 'incheon', district: '부평구' },
    { region: 'incheon', district: '연수구', dong: '송도동' },
    { region: 'incheon', district: '남동구', dong: '구월동' },
    { region: 'incheon', district: '서구', dong: '청라동' },
  ];

  const regionRoutes: MetadataRoute.Sitemap = regionList.map((item) => {
    const path = item.dong
      ? `${item.region}/${encodeURIComponent(item.district)}/${encodeURIComponent(item.dong)}`
      : `${item.region}/${encodeURIComponent(item.district)}`;

    return {
      url: `${baseUrl}/${path}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    };
  });

  return [...mainRoute, ...shopRoutes, ...regionRoutes];
}