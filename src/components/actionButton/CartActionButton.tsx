"use client";
import React from "react";
import Cart from "../account/cart/Cart";
import { IoCart } from "react-icons/io5";
import { RiMapPin5Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCart } from "@/store/slices/cart";

const ContactUs = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <div className="max-sm:hidden">
      <div className="fixed bottom-10 right-8 flex flex-col items-end">
        {isOpen && (
          <div
            className={`rounded-2xl absolute -bottom-[2.2em] -right-[3.7vw] lg:-bottom-[2.4em] lg:-right-[2.4vw] 2xl:-bottom-[2.5em] 2xl:-right-[1.9vw]`}
          >
            <Cart />
          </div>
        )}

        {!isOpen&&<div
          onClick={() => {
            dispatch(toggleCart());
          }}
          className="relative rounded-full bg-[#29d129] p-3 text-white flex items-center justify-center cursor-pointer hover:shadow-2xl mt-3 hover:scale-110"
        >
          {cart.length>0&&<div className="flex items-center justify-center absolute -top-[2.1em]">
            <RiMapPin5Fill className="text-[#29d129]" size={40} />
            <p className="absolute text-xs">{cart.length}</p>
          </div>}
          <IoCart size={35} />
        </div>}
      </div>
    </div>
  );
};

export default ContactUs;
