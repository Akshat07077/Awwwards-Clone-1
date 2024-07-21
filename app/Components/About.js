import React from 'react';

const About = () => {
  return (
    <div>
      {/* Introduction Section */}
      <div className='bg-[#CDEA68] w-full p-20'>
        <h1 className='text-[3vw] w-[90%] tracking-tight leading-[3.2vw]'>
          Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>  
      </div> 

      {/* Information Section */}
      <div className='border-b-2 bg-[#CDEA68] px-20 py-5 flex flex-col md:flex-row justify-between min-h-[20vw] w-full border-zinc-500 border-t-2'>
        <h2 className='text-xl font-semibold mb-4 md:mb-0'>What you can expect</h2>
        <p className='w-full md:w-[30%] text-lg'>
          We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. <br />
          We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
        </p>
        <div className='flex items-center gap-4 mt-4 md:mt-0'>
          <h2 className='text-xl font-semibold'>Social handles</h2>
          {/* Add your social handles here */}
        </div>
      </div>

      {/* Approach and Image Section */}
      <div className='pb-5 h-full flex flex-col md:flex-row gap-5 pt-10 pr-10 bg-[#CDEA68]'>
        <div className='w-full md:w-1/2 px-20'>
          <h1 className='text-[6vh] font-semibold mb-4'>Our Approach:</h1>
          <button className='flex gap-5 items-center p-5 bg-black text-white rounded-full w-40 h-14'>
            Read More
            <div className='w-2 h-2 rounded-full bg-white'></div>
          </button>
        </div>
        <div className='w-full md:w-1/2 bg-cover bg-center h-[60vh] rounded-2xl' style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")' }}>
          {/* Background image */}
        </div>
      </div>
    </div>
  );
}

export default About;
