'use client'

import Image from 'next/image'
import React from 'react'
import { servicesArray } from './services'
import { motion } from 'framer-motion'

function ServicesGrid() {
    return (
        <div className="w-full">
            {servicesArray.map((category, index) => {
                const isEven = index % 2 === 0

                return (
                    <div
                        key={category.id}
                        className={`min-h-screen flex flex-col lg:flex-row gap-5 ${
                            category.id === 2 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className={`flex items-center justify-center w-full lg:w-1/2  ${
                                category.id === 1
                                    ? 'lg:translate-x-[-180px]'
                                    : ''
                            }`}
                        >
                            <Image
                                src={category.image}
                                alt={category.alt}
                                width={600}
                                height={400}
                                className="object-contain w-full h-auto max-h-[600px]"
                                priority
                            />
                        </motion.div>

                        <div className="px-6 py-12 flex items-center justify-center w-full lg:w-1/2">
                            <div className="w-full max-w-5xl">
                                <div className="grid grid-cols-1 gap-6">
                                    {category.children.map(
                                        (service, sIndex) => (
                                            <motion.div
                                                key={service.id}
                                                className="flex flex-col items-start text-left gap-2"
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
                                                        className="size-8"
                                                    />
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-800">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {service.description}
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
