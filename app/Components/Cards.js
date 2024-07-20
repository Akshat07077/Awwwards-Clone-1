import React from 'react'

const Cards = () => {
  return (
    <div className=' cards px-20 py-10 w-full flex gap-10 justify-center items-center'>
      <div className='card-1 rounded-3xl w-1/2 h-[50vh] bg-green-800 flex items-center justify-center'>
      <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/></div>
      <div className='card-2  w-1/2 h-[50vh] flex gap-10'>
      <div className='card1.1 rounded-3xl w-1/2 h-full bg-green-500 flex items-center justify-center'>
      <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/></div>
      <div className='card1.1 rounded-3xl w-1/2 h-full bg-green-500 flex items-center justify-center'>
      <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/></div>
      </div>

    </div>
  )
}

export default Cards