import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../locales/LocalSwitcher";
import MobNav from "./MobNav";
import { NavLink } from "./NavLink";
import Link from "next/link";



const Navbar = ({locale}:{locale:string}) => {
  const t = useTranslations("navbar");

  return (
    <div className="flex py-5 px-10 justify-between lg:mx-20 items-center sticky top-0 z-40 border-b bg-white">
      <Link href={'/'} className="w-1/4">
        <Image src={logo} width={120} height={120} alt="Saluts" />
      </Link>
      <nav className=" gap-5 justify-center hidden lg:flex min-w-1/2 ">
        <NavLink className="text-2xl" href={`/${locale}/#home`} title={t("home")} />
        <NavLink className="text-2xl" href={`/${locale}/#services`} title={t("services")} />
        <NavLink className="text-2xl" href={`/${locale}/#portfolio`} title={t("portfolio")} />
        <NavLink className="text-2xl" href={`/${locale}/#whyus`} title={t("whyus")} />
        <NavLink className="text-2xl" href={`/${locale}/#contact`} title={t("contact")} />
      </nav>
      <div className=" items-center gap-2 w-1/4 justify-end hidden lg:flex">
        <Button className="hover:scale-110">{t("contact")}</Button>
        <LocaleSwitcher />
      </div>
      <div className="block lg:hidden">

        <MobNav locale={locale} t={{
        home: t('home'),
        services: t('services'),
        portfolio: t('portfolio'),
        whyus: t('whyus'),
        contact: t('contact')
        
      }} />
      </div>
    </div>
  );
};

export default Navbar;
