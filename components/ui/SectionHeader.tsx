import React from 'react'

interface SectionHeaderProps {
    title: string
    subTitle: string
    additionalClassesTitle?: string
    additionalClassesSubTitle?: string
}

const SectionHeader = ({
    title,
    subTitle,
    additionalClassesTitle,
    additionalClassesSubTitle,
}: SectionHeaderProps) => {
    return (
        <section className="flex justify-center flex-col items-center 2xl:gap-4 gap-3">
            <h2
                className={`2xl:text-2xl text-[15px] bg-secondary-green 2xl:px-4 2xl:py-2 px-[30.5] py-1.5 rounded-xl 2xl:rounded-2xl font-medium ${additionalClassesTitle}`}
            >
                {title}
            </h2>
            <p className={`font-bold 2xl:text-[37px] text-[19px] text-center ${additionalClassesSubTitle}`}>
                {subTitle}
            </p>
        </section>
    )
}

export default SectionHeader
