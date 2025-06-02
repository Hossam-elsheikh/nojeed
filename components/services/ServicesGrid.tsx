'use client';
import React, { useState } from 'react';
import {
    Palette,
    Code,
    Camera,
    TrendingUp,
    BarChart3,
    CheckSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealCard from './RevelCard';

const items = [
    {
        icon: Code,
        title: 'Software Development',
        points: ['UI/UX Design', 'Website & Web App Development', 'Mobile & Desktop Applications'],
        quote: 'From pixels to platforms — we code your vision into reality.',
        classes: 'row-span-2',
    },
    {
        icon: Palette,
        title: 'Branding & Digital Identity',
        points: ['Brand Strategy & Positioning', 'Visual Identity Design', 'Brand Guidelines'],
        quote: "Build a brand that's unforgettable — and unshakable.",
        classes: 'row-span-2 col-start-1 row-start-3',
    },
    {
        icon: Camera,
        title: 'Media Production',
        points: ['Graphic Design', 'Motion Graphics', 'Video Editing & Montage'],
        quote: "Visuals that don't just catch eyes — they hold attention.",
        classes: 'row-span-2 col-start-1 row-start-5',
    },
    {
        icon: TrendingUp,
        title: 'Digital Marketing',
        points: ['Content Creation', 'Social Media Management', 'Paid Ads & Campaign Strategy'],
        quote: 'We turn clicks into conversions, and posts into impact.',
        classes: 'row-span-2 col-start-5 row-start-1',
    },
    {
        icon: BarChart3,
        title: 'Data Analysis & Reporting',
        points: ['Insights & Dashboards', 'Campaign Performance Tracking', 'Business Intelligence'],
        quote: 'Decisions backed by data. Every step of the way.',
        classes: 'row-span-2 col-start-5 row-start-3',
    },
    {
        icon: CheckSquare,
        title: 'Project Management',
        points: ['Agile Workflows', 'Milestone Tracking', 'Strategic Planning'],
        quote: 'Your vision, delivered — on time, every time.',
        classes: 'row-span-2 col-start-5 row-start-5',
    },
];

export default function ServicesGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const contentIndex = hoveredIndex ?? selectedIndex;

    return (
        <div className="grid grid-cols-5 grid-rows-6 gap-4 p-4 h-screen">
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
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
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
    );
}
