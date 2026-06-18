import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.svg'

export function Logo() {
    return (
        <Link href="#home" className="block w-20 md:w-32" aria-label="Nojeed home">
            <Image src={logo} alt="Nojeed" priority />
        </Link>
    )
}
