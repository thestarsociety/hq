import { cn } from "@/lib/utils";

interface SectionWelcomeProps {
    backgroundColor: string;
    sectionText: string;
    sectionNo: string;
    textColor?: string;
}

export const SectionWelcome = ({ backgroundColor, sectionText, sectionNo, textColor }: SectionWelcomeProps) => {
    return (
        <div className={cn(
            "w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-spacePurple text-tssWhite",
            backgroundColor
        )}>
                <p className={cn(
                    "text-8xl p-4", textColor
                )}>{sectionNo}</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className={cn(
                    "text-[180px] p-4",
                    textColor
                )}>
                    {sectionText}
                </h1>
            </div>
    )
}