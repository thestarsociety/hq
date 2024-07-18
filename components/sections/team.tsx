import Image from "next/image"

export const TeamSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>The Star Society</p>
            </div>
            <div className="w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-quasarBlue text-white">
                <p className="text-8xl p-4">04</p>
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
                    Team
                </h1>
            </div>

            {/* Node display */}
            <div className="w-full h-auto p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-quasarBlue text-white mt-4">
                <Image 
                    src="/assets/node-display.svg"
                    alt="node display"
                    width={1190}
                    height={720}
                />
            </div>
        </div>
    )
}