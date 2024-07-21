"use client";

import React, { useState, useRef } from 'react';

interface JobTitleProps {
    title: string;
    description: string;
    additionalDescriptions: string[];
    requirements: string[];
    location: string;
    applyLink: string;
}

const tagColors = [
    'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200', 
    'bg-purple-200', 'bg-pink-200', 'bg-indigo-200', 'bg-teal-200'
];

export const JobTitle: React.FC<JobTitleProps> = ({ 
    title, 
    description, 
    additionalDescriptions,
    requirements, 
    location, 
    applyLink 
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div 
            className={`w-full border-[1.5px] border-zinc-900 transition-all duration-300 ease-in-out mt-4 cursor-pointer overflow-hidden
                        ${isExpanded ? 'bg-transparent rounded-[20px] p-8' : 'rounded-full hover:bg-vibrantPink'}`}
            style={{
                height: isExpanded ? 'auto' : '80px',
                maxHeight: isExpanded ? '1000px' : '80px', // Adjust this value as needed
            }}
            onClick={toggleExpand}
        >
            <div ref={contentRef} className="p-[20px]">
                <h2 className="text-center text-3xl text-zinc-900 font-medium mb-4">
                    {title}
                </h2>
                
                <div className={`transition-opacity duration-300 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    <h1 className="mb-4 text-3xl text-zinc-900">{description}</h1>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {additionalDescriptions.map((desc, index) => (
                            <p key={index} className='text-xl text-zinc-900 pt-6'>{desc}</p>
                        ))}
                    </div>
                    
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Requirements:</h3>
                        <div className="flex flex-wrap gap-2">
                            {requirements.map((req, index) => (
                                <span key={index} className={`px-3 py-1 rounded-full text-sm ${tagColors[index % tagColors.length]}`}>
                                    {req}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <hr className="my-4 border-zinc-900" />
                    
                    <div className="flex justify-between">
                        <div>
                            <h4 className="font-semibold">Location:</h4>
                            <p>{location}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Apply:</h4>
                            <a href={applyLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}