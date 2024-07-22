"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import { Marque } from './Components/Marque';
import About from './Components/About';
import Featured from './Components/Featured';
import Landing from './Components/Landing';
import Cards from './Components/Cards';
const Eyes = dynamic(() => import('./Components/Eyes'), { ssr: false });


const HomePage = () => {
  useEffect(() => {
    // Import locomotive-scroll dynamically on the client side
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });

      // Clean up
      return () => {
        scroll.destroy();
      };
    };

    const cleanup = initializeLocomotiveScroll();
    return () => cleanup.then(clean => clean());
  }, []);

  return (
    <div className='w-full min-h-screen bg-zinc-800'>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Eyes />
      <Featured/>
      <Cards/>
      {/* Other components */}
    </div>
  );
};

export default HomePage;
