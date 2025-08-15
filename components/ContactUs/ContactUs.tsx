import React from 'react'
import MainButton from '../ui/MainButton'
import { useTranslations } from 'next-intl'

const ContactUs = () => {
    const t = useTranslations('finalBanner')
    return (
        <section
            className="2xl:py-[5.56rem] py-[1.375rem] bg-no-repeat flex flex-col items-center text-white text-center 2ءم:rounded-4xl rounded-2xl  px-8"
            style={{
                backgroundImage: `url('/images/contact-us/contact-us.png')`,
                backgroundSize: 'cover',
            }}
        >
            <h2 className="font-bold mb-4">{t('headline')}</h2>
            <p className="max-w-xl mx-auto 2xl:text-2xl text-[.81rem] text-white/90 2xl:mb-16 mb-4">
                {t('subheadline')}
            </p>
            <MainButton href="https://wa.me/201286623451?text=can%20i%20talk%20to%20someone%20please" btnText={t('cta1')} className="w-[12.0625rem]" />
        </section>
    )
}

export default ContactUs
