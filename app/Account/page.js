"use client";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("personalInfo");
  const [orderList, setorderList] = useState([]);
  const now = new Date();
  const time = now.toLocaleString();

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
      const orderData = JSON.parse(localStorage.getItem(`orders_${userData.user}`));
      if(orderData) {
        setorderList(orderData);
      }
    }

    return () => clearTimeout(timer);
  }, [router]);

  console.log(orderList);

  if (loading) {
    return <Loader />;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setUser(null);
    router.push("/Login");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "personalInfo":
        return (
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Manage your personal information, including phone numbers and
              email addresses where you can be contacted.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-sm font-medium text-gray-500">Name</div>
                {user && (
                  <div className="text-lg font-bold text-gray-900">
                    {user.user}
                  </div>
                )}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-sm font-medium text-gray-500">
                  Date of Birth
                </div>
                <div className="text-lg font-bold text-gray-900">
                  07 July 1993
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-sm font-medium text-gray-500">
                  Country Region
                </div>
                <div className="text-lg font-bold text-gray-900">
                  Georgia, Tbilisi
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-sm font-medium text-gray-500">
                  Language
                </div>
                <div className="text-lg font-bold text-gray-900">
                  English (UK)
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
                <div className="text-sm font-medium text-gray-500">
                  Contactable at
                </div>
                {user && (
                  <div className="text-lg font-bold text-gray-900">
                    {user.email}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case "orders":
        return (
          <div>
            <h3 className="text-xl leading-6 pb-5 font-medium text-gray-900">
              Order History
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delivery
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orderList.length > 0 ? (
                    orderList.map((order, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.products.length}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.orderTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.deliveryTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${order.totalAmount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.deliveryTime === time ? <p className="text-red-600 font-semibold">Delivered</p> : <div className="flex items-center"><p className="text-green-600 font-semibold">In Progress</p><img className="w-[70px]" src="/e0341dab7619da163adf938cf2d162c9 (1).gif"></img></div>}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap" colSpan="4">
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-white shadow-lg">
          <div className="px-6 py-4">
            <div className="flex flex-col space-x-4 items-center md:items-start">
              <img src="/download.jpg" alt="User" className="w-24 h-24 md:w-full md:h-full rounded-full" />
              {user && (
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-bold">{user.user}</h2>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              )}
            </div>
          </div>
          <nav className="mt-6">
            <ul>
              <li>
                <button
                  onClick={() => setActiveSection("personalInfo")}
                  className={`block px-6 py-3 text-left ${
                    activeSection === "personalInfo"
                      ? "text-[#FF2020] font-semibold"
                      : "text-gray-700 hover:bg-gray-100 w-full"
                  }`}
                >
                  Personal Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("orders")}
                  className={`block px-6 py-3 text-left ${
                    activeSection === "orders"
                      ? "text-[#FF2020] font-semibold"
                      : "text-gray-700 hover:bg-gray-100 w-full"
                  }`}
                >
                  Order History
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto py-4 md:py-6 sm:px-4 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <img src="/logo.png.webp" alt="Logo" />
                <button
                  className="bg-white border-2 border-[#FF2020] duration-500 hover:text-white hover:bg-[#FF2020] py-2 px-4 md:px-8 rounded-[30px]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              <div className="border-t border-gray-200 p-4">
                {renderSection()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;