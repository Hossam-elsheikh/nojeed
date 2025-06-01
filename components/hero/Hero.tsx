'use client'
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import React from 'react'
import { Button } from '../ui/button'
import SvgIcon from './HeroSvg'
import AnimatedButton from "../AnimatedButton/AnimatedButton"
const Hero = () => {
    const t = useTranslations('hero')
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between py-10  lg:py-5 gap-10 lg:gap-15'>
                <div className='w-full lg:w-1/2 flex items-center lg:items-start flex-col gap-10 text-center lg:text-start'>

                    <motion.h1
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} className='font-bold text-[clamp(3rem,4vw,6rem)] leading-none'>
                        {t('headline')}
                    </motion.h1>
                    <motion.p
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }} className='text-xl font-light'>

                        {t('subheadline')}
                    </motion.p>

                </div>

                <SvgIcon />

            </div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }} className='flex flex-col justify-around lg:flex-row gap-2 items-center py-4 lg:items-start'>
                {/* <Button className='w-fit px-5 py-4 text-xl '>{t('cta2')}</Button>
             */}
                <AnimatedButton text={t('cta2')} rightArrow />
                <AnimatedButton text={t('cta3')}  />
            </motion.div>
        </>
    )
}

export default Hero