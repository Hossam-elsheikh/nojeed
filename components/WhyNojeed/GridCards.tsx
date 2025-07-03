'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { svgIcons } from './gridSvg'
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxIcon({ src, index }: { src: string; index: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.8', 'end 0.2'], // Only triggers when more visibly in view
    })

    const direction = index % 2 === 0 ? -1 : 1
    const y = useTransform(scrollYProgress, [0, 1], [direction * 90, 0]) // starts higher/lower, settles at 0

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="w-full h-full flex items-center justify-center overflow-hidden"
        >
            <Image
                src={src}
                alt={`icon-${index}`}
                width={264}
                height={264}
                className="object-contain"
            />
        </motion.div>
    )
}

function GridCards() {
    return (
        <div className="grid grid-cols-2 grid-rows-3 max-w-3xl mx-auto overflow-hidden p-6 gap-6">
            {svgIcons.slice(0, 6).map((icon, index) => (
                <ParallaxIcon key={index} src={icon} index={index} />
            ))}
        </div>
    )
}

export default GridCards
