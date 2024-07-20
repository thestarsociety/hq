import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ShowWorkProps {
    categoryTag: string;
    backgroundColor: string;
    brandName: string;
    brandLogo: string;
    backgroundImages: string[];
    expandedText: string;
    expandedTextColor?: string;
    additionalSection: React.ReactNode;
    comingSoon?: boolean;
}

export const ShowWork = ({ 
    categoryTag, 
    backgroundColor, 
    brandName, 
    brandLogo, 
    backgroundImages,
    expandedText,
    expandedTextColor,
    additionalSection,
    comingSoon = false
}: ShowWorkProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        if (!comingSoon) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className="transition-all duration-500 ease-in-out">
            <div 
                className={cn(
                    "w-full p-[20px] border-[1.5px] border-transparent rounded-[20px] mt-4 relative overflow-hidden transition-all duration-500 ease-in-out",
                    backgroundColor,
                    !comingSoon && !isExpanded && isHovered ? "transform skew-y-2" : "",
                    isExpanded ? "h-auto" : "h-[10vw]",
                    comingSoon ? "" : "cursor-pointer"
                )}
                onMouseEnter={() => !comingSoon && !isExpanded && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={toggleExpand}
            >
                {/* Background images */}
                {backgroundImages.map((img, index) => (
                    <div 
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-all duration-300 ease-in-out",
                            !comingSoon && !isExpanded && isHovered ? `transform skew-y-${(index + 2) * 2} translate-y-${(index + 1) * 4}` : "opacity-0"
                        )}
                        style={{zIndex: -index - 1}}
                    >
                        <Image 
                            src={img}
                            alt={`Background ${index + 1}`}
                            fill={true}
                            style={{objectFit: "contain"}}
                        />
                    </div>
                ))}

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between h-full">
                    <div className="flex-1 flex items-center justify-start p-4">
                        <p className="text-tssWhite text-5xl">
                            {brandName}
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">
                        {comingSoon ? (
                            <div className="border border-zinc-400 rounded-full px-4 py-1">
                                <span className="text-zinc-400 text-lg">Coming Soon</span>
                            </div>
                        ) : (
                            <h1 className="text-zinc-400 text-2xl">
                                {categoryTag}
                            </h1>
                        )}
                    </div>
                    <div className="flex-1 flex items-center justify-end p-4">
                        <div className="relative w-20 h-20">
                            <Image 
                                src={brandLogo}
                                alt="Brand Logo"
                                fill={true}
                                style={{objectFit: "contain"}}
                                className="filter invert saturate-0 hue-rotate-[310deg] brightness-[0.9] contrast-[0.9]"
                            />
                        </div>
                    </div>
                </div>

                {/* Expanded Text */}
                {!comingSoon && (
                    <div className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isExpanded ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"
                    )}>
                        <p className={cn(
                            "text-tssWhite text-4xl p-6",
                            expandedTextColor
                        )}>
                            {expandedText}
                        </p>
                    </div>
                )}
            </div>

            {/* Additional Section */}
            {!comingSoon && (
                <div className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                )}>
                    {additionalSection}
                </div>
            )}
        </div>
    )
}