'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setErrors, setUser } from '@/store/slices/auth';
import React from 'react'
import { useEffect } from 'react';

const Cart = () => {
    const cart = useAppSelector((state) => state.auth.user?.cart || []);
    const user = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
      const loginUser = async () => {
        try {
          const response = await fetch(`https://backendfiggle.onrender.com/api/accounts/${user.email}/${user.password}`);
          if (response.ok) {
            const data = await response.json();
            console.log('Login successful', data);
            dispatch(setUser(data));
          } else {
            const { message } = await response.json();
            dispatch(setErrors(message));
          }
        } catch (error) {
          console.error('Login error:', error);
          dispatch(setErrors('An error occurred. Please try again later.'));
        }
      };
  
      // Call the loginUser function when the component mounts
      loginUser();
    }, []);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((product:any, index:any) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-semibold">${product.price}</p>
            {/* Add more details here if needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
