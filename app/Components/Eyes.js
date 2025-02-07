import React, { useEffect, useState } from 'react';

export const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        // This code runs only on the client side
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up the event listener
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='h-full w-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='bg-white h-[15vw] flex items-center justify-center w-[15vw] rounded-full'>
                        <div className='bg-black flex items-center justify-center h-2/3 relative w-2/3 rounded-full'>
                            <h1 className='text-white'>Play</h1>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='bg-white h-4 w-4 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white h-[15vw] w-[15vw] items-center flex justify-center rounded-full'>
                        <div className='bg-black flex justify-center items-center h-2/3 w-2/3 relative rounded-full'>
                            <h1 className='text-white'>Play</h1>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='bg-white h-4 w-4 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
