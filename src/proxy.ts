import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Esclude asset statici, file interni Next.js e il configuratore HTML
  // servito da public/: quel file ha la propria lingua interna (widget IT/EN/FR)
  // e non deve passare dal routing delle pagine.
  matcher: ["/((?!api|trpc|_next|_vercel|configuratore-demo\\.html|.*\\..*).*)"],
};
