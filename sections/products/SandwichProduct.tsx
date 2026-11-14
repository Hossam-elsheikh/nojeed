import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { ProductTermsLink } from '@/components/ProductTermsLink'
import { sandwich } from '@/lib/data/products'

const chips = ['multiBranch', 'arabicFirst', 'offlinePos'] as const

export async function SandwichProduct({ children }: { children?: React.ReactNode }) {
    const t = await getTranslations('products.sandwich')
    const tPage = await getTranslations('productsPage')
    const tHeader = await getTranslations('header')

    return (
        <>
            <section className="relative overflow-hidden border-b border-navy/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(244,151,39,0.16),transparent_54%)]" aria-hidden="true" />
                <Container className="relative py-14">
                    <div className="text-[13px] text-subtle">
                        <Link href="/products" className="text-teal">{tHeader('products')}</Link> / <span className="text-navy">{tPage('cards.sandwich.name')}</span>
                    </div>
                    <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                                <span className="size-1.5 rounded-full bg-accent" />{t('eyebrow')}
                            </div>
                            <h1 className="mt-5 font-serif text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.08] text-navy">{t('title')}</h1>
                            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">{t('subtitle')}</p>
                            <div className="mt-7 flex flex-wrap gap-2.5">
                                {chips.map((key) => (
                                    <span key={key} className="rounded-full border border-teal/30 bg-surface px-3.5 py-1.5 text-[13px] font-medium text-teal">{t(`chips.${key}`)}</span>
                                ))}
                            </div>
                            <Button href={sandwich.siteHref} className="mt-7">{t('demoLink')}</Button>
                            <ProductTermsLink slug="sandwich" className="mt-3 inline-flex text-sm font-semibold text-teal underline underline-offset-4" />
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] border border-navy/10 bg-[#170603] shadow-[0_28px_80px_rgba(22,36,63,0.18)]">
                            <Image
                                src={sandwich.thumbnail}
                                alt={t('heroAlt')}
                                width={1280}
                                height={720}
                                priority
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-20">
                <Container>
                    <div className="mx-auto max-w-[760px] text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />{t('videoEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">{t('videoTitle')}</h2>
                        <p className="mt-4 text-muted">{t('videoDescription')}</p>
                    </div>
                    <div className="mx-auto mt-8 max-w-[1120px] overflow-hidden rounded-[24px] border border-navy/10 bg-black shadow-[0_24px_70px_rgba(22,36,63,0.2)]">
                        <div className="relative aspect-video">
                            <iframe
                                className="absolute inset-0 size-full"
                                src="https://www.youtube.com/embed/0nU3Qzp3mfo"
                                title={t('videoTitle')}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>
                </Container>
            </section>
            {children}
        </>
    )
}
