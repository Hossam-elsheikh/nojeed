'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'
import { LanguageToggle } from '@/components/LanguageToggle'
import { MobileMenu } from '@/components/MobileMenu'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export function Header() {
    const t = useTranslations('header')
    const pathname = usePathname()
    const links = [
        { href: '/services', label: t('services') },
        { href: '/projects', label: t('projects') },
        { href: '/products', label: t('products') },
        { href: '/contact', label: t('contact') },
    ] as const

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-navy/10">
            <Container className="flex items-center justify-between gap-4 py-4">
                <Logo />
                <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-foreground/90">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                pathname === link.href
                                    ? 'text-navy font-bold'
                                    : 'hover:text-teal transition'
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden lg:flex items-center gap-6">
                    <LanguageToggle />
                    <Button href={site.calendlyHref} className="text-sm px-5.5 py-2.5">
                        {t('cta')}
                    </Button>
                </div>
                <div className="flex items-center gap-3 lg:hidden">
                    <Button href={site.calendlyHref} className="text-xs px-4 py-2">
                        {t('cta')}
                    </Button>
                    <MobileMenu />
                </div>
            </Container>
        </header>
    )
}
