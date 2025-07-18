'use client'

import React, { useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import SectionTag from '../whatWeDo/WhatWeDo'
const projects = [
    {
        title: 'Reservation Hotel System',
        description:
            'A user-friendly hotel booking system that enables seamless reservation management and a smooth customer experience.',
        imgSrc: 'portfolio-image.png',
    },
    {
        title: 'Reservation Hotel System',
        description:
            'A user-friendly hotel booking system that enables seamless reservation management and a smooth customer experience.',
        imgSrc: 'portfolio-image.png',
    },
    {
        title: 'Reservation Hotel System',
        description:
            'A user-friendly hotel booking system that enables seamless reservation management and a smooth customer experience.',
        imgSrc: 'portfolio-image.png',
    },
    // Add more projects here
]

const Portfolio = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 992)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="2xl:pt-28 pt-14 pb-[6rem] tracking-wide">
        
            <SectionTag
                HeadText="Portfolio"
                SubText="From SaaS platforms to business automation tools"
                center
            />

            <div className="2xl:mt-[5.25rem] mt-[32px]">
                {isMobile && projects.length < 4 ? (
                    <div className="flex flex-col 2xl:gap-6 gap-12">
                        {projects.map((project, index) => (
                            <PortfolioCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgSrc={project.imgSrc}
                            />
                        ))}
                    </div>
                ) : (
                    <Swiper
                        slidesPerView={isMobile ? 1.3 : 3}
                        centeredSlides={isMobile && true}
                        spaceBetween={30}
                        initialSlide={isMobile ? 0 : 1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <PortfolioCard
                                    title={project.title}
                                    description={project.description}
                                    imgSrc={project.imgSrc}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    )
}

export default Portfolio
