import React from 'react';
import { Separator } from "../ui/separator";

interface TagBlockProps {
    title: string;
    tagNumber: number | string;
    items: string[];
}

export const TagBlock = ({ title, tagNumber, items }: TagBlockProps) => {
    const formattedTagNumber = typeof tagNumber === 'number' 
        ? tagNumber.toString().padStart(2, '0')
        : tagNumber;

    return (
        <div className="flex flex-col border border-zinc-900 rounded-3xl items-start justify-center p-3 w-1/3 h-auto">
            <div className="flex flex-row items-center justify-between mb-4 w-full px-4 py-4">
                <h1 className='font-medium text-zinc-900 text-3xl'>{title}</h1>
                <span className="flex items-center justify-center border border-zinc-900 rounded-full text-sm py-1 px-2 min-w-[2.5rem]">
                    {formattedTagNumber}
                </span>
            </div>
            {/* list */}
            <div className="flex flex-col items-start justify-center w-full px-4">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="w-full py-2 text-lg font-medium text-zinc-900">
                            {item}
                        </div>
                        {index < items.length - 1 && (
                            <Separator className="h-[0.5px] bg-zinc-900 w-full" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};