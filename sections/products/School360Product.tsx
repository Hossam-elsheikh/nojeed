import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { school360, productModules, alsoIncluded, productFeatures } from '@/lib/data/products'
import { site } from '@/lib/site'

/** The eight modules that ring the logo in the hero. */
const heroRing = ['admissions', 'students', 'academic', 'exams', 'fees', 'attendance', 'transport', 'library'] as const

export async function School360Product({ children }: { children?: React.ReactNode }) {
    const t = await getTranslations('products.school360')
    const tPage = await getTranslations('productsPage')
    const tHeader = await getTranslations('header')

    const faqItems = [1, 2, 3] as const

    return (
        <>
            {/* ---------------------------------------------------------------- Hero */}
            <section className="border-b border-navy/10">
                <Container className="py-14">
                    <div className="text-[13px] text-subtle">
                        <Link href="/products" className="text-teal">
                            {tHeader('products')}
                        </Link>{' '}
                        / <span className="text-navy">{tPage('cards.school360.name')}</span>
                    </div>

                    <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                                <span className="size-1.5 rounded-full bg-accent" />
                                {t('eyebrow')}
                            </div>
                            <Image
                                src={school360.logo}
                                alt={tPage('cards.school360.name')}
                                width={280}
                                height={101}
                                className="mt-5 h-[clamp(52px,6vw,74px)] w-auto"
                                priority
                            />
                            <div className="mt-4">
                                <span className="inline-block rounded-full border border-teal/30 px-3.5 py-1.5 text-xs font-semibold text-teal">
                                    {t('builtOnLabel')}
                                </span>
                            </div>
                            <p className="mt-5 max-w-[540px] text-lg text-muted">{t('subtitle')}</p>
                            <div className="mt-7 flex flex-wrap gap-3.5">
                                <Button href={site.whatsappHref} variant="dark">
                                    {t('cta1')}
                                </Button>
                                <Button href={site.calendlyHref} variant="outline">
                                    {t('cta2')}
                                </Button>
                            </div>
                        </div>

                        <ModuleRing label={tPage('cards.school360.name')} />
                    </div>
                </Container>
            </section>

            {/* -------------------------------------------------------------- Modules */}
            <section className="py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('modulesEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('modulesTitle')}
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {productModules.map((mod) => (
                            <div
                                key={mod.key}
                                className="flex gap-4 rounded-2xl border border-navy/10 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent"
                            >
                                <Image
                                    src={mod.icon}
                                    alt=""
                                    width={56}
                                    height={56}
                                    className="size-14 shrink-0 rounded-xl border border-navy/8 bg-background-alt p-1.5"
                                />
                                <div>
                                    <h3 className="font-serif text-lg font-medium text-navy">
                                        {t(`modules.${mod.key}.title`)}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                        {t(`modules.${mod.key}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-2 rounded-2xl border border-navy/10 bg-background-alt p-6.5">
                        <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                            {t('alsoIncludedEyebrow')}
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {alsoIncluded.map((item) => (
                                <div key={item.key} className="flex items-start gap-3.5">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={44}
                                        height={44}
                                        className="size-11 shrink-0 rounded-lg border border-navy/8 bg-surface p-1"
                                    />
                                    <div>
                                        <div className="font-serif font-medium text-navy">
                                            {t(`alsoIncluded.${item.key}.title`)}
                                        </div>
                                        <p className="mt-0.5 text-sm text-muted">
                                            {t(`alsoIncluded.${item.key}.description`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ------------------------------------------------------------- Features */}
            <section className="border-y border-navy/8 bg-background-alt py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('featuresEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('featuresTitle')}
                        </h2>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {productFeatures.map((feature) => {
                            const Icon = feature.icon
                            return (
                                <div key={feature.key} className="rounded-2xl border border-navy/10 bg-surface p-6.5">
                                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy">
                                        <Icon className="text-teal-bright" size={22} aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-4.5 font-serif text-lg font-medium text-navy">
                                        {t(`features.${feature.key}.title`)}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                        {t(`features.${feature.key}.description`)}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* ------------------------------------------------------------------ FAQ */}
            <section className="py-16 md:py-20">
                <Container className="flex max-w-[900px] flex-col gap-6">
                    <h2 className="mb-1 text-center font-serif text-[clamp(28px,3.4vw,42px)] font-medium text-navy">
                        {t('faqTitle')}
                    </h2>
                    {faqItems.map((n) => (
                        <div key={n} className="rounded-2xl border border-navy/10 bg-surface px-6.5 py-5.5">
                            <div className="font-serif text-lg font-medium text-navy">{t(`faq.q${n}`)}</div>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{t(`faq.a${n}`)}</p>
                        </div>
                    ))}
                </Container>
            </section>

            {children}

            {/* ------------------------------------------------------------------ CTA */}
            <section className="relative overflow-hidden bg-navy-dark">
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

/**
 * The hero graphic: eight module icons orbiting the product mark. Positions are
 * computed once at render time, so the ring stays even if the list changes.
 */
function ModuleRing({ label }: { label: string }) {
    const modules = heroRing.map((key) => ({
        key,
        src: [...productModules, ...alsoIncluded].find((m) => m.key === key)!.icon,
    }))

    return (
        <div className="relative mx-auto aspect-square w-full max-w-[400px]" role="img" aria-label={label}>
            <div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(162,199,83,0.16),transparent_66%)]"
                aria-hidden="true"
            />
            <div className="absolute inset-[14%] rounded-full border border-dashed border-navy/15" aria-hidden="true" />

            <div className="absolute left-1/2 top-1/2 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-surface shadow-[0_16px_36px_rgba(22,36,63,0.12)]">
                <Image src={school360.mark} alt="" width={144} height={144} className="h-auto w-[62%]" />
            </div>

            {modules.map(({ key, src }, index) => {
                const angle = (index / modules.length) * 2 * Math.PI - Math.PI / 2
                const radius = 43
                return (
                    <div
                        key={key}
                        className="absolute flex aspect-square w-[19%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-navy/8 bg-surface shadow-[0_10px_24px_rgba(22,36,63,0.14)]"
                        style={{
                            left: `${50 + radius * Math.cos(angle)}%`,
                            top: `${50 + radius * Math.sin(angle)}%`,
                        }}
                    >
                        <Image src={src} alt="" width={76} height={76} className="h-auto w-[74%]" />
                    </div>
                )
            })}
        </div>
    )
}
