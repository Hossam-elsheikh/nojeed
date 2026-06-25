import { Hero } from '@/sections/home/Hero'
import { Board } from '@/sections/home/Board'
import { WhyUs } from '@/sections/home/WhyUs'
import { Reviews } from '@/sections/home/Reviews'
import { ContactCta } from '@/sections/home/ContactCta'

export default function Home() {
    return (
        <>
            <Hero />
            <Board />
            <WhyUs />
            <Reviews />
            <ContactCta />
        </>
    )
}
