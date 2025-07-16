import ServicesGrid from '@/components/ServiceGrid'
import WhatWeDo from '@/components/whatWeDo/WhatWeDo'

import React, { ReactNode } from 'react'
const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col py-20 w-full md:px-4 md:w-3/4 mx-auto">
            {children}
        </div>
    )
}
const page = () => {
    return (
        <Container>
            <WhatWeDo
                HeadText="What We Do ?"
                SubText=" Build smarter, Launch faster, Scale confidently."
            />
            <ServicesGrid />
        </Container>
    )
}

export default page
