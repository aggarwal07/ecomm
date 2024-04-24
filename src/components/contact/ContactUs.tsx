'use client'
import React from "react";
import { FaHeadset } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";

const ContactUs = () => {
  //toggle contact us
  const [toggleContact, setContact] = useState(false);
  return (
    <div>
      <div className="fixed bottom-5 right-7 flex flex-col space-y-3 items-center">
        <div
          className={`space-y-3 flex-col ${toggleContact ? "flex" : "hidden"}`}
        >
          <div>
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
          </div>
        </div>

        <div
          onClick={() => {
            toggleContact ? setContact(false) : setContact(true);
          }}
          className=" rounded-lg  cursor-pointer hover:shadow-2xl hover:text-gray-400"
        >
          <FaHeadset size={35} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
