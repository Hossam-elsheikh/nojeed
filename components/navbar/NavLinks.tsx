import Link from 'next/link'
import React from 'react'

function NavLinks() {
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact us']

    return (
        <div className="bg-white/20 py-1 px-4 rounded-2xl lg:flex space-x-4 text-white font-medium hidden ">
            {links.map((link, index) => (
                <Link
                    key={link}
                    href="#"
                    className={`px-4 py-2 rounded-xl transition-colors duration-300 ${
                        index === 0
                            ? 'bg-[#0d141c] text-main'
                            : 'hover:bg-[#0d141c] hover:text-main'
                    }`}
                >
                    {link}
                </Link>
            ))}
        </div>
    )
}

export default NavLinks
