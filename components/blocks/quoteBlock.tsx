import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface DynamicQuoteComponentProps {
  quotes: string[][];
  backgroundColor: string;
}

interface QuoteSectionProps {
  number: number;
  lines: string[];
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ number, lines }) => (
  <div className="flex flex-col">
    <div className="flex flex-row p-2">
      <div className="basis-1/8 flex items-center mr-20">
        <Button size="smalltext" className="rounded-[20px] bg-transparent text-black border-[1.5px] border-zinc-900 pointer-events-none">
          {number.toString().padStart(2, '0')}
        </Button>
      </div>
      <div className="basis-7/8 flex items-center">
        <h1 className="text-[100px] text-tssWhite font-medium">
          {lines[0]}
        </h1>
      </div>
    </div>
    {lines.slice(1).map((line, index) => (
      <React.Fragment key={index}>
        <Separator className="bg-zinc-800 h-[0.5px]" />
        <div className="py-1 tracking-tight">
          <h1 className="text-tssWhite font-medium text-[100px] leading-snug">
            {line}
          </h1>
        </div>
      </React.Fragment>
    ))}
  </div>
);

const QuoteBlock: React.FC<DynamicQuoteComponentProps> = ({ quotes, backgroundColor }) => {
  return (
    <div className={`w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] ${backgroundColor} mt-4`}>
      <div className="flex flex-col m-8 p-4">
        {quotes.map((quote, index) => (
          <React.Fragment key={index}>
            {index > 0 && <div className="mt-[100px]" />}
            <QuoteSection number={index + 1} lines={quote} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuoteBlock;