import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/logo.svg'
import Link from 'next/link'
function Logo() {
    return (
        <Link href='#' className='w-20   md:w-40 px-4'>
            <Image src={logo} alt="logo" width={100} height={100}  />
        </Link>
    )
}

export default Logo
