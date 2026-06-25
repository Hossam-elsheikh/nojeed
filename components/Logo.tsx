import Image from 'next/image'
import { Link } from '@/i18n/routing'
import logoNavy from '@/public/images/logo-navy.svg'
import logoWhite from '@/public/images/logo-white.svg'

export function Logo({ variant = 'navy' }: { variant?: 'navy' | 'white' }) {
    return (
        <Link href="/" className="block w-24 md:w-28" aria-label="Nojeed home">
            <Image src={variant === 'white' ? logoWhite : logoNavy} alt="Nojeed" priority />
        </Link>
    )
}
