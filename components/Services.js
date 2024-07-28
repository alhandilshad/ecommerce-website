import React from 'react'

const Services = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-14 mt-24 mb-24 px-4'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src='/services1.svg' className='mb-5 w-16 md:w-auto' alt='Fast & Free Delivery'></img>
          <h1 className='text-[18px] md:text-[21px] font-[500]'>Fast & Free Delivery</h1>
          <p className='text-[#57667e] text-center md:text-left'>Free delivery on all orders</p>
        </div>
        <div className='hidden md:block w-[1px] h-[17vh] bg-[#edeff2]'></div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src='/services2.svg' className='mb-5 w-16 md:w-auto' alt='Secure Payment'></img>
          <h1 className='text-[18px] md:text-[21px] font-[500]'>Secure Payment</h1>
          <p className='text-[#57667e] text-center md:text-left'>Free delivery on all orders</p>
        </div>
        <div className='hidden md:block w-[1px] h-[17vh] bg-[#edeff2]'></div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src='/services3.svg' className='mb-5 w-16 md:w-auto' alt='Money Back Guarantee'></img>
          <h1 className='text-[18px] md:text-[21px] font-[500]'>Money Back Guarantee</h1>
          <p className='text-[#57667e] text-center md:text-left'>Free delivery on all orders</p>
        </div>
        <div className='hidden md:block w-[1px] h-[17vh] bg-[#edeff2]'></div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src='/services4.svg' className='mb-5 w-16 md:w-auto' alt='Online Support'></img>
          <h1 className='text-[18px] md:text-[21px] font-[500]'>Online Support</h1>
          <p className='text-[#57667e] text-center md:text-left'>Free delivery on all orders</p>
        </div>
      </div>
    </>
  )
}

export default Services;
