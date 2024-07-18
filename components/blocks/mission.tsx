import React from 'react';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

interface RowContent {
  number?: string;
  title: string;
  headline: string;
  highlightedText?: string;
  highlightedTextColor?: string;
}

interface MissionBlockProps {
  rows: RowContent[];
}

export const MissionBlock: React.FC<MissionBlockProps> = ({ rows }) => {
  return (
    <div className="relative w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-transparent mt-4 overflow-hidden">
      <div className="my-[4.44vw] p-0">
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-row items-start w-full m-[3.33vw]">
              <div className="flex w-[20%]">
                <h2 className="flex flex-col items-start text-[2vw] font-medium leading-[2.2vw] mt-[1.7vw] ml-[10px] p-0">
                  {row.number && (
                    <span className="flex h-[1.7vw] w-[3vw] items-center border-[1px] border-zinc-900 rounded-[1.7vw] text-[1.3vw] justify-center mb-[0.5vw] pr-[0.27vw] text-zinc-950">
                      {row.number}
                    </span>
                  )}
                  {row.title}
                </h2>
              </div>
              <div className="flex flex-1 overflow-hidden">
                <h1 className="text-[7vw] ml-[2vw] mr-[2vw] w-full leading-[1.1] tracking-tight whitespace-normal break-words">
                {row.highlightedText && (
                    <>
                      <span className={cn(
                        "text-spacePurple",
                        row.highlightedTextColor
                      )}>
                        {row.highlightedText}
                      </span>
                      {' '}
                    </>
                  )}
                  {row.headline}
                </h1>
              </div>
            </div>
            {index < rows.length - 1 && (
              <Separator className='bg-zinc-900 h-[0.5px] w-[75%] ml-[25%]' />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Example usage:
// <MissionBlock rows={[
//   { number: "01", title: "Challenge", headline: "Experiences through VR.", highlightedText: "Interactive" },
//   { number: "02", title: "Solution", headline: "Immersive Learning Platforms", highlightedText: "Develop" },
// ]} />