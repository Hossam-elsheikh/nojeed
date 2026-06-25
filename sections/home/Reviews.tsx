'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa6'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { testimonials, facebookPostUrl } from '@/lib/data/testimonials'

const rotations = ['-1.2deg', '0.8deg', '-0.6deg']

export function Reviews() {
    const t = useTranslations('testimonials')
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-16 md:py-22">
            <Container className="flex flex-col gap-11">
                <SectionHeading title={t('headline')} subtitle={t('subheadline')} center />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 items-start">
                    {testimonials.map((item, index) => (
                        <motion.a
                            key={item.key}
                            href={facebookPostUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            className="group block rounded-2xl bg-white border border-navy/10 shadow-[0_18px_40px_rgba(22,36,63,0.14)] overflow-hidden transition-transform hover:-translate-y-1 hover:rotate-0!"
                            style={!prefersReducedMotion ? { transform: `rotate(${rotations[index]})` } : undefined}
                        >
                            <Image
                                src={item.image}
                                alt=""
                                width={item.width}
                                height={item.height}
                                sizes="(min-width: 640px) 33vw, 100vw"
                                className="w-full h-auto"
                            />
                            <div className="flex items-center gap-2 px-4 py-3 border-t border-navy/8 text-[13px] font-medium text-muted group-hover:text-teal transition-colors">
                                <FaFacebook className="text-[#1877F2]" size={15} />
                                {t('viewOnFacebook')}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </section>
    )
}
