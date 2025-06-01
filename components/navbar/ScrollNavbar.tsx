"use client";
import React, { ReactNode, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
function ScrollNavbar({ children }: { children: ReactNode }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
            }}
            initial={{ opacity: 0, y: -100 }}
            animate={hidden ? "hidden" : "visible"}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex py-5 px-10 justify-between lg:mx-20 items-center sticky top-0 z-40 border-b bg-white">
            {children}
        </motion.section>
    )
}

export default ScrollNavbar
