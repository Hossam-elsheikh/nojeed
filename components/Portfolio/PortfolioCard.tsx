import Image from 'next/image'
import React from 'react'
import { LuEye } from 'react-icons/lu'
interface PortfolioCardProps {
    title: string
    description: string
    imgSrc: string
}

const PortfolioCard = ({ title, description, imgSrc }: PortfolioCardProps) => {
    return (
        <div className="flex-1">
            <div className="relative 2xl:w-[411px] h-[336] overflow-hidden rounded-2xl">
                <Image
                    src={`/images/portfolio/${imgSrc}`}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="2xl:my-8 my-4 text-blue-gray">
                <h3 className="2xl:text-2xl text-[19px] font-bold ">
                    {title}{' '}
                </h3>
                <p className="2xl:text-[1.19rem] text-base mt-4 line-clamp-3 pe-4">
                    {description}
                </p>
            </div>
            <button className="2xl:text-[17px] leading-[20px] 2xl:px-[1.9rem] 2xl:py-[.875rem] bg-primary-green rounded-2xl flex items-center gap-2.5 font-medium hover:bg-primary-green-hover duration-200 cursor-pointer ease-in-out hover:text-blue-gray-hover text-[13px] px-[21.5px] py-[10.5px]">
                {'Live Preview'} <LuEye className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
        </div>
    )
}

export default PortfolioCard
