import Spline from '@splinetool/react-spline/next';

export default function Better() {
  return (
    <div className='w-full h-full border-[1.5px] border-zinc-900 rounded-[20px] mt-4'>
      <Spline
        scene="https://prod.spline.design/jvV9yMG3wSkxztgm/scene.splinecode" 
        className='rounded-[20px]'
      />
    </div>
  );
}
