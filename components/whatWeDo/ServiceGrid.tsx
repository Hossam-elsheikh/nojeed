'use client'

import Image from 'next/image'
import React from 'react'
import { servicesArray } from './services'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

function ServicesGrid() {
    const t = useTranslations('services')
    const text = useTranslations('textDirection')
    return (
        <div className="w-full flex flex-col gap-0  md:gap-15 pt-10">
            {servicesArray.map((category, index) => {
                const isEven = index % 2 === 0

                return (
                    <div
                        key={category.id}
                        className={` flex flex-col lg:flex-row justify-between gap-10 ${
                            category.id === 1 ? 'lg:flex-row-reverse ' : ''
                        }`}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className={`flex justify-center gap-10 relative  ${
                                category.id === 1
                                    ? ''
                                    : ''
                            }`}
                        >
                            <Image
                                src={category.image}
                                alt={category.alt}
                                width={450}
                                height={450}
                                className={` ${
                                    index === 1
                                        ? 'hidden md:block'
                                        : ''
                                }`}
                                priority
                            />
                        </motion.div>

                        <div className={` py-12 flex  justify-center w-full lg:w-1/2 ${index ===1 ? 'pt-0':'pb-5'}`}>
                            <div className="w-full max-w-5xl">
                                <div className="grid grid-cols-1 gap-6">
                                    {category.children.map(
                                        (service, sIndex) => (
                                            <motion.div
                                                key={service.id}
                                                className={`flex flex-col px-6 items-start ${text} gap-2`}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: sIndex * 0.15,
                                                }}
                                            >
                                                <div className="bg-sub-bg px-1.5 py-1 flex items-center justify-center rounded-xl">
                                                    <Image
                                                        src={service.icon}
                                                        alt={`${service.title} icon`}
                                                        className="size-8 md:size-10"
                                                    />
                                                </div>
                                                <h3 className="text-md lg:text-2xl font-semibold text-gray-800">
                                                    {t(service.title)}
                                                </h3>
                                                <p className="text-gray-600 text-md lg:text-md leading-relaxed">
                                                    {t(service.description)}
                                                </p>
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ServicesGrid
