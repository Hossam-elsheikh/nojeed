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
        <section className="flex justify-center flex-col items-center gap-4 ">
            <h2
                className={`text-2xl bg-secondary-green px-4 py-2 rounded-2xl font-medium ${additionalClassesTitle}`}
            >
                {title}
            </h2>
            <p className={`font-bold text-[37px]  ${additionalClassesSubTitle}`}>
                {subTitle}
            </p>
        </section>
    )
}

export default SectionHeader
