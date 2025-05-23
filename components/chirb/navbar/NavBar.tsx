import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import React from "react";

const NavBar = async () => {
    const t = await getTranslations("NavBar");
  return (
    <div>
      <ul>
        <Link href="/">{t("home")}</Link>
        <Link href="/contact">{t("contact")}</Link>
        <Link href="/login">{t("login")}</Link>
      </ul>
    </div>
  );
};

export default NavBar;
