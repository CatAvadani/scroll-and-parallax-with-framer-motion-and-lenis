export default function IntroText() {
  return (
    <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-white mix-blend-overlay'>
      <h1 className='text-[5vw] uppercase mb-4 text-center font-bold mix-blend-overlay'>
        Welcome to Our Website
      </h1>
      <p className='text-[2vw] mb-6 text-center'>
        Discover our amazing products and services.
      </p>
      <button className=' bg-white/80 text-black px-6 py-2 rounded-lg text-[1.5vw] uppercase font-black'>
        Get Started
      </button>
    </div>
  );
}
