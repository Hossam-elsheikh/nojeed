'use client'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { easeInOut, motion } from 'motion/react'

function AnimatedButton({
    rightArrow,
    text,
    nav,
}: {
    rightArrow?: boolean
    text: string
    nav?: boolean
}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-fit  relative flex items-center border border-main justify-between  gap-2 rounded-2xl  overflow-clip cursor-pointer ${
                nav ? 'lg:py-1 lg:px-7 px-4' : 'py-1 px-10'
            } `}
        >
            <motion.div
                animate={{
                    scale: isHovered ? 70 : 1,
                    background: isHovered ? 'text-main' : '#c3ed5b',
                }}
                transition={{ duration: 0.4, ease: easeInOut }}
                className="w-2 h-2  rounded-full absolute left-5"
            />
            {text && (
                <motion.p
                    animate={{
                        x: isHovered
                            ? rightArrow
                                ? -16
                                : -8
                            : rightArrow
                            ? 8
                            : 4,
                        color: isHovered ? '#000000' : '#C3ED5B',
                    }}
                    className="font-medium md:text-sm text-xs z-10"
                >
                    {text}
                </motion.p>
            )}
            {rightArrow && (
                <motion.div
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : 25,
                    }}
                    className="absolute right-7 place-items-center"
                >
                    <ArrowRight className="w-6 h-6 stroke-2 text-white" />
                </motion.div>
            )}
        </motion.div>
    )
}

export default AnimatedButton
