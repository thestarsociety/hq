import Better from "../animation/better"
import { MissionBlock } from "../blocks/mission"

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
            <MissionBlock />
        </div>
    )
}