import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { useTranslations } from 'next-intl'
import MainButton from '../ui/MainButton'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'

function NewNavbar() {
    const t = useTranslations('navbar')
    return (
        <section className="flex flex-row justify-between items-center bg-[#013531]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl transition-all duration-300 hover:bg-[#013531]/90">
            <Logo />
            <NavLinks />
            <div className=" items-center gap-2 hidden md:flex">
                <MainButton
                    btnText={t('cta')}
                    className="text-xs md:text-xs"
                    href="https://calendly.com/nojeed-eg/30min"
                />
                <MainButton
                    href="https://wa.me/201286623451?text=can%20i%20talk%20to%20someone%20please"
                    btnText={t('contact')}
                    className="border !py-1.75 !border-primary-green !text-primary-green text-xs md:text-xs hover:!bg-primary-green hover:!text-blue-gray !bg-transparent"
                />
            </div>
            <div className="block md:hidden">
                <LanguageSwitcher />
            </div>
        </section>
    )
}

export default NewNavbar
