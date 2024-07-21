"use client"
import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import { Marque } from './Components/Marque'
import About from './Components/About'
import { Eyes } from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import LocomotiveScroll from 'locomotive-scroll';

export const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
	  wrapper: window,
	  content: document.documentElement,
	  lerp: 0.1,
	  duration: 0.6,
	  orientation: 'vertical',
	  gestureOrientation: 'vertical',
	  smoothWheel: true,
	  smoothTouch: true,
	  wheelMultiplier: 1,
	  touchMultiplier: 0.5,
	  normalizeWheel: true,
	  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  }
});
const Page = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, []);

  return (
    <div className='w-full min-h-screen bg-zinc-800'>
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  );
}

export default Page;
