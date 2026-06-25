import NextLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { FaFacebook, FaRegEnvelope, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa6'
import { BsTelephonePlusFill } from 'react-icons/bs'
import { Link } from '@/i18n/routing'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'
import { site } from '@/lib/site'

export function Footer() {
    const t = useTranslations('footer')
    const nav = useTranslations('header')
    const hero = useTranslations('hero')
    const locale = useLocale() as 'en' | 'ar'

    const socials = [
        { href: site.socials.instagram, icon: FaInstagram, label: 'Instagram' },
        { href: site.socials.tiktok, icon: FaTiktok, label: 'TikTok' },
        { href: site.socials.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
        { href: site.socials.facebook, icon: FaFacebook, label: 'Facebook' },
    ]

    const exploreLinks = [
        { href: '/services', label: nav('services') },
        { href: '/projects', label: nav('projects') },
        { href: '/products', label: nav('products') },
        { href: '/contact', label: nav('contact') },
    ] as const

    return (
        <footer className="bg-navy-darker text-white/70">
            <Container className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-16">
                <div className="sm:col-span-3 lg:col-span-1">
                    <Logo variant="white" />
                    <p className="text-[14.5px] leading-relaxed mt-4.5 max-w-[300px] text-white/60">
                        {hero('subheadline')}
                    </p>
                    <div className="flex items-center gap-4 mt-5 text-accent">
                        {socials.map(({ href, icon: Icon, label }) => (
                            <NextLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                <Icon size={18} />
                            </NextLink>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold text-sm mb-3.5">{t('explore')}</h4>
                    <ul className="flex flex-col gap-2.5 text-sm">
                        {exploreLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-accent transition">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold text-sm mb-3.5">{t('contact')}</h4>
                    <ul className="flex flex-col gap-2.5 text-sm">
                        <li>
                            <NextLink href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent transition">
                                <FaRegEnvelope className="text-teal-bright" size={15} />
                                {site.email}
                            </NextLink>
                        </li>
                        <li>
                            <NextLink href={site.phoneHref} className="flex items-center gap-2 hover:text-accent transition">
                                <BsTelephonePlusFill className="text-teal-bright" size={15} />
                                <span dir="ltr">{site.phone}</span>
                            </NextLink>
                        </li>
                        <li>{site.location[locale]}</li>
                    </ul>
                </div>
            </Container>

            <div className="border-t border-white/10">
                <Container className="flex flex-col md:flex-row items-center justify-between gap-3 py-5.5 text-sm text-white/50">
                    <p>
                        &copy; {new Date().getFullYear()} {site.name}. {t('rights')}
                    </p>
                    <ul className="flex gap-6 underline">
                        <li>
                            <Link href="/terms">{t('terms')}</Link>
                        </li>
                        <li>
                            <Link href="/privacy">{t('privacy')}</Link>
                        </li>
                    </ul>
                </Container>
            </div>
        </footer>
    )
}
