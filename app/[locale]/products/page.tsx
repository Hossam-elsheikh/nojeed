import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'

import { products, productModules, school360, nabih } from '@/lib/data/products'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('productsPage')
    return { title: t('title'), description: t('intro') }
}

/** A handful of module icons, enough to say "modular" at a glance. */
const previewModules = ['admissions', 'students', 'exams', 'library', 'transport', 'calendar'] as const

export default async function ProductsPage() {
    const t = await getTranslations('productsPage')
    const tHeader = await getTranslations('header')
    const locale = await getLocale()

    return (
        <>
            <section className="border-b border-navy/10">
                <Container className="py-14">
                    <div className="text-[13px] text-subtle">
                        Nojeed / <span className="text-navy">{tHeader('products')}</span>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                        <span className="size-1.5 rounded-full bg-accent" />
                        {t('eyebrow')}
                    </div>
                    <h1 className="mt-3.5 max-w-[760px] font-serif text-[clamp(40px,5.5vw,68px)] font-medium leading-[1.04] text-navy">
                        {t('title')}
                    </h1>
                    <p className="mt-5 max-w-[560px] text-lg text-muted">{t('intro')}</p>
                </Container>
            </section>

            <section className="py-12 md:py-14">
                <Container className="grid gap-7 md:grid-cols-2">
                    {products.map((product) => (
                        <Link
                            key={product.key}
                            href={{
                                pathname: '/products/[slug]',
                                params: { slug: product.slug },
                            }}
                            className="group flex flex-col overflow-hidden rounded-[20px] border border-navy/10 bg-surface transition-all hover:-translate-y-1 hover:border-accent"
                        >
                            {product.key === 'nabih' ? <NabihPreview locale={locale} /> : <School360Preview />}

                            <div className="flex flex-1 flex-col p-7">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="font-serif text-2xl font-medium text-navy">
                                        {t(`cards.${product.key}.name`)}
                                    </h2>
                                    <span className="rounded-full border border-teal/30 px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap text-teal">
                                        {t(`cards.${product.key}.tag`)}
                                    </span>
                                </div>
                                <p className="mt-3 flex-1 leading-relaxed text-muted">
                                    {t(`cards.${product.key}.description`)}
                                </p>
                                <div className="mt-6 text-xs uppercase tracking-[0.12em] text-subtle">
                                    {t(`cards.${product.key}.meta`)}
                                </div>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                                    {t('viewProduct')}
                                    <span className="inline-block transition-transform group-hover:translate-x-1 rtl:-scale-x-100">
                                        →
                                    </span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </Container>
            </section>

            <section className="relative mt-6 overflow-hidden bg-navy-dark">
                <Container className="relative py-19 text-center">
                    <h2 className="font-serif text-[clamp(32px,4.2vw,54px)] font-normal leading-[1.05] text-white">
                        {t('ctaTitle')}
                    </h2>
                    <Button href="/contact" className="mt-6.5">
                        {t('ctaButton')}
                    </Button>
                </Container>
            </section>
        </>
    )
}

/** The top of the day's list, cropped. */
function NabihPreview({ locale }: { locale: string }) {
    return (
        <div className="relative h-[300px] overflow-hidden bg-[#e7e2d9]">
            <Image
                src={nabih.screen(locale, 'today')}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
            />
            <div
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent"
                aria-hidden="true"
            />
        </div>
    )
}

/** The system, as its modules. */
function School360Preview() {
    const icons = previewModules.map((key) => productModules.find((m) => m.key === key)!.icon)

    return (
        <div className="relative flex h-[300px] flex-col items-center justify-center gap-7 overflow-hidden bg-background-alt">
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(162,199,83,0.2),transparent_60%)]"
                aria-hidden="true"
            />
            <Image src={school360.logo} alt="" width={200} height={72} className="relative h-14 w-auto" />
            <div className="relative grid grid-cols-6 gap-2.5 px-6 sm:gap-3.5">
                {icons.map((src) => (
                    <Image
                        key={src}
                        src={src}
                        alt=""
                        width={52}
                        height={52}
                        className="size-12 rounded-xl border border-navy/8 bg-surface p-1.5 shadow-[0_8px_18px_rgba(22,36,63,0.1)] sm:size-14"
                    />
                ))}
            </div>
        </div>
    )
}
