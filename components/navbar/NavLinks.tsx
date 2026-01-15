import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function NavLinks() {
    const t = useTranslations('navbar')
    const links = [
        {
            title: t('home'),
            href: 'home',
        },
        {
            title: t('services'),
            href: 'services',
        },
        {
            title: t('portfolio'),
            href: 'portfolio',
        },
        {
            title: t('whyus'),
            href: 'whyus',
        },
        //   {
        //     title: t('contact'),
        //     href:'contact'
        // }
    ]

    return (
        <div className=" py-1 px-4 rounded-2xl lg:flex space-x-4 text-white font-medium hidden ">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={`#${link.href}`}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-[#c3ed5b] hover:scale-105 active:scale-95`}
                >
                    {link.title}
                </Link>
            ))}
            <LanguageSwitcher />
        </div>
    )
}

export default NavLinks
