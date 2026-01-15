'use client'

import React, { useRef } from 'react'
import * as motion from 'motion/react-client'
import { useScroll, useTransform, useSpring } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Story Data
const storySteps = [
    {
        key: 'pawn',
        image: '/chess/pawn.png',
        color: 'from-blue-500 to-cyan-400',
        accent: 'text-cyan-400',
        fill: 'fill-cyan-400',
        bg: 'bg-cyan-400',
        rotate: -10,
        size: 'w-[120px] h-[120px] md:w-[180px] md:h-[180px]',
    },
    {
        key: 'knight',
        image: '/chess/knight.png',
        color: 'from-green-500 to-emerald-400',
        accent: 'text-emerald-400',
        fill: 'fill-emerald-400',
        bg: 'bg-emerald-400',
        rotate: 15,
        size: 'w-[140px] h-[140px] md:w-[220px] md:h-[220px]',
    },
    {
        key: 'rook',
        image: '/chess/rook.png',
        color: 'from-purple-500 to-indigo-400',
        accent: 'text-indigo-400',
        fill: 'fill-indigo-400',
        bg: 'bg-indigo-400',
        rotate: -10,
        size: 'w-[140px] h-[140px] md:w-[190px] md:h-[190px]',
    },
    {
        key: 'queen',
        image: '/chess/queen.png',
        color: 'from-pink-500 to-rose-400',
        accent: 'text-rose-400',
        fill: 'fill-rose-400',
        bg: 'bg-rose-400',
        rotate: 5,
        size: 'w-[160px] h-[160px] md:w-[260px] md:h-[260px]',
    },
    {
        key: 'king',
        image: '/chess/king.png',
        color: 'from-amber-400 to-yellow-300',
        accent: 'text-yellow-400',
        fill: 'fill-yellow-400',
        bg: 'bg-yellow-400',
        rotate: -5,
        size: 'w-[180px] h-[180px] md:w-[280px] md:h-[280px]',
    },
]

// Geometric Shape Components
const DotGrid = ({ className }: { className?: string }) => (
    <svg width="60" height="60" viewBox="0 0 60 60" className={className}>
        <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
        >
            <circle cx="2" cy="2" r="1.5" className="fill-current" />
        </pattern>
        <rect width="60" height="60" fill="url(#dot-pattern)" />
    </svg>
)

const Triangle = ({
    className,
    size = 30,
}: {
    className?: string
    size?: number
}) => (
    <svg width={size} height={size} viewBox="0 0 30 30" className={className}>
        <path d="M15 0 L30 30 L0 30 Z" className="fill-current" />
    </svg>
)

const CircleOutline = ({
    className,
    size = 40,
}: {
    className?: string
    size?: number
}) => (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
        <circle
            cx="20"
            cy="20"
            r="18"
            strokeWidth="3"
            fill="none"
            className="stroke-current"
        />
    </svg>
)

const Squiggle = ({ className }: { className?: string }) => (
    <svg width="50" height="15" viewBox="0 0 50 15" className={className}>
        <path
            d="M0 7.5 Q 6.25 0, 12.5 7.5 T 25 7.5 T 37.5 7.5 T 50 7.5"
            strokeWidth="3"
            fill="none"
            className="stroke-current"
        />
    </svg>
)

const Pill = ({ className }: { className?: string }) => (
    <div className={`w-12 h-4 rounded-full ${className}`} />
)

