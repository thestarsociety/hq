import React from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

interface TextWithImageProps {
  text: string;
  imageUrl?: string;
  fontSize: string;
  color: string;
  imageWidth?: number;
  imageHeight?: number;
}

interface ContentBlockProps {
  content: string | React.ReactNode;
  basis?: string;
  className?: string;
}

interface StarSocietyProps {
  topTextLeft: TextWithImageProps;
  topTextRight: TextWithImageProps;
  middleLeft: ContentBlockProps;
  middleRight: TextWithImageProps;
  bottomText: TextWithImageProps;
  gap?: string;
}

const TextWithImage: React.FC<TextWithImageProps> = ({ 
  text, 
  imageUrl, 
  fontSize, 
  color, 
  imageWidth,
  imageHeight,
}) => {
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);

  return (
    <h1 className={`font-medium ${color} ${fontSize} flex items-center`}>
      {imageUrl ? (
        <Image
          src={imageUrl} 
          alt={firstLetter} 
          className="inline-block mr-2"
          width={imageWidth}
          height={imageHeight}
        />
      ) : (
        <span className="mr-2">{firstLetter}</span>
      )}
      {restOfText}
    </h1>
  );
};

const ContentBlock: React.FC<ContentBlockProps> = ({ content, basis = "full", className = "" }) => (
  <div className={`basis-${basis} flex items-center ${className}`}>
    {typeof content === 'string' ? (
      <h2 className="text-2xl text-zinc-900 font-medium">
        {content}
      </h2>
    ) : (
      content
    )}
  </div>
);

const StarSociety: React.FC<StarSocietyProps> = ({ 
  topTextLeft, 
  topTextRight, 
  middleLeft, 
  middleRight, 
  bottomText, 
  gap = "4" 
}) => {
  return (
    <div className="w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-transparent mt-4">
      <div className={`flex flex-col p-2 gap-${gap}`}>
        <div className="flex justify-between items-center">
          <TextWithImage {...topTextLeft} />
          <TextWithImage {...topTextRight} />
        </div>
        <Separator className="bg-zinc-800"/>
        <div className="flex flex-row p-4 space-x-[50px]">
          <ContentBlock {...middleLeft} basis="1/3" className="mr-4" />
          <ContentBlock content={<TextWithImage {...middleRight} />} basis="2/3" />
        </div>
        <Separator className="bg-zinc-800"/>
        <div className="flex justify-end">
          <TextWithImage {...bottomText} />
        </div>
      </div>
    </div>
  );
};

export default StarSociety;