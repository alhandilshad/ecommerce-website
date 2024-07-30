"use client"
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Discount from "@/components/Discount";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart-updated"));
    updateTotal(index);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cart-updated"));
      updateTotal(index);
    }
  };

  const updateTotal = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].total = updatedCart[index].price * updatedCart[index].quantity;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckOut = () => {
    const now = new Date();
    const orderTime = now.toLocaleString();
    const deliveryDate = new Date(now);
    deliveryDate.setDate(now.getDate() + 3);
    const deliveryTime = deliveryDate.toLocaleString();
    const order = {
      orderTime,
      deliveryTime,
      totalAmount: cartItems.reduce((acc, curr) => acc + (curr.total || (curr.price * (curr.quantity || 1))), 0),
      products: cartItems,
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const existingOrders = JSON.parse(localStorage.getItem(`orders_${user.user}`)) || [];
    existingOrders.push(order);
    localStorage.setItem(`orders_${user.user}`, JSON.stringify(existingOrders));

    setOrderDetails(order);
    setShowModal(true);
    setCartItems([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cart-updated"));
  };

  return (
    <>
      <Header />
      <Discount />
      <PageTitle title="Cart" />
      <div className="mx-4 lg:mx-28 w-[90%] md:w-[85%] h-auto bg-white p-4 md:p-10 mt-10 mb-20">
        {cartItems.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">
                        <img
                          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover"
                          src={item.image}
                          alt={item.title}
                        />
                        <p className="mt-2 text-[12px] md:text-[14px] text-[#292621]">
                          {item.title}
                        </p>
                      </td>
                      <td className="border px-4 py-2 text-center text-[12px] md:text-[14px]">
                        ${item.price}
                      </td>
                      <td className="border px-4 py-2 text-center text-[12px] md:text-[14px]">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            className="bg-[#F8312F] text-white px-2 py-1 rounded-md text-[10px] md:text-[12px]"
                            onClick={() => handleIncrement(index)}
                          >
                            +
                          </button>
                          <span>{item.quantity || 1}</span>
                          <button
                            className="bg-[#F8312F] text-white px-2 py-1 rounded-md text-[10px] md:text-[12px]"
                            onClick={() => handleDecrement(index)}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2 text-center text-[12px] md:text-[14px]">
                        ${item.quantity > 1 ? item.total : item.price}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <button
                          className="bg-[#F8312F] text-white px-4 py-2 rounded-md text-[10px] md:text-[12px]"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col items-end gap-7 pt-10 pr-4 md:pr-40">
              <div className="flex items-center gap-4">
                <h1 className="text-md md:text-xl">Sub total:</h1>
                <h1 className="text-md md:text-xl">
                  ${cartItems.reduce((acc, curr) => acc + (curr.total || (curr.price * (curr.quantity || 1))), 0)}
                </h1>
              </div>
              <button
                className="px-4 py-[8px] md:px-6 md:py-[10px] bg-[#FF2020] rounded-3xl text-white hover:bg-[#cf0f0f] duration-300 text-[12px] md:text-[14px]"
                onClick={handleCheckOut}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="mt-4 text-[12px] md:text-[18px] text-[#8a8a8a]">
            No items in the cart
          </p>
        )}
      </div>
      <Footer />
      <Modal show={showModal} onClose={() => setShowModal(false)} orderDetails={orderDetails} />
    </>
  );
};

export default CartPage;
