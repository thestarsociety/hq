import Better from "../animation/better"
import { CapabilitiesBlock } from "../blocks/capabilities";
import { DopeText } from "../blocks/dopeText";
import { MissionBlock } from "../blocks/mission"
import { Tabs } from "../blocks/tabbedBlock";

const rowsData = [
    { number: "01", title: "Challenge", headline: "globally while ensuring fair tech access.", highlightedText: "Innovate" },
    { number: "02", title: "Goal", headline: "in the world and helping them make the best work of their lives.", highlightedText: "Finding the best talent" },
    // Add more rows as needed
  ];

const tabData = [
    { title: "One Team", value: "one-team", content: (
        <>
            Our clients become part of <span className="text-spacePurple">our team,</span> and our team a part of their company.
        </>
    ) },
    { title: "Creator Led", value: "creator-led", content: (
        <>
            Every team member’s higher priority is to <span className="text-spacePurple">make the difference.</span>
        </>
    ) },
    { title: "Phase Zero", value: "phase-zero", content: (
        <>
            The project starts when we <span className="text-spacePurple">first meet.</span> Every interaction shapes the work.
        </>
    ) },
    { title: "Anti Transactional", value: "anti-transactional", content: (
        <>
            We build long relationships, we want to become a <span className="text-spacePurple">part of your journey.</span>
        </>
    ) },
];

export const ApproachSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>02</p>
                <p>Approach</p>
            </div>
            <div className="w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-spacePurple text-white">
                <p className="text-8xl p-4">02</p>
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
                    Approach
                </h1>
            </div>

            {/* Approach-section-1 */}
            <Better />
            {/* Approach-section-2 */}
            <MissionBlock rows={rowsData}/>
            {/* Approach-section-3 */}
            <DopeText text="Independent in" backgroundColor="bg-spacePurple" leftText="star" rightText="society"/>
            <DopeText text="Ownership" backgroundColor="bg-spacePurple" leftText="society" rightText="star"/>
            <DopeText text="& Spirit." backgroundColor="bg-spacePurple" leftText="star" rightText="society"/>

            {/* Approach-section-4 */}
            <Tabs tabs={tabData}/>
            
            {/* Approach-section-5 */}
            <DopeText text="Our Capabilities" backgroundColor="bg-spacePurple" leftText="star" rightText="society"/>
            <CapabilitiesBlock />
        </div>
    )
}