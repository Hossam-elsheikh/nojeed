import React from 'react'

interface WhatWeDoProps {
    HeadText?: string
    SubText?: string
    subClasses?:string
    center?:boolean
}

const SectionTag: React.FC<WhatWeDoProps> = ({
    HeadText,
    SubText,
    subClasses,
    center
}) => {
    return (
        <section className={`flex flex-col ${center && "items-center justify-center text-center"} w-full gap-4`}>
            {HeadText && (
                <p className="bg-sub-bg rounded-2xl px-4 py-3 w-fit ">{HeadText}</p>
            )}
            {SubText && (
                <h2 className={`text-main-bg font-semibold ${subClasses}`}>
                    {SubText}
                </h2>
            )}
        </section>
    )
}

export default SectionTag
