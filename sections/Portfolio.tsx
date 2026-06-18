'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolioProjects } from '@/lib/data/portfolio'

export function Portfolio() {
    const t = useTranslations('portfolio')
    const prefersReducedMotion = useReducedMotion()

    return (
        <section id="portfolio" className="py-20 md:py-28">
            <Container className="flex flex-col gap-12">
                <SectionHeading title={t('title')} subtitle={t('subheadline')} center />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioProjects.map((project, index) => (
                        <motion.div
                            key={project.key}
                            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                            className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/40 transition-colors"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                {/* TODO: replace with a real product screenshot (recommended 1200x900) */}
                                <Image
                                    src={project.image}
                                    alt={t(`projects.${project.key}.title`)}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <span className="absolute top-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-accent">
                                    {t(`projects.${project.key}.tag`)}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 p-6 flex-1">
                                <h3 className="text-lg font-semibold text-foreground">
                                    {t(`projects.${project.key}.title`)}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed flex-1">
                                    {t(`projects.${project.key}.description`)}
                                </p>
                                <Link
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                                >
                                    {t('preview')}
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