export default function ChessStoryHero() {
    const t = useTranslations('hero.story')
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    // Extended Theme Colors for Hero Section specifically
    const heroBg = '#013531'

    return (
        <section
            className="relative text-white"
            style={{ backgroundColor: heroBg }}
            ref={containerRef}
        >
            {/* STICKY CONTAINER */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center ">
                {/* BACKGROUND ELEMENTS */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(195,237,91,0.05)_0%,_transparent_60%)] opacity-100 blur-3xl" />
                </div>

                {/* SCROLL PROGRESS INDICATOR */}
                <motion.div
                    style={{ scaleX: smoothProgress }}
                    className="absolute top-0 left-0 w-full h-1 bg-[#c3ed5b] origin-left z-50"
                />

                {/* CONTENT SWAPPER */}
                <div className="relative z-10 w-full max-w-7xl px-6 h-full flex flex-col items-center justify-center">
                    {storySteps.map((step, index) => {
                        // Calculate range for this step
                        const stepSize = 1 / storySteps.length
                        const start = index * stepSize
                        const end = start + stepSize

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    opacity:
                                        index === 0
                                            ? useTransform(
                                                  smoothProgress,
                                                  [0, 0.2],
                                                  [1, 0]
                                              )
                                            : useTransform(
                                                  smoothProgress,
                                                  [
                                                      (index - 1) * 0.2,
                                                      index * 0.2,
                                                      (index + 1) * 0.2,
                                                  ],
                                                  [0, 1, 0]
                                              ),
                                    display: 'flex',
                                }}
                                className={`absolute inset-0 flex-col md:flex-row items-center justify-center md:justify-between w-full h-full pointer-events-none gap-2 md:gap-0`}
                            >
                                <div className="md:flex-1 flex flex-col justify-center items-start text-left max-w-xl p-4 md:p-8 z-20">
                                    <motion.span
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className={`text-[#c3ed5b] font-mono text-sm mb-4 tracking-wider uppercase`}
                                    >
                                        {`0${index + 1} / 05`}
                                    </motion.span>
                                    <motion.h2
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-sm font-cairo"
                                    >
                                        {t(`${step.key}.title`)}
                                    </motion.h2>
                                    <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md font-sans">
                                        {t(`${step.key}.description`)}
                                    </motion.p>
                                </div>

                                <div className="md:flex-1 flex items-center justify-center relative w-full h-[40vh] md:h-full">
                                    <motion.div
                                        className={`relative ${step.size}`}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                            rotate: step.rotate - 10,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            rotate: step.rotate,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 40,
                                        }}
                                    >
                                        {/* Abstract Geometric Background - "Live" Animations */}

                                        {/* 1. Large Circle Outline - Slowly Rotating */}
                                        <motion.div
                                            className={`absolute -top-10 -right-10 opacity-20 ${step.accent}`}
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                        >
                                            {/* <CircleOutline size={120} /> */}
                                            <Triangle size={40} />
                                        </motion.div>

                                        {/* 2. Floating Triangle - Top Left */}
                                        <motion.div
                                            className={`absolute -top-8 -left-12 opacity-30 ${step.fill}`}
                                            animate={{
                                                y: [0, -15, 0],
                                                rotate: [0, 10, 0],
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <Triangle size={40} />
                                        </motion.div>

                                        {/* 3. Dot Grid - Bottom Right (Static but patterned) */}
                                        <motion.div
                                            className={`absolute -bottom-16 -right-8 opacity-20 ${step.fill}`}
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: [0.8, 1, 0.8] }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <DotGrid />
                                        </motion.div>

                                        {/* 4. Squiggle - Bottom Left */}
                                        <motion.div
                                            className={`absolute bottom-0 -left-16 opacity-40 ${step.accent}`}
                                            animate={{ x: [0, 10, 0] }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <Squiggle />
                                        </motion.div>

                                        {/* 5. Solid Pill - Floating Top Right */}
                                        <motion.div
                                            className={`absolute top-0 -right-20 opacity-30 ${step.bg}`}
                                            animate={{ y: [0, 15, 0] }}
                                            transition={{
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                                delay: 1,
                                            }}
                                        >
                                            <Pill />
                                        </motion.div>

                                        {/* 6. Another Triangle - Far Left */}
                                        <motion.div
                                            className={`absolute top-1/2 -left-24 opacity-15 text-white`}
                                            animate={{ rotate: -360 }}
                                            transition={{
                                                duration: 25,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                        >
                                            <Triangle
                                                size={20}
                                                className="fill-white"
                                            />
                                        </motion.div>

                                        <Image
                                            src={step.image}
                                            alt={t(`${step.key}.title`)}
                                            fill
                                            className="object-contain z-10"
                                            style={{
                                                filter: 'drop-shadow(0 0 25px rgba(255,255,255,0.15)) drop-shadow(0 20px 40px rgba(0,0,0,0.7))',
                                            }}
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA at the bottom */}
                <div className="absolute bottom-10 left-0 w-full flex justify-center z-50 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex gap-4"
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-[#c3ed5b] text-[#013531] font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#c3ed5b]/20"
                        >
                            {t('finalCta')}
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* SPACER FOR SCROLLING */}
            <div className="h-[500vh]" />
        </section>
    )
}
