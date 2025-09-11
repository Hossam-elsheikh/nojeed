import React from 'react'
import * as motion from 'motion/react-client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

function NewHero() {
    const t = useTranslations('hero')

    return (
        <section
            className="bg-main-bg bg-center bg-repeat bg-[length:25vw_25vw] h-[89vh] md:h-[100vh] z-10 relative"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '10vw 10vw',
            }}
        >
            <div className="relative z-50 flex flex-col items-center py-35 px-2 md:py-55 min-h-screen text-center text-white">
                <h1 className=" font-bold mb-4 gap-3 flex flex-wrap justify-center ">
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: 20,
                            filter: 'blur(4px)',
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: 'easeOut',
                        }}
                        className={`inline-block`}
                    >
                        {t('headline')}
                    </motion.span>
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: 20,
                            filter: 'blur(4px)',
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: 'easeOut',
                        }}
                        className={`inline-block text-main`}
                    >
                        {t('subh')}
                    </motion.span>
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: 20,
                            filter: 'blur(4px)',
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                        className={`inline-block text-main`}
                    >
                        {t('subh2')}
                    </motion.span>
                </h1>

                <motion.p
                    className="max-w-xl text-gray-300 mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: {} }}
                >
                    {t('subheadline')
                        .split(' ')
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    filter: 'blur(4px)',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 + index * 0.05 + 0.3,
                                    ease: 'easeOut',
                                }}
                                className="inline-block mr-1"
                            >
                                {word}
                            </motion.span>
                        ))}
                </motion.p>

                <div className="flex gap-4 z-50">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5 + 1 * 0.2,
                            duration: 0.5,
                            ease: 'easeOut',
                        }}
                        className={`md:px-6 md:py-2 py-1 px-3 font-medium text-sm md:text-base rounded-2xl transition 
                                bg-main text-[#0d141c] hover:bg-main/80
                       `}
                    >
                        <Link href="https://wa.me/201286623451?text=can%20i%20talk%20to%20someone%20please" target='_blank'>{t('cta1')}</Link>
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5 + 1 * 0.2,
                            duration: 0.5,
                            ease: 'easeOut',
                        }}
                        className={`md:px-6 md:py-2 py-1 px-3 font-medium text-sm md:text-base rounded-2xl transition 
                                    
                                border border-main text-main hover:bg-main hover:text-[#0d141c]
                            `}
                    >
                        <Link href="#portfolio">{t('cta2')}</Link>
                    </motion.button>
                </div>
            </div>
            <motion.div
                className="absolute bottom-0 left-0 -z-50 w-full overflow-hidden h-[80vh]  bg-cover bg-center"
                style={{ backgroundImage: "url('/Ellipse-9.svg')" }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            ></motion.div>
        </section>
    )
}

export default NewHero
