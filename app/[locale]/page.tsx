import ServicesGrid from '@/components/ServiceGrid'
import WhatWeDo from '@/components/whatWeDo/WhatWeDo'
import WhyNojeed from '@/components/WhyNojeed/WhyNojeed'

import React from 'react'

const page = () => {
    return (
        <>
            <div className="flex flex-col py-20">
                <WhatWeDo
                    HeadText="What We Do ?"
                    SubText=" Build smarter, Launch faster, Scale confidently."
                />
                <ServicesGrid />
            </div>
            
        </>
    )
}

export default page
