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
