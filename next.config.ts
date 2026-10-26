import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Самодостаточная сборка: vinext складывает в dist/standalone/ сервер и только
  // те пакеты, которые он реально грузит в рантайме. Иначе в образ пришлось бы
  // тащить все node_modules (~1 ГБ) ради пятистраничного сайта.
  output: "standalone",
};

export default nextConfig;
