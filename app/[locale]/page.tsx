import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import ServicesGrid from '@/components/services/ServicesGrid'
import Portfolio from '@/components/Portfolio/Portfolio'
import Testimonials from '@/components/Testimonials/Testimonials'
import ContactUs from '@/components/ContactUs/ContactUs'

const page = () => {
    return (
        <div className="flex flex-col justify-center gap-16">
            {/* <Hero />
            <Services />
            <ServicesGrid /> */}
            <Portfolio />
            <ContactUs />
            <Testimonials />
        </div>
    )
}

export default page
