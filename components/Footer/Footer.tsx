import React from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import { FaRegEnvelope } from 'react-icons/fa6'
import { BsTelephonePlusFill } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <section className="bg-blue-gray py-16 w-full flex justify-center">
            <div className="w-full lg:w-[90%] px-5 lg:px-10">
                <div className="flex justify-between items-center pb-7 border-b border-green-gray">
                    <Logo />
                    <ul className="text-white [&>a]:text-2xl [&>a:hover]:text-primary-green flex gap-[3.25rem]">
                        <Link href="#">Home</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Portfolio</Link>
                        <Link href="#">Contact us</Link>
                    </ul>
                </div>
                <div className="flex gap-60 border-b border-green-gray pt-10 pb-10 text-white !text-[17px]">
                    <div className='flex-1'>
                        <h4 className="text-[19px] mb-4">Follow Us:</h4>
                        <ul className="text-primary-green flex gap-3 p-0.5 [&>li:hover]:text-primary-green-hover duration-200 ease-in-out transition-all">
                            <li>
                                <Link href={'#'}>
                                    <FaInstagram size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'}>
                                    <FaTiktok size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'}>
                                    <FaLinkedin size={18} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <h4 className="text-[19px] mb-6">Find Us:</h4>
                        <p className="">(233748481) (Giza)</p>
                    </div>
                    <div className='flex-1'>
                        <h4 className="text-[19px]">Contact us:</h4>
                        <ul className="pt-6 text-white space-y-2">
                            <li>
                                <Link
                                    href="mailto:info@utdsoftware.com"
                                    className="flex gap-2 items-center group"
                                >
                                    <span className="text-primary-green group-hover:text-primary-green-hover transition-colors duration-200">
                                        <FaRegEnvelope size={17} />
                                    </span>
                                    info@utdsoftware.com
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
                                    (270) 0000-000000
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 flex justify-between text-white text-[17px]">
                    <ul className="flex text-white gap-6 text-[17px] underline ">
                        <li>
                            <Link href={'#'}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Terms of Service</Link>
                        </li>
                    </ul>
                    <p>
                        &copy;{new Date().getFullYear()}, All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer
