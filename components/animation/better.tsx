import Spline from '@splinetool/react-spline/next';

export default function Better() {
  return (
    <div className='relative w-full h-screen border-[1.5px] border-zinc-900 rounded-[20px] mt-4 overflow-hidden'>
      <h1 className='absolute inset-0 flex items-center justify-center text-[130px] z-10 text-tssWhite pointer-events-none font-semibold'>
        Transform ideas
      </h1>
      <Spline
        scene="https://prod.spline.design/EJRQXkoDWOIvGQS7/scene.splinecode" 
        className='absolute inset-0 w-full h-full rounded-[20px]'
      />
    </div>
  );
}