'use client'
import React from 'react'
import { Check } from 'lucide-react'
import { whyNojeedPoints } from './whyNojeedPoints'
import { Parallex } from './Parallex'
import SectionTag from '../whatWeDo/WhatWeDo'

function WhyNojeed() {
    return (
        <div className="bg-main-bg  w-full ">
            <div className="bg-main-bg flex flex-col-reverse py-20 w-[90%] lg:flex-row gap-15 px-4 mx-auto">
                <div className="md:w-1/2 w-full">
                    {/* <GridCards /> */}
                    <Parallex />
                </div>
                <div>
                    <div className="mb-6 text-left ">
                        <SectionTag
                            HeadText="Why Nojeed?"
                            SubText="We don’t just code, we create solutions that work."
                            subClasses="text-sub-bg"
                        />
                    </div>

                    <div className="space-y-6 *:text-white">
                        {whyNojeedPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="text-main mt-1" size={20} />
                                <div>
                                    <h3 className="font-semibold ">
                                        {point.title}
                                    </h3>
                                    <p className="">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <button className="bg-main text-black px-6 py-2 rounded-md font-medium hover:bg-main/80 transition">
                            Let’s build a great thing together
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyNojeed
