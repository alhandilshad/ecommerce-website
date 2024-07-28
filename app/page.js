"use client"
import React, { useEffect, useState } from 'react'
import Signup from './Signup/page'
import Home from './Home/page';

const page = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);
  return (
    <>
    {user ? <Home /> : <Signup />}
    </>
  )
}

export default page;