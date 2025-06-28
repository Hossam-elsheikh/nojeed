import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import ServicesGrid from '@/components/services/ServicesGrid'
import Portfolio from '@/components/Portfolio/Portfolio'
import Testimonials from '@/components/Testimonials/Testimonials'

const page = () => {
    return (
        <div className="flex flex-col justify-center">
            {/* <Hero />
            <Services />
            <ServicesGrid /> */}
            <Portfolio />
            <Testimonials />
        </div>
    )
}

export default page
