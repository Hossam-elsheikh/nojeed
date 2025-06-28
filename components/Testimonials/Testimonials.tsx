import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import { div } from 'framer-motion/client'

const Testimonials = () => {
    return (
        <div className='py-8'>
            <SectionHeader
                title="Testimonials"
                subTitle="What Our Clients Say about working with us"
                additionalClassesSubTitle="leading-[1.35]"
            />
        </div>
    )
}

export default Testimonials
