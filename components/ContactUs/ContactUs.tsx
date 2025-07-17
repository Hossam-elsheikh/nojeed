import React from 'react'
import MainButton from '../ui/MainButton'

const ContactUs = () => {
    return (
        <section
            className="2xl:py-[5.56rem] py-[1.375rem] bg-no-repeat flex flex-col items-center text-white text-center 2ءم:rounded-4xl rounded-2xl  px-8"
            style={{
                backgroundImage: `url('/images/contact-us/contact-us.png')`,
                backgroundSize: 'cover',
            }}
        >
            <h2 className="font-bold mb-4">
                Let’s Bring Your Software to Life
            </h2>
            <p className="max-w-xl mx-auto 2xl:text-2xl text-[.81rem] text-white/90 2xl:mb-16 mb-4">
                Talk to us about your next project, and let’s make it real.
            </p>
            <MainButton btnText="Get in Touch" className="w-[12.0625rem]" />
        </section>
    )
}

export default ContactUs
