"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#171a20] text-white py-10 ">
      <div className="w-[97vw] min-[1069px]:w-[66em] mx-auto flex justify-between">
        {/* about us */}
        <div className="w-[60%]">
          <Link href="/">
            <div className="cursor-pointer">
              <Image
                src="/Images/logo/Canvify_LogoW.png"
                alt="logo"
                width={180}
                height={55}
              />
            </div>
          </Link>
          <p className="text-xl mt-8">About Us</p>
          <p className="text-sm mt-3 text-gray-400">
            Welcome to Canvify.in, your ultimate destination for personalized
            and designer print solutions. We specialize in transforming your
            spaces with custom posters, wall canvases, mousepads, keyboard
            skins, and more. Our mission is to bring your unique stories to life
            through high-quality prints that add a touch of creativity and
            artistry to every corner of your home or office. Discover endless
            possibilities and let us help you create a space that truly reflects
            your personality and style.
          </p>
        </div>
        {/* quick links */}
        <div className="w-[30%]">
          <p className="text-xl">Quick Links</p>
          <ul className="text-md mt-3 text-gray-400">
            <li className=" cursor-pointer hover:underline hover:text-white">
              Search
            </li>
            <li className=" cursor-pointer hover:underline hover:text-white">
              About
            </li>
            <li className=" cursor-pointer hover:underline hover:text-white">
              Contact
            </li>
            <li className=" cursor-pointer hover:underline hover:text-white">
              Product
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[97vw] min-[1069px]:w-[66em] mx-auto flex flex-col">
        <hr className="my-5 border-0 h-[1px] bg-gray-300" />
        <div className="flex self-end ">
          <FaInstagram
            className="cursor-pointer hover:scale-125"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
