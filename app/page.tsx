
import WordRotate from '@/components/animated/word-rotate';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className='relative h-screen w-full bg-black'>
      <div className='absolute inset-0'>
        <Spline scene="https://prod.spline.design/PIYI8NxTHtCwGsV5/scene.splinecode" />
      </div>
      <div className='relative z-10 flex flex-col items-start justify-end h-full p-8 md:p-16 pointer-events-none'>
        <div className='absolute top-8 left-8'>
          {/**Image */}
        </div>
        <div className='flex flex-col items-start justify-center space-y-4 md:space-y-6 lg:space-y-8'>
          <h1 className='grainy-text text-6xl md:text-7xl lg:text-9xl text-white font-bold' data-text="Develop">Develop</h1>
          <h1 className='grainy-text text-6xl md:text-7xl lg:text-9xl text-white font-bold' data-text="Innovate">Innovate</h1>
          <WordRotate words={["Launch", "Inspire", "Build", "Ship"]} className='text-6xl md:text-7xl lg:text-9xl font-bold'/>
        </div>
        <p className='absolute bottom-8 right-8 text-white text-lg md:text-xl lg:text-2xl'>
          Empowering Open Source Innovation.
        </p>
      </div>
    </main>
  );
}