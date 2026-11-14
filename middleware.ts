import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all locales except for /_next/static/* and /_next/image/*, and the
  // product demos in public/demos, which are not localized pages of this site.
  matcher: ["/((?!api|_next|demos|.*\\..*).*)"],
};