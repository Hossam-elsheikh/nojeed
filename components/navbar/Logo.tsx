import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/logo.svg'
function Logo() {
    return (
        <div className='w-20   md:w-40 '>
            <Image src={logo} alt="logo" width={120} height={120}  />
        </div>
    )
}

export default Logo
