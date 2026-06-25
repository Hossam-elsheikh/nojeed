import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { portfolioProjects } from '@/lib/data/portfolio'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('projectsPage')
    return { title: t('title') }
}

export default async function ProjectsPage() {
    const t = await getTranslations('projectsPage')
    const tHeader = await getTranslations('header')
    const tProjects = await getTranslations('portfolio.projects')

    return (
        <>
            <section className="border-b border-navy/10">
                <Container className="py-14">
                    <div className="text-[13px] text-subtle">
                        Nojeed / <span className="text-navy">{tHeader('projects')}</span>
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

            <section className="py-12 md:py-14">
                <Container className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioProjects.map((project) => (
                        <Link
                            key={project.key}
                            href={{ pathname: '/projects/[slug]', params: { slug: project.key } }}
                            className="flex flex-col rounded-[18px] overflow-hidden border border-navy/10 bg-surface transition-all hover:border-accent hover:-translate-y-1"
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={project.image}
                                    alt={tProjects(`${project.key}.title`)}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-xs text-subtle uppercase tracking-[0.12em]">
                                        {tProjects(`${project.key}.title`)}
                                    </span>
                                    <span className="text-[11px] font-semibold text-teal border border-teal/30 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                        {tProjects(`${project.key}.tag`)}
                                    </span>
                                </div>
                                <p className="text-muted text-sm leading-relaxed mt-2.5 flex-1">
                                    {tProjects(`${project.key}.description`)}
                                </p>
                                <span className="font-semibold text-navy text-sm mt-4.5">{t('viewCaseStudy')}</span>
                            </div>
                        </Link>
                    ))}
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
