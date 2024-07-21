import React from 'react';

const Cards = () => {
  return (
    <div className='px-20 py-10 w-full flex gap-5 justify-center items-center'>
      <div className='relative flex-col rounded-3xl w-1/2 h-[50vh] bg-green-800 flex items-center justify-center card'>
        <img className='object-contain' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='Logo' />
        <button className='text-[#CDEA68] text-[12px] absolute px-5 py-1 left-10 bottom-10 border-2 border-[#CDEA68] rounded-full'>
          2019-2022
        </button>
      </div>
      <div className='w-1/2 h-[50vh] flex gap-5 card-group'>
        <div className='relative rounded-3xl w-1/2 h-full bg-zinc-900 flex items-center justify-center card-item'>
          <img className='object-contain' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='Logo' />
          <button className='text-white absolute px-5 py-1 left-10 bottom-10 border-2 border-white text-[12px] rounded-full'>
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className='rounded-3xl w-1/2 h-full bg-green-500 flex items-center justify-center card-item'>
          <img className='object-contain' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export default Cards;
