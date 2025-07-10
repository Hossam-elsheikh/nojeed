import React from 'react'
import MainButton from '../ui/MainButton'

const ContactUs = () => {
    return (
        <section
            className="py-[5.56rem] bg-no-repeat flex flex-col items-center text-white text-center rounded-4xl"
            style={{
                backgroundImage: `url('/images/contact-us/contact-us.png')`,
                backgroundSize: 'cover',
            }}
        >
            <h2 className="text-[2.875rem] font-bold mb-4">
                Let’s Bring Your Software to Life
            </h2>
            <p className="max-w-xl mx-auto text-lg text-white/90 mb-16">
                Talk to us about your next project, and let’s make it real.
            </p>
            <MainButton btnText="Get in Touch" className="w-[12.0625rem]" />
        </section>
    )
}

export default ContactUs
