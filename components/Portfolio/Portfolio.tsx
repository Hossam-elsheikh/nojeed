import React from 'react'
import PortfolioCard from './PortfolioCard'
import WhatWeDo from '../whatWeDo/WhatWeDo'

const Portfolio = () => {
    return (
        <section className="py-20 mb-20 tracking-wide">
            <WhatWeDo
                HeadText="Portfolio"
                SubText="From SaaS platforms to business automation tools"
            />
         
            <div className="flex justify-between mt-[5.25rem] !gap-7">
                <PortfolioCard
                    title="Reservation Hotel System"
                    description="A user-friendly hotel booking system that enables seamless reservation management and a smooth customer experience."
                    imgSrc="portfolio-image.png"
                />
                <PortfolioCard
                    title="Estudee Dashboard"
                    description="An interactive dashboard for tracking tasks and projects with a modern and comfortable interface."
                    imgSrc="portfolio-image.png"
                />
                <PortfolioCard
                    title="Invoice Manager"
                    description="A simple invoice management tool that allows efficient creation and tracking of invoices."
                    imgSrc="portfolio-image.png"
                />
            </div>
        </section>
    )
}

export default Portfolio
