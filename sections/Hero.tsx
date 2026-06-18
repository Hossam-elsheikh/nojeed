'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/Container'

type Piece = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'

export function Hero() {
    const t = useTranslations('hero')
    const prefersReducedMotion = useReducedMotion()
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

    const useDrift = (range: [number, number]) =>
        useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : range)

    const kingY = useDrift([0, 130])
    const knightY = useDrift([0, -90])
    const pawnY = useDrift([0, 100])
    const bishopY = useDrift([0, -70])

    const riseIn = (delay: number) =>
        prefersReducedMotion
            ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
            : {
                  initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
                  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
              }

    const pieces: Array<{
        piece: Piece
        className: string
        opacity: number
        rotate: number
        y: typeof kingY
    }> = [
        { piece: 'king', className: 'w-64 h-64 md:w-[26rem] md:h-[26rem] -bottom-20 -right-20', opacity: 0.08, rotate: -6, y: kingY },
        { piece: 'knight', className: 'w-28 h-28 md:w-44 md:h-44 top-20 -left-10', opacity: 0.07, rotate: 10, y: knightY },
        { piece: 'pawn', className: 'w-16 h-16 md:w-24 md:h-24 bottom-28 left-[10%]', opacity: 0.09, rotate: -8, y: pawnY },
        { piece: 'bishop', className: 'w-20 h-20 md:w-32 md:h-32 top-28 right-[8%]', opacity: 0.06, rotate: 8, y: bishopY },
    ]

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative min-h-screen flex items-center overflow-hidden bg-background"
            style={{
                backgroundImage: `
                    radial-gradient(circle at 50% 35%, rgba(195,237,91,0.12), transparent 60%),
                    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '100% 100%, 10vw 10vw, 10vw 10vw',
            }}
        >
            {/* Tasteful chess accents — visual only, decorative, drift on scroll */}
            {pieces.map(({ piece, className, opacity, rotate, y }) => (
                <motion.div
                    key={piece}
                    aria-hidden="true"
                    className={`pointer-events-none absolute ${className}`}
                    style={{ opacity, rotate, y }}
                >
                    <Image src={`/chess/${piece}.png`} alt="" fill className="object-contain" />
                </motion.div>
            ))}

            <Container className="relative z-10 flex flex-col items-center pt-28 pb-20 text-center">
                <motion.span
                    {...riseIn(0)}
                    className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs md:text-sm text-accent mb-6"
                >
                    {t('eyebrow')}
                </motion.span>

                <h1 className="font-bold mb-5 max-w-4xl flex flex-wrap justify-center gap-2 text-foreground">
                    <motion.span {...riseIn(0.1)} className="inline-block">
                        {t('headline')}
                    </motion.span>
                    <motion.span {...riseIn(0.2)} className="inline-block text-accent">
                        {t('headlineAccent')}
                    </motion.span>
                </h1>

                <motion.p {...riseIn(0.3)} className="max-w-xl text-white/70 mb-8">
                    {t('subheadline')}
                </motion.p>

                <motion.div {...riseIn(0.4)} className="flex flex-wrap gap-4 justify-center">
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 font-medium text-sm md:text-base rounded-2xl transition bg-accent text-background hover:bg-accent/80"
                    >
                        {t('cta1')}
                    </Link>
                    <Link
                        href="#portfolio"
                        className="px-6 py-2.5 font-medium text-sm md:text-base rounded-2xl transition border border-accent text-accent hover:bg-accent hover:text-background"
                    >
                        {t('cta2')}
                    </Link>
                </motion.div>

                <motion.p {...riseIn(0.55)} className="mt-10 text-xs md:text-sm uppercase tracking-wider text-white/40">
                    {t('credibility')}
                </motion.p>
            </Container>

            <motion.div
                className="absolute bottom-6 inset-x-0 z-10 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <Link
                    href="#services"
                    aria-label={t('scrollHint')}
                    className="flex items-center justify-center text-white/40 hover:text-accent transition rounded-full p-2"
                >
                    <motion.span
                        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ChevronDown size={22} aria-hidden="true" />
                    </motion.span>
                </Link>
            </motion.div>
        </section>
    )
}
