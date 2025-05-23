'use client'
import React, { useState, useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Globe, Menu } from "lucide-react";
import { NavLink } from "./NavLink";
import LocaleSwitcher from "../locales/LocalSwitcher";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

const MobNav = ({t,locale}:{t:Record<string, string>,locale:string}) => {
  const [open, setOpen] = useState(false);
  const pendingScrollRef = useRef<string | null>(null);

  // Handle scroll on sheet close
  useEffect(() => {
    if (!open && pendingScrollRef.current) {
      const id = pendingScrollRef.current;
      pendingScrollRef.current = null;
      
      // Small delay to ensure sheet is fully closed
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          const offset = 80; // Adjust if you have a sticky header
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          
          window.scrollTo({ top: y, behavior: "smooth" });
          
          // Update URL hash without causing a scroll
          if (window.history && window.history.pushState) {
            window.history.pushState(null, "", `#${id}`);
          }
        }
      }, 300);
    }
  }, [open]);


  return (
    <Sheet  open={open} onOpenChange={setOpen}>
      <SheetTrigger className="cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent side={locale==='ar'?'left':'right'} className="bg-white flex py-5 flex-col text-center items-center">
        <SheetHeader>
          <SheetTitle>
            <Link href={'/'} className="w-1/4">
        <Image src={logo} width={100} height={100} alt="Saluts" />
      </Link>
          </SheetTitle>
          <SheetDescription>

          </SheetDescription>
        </SheetHeader>
        <nav className="p-6 gap-8 flex flex-col ">
          <NavLink onclick={() => setOpen(false)} className="text-3xl" href={`/${locale}/#home`} title={t.home} />
          <NavLink onclick={() => setOpen(false)}
            className="text-3xl"
            href={`/${locale}/#services`}
            title={t.services}
          />
          <NavLink onclick={() => setOpen(false)}
            className="text-3xl"
           href={`/${locale}/#portfolio`}
            title={t.portfolio}
          />
          <NavLink onclick={() => setOpen(false)} className="text-3xl" href={`/${locale}/#whyus`} title={t.whyus} />
          <NavLink onclick={() => setOpen(false)}
            className="text-3xl"
            href={`/${locale}/#contact`}
            title={t.contact}
          />
        </nav>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-foreground" />

          <LocaleSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobNav;