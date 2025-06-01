'use client';
import React, { useState } from 'react';
import style from './Services.module.css';
import useMousePosition from '@/utils/helpers/useMousePosition';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

function Services() {
    const [isHovered, setIsHovered] = useState(false);
    const { mousePosition, elementRef } = useMousePosition();
    const { x, y } = mousePosition;
    const size = isHovered ? 400 : 40;
  const S = useTranslations('services');
  const A = useTranslations('about');

    return (
        <section ref={elementRef} className={style.services}>
            <section className={style.body}>
                <h2>{A("title")}</h2>
                <p>
                    {A("body")}
                </p>
            </section>
            <motion.section
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: 'tween', ease: 'backOut' }}
                className={style.mask}
            >
                <h2>{S("title")}</h2>
                <p>
                    {S("intro")}
                </p>
            </motion.section>
        </section>
    );
}

export default Services;