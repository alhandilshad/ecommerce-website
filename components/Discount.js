import React from 'react'

const Discount = () => {
  return (
    <div className='w-full md:h-12 bg-[#16161a] flex flex-col md:flex-row justify-center items-center gap-2 p-2'>
        <h1 className='text-white text-[14px] md:text-[16px] font-[400] text-center md:text-left'>
            Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
        </h1>
        <button className='text-[#CEBD9C] text-[14px] md:text-[16px] font-[500] border-b-[2px] border-[#CEBD9C] hover:tracking-[1px] duration-500'>
            Shop Now
        </button>
    </div>
  )
}

export default Discount;