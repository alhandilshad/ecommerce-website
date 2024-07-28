"use client"
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useRouter } from 'next/navigation';

const App = () => {
    const router = useRouter();
    const [mendata, setmendata] = useState([]);
    const [womendata, setwomendata] = useState([]);
    const [jewelerydata, setjewelerydata] = useState([]);
    const [electronicsdata, setelectronicsdata] = useState([]);

    useEffect(() => {
        fetchMenProducts();
        fetchWomenProducts();
        fetchJeweleryProducts();
        fetchElectronicsProducts();
    }, []);

    const fetchMenProducts = () => {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res => res.json())
            .then(json => {
                setmendata(json);
                localStorage.setItem('mendata', JSON.stringify(json));
            });
    }

    const fetchWomenProducts = () => {
        fetch("https://fakestoreapi.com/products/category/women's%20clothing")
            .then(res => res.json())
            .then(json => {
                const limitedData = json.slice(0, 4);
                setwomendata(limitedData);
                localStorage.setItem('womendata', JSON.stringify(limitedData));
            })
    }

    const fetchJeweleryProducts = () => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res => res.json())
            .then(json => {
                setjewelerydata(json);
                localStorage.setItem('jewelerydata', JSON.stringify(json));
            })
    }

    const fetchElectronicsProducts = () => {
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then(res => res.json())
            .then(json => {
                const limitedData = json.slice(1, 5);
                setelectronicsdata(limitedData);
                localStorage.setItem('electronicsdata', JSON.stringify(limitedData));
            })
    }

    return (
        <>
            <div className='mt-20 mb-32'>
                <h1 className='text-center text-[#292621] text-[24px] md:text-[34px] font-[500] pb-6'>Trending This Week</h1>
                <Tabs defaultActiveKey="1" size='large' centered>
                    <Tabs.TabPane tab="Men's" key="1">
                        <div className='flex flex-wrap justify-center items-center gap-7 mt-12'>
                            {mendata && mendata.map((item) => {
                                return (
                                    <div key={item.id} className='w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[65vh] text-black hover:text-[#FF2020] duration-500 cursor-pointer' onClick={() => router.push(`/Details/${item.id}`)}>
                                        <div className='h-[50vh] w-full relative overflow-hidden'>
                                            <img src={item.image} alt={item.title} className='w-full h-full hover:scale-110 transition-all duration-500 relative z-0' />
                                        </div>
                                        <h1 className='text-center font-jost pt-8 text-sm md:text-base'>{item.title}</h1>
                                        <div className='flex justify-center items-center gap-4'>
                                            <h1 className='text-center text-[#74706B] font-semibold text-[16px] md:text-[20px]'>${item.price}</h1>
                                            <h1 className='text-[#CEBD9C] text-[16px] md:text-[20px] line-through'>$120</h1>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Women's" key="2">
                        <div className='flex flex-wrap justify-center items-center gap-7 mt-12'>
                            {womendata && womendata.map((item) => {
                                return (
                                    <div key={item.id} className='w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[65vh] text-black hover:text-[#FF2020] duration-500 cursor-pointer' onClick={() => router.push(`/Details/${item.id}`)}>
                                        <div className='h-[50vh] w-full relative overflow-hidden'>
                                            <img src={item.image} alt={item.title} className='w-full h-full hover:scale-110 transition-all duration-500 relative z-0' />
                                        </div>
                                        <h1 className='text-center font-jost pt-8 text-sm md:text-base'>{item.title}</h1>
                                        <div className='flex justify-center items-center gap-4'>
                                            <h1 className='text-center text-[#74706B] font-semibold text-[16px] md:text-[20px]'>${item.price}</h1>
                                            <h1 className='text-[#CEBD9C] text-[16px] md:text-[20px] line-through'>$120</h1>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Jewelery" key="3">
                        <div className='flex flex-wrap justify-center items-center gap-7 mt-12'>
                            {jewelerydata && jewelerydata.map((item) => {
                                return (
                                    <div key={item.id} className='w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[65vh] text-black hover:text-[#FF2020] duration-500 cursor-pointer' onClick={() => router.push(`/Details/${item.id}`)}>
                                        <div className='h-[50vh] w-full relative overflow-hidden'>
                                            <img src={item.image} alt={item.title} className='w-full h-full hover:scale-110 transition-all duration-500 relative z-0' />
                                        </div>
                                        <h1 className='text-center font-jost pt-8 text-sm md:text-base'>{item.title}</h1>
                                        <div className='flex justify-center items-center gap-4'>
                                            <h1 className='text-center text-[#74706B] font-semibold text-[16px] md:text-[20px]'>${item.price}</h1>
                                            <h1 className='text-[#CEBD9C] text-[16px] md:text-[20px] line-through'>$120</h1>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Electronics" key="4">
                        <div className='flex flex-wrap justify-center items-center gap-7 mt-12'>
                            {electronicsdata && electronicsdata.map((item) => {
                                return (
                                    <div key={item.id} className='w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[65vh] text-black hover:text-[#FF2020] duration-500 cursor-pointer' onClick={() => router.push(`/Details/${item.id}`)}>
                                        <div className='h-[50vh] w-full relative overflow-hidden'>
                                            <img src={item.image} alt={item.title} className='w-full h-full hover:scale-110 transition-all duration-500 relative z-0' />
                                        </div>
                                        <h1 className='text-center font-jost pt-8 text-sm md:text-base'>{item.title}</h1>
                                        <div className='flex justify-center items-center gap-4'>
                                            <h1 className='text-center text-[#74706B] font-semibold text-[16px] md:text-[20px]'>${item.price}</h1>
                                            <h1 className='text-[#CEBD9C] text-[16px] md:text-[20px] line-through'>$120</h1>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    );
}

export default App;