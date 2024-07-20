import React from 'react'


function Featured() {
  return (
    <div className='w-full py-20 '>
        <div className=' w-full px-20  border-zinc-500 border-b-2 pb-10 '>
            <h1 className='text-white text-[7vh]'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className=' py-5 cards flex gap-10 w-full mt-10'>
                <div className='cardcontainer relative w-1/2 h-[70vh]'>
                    <h1 className='text-6xl z-[9] text-white absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 '>FYDE</h1>
                    <div className='card w-full  h-full'>
                        <img className='w-full rounded-3xl h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt=''/>
                    </div>
                </div>
                <div className='cardcontainer relative w-1/2 h-[70vh]  '>
                    <h1 className='text-6xl overflow-hidden text-white absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 '>VISE</h1>

                    <div className='card w-full rounded-3xl h-full'>
                    <img className='w-full rounded-3xl h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt=''/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured