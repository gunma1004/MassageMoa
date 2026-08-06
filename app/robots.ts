import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 🌐 실제 적용할 도메인 주소
  const baseUrl = 'https://gunmasarang.shop';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}