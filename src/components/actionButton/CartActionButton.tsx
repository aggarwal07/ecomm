"use client";
import React from "react";
import { FaHeadset } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Cart from "../account/cart/Cart";
import { IoCart } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCart } from "@/store/slices/cart";

const ContactUs = () => {
  //toggle contact us
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state)=> state.cart.isOpen);
  return (
    <div className="max-sm:hidden">
      <div className="fixed bottom-10 right-8 flex flex-col items-end">
       {isOpen&& <div
          className={`bg-gray-200 rounded-2xl absolute -top-[88.2vh] -right-[3.7vw] lg:-top-[88vh] lg:-right-[2.4vw] 2xl:-top-[88.3vh] 2xl:-right-[1.9vw]`}
        >
          {/* <div>
            <FaInstagram size={35} />
          </div>
          <div>
            <FaWhatsapp size={35} />
          </div>
          <div>
            <FaPinterest size={35} />
          </div>
          <div>
            <MdAlternateEmail size={35} />
          </div> */}
          <Cart />
        </div>}

        <div
          onClick={() => {
            // toggleContact ? setContact(false) : setContact(true);
            dispatch(toggleCart());
          }}
          className=" rounded-full bg-[#29d129] p-3 text-white flex items-center justify-center cursor-pointer hover:shadow-2xl mt-3 hover:scale-110"
        >
          <IoCart size={35} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
