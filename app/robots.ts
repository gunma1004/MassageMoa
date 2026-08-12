import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 🌐 변경할 새 도메인 주소로 수정
  const baseUrl = 'https://gunmasarang.store';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}