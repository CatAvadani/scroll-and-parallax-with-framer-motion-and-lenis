'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';
import Cube from './components/Cube';
import Description from './components/Description';
import Intro from './components/Intro';
import Section from './components/Section';
import TextParallax from './components/TextParallax';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Cube />
      <TextParallax />
      <div className=' h-screen'></div>
    </main>
  );
}
