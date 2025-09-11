import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuEye } from 'react-icons/lu'
interface PortfolioCardProps {
    title: string
    description: string
    imgSrc: string
    href:string
}

const PortfolioCard = ({ title, description, imgSrc,href }: PortfolioCardProps) => {
    const t = useTranslations('portfolio')
    return (
        <div className="flex-1" dir='ltr'>
            <div className="relative w-full h-[336] overflow-hidden rounded-2xl">
                <Image
                    src={`/images/last/${imgSrc}`}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="2xl:my-8 my-4 text-blue-gray">
                <h3 className="2xl:text-2xl text-[19px] font-bold ">
                    {title}{' '}
                </h3>
                <p className="2xl:text-[1rem] text-base mt-4 line-clamp-3 ">
                    {description}
                </p>
            </div>
            <button className="2xl:text-[17px] leading-[20px] 2xl:px-[1.9rem] 2xl:py-[.875rem] bg-primary-green rounded-2xl flex items-center gap-2.5 font-medium hover:bg-primary-green-hover duration-200 cursor-pointer ease-in-out hover:text-blue-gray-hover text-[13px] px-[21.5px] py-[10.5px]">
            <Link href={href} target='_blank' className='flex items-center gap-2'>
                {t('preview')} <LuEye className="w-4 h-4 sm:w-6 sm:h-6" />
            </Link>
            </button>
        </div>
    )
}

export default PortfolioCard
