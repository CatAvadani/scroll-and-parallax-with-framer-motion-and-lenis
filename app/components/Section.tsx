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
            src='https://images.unsplash.com/photo-1539895360896-16462a60ad12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpc2h8ZW58MHx8MHx8fDA%3D'
            alt='section-img'
            fill
            className=' object-cover'
          />
        </motion.div>
      </div>
    </div>
  );
}
