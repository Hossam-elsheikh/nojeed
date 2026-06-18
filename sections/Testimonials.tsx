'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { testimonials, clientLogos } from '@/lib/data/testimonials'

export function Testimonials() {
    const t = useTranslations('testimonials')
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-20 md:py-28 bg-white/[0.02]">
            <Container className="flex flex-col gap-12">
                <SectionHeading title={t('headline')} subtitle={t('subheadline')} center />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.key}
                            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                            className="flex flex-col gap-4 rounded-2xl bg-white/5 border border-white/10 p-8"
                        >
                            <Quote className="text-accent" size={28} aria-hidden="true" />
                            <p className="text-foreground/90">{t(`items.${item.key}.quote`)}</p>
                            <div className="mt-auto flex items-center gap-3">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={44}
                                    height={44}
                                    className="rounded-full border-2 border-white/20"
                                />
                                <div>
                                    <p className="font-semibold text-foreground text-sm">
                                        {t(`items.${item.key}.name`)}
                                    </p>
                                    <p className="text-white/50 text-xs">{t(`items.${item.key}.role`)}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 opacity-60">
                    {clientLogos.map((label, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-12 w-32 rounded-lg border border-dashed border-white/20 text-white/40 text-sm"
                        >
                            {/* TODO: swap for a real client logo image */}
                            {label}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
