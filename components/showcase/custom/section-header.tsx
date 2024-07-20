import { cn } from "@/lib/utils";

interface DopeTextProps {
    text: string;
    backgroundColor: string;
}

export const SectionHeader = ({ text, backgroundColor }: DopeTextProps) => {
    return (
        <div className={cn(
            "w-full h-[10vw] p-[20px] border-[1.5px] border-transparent rounded-[20px] mt-4 flex justify-center",
            backgroundColor
        )}>
            <div className="p-2 flex items-center justify-center">
                <h1 className="text-tssWhite text-[100px]">
                    {text}
                </h1>
            </div>
        </div>
    )
}