"use client"
import Discount from '@/components/Discount';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import React, { useEffect, useState } from 'react';
import { MdAccountCircle } from "react-icons/md";
import { FaComments } from "react-icons/fa";
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
      <PageTitle title="Blog" />
      <div className='mt-16 mb-28'>
        <div className='flex flex-col justify-center items-center gap-20'>
          <div className='md:h-[92vh] h-auto md:pb-0 pb-7 w-[90%] md:w-[75%] lg:w-[60%] shadow-custom-shadow'>
            <img src='/single_blog_1.jpg.webp' className='w-full' />
            <h1 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold font-jost hover:text-[#FF2020] duration-200 cursor-pointer pt-10 pl-4 md:pl-7'>
              Google inks pact for new 35-storey office
            </h1>
            <p className='text-[#301A22] font-jost pt-4 pl-4 md:pl-7'>
              That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in
              <br /> place seed it second morning saying
            </p>
            <div className='flex gap-2 pt-6 pl-4 md:pl-7 text-[#999999]'>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <MdAccountCircle />
                <p>Travel, Lifestyle</p>
              </div>
              <p className='text-black'>|</p>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <FaComments />
                <p>03 Comments</p>
              </div>
            </div>
          </div>

          {/* Repeat the same structure for other blog posts */}
          {/* Blog Post 2 */}
          <div className='md:h-[92vh] h-auto md:pb-0 pb-7 w-[90%] md:w-[75%] lg:w-[60%] shadow-custom-shadow'>
            <img src='/single_blog_2.jpg.webp' className='w-full' />
            <h1 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold font-jost hover:text-[#FF2020] duration-200 cursor-pointer pt-10 pl-4 md:pl-7'>
              Google inks pact for new 35-storey office
            </h1>
            <p className='text-[#301A22] font-jost pt-4 pl-4 md:pl-7'>
              That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in
              <br /> place seed it second morning saying
            </p>
            <div className='flex gap-2 pt-6 pl-4 md:pl-7 text-[#999999]'>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <MdAccountCircle />
                <p>Travel, Lifestyle</p>
              </div>
              <p className='text-black'>|</p>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <FaComments />
                <p>03 Comments</p>
              </div>
            </div>
          </div>

          {/* Repeat this block for other blog posts */}
          {/* Blog Post 3 */}
          <div className='md:h-[92vh] h-auto md:pb-0 pb-7 w-[90%] md:w-[75%] lg:w-[60%] shadow-custom-shadow'>
            <img src='/single_blog_3.jpg.webp' className='w-full' />
            <h1 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold font-jost hover:text-[#FF2020] duration-200 cursor-pointer pt-10 pl-4 md:pl-7'>
              Google inks pact for new 35-storey office
            </h1>
            <p className='text-[#301A22] font-jost pt-4 pl-4 md:pl-7'>
              That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in
              <br /> place seed it second morning saying
            </p>
            <div className='flex gap-2 pt-6 pl-4 md:pl-7 text-[#999999]'>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <MdAccountCircle />
                <p>Travel, Lifestyle</p>
              </div>
              <p className='text-black'>|</p>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <FaComments />
                <p>03 Comments</p>
              </div>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className='md:h-[92vh] h-auto md:pb-0 pb-7 w-[90%] md:w-[75%] lg:w-[60%] shadow-custom-shadow'>
            <img src='/single_blog_4.jpg.webp' className='w-full' />
            <h1 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold font-jost hover:text-[#FF2020] duration-200 cursor-pointer pt-10 pl-4 md:pl-7'>
              Google inks pact for new 35-storey office
            </h1>
            <p className='text-[#301A22] font-jost pt-4 pl-4 md:pl-7'>
              That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in
              <br /> place seed it second morning saying
            </p>
            <div className='flex gap-2 pt-6 pl-4 md:pl-7 text-[#999999]'>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <MdAccountCircle />
                <p>Travel, Lifestyle</p>
              </div>
              <p className='text-black'>|</p>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <FaComments />
                <p>03 Comments</p>
              </div>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className='md:h-[92vh] h-auto md:pb-0 pb-7 w-[90%] md:w-[75%] lg:w-[60%] shadow-custom-shadow'>
            <img src='/single_blog_5.jpg.webp' className='w-full' />
            <h1 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold font-jost hover:text-[#FF2020] duration-200 cursor-pointer pt-10 pl-4 md:pl-7'>
              Google inks pact for new 35-storey office
            </h1>
            <p className='text-[#301A22] font-jost pt-4 pl-4 md:pl-7'>
              That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in
              <br /> place seed it second morning saying
            </p>
            <div className='flex gap-2 pt-6 pl-4 md:pl-7 text-[#999999]'>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <MdAccountCircle />
                <p>Travel, Lifestyle</p>
              </div>
              <p className='text-black'>|</p>
              <div className='flex items-center gap-2 text-[12px] md:text-[14px] hover:text-[#FF2020] duration-200 cursor-pointer'>
                <FaComments />
                <p>03 Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;