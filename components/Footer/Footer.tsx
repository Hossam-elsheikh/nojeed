import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaRegEnvelope } from 'react-icons/fa6'
import { BsTelephonePlusFill } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import Logo from '../navbar/Logo'
import NavLinks from '../navbar/NavLinks'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('footer')
    return (
        <section className="bg-blue-gray py-16 w-full flex justify-center ">
            <div className="w-full lg:w-[90%] px-8 lg:px-10 ">
                <div className="flex 2xl:flex-row flex-col justify-between  items-center lg:items-start 2xl:items-center gap-2 pb-7 border-b border-green-gray">
                    <Logo />
                    <NavLinks />
                </div>
                <div className="flex 2xl:flex-row flex-col  2xl:gap-60 gap-12 border-b border-green-gray pt-10 pb-10 text-white text-center lg:text-start !text-[17px]">
                    <div className="flex-1">
                        <h4 className="text-[19px] mb-4">{t('follow')}</h4>
                        <ul className="text-primary-green flex gap-3 p-0.5 [&>li:hover]:text-primary-green-hover duration-200 justify-center lg:justify-start ease-in-out transition-all">
                            <li>
                                <Link href={'https://www.instagram.com/nojeed.eg'} target="_blank">
                                    <FaInstagram size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://www.tiktok.com/@nojeed'} target="_blank">
                                    <FaTiktok size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://www.linkedin.com/company/nojeed'} target="_blank">
                                    <FaLinkedin size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://www.facebook.com/people/Nojeed-Software-Solutions/61581438317200/'} target="_blank">
                                    <FaFacebook size={18} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-[19px] mb-6">{t('find')}</h4>
                        <p className="">(233748481) (Giza)</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-[19px]">{t('contact')}</h4>
                        <ul className="pt-6 text-white space-y-2 flex flex-col items-center lg:items-start">
                            <li>
                                <Link
                                    href="mailto:nojeed.eg@gmail.com"
                                    className="flex gap-2 items-center group"
                                >
                                    <span className="text-primary-green group-hover:text-primary-green-hover transition-colors duration-200">
                                        <FaRegEnvelope size={17} />
                                    </span>
                                    nojeed.eg@gmail.com
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="tel:270000000000"
                                    className="flex gap-2 items-center group"
                                >
                                    <span className="text-primary-green group-hover:text-primary-green-hover transition-colors duration-200">
                                        <BsTelephonePlusFill size={17} />
                                    </span>
                                    <span dir="ltr">(20) 12866-23451</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-between 2xl:flex-row flex-col gap-6 text-white text-[17px] leading-6">
                    <ul className="flex text-white gap-6 text-[17px] underline ">
                        <li>
                            <Link href={'#'}>{t('terms')}</Link>
                        </li>
                        <li>
                            <Link href={'#'}>{t('privacy')}</Link>
                        </li>
                    </ul>
                    <p>
                        &copy;{new Date().getFullYear()}, {t('rights')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer
