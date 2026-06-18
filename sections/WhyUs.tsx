'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { ChessAccent } from '@/components/ChessAccent'
import { whyUsPoints } from '@/lib/data/whyUs'
import { site } from '@/lib/site'

export function WhyUs() {
    const t = useTranslations('whyUs')
    const prefersReducedMotion = useReducedMotion()

    return (
        <section id="whyus" className="relative py-20 md:py-28 bg-white/[0.02] overflow-hidden">
            <ChessAccent piece="rook" className="w-60 h-60 -top-12 -right-12" opacity={0.05} rotate={-6} delay={0.4} />

            <Container className="relative flex flex-col gap-12">
                <SectionHeading eyebrow={t('title')} title={t('header')} center />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {whyUsPoints.map((point, index) => {
                        const Icon = point.icon
                        return (
                            <motion.div
                                key={point.key}
                                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                                className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-6"
                            >
                                <Icon className="text-accent" size={24} aria-hidden="true" />
                                <h3 className="font-semibold text-foreground">{t(`points.${point.key}.title`)}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {t(`points.${point.key}.description`)}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="flex justify-center">
                    <Link
                        href={site.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-accent text-background px-6 py-3 font-medium hover:bg-accent/80 transition"
                    >
                        {t('cta')}
                    </Link>
                </div>
            </Container>
        </section>
    )
}
