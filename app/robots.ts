import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 🌐 마사지모아 새 도메인 주소로 입력해주세요 (예: https://massagemoa.com 또는 https://www.massagemoa.com)
  const baseUrl = 'https://massagemoa.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}