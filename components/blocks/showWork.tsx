import { cn } from "@/lib/utils";
import Image from "next/image";

interface ShowWorkProps {
    categoryTag: string;
    backgroundColor: string;
    brandName: string;
    brandLogo: string;
}

export const ShowWork = ({ categoryTag, backgroundColor, brandName, brandLogo }: ShowWorkProps) => {
    return (
        <div className={cn(
            "w-full h-[10vw] p-[20px] border-[1.5px] border-transparent rounded-[20px] mt-4 flex justify-between",
            backgroundColor
        )}>
            <div className="p-2 flex items-center justify-center">
                <p className="text-tssWhite text-5xl ml-4">
                    {brandName}
                </p>
            </div>
            <div className="p-2 flex items-center justify-center">
                <h1 className="text-zinc-400 text-2xl">
                    {categoryTag}
                </h1>
            </div>
            <div className="p-2 flex items-center justify-center">
                <Image 
                    src={brandLogo}
                    alt="Brand Logo"
                    width={80}
                    height={80}
                    
                />
            </div>
        </div>
    )
}