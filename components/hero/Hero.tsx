'use client'
import {motion} from "framer-motion"
import { useTranslations } from 'next-intl'
import React from 'react'
import { Button } from '../ui/button'
import SvgIcon from './HeroSvg'
const Hero = () => {
    const t = useTranslations('hero')
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between py-10 lg:py-20 gap-5 lg:gap-15'>
      <div className='w-full lg:w-1/2 flex flex-col gap-10'>

        <motion.h1 initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: .2, duration: .3 }}  className='font-bold text-[clamp(3rem,4vw,6rem)] leading-none'>
          {t('headline')}
        </motion.h1>
        <motion.p initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: .4, duration: .3 }}  className='text-xl font-light'>

          {t('subheadline')}
        </motion.p>
        <motion.div initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: .3 }}  className='flex flex-col lg:flex-row gap-2'>
          <Button className='w-fit px-5 py-4 text-xl '>{t('cta2')}</Button>
          <Button className='w-fit px-5 py-4 text-xl '>{t('cta3')}</Button>
        </motion.div>
      </div>
      <SvgIcon />
      {/* <div className='flex  w-full'>
        <Image src={HeroImage} alt='hero' className='w-full'/>
      </div> */}
    </div>
  )
}

export default Hero