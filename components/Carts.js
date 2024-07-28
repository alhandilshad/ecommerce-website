import React from 'react'

const Carts = () => {
    const backgroundStyle1 = {
        backgroundImage: 'linear-gradient(to bottom, rgba(41, 38, 33, 0) 0%, #292621 100%), url("/items1.jpg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '340px',
    }
    const backgroundStyle2 = {
        backgroundImage: 'linear-gradient(to bottom, rgba(41, 38, 33, 0) 0%, #292621 100%), url("/items2.jpg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '340px',
    }
    const backgroundStyle3 = {
        backgroundImage: 'linear-gradient(to bottom, rgba(41, 38, 33, 0) 0%, #292621 100%), url("/items3.jpg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '340px',
    }

    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-10'>
                <div style={backgroundStyle1} className='w-full md:w-[420px]'>
                    <h1 className='text-white text-[24px] font-[600] text-center pt-64'>Men's Fashion</h1>
                </div>
                <div style={backgroundStyle2} className='w-full md:w-[420px]'>
                    <h1 className='text-white text-[24px] font-[600] text-center pt-64'>Women's Fashion</h1>
                </div>
                <div style={backgroundStyle3} className='w-full md:w-[420px]'>
                    <h1 className='text-white text-[24px] font-[600] text-center pt-64'>Jewelery</h1>
                </div>
            </div>
        </>
    )
}

export default Carts
