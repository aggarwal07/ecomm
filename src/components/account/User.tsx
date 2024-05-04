'use client'
import React from "react";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const User = () => {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        // Fetch user data from local storage or API
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            // If user data is not found in local storage, you might want to fetch it from the API
            // Example API call:
            // fetchUserData();
        }
    }, []);
    const handleLogOut = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.back();
    };

  return (
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">User Profile</h2>
      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      <p className=" cursor-pointer" onClick={handleLogOut}>Log Out</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default User;
