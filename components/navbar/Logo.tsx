import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
function Logo() {
    return (
        <div>
            <Image src={logo} alt="logo" width={120} height={120} />
        </div>
    )
}

export default Logo
