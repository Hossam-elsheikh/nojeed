import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    return (
        <div className='py-8 mb-20'>
            <SectionHeader
                title="Portfolio"
                subTitle="From SaaS platforms to business automation tools"
                additionalClassesSubTitle=""
            />
            <section className="flex gap-6 mt-[5.25rem]">
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
            </section>
        </div>
    )
}

export default Portfolio
