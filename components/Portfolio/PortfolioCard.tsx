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
        <div>
            <div className="relative w-[411px] h-[366px] overflow-hidden rounded-2xl">
                <Image
                    src={`/images/portfolio/${imgSrc}`}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="my-8 text-blue-gray">
                <h3 className="text-2xl font-bold ">{title} </h3>
                <p className="text-[1.19rem] mt-4 line-clamp-3 pe-4">{description}</p>
            </div>
            <button className="text-[17px] leading-[20px] px-[1.9rem] py-[.875rem] bg-primary-green rounded-2xl flex items-center gap-2.5 font-medium hover:bg-primary-green-hover duration-200 cursor-pointer ease-in-out hover:text-blue-gray-hover">
                {'Live Preview'} <LuEye size={24} />
            </button>
        </div>
    )
}

export default PortfolioCard
