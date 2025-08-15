import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { useTranslations } from 'next-intl'
import MainButton from '../ui/MainButton'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'

function NewNavbar() {
    const t = useTranslations('navbar')
    return (
        <section className="flex flex-row justify-between items-center">
            <Logo />
            <NavLinks />
            <div className=' items-center gap-2 hidden xs:flex'>

            <MainButton btnText={t('cta')} className="text-xs md:text-sm" href='https://wa.me/201286623451?text=can%20i%20talk%20to%20someone%20please'/>
            <div className='block md:hidden'>
                <LanguageSwitcher />
            </div>
            </div>
        </section>
    )
}

export default NewNavbar
