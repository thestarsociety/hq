import { cn } from "@/lib/utils";

interface SectionWelcomeProps {
    backgroundColor: string;
    sectionText: string;
    sectionNo: string;
}

export const SectionWelcome = ({ backgroundColor, sectionText, sectionNo }: SectionWelcomeProps) => {
    return (
        <div className={cn(
            "w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-spacePurple text-white",
            backgroundColor
        )}>
                <p className="text-8xl p-4">{sectionNo}</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="font-semibold text-[150px] p-4">
                    {sectionText}
                </h1>
            </div>
    )
}