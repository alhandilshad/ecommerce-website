import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='w-full h-auto lg:h-[90vh] bg-[#171613]'>
        <div className='flex flex-col lg:flex-row justify-center items-center text-[#fff] gap-10 lg:gap-36 pt-16 pb-10 px-4'>
          <div className='flex flex-col gap-3 text-center lg:text-left'>
            <h1 className='text-[24px] font-[600] font-jost leading-[1.3]'>Subscribe Newsletter</h1>
            <p className='text-[15px]'>Subscribe newsletter to get 5% on all products.</p>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-2'>
            <input type="text" placeholder="Enter your email" className='h-[60px] w-full sm:w-[300px] lg:w-[400px] pl-5 text-[16px] bg-white text-black' />
            <button className='bg-[#FF2020] text-white font-semibold px-6 py-[18px] w-full sm:w-auto'>Subscribe</button>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <FaFacebook className='text-[24px] text-[#677F8B] cursor-pointer hover:text-[#FF2020] duration-500' />
            <FaInstagram className='text-[24px] text-[#677F8B] cursor-pointer hover:text-[#FF2020] duration-500' />
            <FaYoutube className='text-[24px] text-[#677F8B] cursor-pointer hover:text-[#FF2020] duration-500' />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-32 pt-16 pb-36 border-b border-[white/14] text-white px-4'>
          <div className='lg:mb-0 lg:ml-0 mb-8 ml-16'>
            <img src='/logo2_footer.png.webp' alt='Footer Logo' />
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-[18px] font-jost pb-4'>Shop Men</h1>
            <div className='flex flex-col gap-2 text-[#BBB9B5]'>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Clothing Fashion</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Winter</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Summer</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Formal</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Casual</Link>
            </div>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-[18px] font-jost pb-4'>Shop Women</h1>
            <div className='flex flex-col gap-2 text-[#BBB9B5]'>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Clothing Fashion</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Winter</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Summer</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Formal</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Casual</Link>
            </div>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-[18px] font-jost pb-4'>Shop Jewelery</h1>
            <div className='flex flex-col gap-2 text-[#BBB9B5]'>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Clothing Fashion</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Winter</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Summer</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Formal</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Casual</Link>
            </div>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-[18px] font-jost pb-4'>Shop Electronics</h1>
            <div className='flex flex-col gap-2 text-[#BBB9B5]'>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Clothing Fashion</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Winter</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Summer</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Formal</Link>
              <Link href="/" className='hover:underline hover:tracking-[.4px] duration-500'>Casual</Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-1 pt-6'>
          <h1 className='text-center text-[#BBB9B5] font-jost'>Copyright ©2024 All rights reserved | This template is made with</h1>
          <FaHeart className='text-[#FF2020]' />
          <h1 className='text-center text-[#BBB9B5] font-jost'>by <span className='text-[#FF2020]'>ALHAN</span></h1>
        </div>
      </div>
    </>
  )
}

export default Footer;