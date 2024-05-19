"use client";
import React from "react";
import { FaHeadset } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Cart from "../account/Cart";
import { GrCart } from "react-icons/gr";

const ContactUs = () => {
  //toggle contact us
  const [toggleContact, setContact] = useState(false);
  return (
    <div>
      <div className="fixed bottom-9 right-14 flex flex-col items-end">
       {toggleContact&& <div
          className={`bg-gray-200 rounded-2xl absolute -top-[78vh] -right-10`}
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
            toggleContact ? setContact(false) : setContact(true);
          }}
          className=" rounded-lg  cursor-pointer hover:shadow-2xl hover:text-gray-400 mt-3"
        >
          <GrCart size={35} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
