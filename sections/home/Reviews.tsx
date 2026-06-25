'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa6'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { testimonials, facebookPostUrl } from '@/lib/data/testimonials'

const CARD_W = 340
const SIDE_X = 218

export function Reviews() {
    const t = useTranslations('testimonials')
    const [active, setActive] = useState(0)
    const total = testimonials.length

    const next = useCallback(() => setActive(i => (i + 1) % total), [total])

    useEffect(() => {
        const id = setInterval(next, 10000)
        return () => clearInterval(id)
    }, [next])

    const getPos = (index: number) => {
        const diff = (index - active + total) % total
        if (diff === 0) return 'center'
        if (diff === 1) return 'right'
        return 'left'
    }

    return (
        <section className="py-16 md:py-22">
            <Container className="flex flex-col gap-10">
                <SectionHeading title={t('headline')} subtitle={t('subheadline')} center />

                <div className="relative flex items-center justify-center" style={{ height: 310 }}>
                    {testimonials.map((item, index) => {
                        const pos = getPos(index)
                        return (
                            <motion.a
                                key={item.key}
                                href={facebookPostUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => {
                                    if (pos !== 'center') {
                                        e.preventDefault()
                                        setActive(index)
                                    }
                                }}
                                style={{
                                    position: 'absolute',
                                    width: CARD_W,
                                    left: '50%',
                                    marginLeft: -CARD_W / 2,
                                    zIndex: pos === 'center' ? 10 : 1,
                                    cursor: pos === 'center' ? 'pointer' : 'pointer',
                                }}
                                animate={{
                                    x: pos === 'center' ? 0 : pos === 'left' ? -SIDE_X : SIDE_X,
                                    rotate: pos === 'center' ? 0 : pos === 'left' ? -13 : 13,
                                    scale: pos === 'center' ? 1 : 0.82,
                                    filter: pos === 'center' ? 'blur(0px)' : 'blur(3.5px)',
                                }}
                                transition={{ duration: 0.55, ease: 'easeInOut' }}
                                className="rounded-2xl bg-white border border-navy/10 shadow-[0_18px_40px_rgba(22,36,63,0.14)] overflow-hidden"
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={item.width}
                                    height={item.height}
                                    sizes={`${CARD_W}px`}
                                    className="w-full h-auto"
                                />
                                <div className="flex items-center gap-2 px-4 py-3 border-t border-navy/8 text-[13px] font-medium text-muted">
                                    <FaFacebook className="text-[#1877F2]" size={15} />
                                    {t('viewOnFacebook')}
                                </div>
                            </motion.a>
                        )
                    })}
                </div>

                <div className="flex justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === active ? 'w-6 bg-teal' : 'w-2 bg-navy/25'
                            }`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}
