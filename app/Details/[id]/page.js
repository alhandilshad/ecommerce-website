"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Discount from '@/components/Discount';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Loader from '@/components/Loader';

const page = () => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        setdata(json.find(item => item.id === parseInt(id)));
      });

    return () => clearTimeout(timer);
  }, [id]);

  if(loading){
    return <Loader />;
  }

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (data) {
      if(cart.some(item => item.id === data.id)){
        alert('Item already in cart');
      }else{
        cart.push(data);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cart-updated'));
      }
    }
  };

  return (
    <>
      <Header />
      <Discount />
      <PageTitle title="Product Details" />
      <div className='mt-16 mb-20 mx-4 lg:mx-28 w-[90%] md:w-[85%] h-auto bg-[#FF2020] p-4 md:p-10'>
        <div className='flex flex-col md:flex-row'>
          <img src={data?.image} alt={data?.title} className='w-full md:w-[50%] h-[30vh] md:h-[50vh] mb-4 md:mb-0' />
          <div className='flex flex-col justify-center items-start gap-6 md:ml-10'>
            <h1 className='text-[24px] md:text-[32px] font-semibold text-white'>{data?.title}</h1>
            <h1 className='text-[20px] md:text-[24px] text-white'>${data?.price}</h1>
            <p className='text-[14px] md:text-[16px] text-white'>{data?.description}</p>
            <button className='px-4 py-2 md:px-6 md:py-3 bg-white rounded-[26px] hover:shadow-custom hover:bg-[#FF2020] hover:text-white duration-500' onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page;