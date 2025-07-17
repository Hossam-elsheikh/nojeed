'use client';

import { motion } from 'framer-motion';

interface RevealCardProps {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    points: string[];
    quote: string;
    classes?: string;
    index: number;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
    onClick: () => void;
}

export default function RevealCard({
    icon: IconComponent,
    title,
    classes,
    isActive,
    onHover,
    onLeave,
    onClick
}: RevealCardProps) {
    return (
        <motion.div
            layout
            whileHover={{ scale: 1.02 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
            className={`
                relative cursor-pointer 
                transition-all duration-300 
                ease-out rounded-xl p-5 
               
                shadow-md ${classes} 
                ${isActive
                    ? 'bg-gradient-to-br from-green-100 to-green-200 shadow-md'
                    : 'bg-white filter grayscale opacity-75'
                }
            `}
        >
            <motion.div
                className="absolute top-4 left-4 opacity-20 pointer-events-none"
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <IconComponent size={44} />
            </motion.div>

            <div className="flex flex-col h-full   justify-center text-center items-center gap-1 z-10 relative">
                <motion.h3
                    className="font-semibold text-sm"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    {title}
                </motion.h3>
            </div>
        </motion.div>
    );
}
