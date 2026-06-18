'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { ChessAccent } from '@/components/ChessAccent'
import { processSteps } from '@/lib/data/process'

export function Process() {
    const t = useTranslations('process')
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-20 md:py-28 bg-white/[0.02]">
            <Container className="flex flex-col gap-12">
                <SectionHeading title={t('title')} subtitle={t('intro')} center />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.key}
                            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                            className="relative flex flex-col items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden"
                        >
                            <ChessAccent
                                piece={step.piece}
                                className="w-28 h-28 -bottom-6 -right-6"
                                opacity={0.12}
                                rotate={0}
                                float={false}
                            />
                            <span className="relative font-mono text-sm text-accent">{`0${index + 1}`}</span>
                            <h3 className="relative text-lg font-semibold text-foreground">
                                {t(`steps.${step.key}.title`)}
                            </h3>
                            <p className="relative text-white/60 text-sm leading-relaxed">
                                {t(`steps.${step.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
