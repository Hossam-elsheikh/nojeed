import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import ServicesGrid from '@/components/services/ServicesGrid'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="flex flex-col w-full lg:w-[90%] p-5 lg:p-10 mx-auto">
                <div className='flex flex-col '>
                    <Hero />
                </div>
                    <ServicesGrid />
            </div>
            <Services />
        </>
    )
}

export default page