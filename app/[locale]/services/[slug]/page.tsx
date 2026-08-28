import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { services, stacksBySlug, type ServiceSlug } from '@/lib/data/services'
import { processSteps } from '@/lib/data/process'
import { portfolioProjects } from '@/lib/data/portfolio'

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)
    if (!service) return {}
    const t = await getTranslations('services')
    return { title: t(`${service.key}.title`) }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)
    if (!service) notFound()

    const index = services.findIndex((s) => s.slug === slug)
    const tServices = await getTranslations('services')
    const tHeader = await getTranslations('header')
    const t = await getTranslations('servicesPage')
    const tProcess = await getTranslations('process')
    const stack = stacksBySlug[slug as ServiceSlug]
    const relatedProjects = portfolioProjects.slice(0, 3)
    const included = ['discover', 'design', 'build', 'launch'] as const

    return (
        <>
            <section className="border-b border-navy/10">
                <Container className="grid sm:grid-cols-2 items-center gap-7.5 py-14">
                    <div>
                        <div className="text-[13px] text-subtle">
                            <Link href="/services" className="text-teal">
                                {tHeader('services')}
                            </Link>{' '}
                            / <span className="text-navy">{tServices(`${service.key}.title`)}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal mt-4.5">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('detail.servicePrefix')} 0{index + 1}
                        </div>
                        <h1 className="font-serif font-medium text-navy text-[clamp(40px,5.2vw,64px)] leading-[1.04] mt-3.5">
                            {tServices(`${service.key}.title`)}
                        </h1>
                        <p className="text-muted text-lg max-w-[480px] mt-5.5">
                            {t(`detail.${service.slug}.subtitle`)}
                        </p>
                        <div className="flex flex-wrap gap-3.5 mt-7.5">
                            <Button href="/contact" variant="dark">
                                {t('heroCta1')}
                            </Button>
                            <Link href="/projects" className="px-2 py-3.5 font-semibold text-navy underline underline-offset-[5px]">
                                {t('heroCta2')}
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center min-h-[320px]">
                        <div className="absolute size-[260px] rounded-full bg-[radial-gradient(circle,rgba(37,196,199,0.14),transparent_62%)]" />
                        <div className="absolute size-[180px] rounded-[32px] bg-navy-dark opacity-80 rotate-[-10deg]" />
                        <Image
                            src={`/images/chess/${service.piece}.png`}
                            alt=""
                            width={420}
                            height={420}
                            className="relative h-[clamp(180px,20vw,240px)] w-auto object-contain"
                            style={{ filter: 'drop-shadow(0 16px 28px rgba(22,36,63,.38))', animation: 'floaty 6s ease-in-out infinite' }}
                        />
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-18">
                <Container>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {included.map((key) => (
                            <div key={key} className="rounded-2xl bg-surface border border-navy/10 p-5.5">
                                <div className="font-serif text-lg text-navy font-medium">
                                    {t(`included.${key}.title`)}
                                </div>
                                <p className="text-muted text-sm mt-2">{t(`included.${key}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-10 md:py-12">
                <Container>
                    <h2 className="font-serif font-medium text-navy text-[clamp(26px,3vw,38px)] mb-9">
                        {tProcess('title')}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {processSteps.map((step, i) => (
                            <div key={step.key} className="border-t-2 border-navy pt-4.5">
                                <div className="font-serif text-[28px] text-accent">0{i + 1}</div>
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

            <section className="py-10 md:py-12">
                <Container>
                    <div className="rounded-[22px] bg-navy p-8 md:p-12 text-white">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('stackEyebrow')}
                        </div>
                        <h2 className="font-serif font-medium text-[clamp(24px,3vw,34px)] mt-3.5 mb-5.5">
                            {t('stackTitle')}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {stack.map((tech) => (
                                <span key={tech} className="border border-white/20 px-4.5 py-2.5 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-12 md:py-14">
                <Container>
                    <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
                        <h2 className="font-serif font-medium text-navy text-[clamp(26px,3vw,38px)]">
                            {t('relatedTitle')}
                        </h2>
                        <Link href="/projects" className="font-semibold text-teal text-[15px]">
                            {t('allProjects')}
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {relatedProjects.map((project) => (
                            <RelatedProjectCard key={project.key} projectKey={project.key} image={project.image} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-navy-dark relative overflow-hidden mt-6">
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

async function RelatedProjectCard({ projectKey, image }: { projectKey: string; image: string }) {
    const t = await getTranslations('portfolio.projects')
    return (
        <Link
            href={{ pathname: '/projects/[slug]', params: { slug: projectKey } }}
            className="block rounded-[18px] overflow-hidden border border-navy/10 bg-surface transition-all hover:border-accent hover:-translate-y-1"
        >
            <div className="relative h-[170px]">
                <Image src={image} alt={t(`${projectKey}.title`)} fill className="object-cover" sizes="400px" />
            </div>
            <div className="p-5.5">
                <div className="text-xs text-subtle uppercase tracking-[0.12em]">{t(`${projectKey}.tag`)}</div>
                <h3 className="font-serif font-medium text-xl text-navy mt-2">{t(`${projectKey}.title`)}</h3>
            </div>
        </Link>
    )
}
