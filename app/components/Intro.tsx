import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Intro() {
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
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8fHww'
          }
          fill
          alt='image'
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
}
