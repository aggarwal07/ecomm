"use client";
import React from "react";
import { FaHeadset } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Cart from "../account/cart/Cart";
import { GrCart } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCart } from "@/store/slices/cart";

const ContactUs = () => {
  //toggle contact us
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state)=> state.isCartOpen.isOpen);
  return (
    <div className="max-sm:hidden">
      <div className="fixed bottom-9 right-14 flex flex-col items-end">
       {isOpen&& <div
          className={`bg-gray-200 rounded-2xl absolute -top-[91.5vh] -right-[5.8vw] lg:-top-[90.8vh] lg:-right-[3.9vw] 2xl:-top-[91.3vh] 2xl:-right-[2.9vw]`}
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
          className=" rounded-full flex items-center justify-center cursor-pointer hover:shadow-2xl mt-3 hover:scale-110"
        >
          <GrCart size={35} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
