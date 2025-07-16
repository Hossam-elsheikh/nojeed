'use client'

import React, { useEffect, useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

const testimonials = [
    {
        text: `Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.`,
        name: 'ROBERT DOE',
        image: '/images/testimonials/person.png',
        rating: 4.5,
    },
    {
        text: `Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.`,
        name: 'ROBERT DOE',
        image: '/images/testimonials/person.png',
        rating: 4.5,
    },
    {
        text: `Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.`,
        name: 'ROBERT DOE',
        image: '/images/testimonials/person.png',
        rating: 4.5,
    },
    {
        text: `Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.`,
        name: 'ROBERT DOE',
        image: '/images/testimonials/person.png',
        rating: 4.5,
    },
]

const Testimonials = () => {
    const [isMobile, setIsMobile] = useState(false)

    // Check screen width
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <div className="2xl:py-28 py-16">
            <SectionHeader
                title="Testimonials"
                subTitle="What Our Clients Say about working with us"
                additionalClassesSubTitle="leading-[1.35]"
            />
            <div className="2xl:mt-[3.25rem] mt-8">
                {isMobile && testimonials.length < 4 ? (
                    <div className="flex flex-col 2xl:gap-1 gap-8">
                        {testimonials.map((item, index) => (
                            <TestimonialCard key={index} {...item} />
                        ))}
                    </div>
                ) : (
                    <Swiper
                        slidesPerView={isMobile ? 1.3 : 3}
                        centeredSlides={isMobile && true}
                        spaceBetween={30}
                        initialSlide={1}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper shrink-0"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                {' '}
                                <TestimonialCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    )
}

export default Testimonials
