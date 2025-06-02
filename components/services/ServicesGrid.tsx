'use client';
import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import RevealCard from './RevelCard';
import { items } from '@/utils/ServicesArray';



export default function ServicesGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const contentIndex = hoveredIndex ?? selectedIndex;

    return (
        <div className="min-h-screen p-4">
            <div className="md:hidden flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4 h-32">
                    {items.slice(0, 3).map((item, index) => (
                        <RevealCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            points={item.points}
                            quote={item.quote}
                            classes=""
                            index={index}
                            isActive={index === contentIndex}
                            onHover={() => setHoveredIndex(index)}
                            onLeave={() => setHoveredIndex(null)}
                            onClick={() => {
                                setSelectedIndex(index);
                                setHoveredIndex(null);
                            }}
                        />
                    ))}
                </div>

                <div className="bg-green-50 text-gray-800 rounded-xl flex items-center justify-center text-center p-6 relative overflow-hidden min-h-96">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={items[contentIndex].title}
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-green-800">
                                {items[contentIndex].title}
                            </h2>
                            <p className="text-lg md:text-2xl italic text-green-600">
                                {items[contentIndex].quote}
                            </p>
                            <ul className="text-green-700 font-medium text-base md:text-lg space-y-1">
                                {items[contentIndex].points.map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 * i, type: 'spring' }}
                                    >
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="grid grid-cols-3 gap-4 h-32">
                    {items.slice(3, 6).map((item, index) => (
                        <RevealCard
                            key={index + 3}
                            icon={item.icon}
                            title={item.title}
                            points={item.points}
                            quote={item.quote}
                            classes=""
                            index={index + 3}
                            isActive={index + 3 === contentIndex}
                            onHover={() => setHoveredIndex(index + 3)}
                            onLeave={() => setHoveredIndex(null)}
                            onClick={() => {
                                setSelectedIndex(index + 3);
                                setHoveredIndex(null);
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden md:grid md:grid-cols-5 md:grid-rows-6 gap-4 h-screen">
                {items.map((item, index) => (
                    <RevealCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        points={item.points}
                        quote={item.quote}
                        classes={item.classes}
                        index={index}
                        isActive={index === contentIndex}
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                        onClick={() => {
                            setSelectedIndex(index);
                            setHoveredIndex(null);
                        }}
                    />
                ))}

                <div className="col-span-3 row-span-6 col-start-2 row-start-1 bg-green-50 text-gray-800 rounded-xl flex items-center justify-center text-center p-6 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={items[contentIndex].title}
                            className="space-y-4 relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                        
                            <motion.div
                                className="absolute top-0 left-0 md:-top-25 md:left-4 lg:-top-40  opacity-60 pointer-events-none"
                                initial={{ rotate: -10, scale: 0.8 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                {React.createElement(items[contentIndex].icon, { size: 100 })}
                            </motion.div>
                            <h2 className="text-4xl font-bold text-green-800">
                                {items[contentIndex].title}
                            </h2>
                            <p className="text-2xl italic text-green-600">
                                {items[contentIndex].quote}
                            </p>
                            <ul className="text-green-700 font-medium text-lg space-y-1">
                                {items[contentIndex].points.map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 * i, type: 'spring' }}
                                    >
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}