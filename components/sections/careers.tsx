import AnimatedDopeText from "../blocks/animatedDopeText"
import { JobTitle } from "../blocks/jobTitle"
import { RoundedDivText } from "../blocks/roundedDivText"
import { SectionWelcome } from "../blocks/sectionWelcome"

export const CareerSection = () => {
    
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>The Star Society</p>
            </div>
            
            <SectionWelcome backgroundColor="bg-vibrantPink" sectionNo="05" sectionText="Careers"/>

            {/* section main */}
            <RoundedDivText />

            <AnimatedDopeText backgroundColor="bg-vibrantPink" arrowColor="#000000" text="OPEN POSITIONS"/>

            {/* Jobs */}
            <JobTitle title="Creative, Motion Design" description="In a world mediated by screens, static designs are unfit and boring. Everything we design should move, behave, respond, and feel alive. The world of the screen should not feel different from the material world." requirements={["Adobe XD", "Indesign"]} location="(remote)" applyLink="https://thestarsociety.tech" additionalDescriptions={["This is why we love Motion Designers. From the extraordinary to the succinct, they can give life, personality, and life-like behaviors to design work.", "Motion designers can explain functionalities and convey emotions and tell stories through movement and the manipulation of time."]}/>
        </div>
    )
}