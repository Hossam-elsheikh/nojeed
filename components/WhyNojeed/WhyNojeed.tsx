'use client'
import React from 'react'
import { Check } from 'lucide-react'
import { whyNojeedPoints } from './whyNojeedPoints'
import { Parallex } from './Parallex'
import SectionTag from '../ui/MainHeading'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

function WhyNojeed() {
    const t = useTranslations('advantage')
    const text = useTranslations('textDirection')
    return (
        <div id='whyus' className="bg-main-bg  w-full ">
            <div className="bg-main-bg flex flex-col-reverse py-20 w-[90%] lg:flex-row gap-15 px-4 mx-auto">
                <div className=" w-full lg:w-1/2">
                    <Parallex />
                </div>
                <div>
                    <div className={`mb-6 ${text} `}>
                        <SectionTag
                            HeadText={t('title')}
                            SubText={t('header')}
                            subClasses="text-sub-bg"
                        />
                    </div>

                    <div className="space-y-6 *:text-white">
                        {whyNojeedPoints.map((point, index) => (
                            <div key={index} className="flex items-start relative gap-3">
                                <Check className="text-main mt-5" size={25} />
                                <div>
                                    <h3 className="font-semibold ">
                                        {t(point.title)}
                                    </h3>
                                    <p className="">{t(point.description)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="https://wa.me/201286623451?text=can%20i%20talk%20to%20someone%20please"
                            target="_blank"
                        >
                            <button className="bg-main text-black px-6 py-2 rounded-md font-medium cursor-pointer hover:bg-main/80 transition">
                                {t('cta')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyNojeed
