import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import TestimonialCard from './TestimonialCard'
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
]

const Testimonials = () => {
    return (
        <div className="py-8 mb-20">
            <SectionHeader
                title="Testimonials"
                subTitle="What Our Clients Say about working with us"
                additionalClassesSubTitle="leading-[1.35]"
            />
            <div className="flex gap-6 mt-[3.25rem]">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Testimonials
