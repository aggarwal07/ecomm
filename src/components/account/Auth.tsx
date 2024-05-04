'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import User from './User';

const Auth = () => {
    const user = localStorage.getItem('user');  
    if (user){
        return (
          <div>
            <User/>
          </div>
        )
      }
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://backendfiggle.onrender.com/api/accounts/${email}/${password}`);
            if (response.ok) {
                const data = await response.json();
                // Handle successful login, e.g., set user state or redirect
                console.log('Login successful', data);
                localStorage.setItem('user', JSON.stringify(data));
                router.back();
            } else {
                const { message } = await response.json();
                setError(message);
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again later.');
        }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
  )
}

export default Auth
