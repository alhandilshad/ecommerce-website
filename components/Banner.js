import React from 'react'
import { Carousel } from 'antd';

const Banner = () => {
    const contentStyle1 = {
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(/h1_hero1.jpg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    const contentStyle2 = {
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(/h1_hero2.jpg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <>
        <Carousel autoplay>
            <div>
                <div style={contentStyle1}>
                    <div className='flex flex-col items-center md:items-start justify-center h-full ml-4 md:ml-24'>
                        <h1 className='text-[#FF2020] font-clicker-script text-[30px] md:text-[50px] leading-[1.2] font-normal pb-4 md:pl-20'>Fashion Sale</h1>
                        <h1 className='font-jost font-[500] text-[35px] md:text-[55px] leading-[1.3] pb-2'>Minimal Menz Style</h1>
                        <p className='text-[#74706B] text-[14px] md:text-[18px] text-center pb-6 md:pl-5'>Consectetor adipiscising elit. Laborum fuga incident<br className="hidden md:block" /> labiriosam voluptus iure, delectus dignissomos facilis<br className="hidden md:block" /> nequema nulla earam</p>
                        <button className='bg-[#292621] md:ml-[145px] font-medium border border-[#292621] uppercase text-white inline-block px-[30px] py-[10px] md:px-[47px] md:py-[15px] leading-[16px] text-[12px] md:text-[14px] duration-500 hover:bg-white hover:border hover:border-[#292621] hover:text-[#292621]'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div style={contentStyle2}>
                    <div className='flex flex-col justify-center items-center w-full h-full md:ml-80'>
                        <h1 className='text-[#FF2020] font-clicker-script text-[30px] md:text-[50px] leading-[1.2] font-normal pb-4'>Fashion Sale</h1>
                        <h1 className='font-jost font-[500] text-[35px] md:text-[55px] leading-[1.3] pb-2'>Minimal Menz Style</h1>
                        <p className='text-[#74706B] text-[14px] md:text-[18px] text-center pb-6'>Consectetor adipiscising elit. Laborum fuga incident<br className="hidden md:block" /> labiriosam voluptus iure, delectus dignissomos facilis<br className="hidden md:block" /> nequema nulla earam</p>
                        <button className='bg-[#292621] font-medium border border-[#292621] uppercase text-white inline-block px-[30px] py-[10px] md:px-[47px] md:py-[15px] leading-[16px] text-[12px] md:text-[14px] duration-500 hover:bg-white hover:border hover:border-[#292621] hover:text-[#292621]'>Shop Now</button>
                    </div>
                </div>
            </div>
        </Carousel>
        </>
    )
}

export default Banner;
