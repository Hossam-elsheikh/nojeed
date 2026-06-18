import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { FaFacebook, FaRegEnvelope, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa6'
import { BsTelephonePlusFill } from 'react-icons/bs'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'
import { ChessAccent } from '@/components/ChessAccent'
import { site } from '@/lib/site'

export function Footer() {
    const t = useTranslations('footer')
    const locale = useLocale() as 'en' | 'ar'

    const socials = [
        { href: site.socials.instagram, icon: FaInstagram, label: 'Instagram' },
        { href: site.socials.tiktok, icon: FaTiktok, label: 'TikTok' },
        { href: site.socials.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
        { href: site.socials.facebook, icon: FaFacebook, label: 'Facebook' },
    ]

    return (
        <footer className="relative bg-white/[0.03] py-16 overflow-hidden">
            <ChessAccent piece="queen" className="w-52 h-52 -bottom-10 -left-10" opacity={0.05} rotate={6} float={false} />

            <Container className="relative flex flex-col gap-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
                    <Logo />
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-20 pb-8 border-b border-white/10 text-center md:text-start">
                    <div className="flex-1">
                        <h4 className="text-foreground mb-4">{t('follow')}</h4>
                        <ul className="flex gap-4 justify-center md:justify-start text-accent">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <li key={label}>
                                    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                        <Icon size={18} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-foreground mb-4">{t('find')}</h4>
                        <p className="text-white/60">{site.location[locale]}</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-foreground mb-4">{t('contact')}</h4>
                        <ul className="flex flex-col gap-2 items-center md:items-start text-white/60">
                            <li>
                                <Link href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent transition">
                                    <FaRegEnvelope className="text-accent" size={16} />
                                    {site.email}
                                </Link>
                            </li>
                            <li>
                                <Link href={site.phoneHref} className="flex items-center gap-2 hover:text-accent transition">
                                    <BsTelephonePlusFill className="text-accent" size={16} />
                                    <span dir="ltr">{site.phone}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
                    <ul className="flex gap-6 underline">
                        <li>
                            <Link href="#">{t('terms')}</Link>
                        </li>
                        <li>
                            <Link href="#">{t('privacy')}</Link>
                        </li>
                    </ul>
                    <p>
                        &copy; {new Date().getFullYear()} Nojeed. {t('rights')}
                    </p>
                </div>
            </Container>
        </footer>
    )
}
