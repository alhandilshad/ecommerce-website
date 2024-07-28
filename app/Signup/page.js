"use client";
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [inputArray, setInputArray] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setInputArray(savedUsers);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (username.trim() && email.trim() && password.trim()) {
      if (username.length < 5) {
        alert('Username must be at least 5 characters long.');
        return;
      }
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      const userExists = inputArray.some(user => user.user.toLowerCase() === username.toLowerCase());
      console.log("Checking if user exists:", userExists, inputArray);

      if (userExists) {
        alert('This user already exists!');
      } else {
        const newUser = {
          user: username,
          email: email,
          password: password
        };
        const updatedUsers = [...inputArray, newUser];
        setInputArray(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('user', JSON.stringify(newUser));
        console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
        console.log("updatedUsers", updatedUsers);
        setUsername('');
        setPassword('');
        setEmail('');
        router.push('/Home');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full gap-5 px-4 md:px-0'>
      <div>
        <h1 className='text-center text-black font-semibold text-3xl md:text-4xl pb-4'>Sign Up</h1>
        <h1 className='text-center text-black pb-6 md:pb-10'>Create your account to get full access</h1>
      </div>
      <div className='flex flex-col justify-center items-center gap-6 md:gap-7 w-full max-w-lg'>
        <div className='flex flex-col w-full'>
            <label className='text-[#140C40] font-[500] text-[15px] md:text-[17px] mb-1'>Name</label>
            <input 
                type="text" 
                placeholder="Enter your name" 
                className='border-[1px] border-gray-400 w-full h-[45px] md:h-[50px] pl-4' 
                value={username} 
                onChange={handleUsernameChange} 
            />
        </div>
        <div className='flex flex-col w-full'>
            <label className='text-[#140C40] font-[500] text-[15px] md:text-[17px] mb-1'>Email Address</label>
            <input 
                type="email" 
                placeholder="Enter your email address" 
                className='border-[1px] border-gray-400 w-full h-[45px] md:h-[50px] pl-4' 
                value={email} 
                onChange={handleEmailChange} 
            />
        </div>
        <div className='flex flex-col w-full'>
            <label className='text-[#140C40] font-[500] text-[15px] md:text-[17px] mb-1'>Password</label>
            <input 
                type="password" 
                placeholder="Enter your password" 
                className='border-[1px] border-gray-400 w-full h-[45px] md:h-[50px] pl-4' 
                value={password} 
                onChange={handlePasswordChange} 
            />
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-[215px] justify-center items-center mt-6 md:mt-7 w-full'>
          <span className="text-center md:text-left">Already have an account? <button onClick={() => router.push("/Login")} className='text-[#FF2020]'>Login</button> here</span>
          <button 
            type="submit" 
            className='bg-[#FF2020] opacity-[1] transition hover:duration-300 hover:opacity-[0.8] text-white px-6 py-3 md:py-4' 
            onClick={handleClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;