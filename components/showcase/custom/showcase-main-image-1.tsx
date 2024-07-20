import { Separator } from '@/components/ui/separator';
import React from 'react';

interface ShowcaseMainTextWithImageProps {
    backgroundColor: string;
    backgroundImage: string;
    leftText: string;
    rightText: string;
    text1: string;
    text2: string;
    text3: string;
    minText?: string;
}

const ShowcaseMainTextWithImage = ({ 
  backgroundColor,
  backgroundImage,
  leftText,
  rightText,
  text1,
  text2,
  text3,
  minText
}: ShowcaseMainTextWithImageProps) => {
  return (
    <div 
      className={`w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] mt-4 ${backgroundColor}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-col leading-tight">
        <div className="flex items-center justify-center">
          <h1 className="text-zinc-900 text-[200px]">
            {text1}
          </h1>
        </div>
        <Separator className="bg-zinc-800"/>
        <div className="flex flex-row p-2">
         {minText && (
           <div className="basis-1/3 mt-6 mr-4 flex items-center">
           <h2 className="text-2xl text-zinc-900 font-medium text-center">
             {minText}
           </h2>
         </div>
         )}
          <div className="basis-2/3 flex items-center justify-center">
            <h1 className="text-zinc-900 text-[200px]">
              {text2}
            </h1>
          </div>
        </div>
        <Separator className="bg-zinc-800"/>
        <div className="flex items-center justify-center">
          <h1 className="text-zinc-900 text-[200px]">
            {text3}
          </h1>
        </div>
        <div className="flex flex-row mt-8 gap-4 p-8">
          <div className="basis-1/2 pr-6">
            <p className="text-zinc-900 text-2xl tracking-tight font-medium">{leftText}</p>
          </div>
          <div className="basis-1/2 pl-6">
            <p className="text-zinc-900 text-2xl tracking-tight font-medium">{rightText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseMainTextWithImage;