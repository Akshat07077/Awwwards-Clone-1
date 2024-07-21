import { motion } from 'framer-motion'
import React from 'react'

export const Marque = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className= "rounded-3xl w-full py-20 bg-[#004D43]">
        <div className=' text border-t-2 border-b-2 uppercase pr-10 border-zinc-300 py-4 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration:5, repeat:Infinity}} className='text-white leading-none text-[17vw] font-semibold'> We are ochi </motion.h1>
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration:5, repeat:Infinity}}  className='text-white leading-none text-[17vw] font-semibold'> We are ochi </motion.h1>
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration:5, repeat:Infinity}}  className='text-white leading-none text-[17vw] font-semibold'> We are ochi </motion.h1>
        </div>
    </div>
  ) 
}
