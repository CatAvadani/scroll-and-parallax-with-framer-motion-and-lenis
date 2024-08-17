import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function IntroSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div className=' h-screen overflow-hidden'>
      <motion.div style={{ y }} className='relative h-full w-full'>
        <Image
          src={
            'https://plus.unsplash.com/premium_photo-1666277084702-b437bd0f4c82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNlYXxlbnwwfHwwfHx8MA%3D%3D'
          }
          fill
          alt='image'
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
}
