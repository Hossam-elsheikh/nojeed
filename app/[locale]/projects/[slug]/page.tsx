import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { portfolioProjects } from '@/lib/data/portfolio'

export function generateStaticParams() {
    return portfolioProjects.map((project) => ({ slug: project.key }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const project = portfolioProjects.find((p) => p.key === slug)
    if (!project) return {}
    const t = await getTranslations('portfolio.projects')
    return { title: t(`${project.key}.title`) }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const index = portfolioProjects.findIndex((p) => p.key === slug)
    const project = portfolioProjects[index]
    if (!project) notFound()

    const next = portfolioProjects[(index + 1) % portfolioProjects.length]
    const tHeader = await getTranslations('header')
    const t = await getTranslations('projectsPage')
    const tProjects = await getTranslations('portfolio.projects')

    return (
        <>
            <section className="border-b border-navy/10">
                <Container className="py-14">
                    <div className="text-[13px] text-subtle">
                        <Link href="/projects" className="text-teal">
                            {tHeader('projects')}
                        </Link>{' '}
                        / <span className="text-navy">{tProjects(`${project.key}.title`)}</span>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-6 mt-6">
                        <div className="max-w-[640px]">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                                <span className="size-1.5 rounded-full bg-accent" />
                                {tProjects(`${project.key}.tag`)}
                            </div>
                            <h1 className="font-serif font-medium text-navy text-[clamp(32px,4.4vw,52px)] leading-[1.1] mt-3.5">
                                {tProjects(`${project.key}.description`)}
                            </h1>
                        </div>
                        <Button href={project.href} variant="outline" className="shrink-0">
                            {t('visitLive')}
                            <ArrowUpRight size={16} aria-hidden="true" />
                        </Button>
                    </div>
                    <div className="relative w-full h-[clamp(260px,42vw,520px)] mt-9 rounded-[20px] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={tProjects(`${project.key}.title`)}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </Container>
            </section>

            <section className="py-14 md:py-16">
                <Container className="grid sm:grid-cols-3 gap-8">
                    <div>
                        <h2 className="font-serif font-medium text-xl text-navy border-t-2 border-navy pt-4 mb-3">
                            {t('challengeTitle')}
                        </h2>
                        <p className="text-muted text-[15.5px] leading-relaxed">
                            {tProjects(`${project.key}.challenge`)}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-serif font-medium text-xl text-navy border-t-2 border-accent pt-4 mb-3">
                            {t('approachTitle')}
                        </h2>
                        <p className="text-muted text-[15.5px] leading-relaxed">
                            {tProjects(`${project.key}.approach`)}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-serif font-medium text-xl text-navy border-t-2 border-teal-bright pt-4 mb-3">
                            {t('resultTitle')}
                        </h2>
                        <p className="text-muted text-[15.5px] leading-relaxed">
                            {tProjects(`${project.key}.result`)}
                        </p>
                    </div>
                </Container>
            </section>

            {project.gallery.length > 0 && (
                <section className="py-8 md:py-10">
                    <Container className={`grid gap-5 ${project.gallery.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                        {project.gallery.map((src) => (
                            <div key={src} className="relative h-[300px] rounded-2xl overflow-hidden">
                                <Image src={src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                            </div>
                        ))}
                    </Container>
                </section>
            )}

            <section className="py-12 md:py-14">
                <Container>
                    <Link
                        href={{ pathname: '/projects/[slug]', params: { slug: next.key } }}
                        className="flex items-center justify-between gap-5 flex-wrap rounded-[18px] border border-navy/10 bg-surface px-7 py-7 transition-colors hover:border-accent"
                    >
                        <div>
                            <div className="text-xs text-subtle uppercase tracking-[0.12em]">{t('nextProject')}</div>
                            <div className="font-serif font-medium text-2xl text-navy mt-1">
                                {tProjects(`${next.key}.title`)}
                            </div>
                        </div>
                        <span className="text-2xl text-navy inline-block rtl:-scale-x-100">→</span>
                    </Link>
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
