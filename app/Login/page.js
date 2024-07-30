"use client";
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const userExists = savedUsers.some(user => 
      user.user.toLowerCase() === username.toLowerCase() && user.password === password
    );

    if (userExists) {
      const userData = savedUsers.find(user => user.user.toLowerCase() === username.toLowerCase());
      localStorage.setItem('user', JSON.stringify(userData));
      router.push('/Home');
    } else {
      setError('Invalid username, email, or password.');
    }
  };

  return (
    <>
    <Header />
    <div className='flex flex-col justify-center items-center min-h-screen w-full gap-5 px-4 md:px-0'>
      <h1 className='text-center text-black font-semibold text-3xl md:text-4xl'>Login</h1>
      <h1 className='text-center text-black pb-6 md:pb-10'>Enter Login details to get access</h1>
      <div className='flex flex-col justify-center items-center gap-6 md:gap-7 w-full max-w-lg'>
        <div className='flex flex-col w-full'>
            <label className='text-[#140C40] font-[500] text-[15px] md:text-[17px] mb-1'>Username</label>
            <input 
                type="text" 
                placeholder="Enter Username" 
                className='border-[1px] border-gray-400 w-full h-[45px] md:h-[50px] pl-4' 
                value={username} 
                onChange={handleUsernameChange} 
            />
        </div>
        <div className='flex flex-col w-full'>
            <label className='text-[#140C40] font-[500] text-[15px] md:text-[17px] mb-1'>Password</label>
            <input 
                type="password" 
                placeholder="Enter Password" 
                className='border-[1px] border-gray-400 w-full h-[45px] md:h-[50px] pl-4' 
                value={password} 
                onChange={handlePasswordChange} 
            />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className='flex flex-col md:flex-row gap-4 md:gap-[235px] justify-center items-center mt-6 md:mt-8 w-full'>
          <span className="text-center md:text-left">Don't have an account? <button onClick={() => router.push("/Signup")} className='text-[#FF2020]'>Sign Up</button> here</span>
          <button 
            type="button" 
            className='bg-[#FF2020] opacity-[1] transition hover:duration-300 hover:opacity-[0.8] text-white px-6 py-3 md:py-4' 
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;