"use client"
import Discount from '@/components/Discount';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import React, { useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import Loader from '@/components/Loader';

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 1000); // 3000 ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
    <Header />
    <Discount />
    <PageTitle title="Contact" />
    <div className='mt-20 mb-20 flex flex-col lg:flex-row justify-center gap-8 lg:gap-32 px-4 lg:px-0'>
      <div className='w-full lg:w-[58%] h-auto lg:h-[75vh]'>
        <h1 className='text-[24px] lg:text-[27px] font-semibold font-jost mb-4'>Get in Touch</h1>
        <div className='flex flex-col gap-4 lg:gap-8'>
          <textarea placeholder='Enter Message...' className='h-[20vh] lg:h-[27vh] border pl-4 pt-2 font-jost' />
          <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 w-full'>
            <input type='email' placeholder='Enter Your Name' className='w-full lg:w-[49%] h-[6vh] lg:h-[7vh] border pl-3 font-jost' />
            <input type='text' placeholder='Enter Email Address' className='w-full lg:w-[49%] h-[6vh] lg:h-[7vh] border pl-3 font-jost' />
          </div>
          <input type='text' placeholder='Enter Subject' className='h-[6vh] lg:h-[7vh] border pl-3 font-jost' />
        </div>
        <button type='submit' className='py-4 px-11 border border-[#FF2020] text-[#FF2020] hover:bg-[#FF2020] hover:text-white duration-500 mt-8 lg:mt-12'>Send</button>
      </div>
      <div className='flex flex-col gap-6 lg:gap-8 mt-8 lg:mt-14'>
        <div className='flex items-center gap-4'>
          <IoHomeOutline className='text-[#8f9195] text-[27px]' />
          <div>
            <h1 className='text-[#292621] font-jost'>Buttonwood, California.</h1>
            <h1 className='text-[#8a8a8a] font-jost'>Rosemead, CA 91770</h1>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <FaTabletAlt className='text-[#8f9195] text-[27px]' />
          <div>
            <h1 className='text-[#292621] font-jost'>+1 253 565 2365</h1>
            <h1 className='text-[#8a8a8a] font-jost'>Mon to Fri 9am to 6pm</h1>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <BsEnvelope className='text-[#8f9195] text-[27px]' />
          <div>
            <h1 className='text-[#292621] font-jost'>support@colorlib.com</h1>
            <h1 className='text-[#8a8a8a] font-jost'>Send us your query anytime!</h1>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default page;