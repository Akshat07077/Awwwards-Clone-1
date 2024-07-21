import React from 'react'

const Cards = () => {
  return (
    <div className=' cards px-20 py-10 w-full flex gap-5 justify-center items-center'>
      <div className=' relative flex-col card-1 rounded-3xl w-1/2 h-[50vh] bg-green-800 flex items-center justify-center'>
        <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
        <button className='text-[#CDEA68] text-[12px] absolute px-5 py-1 left-10 bottom-10 border-2 rounded-full '>2019-2022</button></div>
      <div className='card-2 w-1/2 h-[50vh] flex gap-5'>
        <div className='card1.1 relative rounded-3xl w-1/2 h-full bg-zinc-900 flex items-center justify-center'>
          <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
          <button className='text-white absolute px-5 py-1 left-10 bottom-10 border-2 text-[12px] rounded-full '>RATING 5.0 ON CLUTCH</button>
        </div>

        <div className='card1.1 rounded-3xl w-1/2 h-full bg-green-500 flex items-center justify-center'>
          <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/></div>
      </div>

    </div>
  )
}

export default Cards