import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import ServicesGrid from '@/components/services/ServicesGrid'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col '>
      <Hero/>
          <Services />
          <ServicesGrid/>
    </div>
  )
}

export default page