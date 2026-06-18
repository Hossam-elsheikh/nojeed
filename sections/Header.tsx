'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'
import { LanguageToggle } from '@/components/LanguageToggle'
import { MobileMenu } from '@/components/MobileMenu'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export function Header() {
    const t = useTranslations('header')
    const links = [
        { href: '#services', label: t('services') },
        { href: '#portfolio', label: t('work') },
        { href: '#whyus', label: t('whyus') },
        { href: '#contact', label: t('contact') },
    ]

    return (
        <header className="fixed top-0 inset-x-0 z-50 pt-4 px-4">
            <Container className="px-0">
                <div className="flex items-center justify-between gap-4 bg-[#013531]/80 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-6 py-3 shadow-2xl">
                    <Logo />
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-xl text-sm font-medium text-foreground/90 hover:bg-white/10 hover:text-accent transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center gap-3">
                        <LanguageToggle />
                        <Button href={site.calendlyHref} className="text-sm">
                            {t('cta')}
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 lg:hidden">
                        <Button href={site.calendlyHref} className="text-xs px-4 py-2">
                            {t('cta')}
                        </Button>
                        <MobileMenu />
                    </div>
                </div>
            </Container>
        </header>
    )
}
