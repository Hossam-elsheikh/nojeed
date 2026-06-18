'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const pieceSrc = {
    pawn: '/chess/pawn.png',
    knight: '/chess/knight.png',
    bishop: '/chess/bishop.png',
    rook: '/chess/rook.png',
    queen: '/chess/queen.png',
    king: '/chess/king.png',
} as const

interface ChessAccentProps {
    piece: keyof typeof pieceSrc
    /** Tailwind classes controlling size + position (e.g. "w-40 h-40 top-10 -right-10") */
    className?: string
    opacity?: number
    rotate?: number
    float?: boolean
    delay?: number
}

/**
 * Decorative, non-interactive chess piece watermark. Purely a visual accent —
 * keep opacity low so it never competes with real content.
 */
export function ChessAccent({
    piece,
    className,
    opacity = 0.08,
    rotate = 0,
    float = true,
    delay = 0,
}: ChessAccentProps) {
    const prefersReducedMotion = useReducedMotion()
    const shouldFloat = float && !prefersReducedMotion

    return (
        <motion.div
            aria-hidden="true"
            className={cn('pointer-events-none absolute', className)}
            style={{ opacity, rotate }}
            animate={shouldFloat ? { y: [0, -14, 0] } : undefined}
            transition={
                shouldFloat
                    ? { duration: 7, repeat: Infinity, ease: 'easeInOut', delay }
                    : undefined
            }
        >
            <Image src={pieceSrc[piece]} alt="" fill className="object-contain" />
        </motion.div>
    )
}
