import React from 'react'

interface WhatWeDoProps {
    HeadText?: string
    SubText?: string
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ HeadText, SubText }) => {
    return (
        <section className="flex flex-col items-center justify-center text-center w-full gap-4">
            {HeadText && (
                <p className="bg-sub-bg rounded-2xl px-4 py-3 ">
                    {HeadText}
                </p>
            )}
            {SubText && (
                <h2 className="text-main-bg font-semibold">{SubText}</h2>
            )}
        </section>
    )
}

export default WhatWeDo
