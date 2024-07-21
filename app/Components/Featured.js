import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-zinc-500 border-b-2 pb-10'>
        <h1 className='text-white text-[7vh]'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className='py-5 cards flex gap-10 w-full mt-10'>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className='cardcontainer relative w-1/2 h-[70vh]'
          >
            <h1 className='text-6xl overflow-hidden z-[9] text-white absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  transition={{ ease: "easeInOut", delay: index * 0.1 }}
                  animate={cards[0]}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full'>
              <img
                className='w-full rounded-3xl h-full bg-cover'
                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
                alt='FYDE project'
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className='cardcontainer relative w-1/2 h-[70vh]'
          >
            <h1 className='text-6xl overflow-hidden z-[9] flex text-white absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  transition={{ ease: "easeInOut", delay: index * 0.1 }}
                  animate={cards[1]}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full rounded-3xl h-full'>
              <img
                className='w-full rounded-3xl h-full bg-cover'
                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'
                alt='VISE project'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
