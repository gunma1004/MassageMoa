import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 이 줄이 out 폴더를 생성해 줍니다!
  images: {
    unoptimized: true, // 정적 export 시 이미지 에러 방지
  },
};

export default nextConfig;