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
                            className="group relative flex flex-col h-full min-h-[260px] rounded-[22px] border border-navy/10 bg-surface p-7.5 overflow-hidden transition-all hover:border-accent hover:-translate-y-1"
                        >
                            <Image
                                src={rook}
                                alt=""
                                className="absolute -bottom-7 -end-7 h-44 w-auto object-contain opacity-90 rotate-[-8deg] transition-transform duration-300 group-hover:rotate-[-3deg] group-hover:scale-105 rtl:rotate-[8deg] rtl:group-hover:rotate-[3deg]"
                            />
                            <div className="relative z-10 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                                    {t('projects.eyebrow')}
                                </span>
                                <span className="text-navy text-xl rtl:-scale-x-100">↗</span>
                            </div>
                            <h3 className="relative z-10 font-serif font-medium text-2xl text-navy mt-3.5">
                                {t('projects.title')}
                            </h3>
                            <p className="relative z-10 text-muted mt-2 max-w-[75%]">{t('projects.description')}</p>
                        </Link>
                    </motion.div>

                    <motion.div {...fadeUp(0.18)}>
                        <Link
                            href="/products"
                            className="group relative flex flex-col h-full min-h-[260px] rounded-[22px] border border-navy/10 bg-surface p-7.5 overflow-hidden transition-all hover:border-accent hover:-translate-y-1"
                        >
                            <Image
                                src={queen}
                                alt=""
                                className="absolute -bottom-7 -end-7 h-44 w-auto object-contain opacity-90 rotate-[-8deg] transition-transform duration-300 group-hover:rotate-[-3deg] group-hover:scale-105 rtl:rotate-[8deg] rtl:group-hover:rotate-[3deg]"
                            />
                            <div className="relative z-10 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                                    {t('products.eyebrow')}
                                </span>
                                <span className="text-navy text-xl rtl:-scale-x-100">↗</span>
                            </div>
                            <h3 className="relative z-10 font-serif font-medium text-2xl text-navy mt-3.5">
                                {t('products.title')}
                            </h3>
                            <p className="relative z-10 text-muted mt-2 max-w-[75%]">{t('products.description')}</p>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
