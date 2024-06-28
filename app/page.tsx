import WordRotate from '@/components/animated/word-rotate';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className='relative h-screen w-full bg-black'>
      <div className='absolute inset-0'>
        <Spline scene="https://prod.spline.design/PIYI8NxTHtCwGsV5/scene.splinecode" />
      </div>
      <div className='relative z-10 flex flex-col items-center justify-center sm:items-start sm:justify-end h-full p-8 md:p-16 pointer-events-none'>
        <div className='absolute top-8 left-8'>
          {/**Image */}
        </div>
        <div className='flex flex-col items-center sm:items-start justify-center space-y-4 md:space-y-6 lg:space-y-8 mb-8 sm:mb-0'>
          <h1 className='grainy-text text-6xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-bold text-center sm:text-left' data-text="Develop">Develop</h1>
          <h1 className='grainy-text text-6xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-bold text-center sm:text-left' data-text="Innovate">Innovate</h1>
          <WordRotate words={["Launch", "Inspire", "Build", "Ship"]} className='text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center sm:text-left'/>
        </div>
        <div className='flex flex-col items-center sm:items-end sm:absolute sm:bottom-8 sm:right-8'>
          <p className='text-white text-lg md:text-xl lg:text-2xl text-center sm:text-right mb-2'>
            Empowering Open Source Innovation.
          </p>
          <p className='text-muted-foreground text-sm md:text-lg lg:text-xl text-center sm:text-right'>
            <span className='subtle-dotted-glitch'>
              AI / WEB / DESIGN
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}