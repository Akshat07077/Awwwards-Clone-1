import React from 'react'
import { FaArrowUp } from "react-icons/fa6";


export const Landing = () => {
  return (
    <div className='w-full h-screen pt-1 bg-zinc-900 '>
      <div className='uppercase textstructure mt-48 px-20'>
        {["We Create", "Eye-Opening", "Presentation"].map((item,index)=>{
          return (
            <div className='masker'>
                <div className='w-fit flex items-end overflow-hidden'>
                  {index===1 && (
                    <div className='bg-green-400 mr-[1vw] w-[8vw] relative -top-[0.8vw] rounded-md h-[5.7vw] '></div>
                  )} 
                  <h1 className='text-white text-[8vw] leading-[7.5vw] tracking-tighter text font-semibold'> {item}</h1>
                </div>
            </div>
          );
        })}

      </div>
      <div className='border-t-2 border-zinc-700 mt-28 px-20 py-6 flex justify-between  items-center'>
        {["For public and private companies", "From the frist pitch of IPO"].map((item,index)=><p className='text-white leading-none font-light tracking-tight '>
          {item}</p>)}
          <div className='flex items-center gap-4'>
            <div className='btn px-5 py-2 border-2 text-white border-zinc-600 font-light rounded-full uppercase '> <button>Start The project</button></div>
            <div className=' w-10 h-10 flex justify-center rounded-full border-2 border-zinc-500'>
              <span className="rotate-[45deg] stroke-cyan-500">
                <FaArrowUp/>
              </span>
              </div>
          </div>
      </div>

    </div>
  )
}
export default Landing