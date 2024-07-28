"use client"
import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCount();

    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener('cart-updated', handleCartUpdate);

    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <IoCartOutline />
      {cartCount > 0 && (
        <span className="absolute -top-3 -right-3 bg-[#FF2020] text-white text-xs rounded-full px-2 py-[3px]">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;