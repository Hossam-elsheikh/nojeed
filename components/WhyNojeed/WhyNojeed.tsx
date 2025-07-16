'use client'

import React from 'react'
import { Check } from 'lucide-react'
import { whyNojeedPoints } from './whyNojeedPoints'
import GridCards from './GridCards'

function WhyNojeed() {
    return (
        <div className="bg-main-bg flex flex-col-reverse py-20 w-full  lg:flex-row gap-5 px-4 ">
            <div className="md:w-1/2 w-full">
                <GridCards />
            </div>
            <div>
                <div className="mb-6 text-left ">
                    <p className="bg-sub-bg rounded-2xl w-fit px-2 py-3">
                        Why Nojeed?
                    </p>
                   
                    <h2 className="font-bold mt-4 text-white">
                        We don’t just code, we create solutions that work.
                    </h2>
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
    )
}

export default WhyNojeed
