'use client'
import React from "react";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearUser } from "@/store/slices/auth";

const User = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state)=> state.auth.user);
    const handleLogOut = () => {
        dispatch(clearUser());
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
