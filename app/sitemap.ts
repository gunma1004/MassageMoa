import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // 🌐 적용할 마사지모아 새 도메인 주소 (실제 도메인 확정 시 수정)
  const baseUrl = https://massagemoa.pages.dev ';

  // 1. 메인 대표 홈 페이지
  const mainRoute: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. 상단 카테고리 메인 페이지들 (SEO 품질 향상용)
  const categoryRoutes: MetadataRoute.Sitemap = [
    'services',
    'prices',
    'travel',
    'places',
    'reviews',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. 메인 5개 제휴업체 상세 페이지 (/shop/1 ~ /shop/5)
  const shopRoutes: MetadataRoute.Sitemap = [1, 2, 3, 4, 5].map((id) => ({
    url: `${baseUrl}/shop/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. 구·시 주요 권역 목록 (새로 추가된 부산·대구·대전·광주·울산·청주까지 포함하여 검색 수집 극대화)
  const regionList = [
    // 서울 주요 권역
    { region: 'seoul', district: '종로구' },
    { region: 'seoul', district: '중구' },
    { region: 'seoul', district: '용산구' },
    { region: 'seoul', district: '성동구' },
    { region: 'seoul', district: '광진구' },
    { region: 'seoul', district: '동대문구' },
    { region: 'seoul', district: '중랑구' },
    { region: 'seoul', district: '성북구' },
    { region: 'seoul', district: '강북구' },
    { region: 'seoul', district: '도봉구' },
    { region: 'seoul', district: '노원구' },
    { region: 'seoul', district: '은평구' },
    { region: 'seoul', district: '서대문구' },
    { region: 'seoul', district: '마포구' },
    { region: 'seoul', district: '양천구' },
    { region: 'seoul', district: '강서구' },
    { region: 'seoul', district: '구로구' },
    { region: 'seoul', district: '금천구' },
    { region: 'seoul', district: '영등포구' },
    { region: 'seoul', district: '동작구' },
    { region: 'seoul', district: '관악구' },
    { region: 'seoul', district: '서초구' },
    { region: 'seoul', district: '강남구' },
    { region: 'seoul', district: '송파구' },
    { region: 'seoul', district: '강동구' },

    // 경기 주요 권역
    { region: 'gyeonggi', district: '수원시 장안구' },
    { region: 'gyeonggi', district: '수원시 권선구' },
    { region: 'gyeonggi', district: '수원시 팔달구' },
    { region: 'gyeonggi', district: '수원시 영통구' },
    { region: 'gyeonggi', district: '성남시 수정구' },
    { region: 'gyeonggi', district: '성남시 중원구' },
    { region: 'gyeonggi', district: '성남시 분당구' },
    { region: 'gyeonggi', district: '고양시 덕양구' },
    { region: 'gyeonggi', district: '고양시 일산동구' },
    { region: 'gyeonggi', district: '고양시 일산서구' },
    { region: 'gyeonggi', district: '용인시 수지구' },
    { region: 'gyeonggi', district: '용인시 기흥구' },
    { region: 'gyeonggi', district: '부천시 원미구' },

    // 인천 주요 권역
    { region: 'incheon', district: '중구' },
    { region: 'incheon', district: '미추홀구' },
    { region: 'incheon', district: '연수구' },
    { region: 'incheon', district: '남동구' },
    { region: 'incheon', district: '부평구' },
    { region: 'incheon', district: '계양구' },
    { region: 'incheon', district: '서구' },

    // 부산 주요 권역
    { region: 'busan', district: '해운대구' },
    { region: 'busan', district: '부산진구' },
    { region: 'busan', district: '수영구' },
    { region: 'busan', district: '사상구' },
    { region: 'busan', district: '사하구' },
    { region: 'busan', district: '동래구' },
    { region: 'busan', district: '금정구' },
    { region: 'busan', district: '남구' },

    // 대구 주요 권역
    { region: 'daegu', district: '중구' },
    { region: 'daegu', district: '수성구' },
    { region: 'daegu', district: '동구' },
    { region: 'daegu', district: '서구' },
    { region: 'daegu', district: '남구' },
    { region: 'daegu', district: '북구' },
    { region: 'daegu', district: '달서구' },

    // 대전 주요 권역
    { region: 'daejeon', district: '서구' },
    { region: 'daejeon', district: '유성구' },
    { region: 'daejeon', district: '중구' },
    { region: 'daejeon', district: '동구' },
    { region: 'daejeon', district: '대덕구' },

    // 광주 주요 권역
    { region: 'gwangju_city', district: '서구' },
    { region: 'gwangju_city', district: '북구' },
    { region: 'gwangju_city', district: '광산구' },
    { region: 'gwangju_city', district: '동구' },
    { region: 'gwangju_city', district: '남구' },

    // 울산 주요 권역
    { region: 'ulsan', district: '남구' },
    { region: 'ulsan', district: '중구' },
    { region: 'ulsan', district: '북구' },
    { region: 'ulsan', district: '동구' },

    // 청주 주요 권역
    { region: 'cheongju', district: '흥덕구' },
    { region: 'cheongju', district: '서원구' },
    { region: 'cheongju', district: '상당구' },
    { region: 'cheongju', district: '청원구' },
  ];

  const regionRoutes: MetadataRoute.Sitemap = regionList.map((item) => {
    return {
      url: `${baseUrl}/${item.region}/${encodeURIComponent(item.district)}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    };
  });

  return [...mainRoute, ...categoryRoutes, ...shopRoutes, ...regionRoutes];
}