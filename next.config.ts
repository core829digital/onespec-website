import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isProd = process.env.NODE_ENV === "production";

// The only third-party origins the site loads are the platform (the widget/showroom demo iframes) and its demo host (the whole platform in demo mode). NEXT_PUBLIC_DEMO_ORIGIN lets local tests point
// them at a local platform; it is never set in production.
const demoOrigin = process.env.NEXT_PUBLIC_DEMO_ORIGIN;
const platformDemoOrigin = process.env.NEXT_PUBLIC_PLATFORM_DEMO_URL;
const frameSrc = ["https://platform.onespec.eu", "https://demo.onespec.eu", ...(demoOrigin ? [demoOrigin] : []), ...(platformDemoOrigin ? [platformDemoOrigin] : [])].join(" ");

const CSP = [
  "default-src 'self'",
  // Next.js and the theme bootstrap use inline scripts; dev mode also needs eval for React.
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self' data:",
  // Dev server uses a websocket for hot reload.
  `connect-src 'self'${isProd ? "" : " ws: wss:"}`,
  `frame-src ${frameSrc}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Nobody may embed the marketing site.
  "frame-ancestors 'none'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default withNextIntl(nextConfig);
