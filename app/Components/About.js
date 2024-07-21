import React from 'react'

const About = () => {
  return (
    <div >
      <div className='bg-[#CDEA68] w-full p-20'>
          <h1 className='text-[3vw] w-[90%] tracking-tight leading-[3.2vw] '>
          Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
          </h1>  
      </div> 
      <div className='border-b-2 bg-[#CDEA68] px-20 py-5 flex justify-between min-h-[20vw] w-full border-zinc-500 border-t-2'>
          <h2>What you can expect</h2>
          <h2 className='w-[30%]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. <br> 
          </br> 
              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h2>
          <h2>Social handles</h2>
      </div>
      <div className='pb-5 h-full flex gap-5 pt-10 pr-10  bg-[#CDEA68]'>
        <div className='w-1/2 px-20'>
          <h1 className='text-[6vh]'>Our Approach:</h1>
          <button className='flex gap-5 items-center p-5 bg-black mt-4 text-white rounded-[6vh] w-40 h-14'>Read More
          <div className='w-2 h-2 rounded-full bg-white'></div>
          </button>
        </div>
        <div className=' h-[60vh] w-1/2 rounded-2xl bg-slate-400'> </div>
      </div>
    </div>
  )
}

export default About