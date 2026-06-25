import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/Container'
import { product, productModules, alsoIncluded, productFeatures } from '@/lib/data/products'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('productsPage')
    return { title: t('title') }
}

export default async function ProductsPage() {
    const t = await getTranslations('productsPage')
    const tHeader = await getTranslations('header')

    const faqItems = [1, 2, 3] as const

    return (
        <>
            <section className="border-b border-navy/10">
                <Container className="py-14 text-center">
                    <div className="text-[13px] text-subtle text-left sm:text-center">
                        Nojeed / <span className="text-navy">{tHeader('products')}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal mt-6">
                        <span className="size-1.5 rounded-full bg-accent" />
                        {t('eyebrow')}
                    </div>
                    <Image
                        src={product.logo}
                        alt={product.name}
                        width={280}
                        height={101}
                        className="mx-auto mt-4 h-[clamp(56px,7vw,84px)] w-auto"
                        priority
                    />
                    <span className="inline-block mt-4.5 text-xs font-semibold text-teal border border-teal/30 px-3.5 py-1.5 rounded-full">
                        {t('builtOnLabel')}
                    </span>
                    <p className="text-muted text-lg max-w-[600px] mx-auto mt-5">{t('subtitle')}</p>
                    <div className="flex flex-wrap gap-3.5 justify-center mt-7.5">
                        <Button href="/contact" variant="dark">
                            {t('cta1')}
                        </Button>
                        <Button href="/contact" variant="outline">
                            {t('cta2')}
                        </Button>
                    </div>

                    <div className="relative mt-12 rounded-2xl overflow-hidden border border-navy/10 shadow-[0_30px_60px_rgba(22,36,63,0.18)] max-w-[960px] mx-auto">
                        <div className="flex items-center gap-1.5 bg-navy-dark px-4 py-2.5">
                            <span className="size-2.5 rounded-full bg-white/20" />
                            <span className="size-2.5 rounded-full bg-white/20" />
                            <span className="size-2.5 rounded-full bg-white/20" />
                        </div>
                        <div className="relative aspect-[16/9]">
                            <Image
                                src={productModules[1].image}
                                alt={t('modules.students.title')}
                                fill
                                sizes="(min-width: 1024px) 960px, 100vw"
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('modulesEyebrow')}
                        </div>
                        <h2 className="font-serif font-medium text-navy text-[clamp(30px,3.8vw,46px)] leading-[1.05] mt-3.5">
                            {t('modulesTitle')}
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productModules.map((mod) => (
                            <div
                                key={mod.key}
                                className="rounded-2xl overflow-hidden border border-navy/10 bg-surface transition-all hover:border-accent hover:-translate-y-1"
                            >
                                <div className="relative aspect-[16/10] border-b border-navy/10">
                                    <Image
                                        src={mod.image}
                                        alt={t(`modules.${mod.key}.title`)}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif font-medium text-lg text-navy">
                                        {t(`modules.${mod.key}.title`)}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mt-1.5">
                                        {t(`modules.${mod.key}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl bg-background-alt border border-navy/10 p-6.5 mt-2">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal mb-4.5">
                            {t('alsoIncludedEyebrow')}
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {alsoIncluded.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.key} className="flex items-start gap-3">
                                        <Icon className="text-teal shrink-0 mt-0.5" size={20} aria-hidden="true" />
                                        <div>
                                            <div className="font-serif font-medium text-navy">
                                                {t(`alsoIncluded.${item.key}.title`)}
                                            </div>
                                            <p className="text-muted text-sm mt-0.5">
                                                {t(`alsoIncluded.${item.key}.description`)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-20 bg-background-alt border-y border-navy/8">
                <Container className="flex flex-col gap-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('featuresEyebrow')}
                        </div>
                        <h2 className="font-serif font-medium text-navy text-[clamp(30px,3.8vw,46px)] leading-[1.05] mt-3.5">
                            {t('featuresTitle')}
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {productFeatures.map((feature) => {
                            const Icon = feature.icon
                            return (
                                <div key={feature.key} className="rounded-2xl bg-surface border border-navy/10 p-6.5">
                                    <span className="inline-flex items-center justify-center size-12 rounded-full bg-navy">
                                        <Icon className="text-teal-bright" size={22} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-serif font-medium text-lg text-navy mt-4.5">
                                        {t(`features.${feature.key}.title`)}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mt-1.5">
                                        {t(`features.${feature.key}.description`)}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-20">
                <Container className="max-w-[900px] flex flex-col gap-6">
                    <h2 className="font-serif font-medium text-navy text-[clamp(28px,3.4vw,42px)] text-center mb-1">
                        {t('faqTitle')}
                    </h2>
                    {faqItems.map((n) => (
                        <div key={n} className="rounded-2xl bg-surface border border-navy/10 px-6.5 py-5.5">
                            <div className="font-serif font-medium text-lg text-navy">{t(`faq.q${n}`)}</div>
                            <p className="text-muted text-sm leading-relaxed mt-2">{t(`faq.a${n}`)}</p>
                        </div>
                    ))}
                </Container>
            </section>

            <section className="bg-navy-dark relative overflow-hidden mt-2">
                <Container className="relative py-19 text-center">
                    <h2 className="font-serif font-normal text-white text-[clamp(32px,4.2vw,54px)] leading-[1.05]">
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
