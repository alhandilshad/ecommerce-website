import React from "react";

const LatestNews = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#F6F6F6]">
        <h1 className="text-center text-[34px] font-jost font-[500] tracking-tighter pt-16">
          Latest News
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <div className="h-[70vh] w-[80%] md:w-[27%] hover:text-[#FF2020] duration-500 cursor-pointer">
            <img src="/blog1.jpg.webp" alt="Blog 1" className="w-full h-auto"/>
            <p className="text-[#74706B] text-[15px] pt-5">Fashion Tips</p>
            <h1 className="text-[20px] font-[600] pt-3">What Curling Icons Are The Best Ones</h1>
            <p className="text-[#74706B] text-[15px] pt-4">Consectetur adipisicing elit. Laborum fuga incidunt<br /> laboriosam voluptas iure, delectus..</p>
            <button className="text-[#292621] underline font-semibold hover:tracking-[.5px] duration-500 pt-4">Read More</button>
          </div>
          <div className="h-[70vh] w-[80%] md:w-[27%] hover:text-[#FF2020] duration-500 cursor-pointer">
            <img src="/blog2.jpg.webp" alt="Blog 2" className="w-full h-auto"/>
            <p className="text-[#74706B] text-[15px] pt-5">Fashion Tips</p>
            <h1 className="text-[20px] font-[600] pt-3">Vogue's Ultimate Guide To Autumn/<br /> Winter 2019 Shoes</h1>
            <p className="text-[#74706B] text-[15px] pt-4">Consectetur adipisicing elit. Laborum fuga incidunt<br /> laboriosam voluptas iure, delectus..</p>
            <button className="text-[#292621] underline font-semibold hover:tracking-[.5px] duration-500 pt-4">Read More</button>
          </div>
          <div className="h-[70vh] w-[80%] md:w-[27%] hover:text-[#FF2020] duration-500 cursor-pointer">
            <img src="/blog3.jpg.webp" alt="Blog 3" className="w-full h-auto"/>
            <p className="text-[#74706B] text-[15px] pt-5">Fashion Tips</p>
            <h1 className="text-[20px] font-[600] pt-3">What Curling Icons Are The Best Ones</h1>
            <p className="text-[#74706B] text-[15px] pt-4">Consectetur adipisicing elit. Laborum fuga incidunt<br /> laboriosam voluptas iure, delectus..</p>
            <button className="text-[#292621] underline font-semibold hover:tracking-[.5px] duration-500 pt-4">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;