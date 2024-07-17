import React from 'react';
import { Separator } from '../ui/separator';

export const MissionBlock: React.FC = () => {
    return (
        <div className="relative w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-transparent mt-4 overflow-hidden">
            <div className="my-[4.44vw] p-0"> {/* rows */}
                <div className="flex flex-row items-start w-full m-[3.33vw]"> {/* row */}
                    <div className="flex"> {/* cell */}
                        <h2 className="flex flex-col items-start text-[2vw] font-semibold leading-[2.2vw] mt-[1.7vw] ml-[10px] p-0 w-[19.4vw-48px]">
                            <span className="flex h-[1.7vw] w-[3vw] items-center border-[1px] border-zinc-900 rounded-[1.7vw] text-[1.3vw] justify-center mb-[0.5vw] pr-[0.27vw] text-zinc-950">
                                01
                            </span>
                            Challenge
                        </h2>
                    </div>
                    <div className="flex flex-1 overflow-hidden"> {/* cell */}
                        <h1 className="text-[120px] ml-[6.5vw] mr-[4.2vw] w-[70%] leading-[140px] whitespace-normal break-words">
                            <span className="text-mutedcoral">
                                Interactive
                            </span><br />
                            Experiences through VR.
                        </h1>
                    </div>
                </div>
                <Separator className='bg-zinc-900 h-[0.5px] w-[70%] ml-[25%]'/>
                <div className="flex flex-row items-start w-full m-[3.33vw]"> {/* row */}
                    <div className="flex"> {/* cell */}
                        <h2 className="flex flex-col items-start text-[2vw] font-semibold leading-[2.2vw] mt-[1.7vw] ml-[10px] p-0 w-[19.4vw-48px]">
                            <span className="flex h-[1.7vw] w-[3vw] items-center border-[1px] border-zinc-900 rounded-[1.7vw] text-[1.3vw] justify-center mb-[0.5vw] pr-[0.27vw] text-zinc-950">
                                01
                            </span>
                            Challenge
                        </h2>
                    </div>
                    <div className="flex flex-1 overflow-hidden"> {/* cell */}
                        <h1 className="text-[120px] ml-[6.5vw] mr-[4.2vw] w-[70%] leading-[140px] whitespace-normal break-words">
                            <span className="text-mutedcoral">
                                Interactive
                            </span><br />
                            Experiences through VR.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}