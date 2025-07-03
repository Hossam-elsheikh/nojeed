import React from 'react'

function WhatWeDo({
    HeadText,
    SubText,
}: {
    HeadText?: string
    SubText?: string
}) {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-4">
            {HeadText && (
                <p className="bg-sub-bg rounded-2xl px-2 py-3">{HeadText}</p>
            )}
            {SubText && (
                <h1 className="text-4xl text-main-bg font-semibold">
                    {SubText}
                </h1>
            )}
        </section>
    )
}

export default WhatWeDo
