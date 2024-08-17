export default function IntroText() {
  return (
    <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-white mix-blend-difference'>
      <h1 className='text-[5vw] uppercase mb-4 text-center  mix-blend-difference'>
        Welcome to Our Website
      </h1>
      <p className='text-[2vw] mb-6 text-center'>
        Discover our amazing products and services.
      </p>
      <button className=' bg-white text-black px-6 py-2 rounded-lg text-[1.5vw] uppercase font-black'>
        Get Started
      </button>
    </div>
  );
}
