import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import AnimatedButton from '../AnimatedButton/AnimatedButton'

function NewNavbar() {
    return (
        <section className="flex flex-row justify-between">
            <Logo />
            <NavLinks />
            <AnimatedButton text="Get a free Consultation" nav />
        </section>
    )
}

export default NewNavbar
