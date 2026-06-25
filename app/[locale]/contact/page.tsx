import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/sections/contact/ContactForm'
import { site } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('contactPage')
    return { title: t('title') }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations('contactPage')
    const cta = await getTranslations('finalCta')

    const info = [
        { icon: Mail, label: t('emailLabel'), value: site.email, href: `mailto:${site.email}` },
        { icon: Phone, label: t('phoneLabel'), value: site.phone, href: site.phoneHref, dir: 'ltr' },
        {
            icon: MapPin,
            label: t('whereLabel'),
            value: site.location[locale as 'en' | 'ar'],
            href: undefined,
        },
    ]

    return (
        <section className="py-14 md:py-16">
            <Container className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                        <span className="size-1.5 rounded-full bg-accent" />
                        {t('eyebrow')}
                    </div>
                    <h1 className="font-serif font-medium text-navy text-[clamp(40px,5vw,64px)] leading-[1.04] mt-3.5">
                        {t('title')}
                    </h1>
                    <p className="text-muted text-lg max-w-[440px] mt-5.5">{t('subtitle')}</p>

                    <div className="flex flex-col gap-4.5 mt-9.5">
                        {info.map((item) => {
                            const Icon = item.icon
                            const content = (
                                <>
                                    <span className="size-11 rounded-xl bg-navy flex items-center justify-center shrink-0">
                                        <Icon className="text-teal-bright" size={20} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <div className="text-[13px] text-subtle">{item.label}</div>
                                        <div
                                            className="font-serif font-medium text-lg text-navy"
                                            dir={item.dir}
                                        >
                                            {item.value}
                                        </div>
                                    </div>
                                </>
                            )
                            return item.href ? (
                                <a key={item.label} href={item.href} className="flex items-center gap-3.5 hover:opacity-80 transition">
                                    {content}
                                </a>
                            ) : (
                                <div key={item.label} className="flex items-center gap-3.5">
                                    {content}
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-8.5 px-5 py-4.5 bg-surface border border-navy/10 rounded-2xl flex items-center gap-3">
                        <span className="text-accent text-xl">●</span>
                        <span className="text-[14.5px] text-muted">{t('bilingualNote')}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <ContactForm />

                    <div className="flex items-center gap-3 text-subtle text-sm">
                        <span className="flex-1 h-px bg-navy/10" />
                        {t('or')}
                        <span className="flex-1 h-px bg-navy/10" />
                    </div>

                    <Button
                        href={site.whatsappHref}
                        variant="outline"
                        className="justify-center gap-2.5"
                    >
                        <FaWhatsapp size={19} className="text-[#25D366]" aria-hidden="true" />
                        {cta('whatsapp')}
                    </Button>
                </div>
            </Container>
        </section>
    )
}
