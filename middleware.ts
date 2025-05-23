import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all locales except for /_next/static/* and /_next/image/*
  matcher: ["/","/(en|de|ar)/:path*"  ],
};