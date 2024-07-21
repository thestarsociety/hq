import { SectionWelcome } from "../blocks/sectionWelcome"

export const CareerSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>The Star Society</p>
            </div>
            
            <SectionWelcome backgroundColor="bg-vibrantPink" sectionNo="05" sectionText="Careers"/>
        </div>
    )
}