"use client"
import React from 'react';
import { FaSmileWink } from "react-icons/fa";

const Modal = ({ show, onClose, orderDetails }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Order Confirmation</h2>
        <p>Order Time: {orderDetails.orderTime}</p>
        <p>Estimated Delivery Time: {orderDetails.deliveryTime}</p>
        <p>Total Amount: ${orderDetails.totalAmount.toFixed(2)}</p>
        <div className='flex items-center gap-2 pt-4'>
        <p className='text-red-600 font-jost font-semibold text-[18px]'>Happy Shopping</p>
        <FaSmileWink className='text-orange-400 text-2xl' />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;