import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/Button'
import { services } from '@/lib/data/services'
import { processSteps } from '@/lib/data/process'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('servicesPage')
    return { title: t('title') }
}

export default async function ServicesPage() {
    const t = await getTranslations('servicesPage')
    const tServices = await getTranslations('services')
    const tHeader = await getTranslations('header')
    const tProcess = await getTranslations('process')

    return (
        <>
            <section className="border-b border-navy/10 relative overflow-hidden">
                <Container className="relative py-18 md:py-20">
                    <div className="text-[13px] text-subtle">
                        Nojeed / <span className="text-navy">{tHeader('services')}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal mt-5">
                        <span className="size-1.5 rounded-full bg-accent" />
                        {t('eyebrow')}
                    </div>
                    <h1 className="font-serif font-medium text-navy text-[clamp(40px,5.5vw,68px)] leading-[1.04] mt-3.5 max-w-[760px]">
                        {t('title')}
                    </h1>
                    <p className="text-muted text-lg max-w-[520px] mt-5">{t('intro')}</p>
                </Container>
            </section>

            <section className="py-16 md:py-20">
                <Container className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Link
                                key={service.slug}
                                href={{ pathname: '/services/[slug]', params: { slug: service.slug } }}
                                className="flex flex-col min-h-[300px] rounded-[20px] border border-navy/10 bg-surface p-7.5 transition-all hover:border-accent hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="inline-flex items-center justify-center size-14 rounded-2xl bg-navy">
                                        <Icon className="text-teal-bright" size={26} aria-hidden="true" />
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                                        0{index + 1}
                                    </span>
                                </div>
                                <h3 className="font-serif font-medium text-[25px] text-navy mt-4.5">
                                    {tServices(`${service.key}.title`)}
                                </h3>
                                <p className="text-muted text-[15px] leading-relaxed mt-2">
                                    {tServices(`${service.key}.description`)}
                                </p>
                                <div className="flex-1" />
                                <span className="font-semibold text-teal text-[14.5px] mt-4.5">{t('learnMore')}</span>
                            </Link>
                        )
                    })}
                </Container>
            </section>

            <section className="py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <SectionHeading eyebrow={tProcess('title')} title={tProcess('intro')} />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {processSteps.map((step, index) => (
                            <div key={step.key} className="border-t-2 border-navy pt-4.5">
                                <div className="font-serif text-[30px] text-accent">0{index + 1}</div>
                                <h3 className="font-serif font-medium text-xl text-navy mt-2">
                                    {tProcess(`steps.${step.key}.title`)}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed mt-1.5">
                                    {tProcess(`steps.${step.key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-navy-dark relative overflow-hidden mt-8">
                <Container className="relative py-19 text-center">
                    <h2 className="font-serif font-normal text-white text-[clamp(34px,4.5vw,58px)] leading-[1.05]">
                        {t('ctaTitle')}
                    </h2>
                    <p className="text-white/70 max-w-[440px] mx-auto mt-4.5">{t('ctaSubtitle')}</p>
                    <Button href="/contact" className="mt-7">
                        {t('ctaButton')}
                    </Button>
                </Container>
            </section>
        </>
    )
}
