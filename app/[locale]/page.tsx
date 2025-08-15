
'use client'
import ServicesGrid from '@/components/whatWeDo/ServiceGrid'
import SectionTag from '@/components/ui/MainHeading'

import React, { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col py-20 w-full md:px-4 md:w-3/4 mx-auto">
            {children}
        </div>
    )
}
const ServicesPage = () => {
    const t = useTranslations('services')

    return (
        <Container>
            <SectionTag
                center
                HeadText={t('title')}
                SubText={t('intro')}
                
            />
            <ServicesGrid />
        </Container>
    )
}

export default ServicesPage
