import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col '>
      <Hero/>
      <Services />
    </div>
  )
}

export default page