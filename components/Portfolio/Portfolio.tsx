'use client'

import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import PortfolioCard from './PortfolioCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
const projects = [
    {
        title: 'Reservation Hotel System',
        description: 'A user-friendly hotel booking system...',
        imgSrc: 'portfolio-image.png',
    },
    {
        title: 'Reservation Hotel System',
        description: 'A user-friendly hotel booking system...',
        imgSrc: 'portfolio-image.png',
    },
    {
        title: 'Estudee Dashboard',
        description: 'An interactive dashboard for tracking tasks...',
        imgSrc: 'portfolio-image.png',
    },
    {
        title: 'Invoice Manager',
        description: 'A simple invoice management tool...',
        imgSrc: 'portfolio-image.png',
    },
    {
        title: 'Estudee Dashboard',
        description: 'An interactive dashboard for tracking tasks...',
        imgSrc: 'portfolio-image.png',
    },

    // Add more projects here
]

const Portfolio = () => {
    return (
        <section className="pt-20 pb-[6rem] tracking-wide">
            <SectionHeader
                title="Portfolio"
                subTitle="From SaaS platforms to business automation tools"
                additionalClassesSubTitle=""
            />
            <div className="flex justify-between mt-[5.25rem] !gap-7">
                <Swiper
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    initialSlide={1}
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
                </Swiper>{' '}
            </div>
        </section>
    )
}

export default Portfolio
