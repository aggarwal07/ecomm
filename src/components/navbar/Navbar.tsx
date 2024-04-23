import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" font-light">
      <div className=" bg-[#1a1109] text-center text-[11px] font-bold py-2 text-white">
        FREE SHIPPPING PAN INDIA
      </div>
      <div className="flex items-center justify-between w-full h-[3.4em] px-24 mt-3">
        <div className=" cursor-pointer">
          <Image
            src="/Images/logo/logo.svg"
            alt="logo"
            width={100}
            height={55}
          />
        </div>
        <div className="flex text-sm items-center">
          <div className="h-full px-3 cursor-pointer">
            <CiSearch size={22} />
          </div>
          <div className="border-r-2 h-full px-3 cursor-pointer">Home</div>
          <div className="border-r-2 h-full px-3 cursor-pointer">
            Collection
          </div>
          <div className="border-r-2 h-full px-3 cursor-pointer">
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
