"use client";
import React from "react";
import { BsBag } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  //router
  const router = useRouter();
  //Drawer Menu
  const [toggleMore, setMore] = useState(false);
  return (
    <div className=" font-light">
      <div className=" bg-white text-center text-[11px] font-bold py-2 text-black">
        FREE SHIPPPING PAN INDIA
      </div>
      <div className="flex items-center justify-between min-[1300px]:w-[81.25em] mx-auto h-[3.4em] px-2 md:px-24 py-10 bg-black text-white">
        <Link href="/">
          <div className=" cursor-pointer">
            <Image
              src="/Images/logo/image.png"
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
            className="text-black"
            size="70%"
            style={{
              background: "linear-gradient(to bottom, #f5f5f5, #ffffff)",
            }}
          >
            <div className="flex flex-col w-fit mx-auto text-center text-xl mt-52">
              <div
                onClick={() => {
                  router.push("/");
                }}
                className="p-2"
              >
                Home
              </div>
              <div onClick={() => {
              router.push("/collection");
            }} className="p-2">Collection</div>
              <div
                onClick={() => {
                  router.push("/designYourOwn");
                }}
                className="p-2"
              >
                Design Your Own
              </div>
              <div
                onClick={() => {
                  user ? router.push("/user") : router.push("/accounts");
                }}
                className="p-2"
              >
                {user ? "Hi, " + user.name : "Sign In"}
              </div>
              <div onClick={()=>{router.push("/cart")}} className="p-2">Bag</div>
            </div>
          </Drawer>
        </div>
        {/*menue for desktop */}
        <div className="flex text-sm items-center max-sm:hidden">
          {/* <div className="h-full px-3 cursor-pointer">
            <CiSearch size={22} />
          </div> */}
          <div
            onClick={() => {
              router.push("/");
            }}
            className=" h-full py-2 mx-3 cursor-pointer hover:border-b"
          >
            Home
          </div>
          <div onClick={() => {
              router.push("/collection");
            }} className=" h-full py-2 mx-3 cursor-pointer hover:border-b">
            Collection
          </div>
          <div
            onClick={() => {
              router.push("/designYourOwn");
            }}
            className=" h-full py-2 mx-3 cursor-pointer hover:border-b"
          >
            Design Your Own
          </div>
          <div
            onClick={() => {
              user ? router.push("/user") : router.push("/accounts");
            }}
            className="h-full py-2 mx-3 cursor-pointer hover:border-b"
          >
            {user ? "Hi, " + user.name.split(" ")[0].charAt(0).toUpperCase()+user.name.split(" ")[0].slice(1) : "Sign In"}
          </div>

          <div onClick={()=>{router.push("/cart")}} className="px-3 cursor-pointer h-full">
            <GrCart className=" font-thin" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
