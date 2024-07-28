import React from 'react'

const Testimonials = () => {
  return (
    <>
      <div className='w-full h-auto md:h-[60vh] bg-[#F3EAD8] flex flex-col justify-center items-center gap-10 p-6'>
        <div>
          <h1 className='text-[#292621] text-[24px] md:text-[34px] font-[500]'>Customer Testimonial</h1>
        </div>
        <div>
          <p className='text-center text-[18px] md:text-[22px] text-[#292621] leading-relaxed md:leading-normal font-[300] font-jost'>
            Everybody is different, which is why we offer styles for every body.<br className='hidden md:inline' /> 
            Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos<br className='hidden md:inline' /> 
            facilis neque nulla earum.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
          <img src='/founder-img.png.webp' alt='Founder' className='w-20 h-20 rounded-full object-cover'/>
          <div className='text-center md:text-left'>
            <h1 className='text-[#292621] font-[500]'>Petey Cruiser</h1>
            <h1 className='text-[#74706B]'>Designer at Colorib</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials;