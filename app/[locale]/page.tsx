import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { Process } from '@/sections/Process'
import { WhyUs } from '@/sections/WhyUs'
import { Portfolio } from '@/sections/Portfolio'
// import { Testimonials } from '@/sections/Testimonials'
import { FinalCta } from '@/sections/FinalCta'

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Process />
            <WhyUs />
            <Portfolio />
            {/* Testimonials hidden for now until real client quotes are ready */}
            {/* <Testimonials /> */}
            <FinalCta />
        </>
    )
}
