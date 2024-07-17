import Better from "../animation/better"
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
        <h1>
            Our clients become part of <span className="text-mutedcoral">our team,</span> and our team a part of their company.
        </h1>
    ) },
    { title: "Creator Led", value: "creator-led", content: (
        <h1>
            Every team member’s higher priority is to <span className="text-mutedcoral">make the difference.</span>
        </h1>
    ) },
    { title: "Phase Zero", value: "phase-zero", content: (
        <h1>
            The project starts when we <span className="text-mutedcoral">first meet.</span> Every interaction shapes the work.
        </h1>
    ) },
    { title: "Anti Transactional", value: "anti-transactional", content: (
        <h1>
            We build long relationships, we want to become a <span className="text-mutedcoral">part of your journey.</span>
        </h1>
    ) },
];

export const ApproachSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>02</p>
                <p>Approach</p>
            </div>
            <div className="w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-mutedcoral text-white">
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
            <DopeText text="Independent in" backgroundColor="bg-mutedcoral" leftText="star" rightText="society"/>
            <DopeText text="Ownership" backgroundColor="bg-mutedcoral" leftText="society" rightText="star"/>
            <DopeText text="& Spirit." backgroundColor="bg-mutedcoral" leftText="star" rightText="society"/>

            {/* Approach-section-4 */}
            <Tabs tabs={tabData}/>
        </div>
    )
}