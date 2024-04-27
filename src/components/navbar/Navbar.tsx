"use client";
import React from "react";
import { BsBag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  //router 
  const router = useRouter();
  //Drawer Menu
  const [toggleMore, setMore] = useState(false);
  return (
    <div className=" font-light">
      <div className=" bg-[#1a1109] text-center text-[11px] font-bold py-2 text-white">
        FREE SHIPPPING PAN INDIA
      </div>
      <div className="flex items-center justify-between w-full h-[3.4em] px-2 md:px-24 mt-3">
        <Link href="/">
          <div className=" cursor-pointer">
            <Image
              src="/Images/logo/logo.svg"
              alt="logo"
              width={100}
              height={55}
            />
          </div>
        </Link>
        {/*menue for mobile*/}
        <div className="sm:hidden">
          <div
            onClick={() => {
              toggleMore ? setMore(false) : setMore(true);
            }}
          >
            <GiHamburgerMenu size={28} />
          </div>
          <Drawer
            open={toggleMore}
            onClose={() => {
              toggleMore ? setMore(false) : setMore(true);
            }}
            direction="right"
            className=""
            size="70%"
            style={{
              background: "linear-gradient(to bottom, #f5f5f5, #ffffff)",
            }}
          >
            <div className="flex flex-col w-fit mx-auto text-center text-xl mt-52">
              <div onClick={()=>{router.push("/")}} className="p-2">Home</div>
              <div className="p-2">Collection</div>
              <div onClick={()=>{router.push("/designYourOwn")}} className="p-2">Design Your Own</div>
              <div className="p-2">More</div>
              <div className="p-2">Bag</div>
            </div>
          </Drawer>
        </div>
        {/*menue for desktop */}
        <div className="flex text-sm items-center max-sm:hidden">
          {/* <div className="h-full px-3 cursor-pointer">
            <CiSearch size={22} />
          </div> */}
          <div onClick={()=>{router.push("/")}} className="border-r-2 h-full px-3 cursor-pointer">Home</div>
          <div className="border-r-2 h-full px-3 cursor-pointer">
            Collection
          </div>
          <div onClick={()=>{router.push("/designYourOwn")}} className="border-r-2 h-full px-3 cursor-pointer">
            Design Your Own
          </div>
          <div className="px-3 cursor-pointer h-full">More</div>

          <div className="px-3 cursor-pointer h-full">
            <BsBag className=" font-thin" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
