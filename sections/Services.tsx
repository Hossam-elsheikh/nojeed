'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { ChessAccent } from '@/components/ChessAccent'
import { services } from '@/lib/data/services'

export function Services() {
    const t = useTranslations('services')
    const prefersReducedMotion = useReducedMotion()

    return (
        <section id="services" className="relative py-20 md:py-28 overflow-hidden">
            <ChessAccent piece="knight" className="w-72 h-72 -bottom-20 -right-20" opacity={0.05} rotate={8} />

            <Container className="relative flex flex-col gap-12">
                <SectionHeading title={t('title')} subtitle={t('intro')} center />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.key}
                                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                                className="flex flex-col gap-4 rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-accent/40 transition-colors"
                            >
                                <div className="flex items-center justify-center size-11 rounded-xl bg-accent/10">
                                    <Icon className="text-accent" size={22} aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">
                                    {t(`${service.key}.title`)}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {t(`${service.key}.description`)}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
