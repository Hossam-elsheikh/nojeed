'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { whyUsPoints } from '@/lib/data/whyUs'

export function WhyUs() {
    const t = useTranslations('whyUs')
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-16 md:py-22 bg-background-alt border-y border-navy/8">
            <Container className="flex flex-col gap-11">
                <SectionHeading eyebrow={t('title')} title={t('header')} center />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {whyUsPoints.map((point, index) => {
                        const Icon = point.icon
                        return (
                            <motion.div
                                key={point.key}
                                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                                className="rounded-2xl bg-surface border border-navy/10 p-7"
                            >
                                <span className="inline-flex items-center justify-center size-13 rounded-full bg-navy">
                                    <Icon className="text-teal-bright" size={22} aria-hidden="true" />
                                </span>
                                <h3 className="font-serif font-medium text-lg text-navy mt-5">
                                    {t(`points.${point.key}.title`)}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed mt-2">
                                    {t(`points.${point.key}.description`)}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
