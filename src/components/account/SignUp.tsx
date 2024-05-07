'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { setErrors,setUser } from '@/store/slices/auth';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    contactNo: '',
    cart : [],
    wishlist : []
  });
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backendfiggle.onrender.com/api/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Redirect to login page or handle success as needed
        dispatch(setUser(formData));
        router.push('/user');
      } else {
        const { message } = await response.json();
        dispatch(setErrors(message));
        setError(message);
      }
    } catch (error) {
      console.error('Sign up error:', error);
      dispatch(setErrors('An error occurred. Please try again later.'));
      setError('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const validateEmail = () => {
    const emailRegex = /.+@.+\..+/;
    const isValid = emailRegex.test(formData.email);
    setIsEmailValid(isValid);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={validateEmail} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          {isEmailValid ? null : <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact Number:</label>
            <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Sign Up</button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
