'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'
import knight from '@/public/images/chess/knight.png'

export function Hero() {
    const t = useTranslations('hero')
    const prefersReducedMotion = useReducedMotion()

    const riseIn = (delay: number) =>
        prefersReducedMotion
            ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
            : {
                  initial: { opacity: 0, y: 16, filter: 'blur(4px)' },
                  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
              }

    const stats = [
        { value: t('stat1Value'), label: t('stat1Label') },
        { value: t('stat2Value'), label: t('stat2Label') },
    ]

    return (
        <section id="top" className="relative overflow-hidden pt-14 md:pt-20">
            <Container className="grid lg:grid-cols-2 items-center gap-8 min-h-[600px]">
                <div className="pb-14 pt-4">
                    <motion.div
                        {...riseIn(0)}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal"
                    >
                        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {t('eyebrow')}
                    </motion.div>

                    <h1 className="font-serif font-medium text-navy mt-5.5 leading-[1.05]">
                        <motion.span {...riseIn(0.08)} className="block">
                            {t('headline')}
                        </motion.span>
                        <motion.span {...riseIn(0.16)} className="block italic text-teal">
                            {t('headlineAccent')}
                        </motion.span>
                    </h1>

                    <motion.p {...riseIn(0.26)} className="text-muted max-w-[460px] mt-6">
                        {t('subheadline')}
                    </motion.p>

                    <motion.div {...riseIn(0.36)} className="flex flex-wrap gap-3.5 mt-8">
                        <Button href={site.calendlyHref} variant="dark">
                            {t('cta1')} <span className="inline-block rtl:-scale-x-100">→</span>
                        </Button>
                        <Link
                            href="/projects"
                            className="px-2 py-3.5 font-semibold text-navy underline underline-offset-[5px]"
                            style={{ textDecorationColor: 'var(--color-accent)' }}
                        >
                            {t('cta2')}
                        </Link>
                    </motion.div>

                    <motion.div
                        {...riseIn(0.46)}
                        className="flex flex-wrap gap-9 mt-13 pt-6.5 border-t border-navy/10"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="font-serif text-[32px] text-navy">{stat.value}</div>
                                <div className="text-[13px] text-subtle mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="relative min-h-[420px] lg:min-h-[520px] self-stretch hidden sm:flex items-center justify-center rtl:-scale-x-100">
                    <svg
                        viewBox="0 0 600 620"
                        preserveAspectRatio="xMidYMid meet"
                        className="absolute inset-0 w-full h-full"
                        aria-hidden="true"
                    >
                        <g transform="translate(300,300)">
                            <g transform="skewY(-22) scale(1.12)" fill="#16243F">
                                <rect x="-200" y="-200" width="80" height="80" />
                                <rect x="-40" y="-200" width="80" height="80" />
                                <rect x="120" y="-200" width="80" height="80" />
                                <rect x="-120" y="-120" width="80" height="80" />
                                <rect x="40" y="-120" width="80" height="80" />
                                <rect x="-200" y="-40" width="80" height="80" />
                                <rect x="-40" y="-40" width="80" height="80" />
                                <rect x="120" y="-40" width="80" height="80" />
                                <rect x="-120" y="40" width="80" height="80" />
                                <rect x="40" y="40" width="80" height="80" />
                                <rect x="-200" y="120" width="80" height="80" />
                                <rect x="-40" y="120" width="80" height="80" />
                                <rect x="120" y="120" width="80" height="80" />
                                <rect
                                    x="-200"
                                    y="-200"
                                    width="400"
                                    height="400"
                                    fill="none"
                                    stroke="#16243F"
                                    strokeWidth="2"
                                    opacity=".22"
                                />
                            </g>
                        </g>
                        {!prefersReducedMotion && (
                            <path
                                d="M170 470 Q110 300 360 230"
                                fill="none"
                                stroke="#25C4C7"
                                strokeWidth="3"
                                strokeDasharray="2 11"
                                strokeLinecap="round"
                                style={{ animation: 'dash 1.6s linear infinite' }}
                            />
                        )}
                        <circle cx="360" cy="230" r="14" fill="none" stroke="#A2C753" strokeWidth="3" />
                        <circle cx="360" cy="230" r="4" fill="#A2C753" />
                    </svg>
                    <div
                        className="relative"
                        style={{
                            height: 'clamp(200px, 26vw, 300px)',
                            width: 'clamp(200px, 26vw, 300px)',
                            animation: prefersReducedMotion ? undefined : 'floaty 6s ease-in-out infinite',
                            filter: 'drop-shadow(0 20px 32px rgba(22,36,63,.28))',
                        }}
                    >
                        <Image src={knight} alt="" fill className="object-contain" priority />
                    </div>
                </div>
            </Container>
        </section>
    )
}
