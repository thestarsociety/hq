import { cn } from "@/lib/utils";

interface DopeTextProps {
    text: string;
    backgroundColor: string;
    leftText: string;
    rightText: string;
}

export const DopeText = ({ text, backgroundColor, leftText, rightText }: DopeTextProps) => {
    return (
        <div className={cn(
            "w-full h-[10vw] p-[20px] border-[1.5px] border-transparent rounded-[20px] mt-4 flex justify-between",
            backgroundColor
        )}>
            <div className="p-2 flex items-center justify-center">
                <p className="text-zinc-900 ml-4">
                    ({leftText})
                </p>
            </div>
            <div className="p-2 flex items-center justify-center">
                <h1 className="text-white text-[100px]">
                    {text}
                </h1>
            </div>
            <div className="p-2 flex items-center justify-center">
                <p className="text-zinc-900 mr-4">
                    ({rightText})
                </p>
            </div>
        </div>
    )
}