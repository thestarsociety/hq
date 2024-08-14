import React from 'react';
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="h-screen p-8">
      <div className="relative inline-block">
        <h1 className="text-9xl font-bold text-blue-800">
          THIS ⁉ ⁉ DIRECTORY CONTAINS ALL THE PROJECTS MADE ~ BY EXPRAYS® … A.K.A <span className='text-9xl font-bold text-blue-800 hover:text-green-600 hover:cursor-pointer'>SURYA</span>
        </h1>
        <ArrowTopRightIcon className="absolute right-[900px] bottom-0 text-blue-800 w-20 h-20" />
      </div>
    </div>
  );
}