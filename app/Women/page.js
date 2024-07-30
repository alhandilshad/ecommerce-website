"use client"
import Discount from "@/components/Discount";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import PageTitle from "@/components/PageTitle";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WomenPage = () => {
  const router = useRouter();
  const [womendata, setwomendata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchWomenProducts();
    }, 1000);
    
    const fetchWomenProducts = () => {
      fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then((res) => res.json())
        .then((json) => {
          setwomendata(json);
          localStorage.setItem("womendata", JSON.stringify(json));
          setLoading(false);
        });
    };

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Discount />
      <PageTitle title="Women Category" />
      <div className="flex flex-wrap justify-center items-center gap-7 mt-28 mb-28 mx-3 md:mx-0">
        {womendata &&
          womendata.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[65vh] text-black hover:text-[#FF2020] duration-500 cursor-pointer"
              onClick={() => router.push(`/Details/${item.id}`)}
            >
              <div className="h-[50vh] w-full relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full hover:scale-110 transition-all duration-500 relative z-0"
                />
              </div>
              <h1 className="text-center font-jost pt-8 text-sm md:text-base">
                {item.title}
              </h1>
              <div className="flex justify-center items-center gap-4">
                <h1 className="text-center text-[#74706B] font-semibold text-[16px] md:text-[20px]">
                  ${item.price}
                </h1>
                <h1 className="text-[#CEBD9C] text-[16px] md:text-[20px] line-through">
                  $120
                </h1>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default WomenPage;