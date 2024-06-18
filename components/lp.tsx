import React from 'react';

const sharedClasses = {
  rounded: 'rounded',
  roundedFull: 'rounded-full',
  bgBlack: 'bg-black',
  bgWhite: 'bg-white',
  bgBlue500: 'bg-blue-500',
  bgZinc200: 'bg-zinc-200',
  bgZinc400: 'bg-zinc-400',
  bgPurple500: 'bg-purple-500',
  bgPurple700: 'bg-purple-700',
  bgYellow500: 'bg-yellow-500',
  bgYellow700: 'bg-yellow-700',
  textWhite: 'text-white',
  textBlack: 'text-black',
  textBold: 'font-bold',
  textXL: 'text-xl',
  text2XL: 'text-2xl',
  text4XL: 'text-4xl',
  flex: 'flex',
  justifyBetween: 'justify-between',
  itemsCenter: 'items-center',
  spaceX2: 'space-x-2',
  spaceX4: 'space-x-4',
  spaceY4: 'space-y-4',
  p2: 'p-2',
  p4: 'p-4',
  p6: 'p-6',
  mb2: 'mb-2',
  mb4: 'mb-4',
  mt4: 'mt-4',
  px2: 'px-2',
  py1: 'py-1',
  px4: 'px-4',
  py2: 'py-2',
  grid: 'grid',
  gridCols1: 'grid-cols-1',
  gridCols2: 'grid-cols-2',
  colSpan1: 'col-span-1',
  colSpan2: 'col-span-2',
  hoverUnderline: 'hover:underline',
};


export const StudioSection = () => {
  return (
    <div className="bg-blue-500 rounded-lg p-6 text-white">
      <div className="mb-2">
        <span className="bg-white text-black px-2 py-1 rounded-md">STUDIO</span>
      </div>
      <h1 className="text-4xl text-bold mb-4">Unlimited Ideas With An Air Of Pretension.</h1>
      <div className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.mb4}`}>
        {/**images */}
      </div>
      {/**Button */}
    </div>
  );
};

export const PastCasesSection = () => {
  return (
    <div className="p-6 bg-zinc-200 text-black rounded-lg">
      <div className="mb-2">
        {/**button */}
      </div>
      <h1 className="text-2xl text-bold mb-4">Your Business Boost</h1>
      {/**images */}
    </div>
  );
};

export const WebDesignSection = () => {
  return (
    <div className="p-6 bg-purple-500 text-white rounded-lg">
      <div className={`${sharedClasses.flex} ${sharedClasses.justifyBetween} ${sharedClasses.itemsCenter} ${sharedClasses.mb4}`}>
        <span className={`${sharedClasses.bgPurple700} ${sharedClasses.textWhite} ${sharedClasses.px2} ${sharedClasses.py1} ${sharedClasses.roundedFull}`}>WEB & DESKTOP DESIGN</span>
        <button className={`${sharedClasses.bgWhite} ${sharedClasses.textBlack} ${sharedClasses.roundedFull} ${sharedClasses.p2}`}>➔</button>
      </div>
      <h1 className={`${sharedClasses.text4XL} ${sharedClasses.textBold}`}>98+</h1>
      <p>Our designers deliver cutting-edge projects for ambitious organizations.</p>
    </div>
  );
};

export const MobileDesignSection = () => {
  return (
    <div className="p-6 bg-yellow-500 text-black rounded-lg">
      <div className={`${sharedClasses.flex} ${sharedClasses.justifyBetween} ${sharedClasses.itemsCenter} ${sharedClasses.mb4}`}>
        <span className={`${sharedClasses.bgYellow700} ${sharedClasses.textWhite} ${sharedClasses.px2} ${sharedClasses.py1} ${sharedClasses.roundedFull}`}>MOBILE APP DESIGN</span>
        <button className={`${sharedClasses.bgBlack} ${sharedClasses.textWhite} ${sharedClasses.roundedFull} ${sharedClasses.p2}`}>➔</button>
      </div>
      <h1 className={`${sharedClasses.text4XL} ${sharedClasses.textBold}`}>120+</h1>
      <p>Unlock your potential with new UI/UX features for your app and gain clarity for your business.</p>
    </div>
  );
};

