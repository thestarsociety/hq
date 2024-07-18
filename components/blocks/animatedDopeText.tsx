import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface AnimatedDopeTextProps {
    text: string;
    backgroundColor: string;
    className: string
}

const arrowVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: 100, opacity: 0, transition: { duration: 0.5 } }
};

const AnimatedArrow = ({ color }: { color: string }) => {
    return (
        <motion.div
            variants={arrowVariants}
            animate="visible"
            transition={{ repeat: Infinity, repeatDelay: 1 }}
            className='flex flex-row'
        >
            <ArrowDown size={24} className={cn("font-medium", color)} />
            <ArrowDown size={24} className={cn("font-medium", color)} />
        </motion.div>
    );
};

export const AnimatedDopeText = ({ text, backgroundColor, className }: AnimatedDopeTextProps) => {
    return (
        <div className={cn(
            "w-full h-auto p-[20px] border-[1.5px] border-transparent rounded-[20px] mt-4 flex flex-row justify-between items-center",
            backgroundColor
        )}>
            <div className="flex justify-center">
                <AnimatedArrow color={className} />
            </div>
            <div className="flex items-center justify-center">
                <h1 className="text-white text-2xl">
                    {text}
                </h1>
            </div>
            <div className="flex justify-center">
                <AnimatedArrow color={className} />
            </div>
        </div>
    );
};

export default AnimatedDopeText;