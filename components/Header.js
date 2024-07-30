"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import CartIcon from './CartIcon';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [user, setuser] = useState();

  const isActive = (path) => pathname === path ? 'text-[#FF2020]' : '';

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setuser(userData);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='flex bg-white justify-between items-center h-10 border-b-[1px] px-4 md:px-32 w-full'>
        <div className='flex text-[#292621] text-[14px] gap-4 md:gap-8'>
          <Link href="/">About Us</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">Careers</Link>
        </div>
        <div className='hidden md:flex gap-8 text-[#292621] text-[14px]'>
          <Link href="/">My Wishlist</Link>
          <Link href="/">Track Your Order</Link>
          <div className='flex justify-center items-center gap-5 text-[#74706B]'>
            <button className='hover:text-[#FF2020] duration-500'><FaFacebook /></button>
            <button className='hover:text-[#FF2020] duration-500'><FaInstagram /></button>
            <button className='hover:text-[#FF2020] duration-500'><FaTwitter /></button>
            <button className='hover:text-[#FF2020] duration-500'><FaLinkedinIn /></button>
            <button className='hover:text-[#FF2020] duration-500'><FaYoutube /></button>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center h-[100px] w-full bg-[#F5F5F5] px-4 md:px-32 sticky top-0 z-10 shadow-md'>
        <div className='flex items-center'>
          <img src='/logo.png.webp' className='h-8 md:h-auto'></img>
        </div>
        <div className='hidden md:flex justify-center items-center font-semibold gap-7 md:gap-10'>
          <Link href="/Home" className={`hover:text-[#FF2020] duration-500 ${isActive('/Home')}`}>Home</Link>
          <Link href="/Men" className={`hover:text-[#FF2020] duration-500 ${isActive('/Men')}`}>Men</Link>
          <Link href="/Women" className={`hover:text-[#FF2020] duration-500 ${isActive('/Women')}`}>Women</Link>
          <Link href="/Jewelery" className={`hover:text-[#FF2020] duration-500 ${isActive('/Jewelery')}`}>Jewelery</Link>
          <Link href="/Electronics" className={`hover:text-[#FF2020] duration-500 ${isActive('/Electronics')}`}>Electronics</Link>
          <Link href="/Blog" className={`hover:text-[#FF2020] duration-500 ${isActive('/Blog')}`}>Blog</Link>
          <Link href="/Contact" className={`hover:text-[#FF2020] duration-500 ${isActive('/Contact')}`}>Contact</Link>
        </div>
        <div className='flex items-center text-[#292621] text-[28px] gap-4 md:gap-4'>
          <Link href="/" className='hover:text-[#FF2020] duration-500'><IoSearchOutline /></Link>
          {user ? <Link href="/Account" className={`hover:text-[#FF2020] duration-500 ${isActive('/Account')}`}><VscAccount /></Link> : <Link href="/Login" className={`flex items-center text-[20px] hover:text-[#FF2020] duration-500 ${isActive('/Login')}`}><h1>Login</h1><CiLogin /></Link>}
          <Link href="/AddToCart" className={`hover:text-[#FF2020] duration-500 ${isActive('/AddToCart')}`}><CartIcon /></Link>
          <button onClick={toggleMenu} className='block md:hidden text-[#292621]'>
            {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='sticky z-10 top-[80px] left-0 w-full bg-[#F5F5F5] flex flex-col items-center gap-4 py-4 md:hidden'>
          <Link href="/Home" className='hover:text-[#FF2020] duration-500'>Home</Link>
          <Link href="/Men" className='hover:text-[#FF2020] duration-500'>Men</Link>
          <Link href="/Women" className='hover:text-[#FF2020] duration-500'>Women</Link>
          <Link href="/Jewelery" className='hover:text-[#FF2020] duration-500'>Jewelery</Link>
          <Link href="/Electronics" className='hover:text-[#FF2020] duration-500'>Electronics</Link>
          <Link href="/Blog" className='hover:text-[#FF2020] duration-500'>Blog</Link>
          <Link href="/Contact" className='hover:text-[#FF2020] duration-500'>Contact</Link>
          <div className='flex gap-5 text-[#292621] text-[14px]'>
            <Link href="/">My Wishlist</Link>
            <Link href="/">Track Your Order</Link>
            <div className='flex justify-center items-center gap-3 text-[#74706B]'>
              <button className='hover:text-[#FF2020] duration-500'><FaFacebook /></button>
              <button className='hover:text-[#FF2020] duration-500'><FaInstagram /></button>
              <button className='hover:text-[#FF2020] duration-500'><FaTwitter /></button>
              <button className='hover:text-[#FF2020] duration-500'><FaLinkedinIn /></button>
              <button className='hover:text-[#FF2020] duration-500'><FaYoutube /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
