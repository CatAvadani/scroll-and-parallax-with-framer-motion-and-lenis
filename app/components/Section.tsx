import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import SectionDescription from './SectionDescription';

export default function Section() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh']);

  return (
    <div
      ref={container}
      className='relative flex items-center justify-center h-screen overflow-hidden'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <SectionDescription />
      <div className=' fixed top-[-10vh] left-0 h-[120vh] w-full'>
        <motion.div style={{ y }} className=' relative w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt='section-img'
            fill
            className=' object-cover'
          />
        </motion.div>
      </div>
    </div>
  );
}
