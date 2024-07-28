import Link from 'next/link';
import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <>
      <div className='bg-[#F3EAD8] w-full h-auto lg:h-[20vh] py-5 lg:py-0'>
        <h1 className='text-center text-[24px] lg:text-[34px] font-[600] text-[#292621] pt-2 lg:pt-5'>{title}</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-2 pt-2 text-[#74706B]'>
          <Link href="/Home">Home</Link>
          <h1 className='hidden lg:block'>|</h1>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  )
}

export default PageTitle;