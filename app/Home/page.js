"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Discount from '@/components/Discount';
import Banner from '@/components/Banner';
import Carts from '@/components/Carts';
import Trending from '@/components/Trending';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import LatestNews from '@/components/LatestNews';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import TestMessage from '@/components/TestMessage';

const Home = () => {
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
    <TestMessage />
    <Header />
    <Discount />
    <Banner />
    <Carts />
    <Trending />
    <Testimonials />
    <Services />
    <LatestNews />
    <Footer />
    </>
  );
};

export default Home;