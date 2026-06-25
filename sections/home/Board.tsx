'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import knight from '@/public/images/chess/knight.png'
import rook from '@/public/images/chess/rook.png'
import queen from '@/public/images/chess/queen.png'

export function Board() {
    const t = useTranslations('home.board')
    const prefersReducedMotion = useReducedMotion()

    const fadeUp = (delay: number) => ({
        initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.5, delay, ease: 'easeOut' as const },
    })

    return (
        <section className="py-16 md:py-22">
            <Container className="flex flex-col gap-9">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
                    <p className="text-muted max-w-[360px]">{t('subtitle')}</p>
                </div>

                <motion.div {...fadeUp(0)}>
                    <Link
                        href="/services"
                        className="group grid sm:grid-cols-2 rounded-[22px] overflow-hidden bg-navy transition-transform hover:-translate-y-1"
                    >
                        <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-bright">
                                {t('services.eyebrow')}
                            </span>
                            <h3 className="font-serif font-medium text-[clamp(26px,3vw,38px)] leading-tight mt-3.5">
                                {t('services.title')}
                            </h3>
                            <p className="text-white/70 max-w-[420px] mt-4">{t('services.description')}</p>
                            <div className="flex gap-2.5 mt-6 flex-wrap">
                                {['tag1', 'tag2', 'tag3'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="border border-white/20 px-3.5 py-2 rounded-full text-[13px] text-white/85"
                                    >
                                        {t(`services.${tag}`)}
                                    </span>
                                ))}
                            </div>
                            <span className="mt-7 font-semibold text-accent text-[15px]">{t('services.cta')}</span>
                        </div>
                        <div className="relative min-h-[260px] flex items-center justify-center bg-[radial-gradient(circle_at_60%_50%,rgba(37,196,199,0.22),transparent_60%)]">
                            <Image src={knight} alt="" className="relative h-[260px] w-auto object-contain" />
                        </div>
                    </Link>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5">
                    <motion.div {...fadeUp(0.1)}>
                        <Link
                            href="/projects"
                            className="group relative flex flex-col h-full min-h-[300px] rounded-[22px] border border-navy/12 bg-navy-dark overflow-hidden transition-all hover:border-teal/40 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgba(37,196,199,0.12),transparent_65%)]" />
                            <Image
                                src={rook}
                                alt=""
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-[260px] w-auto object-contain opacity-20"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-dark to-transparent pointer-events-none z-[5]" />
                            <div className="relative z-10 flex flex-col h-full p-7.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-bright">
                                        {t('projects.eyebrow')}
                                    </span>
                                    <span className="text-white/60 text-xl rtl:-scale-x-100">↗</span>
                                </div>
                                <h3 className="font-serif font-medium text-2xl text-white mt-3.5">
                                    {t('projects.title')}
                                </h3>
                                <p className="text-white/60 mt-2 max-w-[58%]">{t('projects.description')}</p>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div {...fadeUp(0.18)}>
                        <Link
                            href="/products"
                            className="group relative flex flex-col h-full min-h-[300px] rounded-[22px] border border-navy/12 bg-navy-dark overflow-hidden transition-all hover:border-accent/50 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgba(162,199,83,0.10),transparent_65%)]" />
                            <Image
                                src={queen}
                                alt=""
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-[260px] w-auto object-contain opacity-20"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-dark to-transparent pointer-events-none z-[5]" />
                            <div className="relative z-10 flex flex-col h-full p-7.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                                        {t('products.eyebrow')}
                                    </span>
                                    <span className="text-white/60 text-xl rtl:-scale-x-100">↗</span>
                                </div>
                                <h3 className="font-serif font-medium text-2xl text-white mt-3.5">
                                    {t('products.title')}
                                </h3>
                                <p className="text-white/60 mt-2 max-w-[58%]">{t('products.description')}</p>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
