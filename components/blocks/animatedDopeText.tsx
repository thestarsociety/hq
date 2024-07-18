import React from 'react';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import { cn } from "@/lib/utils";

interface AnimatedDopeTextProps {
    text: string;
    backgroundColor: string;
    arrowColor: string
}



const AnimatedArrow = ({ color }: { color: string }) => {
    return (
        <div className='flex flex-row'>
            <UseAnimations animation={arrowDown} size={35} loop={true} strokeColor={color} speed={0.7}/>
            <UseAnimations animation={arrowDown} size={35} loop={true} strokeColor={color} />
        </div>
    );
};

export const AnimatedDopeText = ({ text, backgroundColor, arrowColor }: AnimatedDopeTextProps) => {
    return (
        <div className={cn(
            "w-full h-auto p-[20px] border-[1.5px] border-transparent rounded-[20px] mt-4 flex flex-row justify-between items-center",
            backgroundColor
        )}>
            <div className="flex justify-center">
                <AnimatedArrow color={arrowColor} />
            </div>
            <div className="flex items-center justify-center">
                <h1 className="text-tssWhite text-2xl">
                    {text}
                </h1>
            </div>
            <div className="flex justify-center">
                <AnimatedArrow color={arrowColor} />
            </div>
        </div>
    );
};

export default AnimatedDopeText;