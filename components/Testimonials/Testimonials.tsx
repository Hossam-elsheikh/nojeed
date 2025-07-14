'use client'

import React from 'react'
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
    {
        text: `Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.`,
        name: 'ROBERT DOE',
        image: '/images/testimonials/person.png',
        rating: 4.5,
    },
]

const Testimonials = () => {
    return (
        <div className="py-28">
            <SectionHeader
                title="Testimonials"
                subTitle="What Our Clients Say about working with us"
                additionalClassesSubTitle="leading-[1.35]"
            />
            <div className="mt-[3.25rem]">
                <Swiper
                    slidesPerView={3}
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
                            <TestimonialCard key={index} {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
