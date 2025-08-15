import Link from 'next/link'

interface MainButtonProps {
    btnText: string
    href?: string
    className?: string
}

const MainButton = ({
    btnText,
    href = '#',
    className = '',
}: MainButtonProps) => {
    return (
        <Link
            href={href}
            target='_blank'
            className={`bg-primary-green rounded-2xl px-4 py-2 text-blue-gray text-md flex items-center justify-center font-medium  text-center hover:bg-primary-green-hover hover:text-blue-gray-hover duration-150 ease-in-out ${className}`}
        >
            {btnText}
        </Link>
    )
}

export default MainButton
