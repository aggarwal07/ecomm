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
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTab } from "@/store/slices/TabSelected";
import { IoIosSearch } from "react-icons/io";
import Search from "./Search";

const Navbar = () => {
  
  const selectedTab = useAppSelector((state) => state.tabSelected.selectedTab);
  const [showSearch, setShowSearch] = useState(false);
  //navbar items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Posters", path: "/collection/Poster" },
    { name: "Mouse Pads", path: "/collection/Mouse Pad" },
    { name: "Polaroid", path: "/collection/Polaroid" },
    { name: "Track Your Order", path: "/trackYourOrder" },
    // {
    //   name: user
    //     ? `Hi, ${
    //         user.name.split(" ")[0].charAt(0).toUpperCase() +
    //         user.name.split(" ")[0].slice(1)
    //       }`
    //     : "Sign In",
    //   path: user ? "/user" : "/accounts",
    // },
  ];
  //router
  const router = useRouter();
  const dispatch = useAppDispatch();
  //Drawer Menu
  const [toggleMore, setMore] = useState(false);
  return (
    <div className=" font-light">
      {showSearch && (
        <div className="w-full h-[100vh] absolute bg-white top-[2em] z-[1000] bg-opacity-60">
          <Search
            closeSearch={() => {
              setShowSearch(false);
            }}
          />
        </div>
      )}
      <div className=" bg-white text-center text-[11px] font-bold py-2 text-black">
        FREE SHIPPPING PAN INDIA
      </div>
      <div className="flex items-center justify-between min-[1300px]:w-[60em] mx-auto px-2 md:px-24 py-6 bg-[rgba(0, 0, 0, 0.942)] text-white">
        <Link href="/">
        {/* desktop Logo */}
          <div
            className="max-sm:hidden cursor-pointer"
          >
            <Image
              src="/Images/logo/Canvify_Logo6.png"
              alt="logo"
              width={160}
              height={55}
            />
          </div>
          {/* mobile logo */}
          <div
            className="sm:hidden cursor-pointer"
          >
            <Image
              src="/Images/logo/Canvify_Logo6.png"
              alt="logo"
              width={100}
              height={55}
            />
          </div>
        </Link>
        {/* search for mobile */}
        <div className="cursor-pointer sm:hidden">
          <IoIosSearch
            onClick={() => {
              setShowSearch(true);
            }}
            size={25}
          />
        </div>
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
              <button
                onClick={() => {
                  router.push("/");
                }}
                className="p-2"
              >
                Home
              </button>
              <div
                onClick={() => {
                  router.push("/collection/Polaroid");
                }}
                className="p-2"
              >
                Polaroid
              </div>
              <button
                onClick={() => {
                  router.push("/collection/Mouse Pad");
                }}
                className="p-2"
              >
                Mouse Pads
              </button>
              <button
                onClick={() => {
                  router.push("/collection/Poster");
                }}
                className="p-2"
              >
                Posters
              </button>
              <button
                onClick={() => {
                  router.push("/trackYourOrder")
                }}
                className="p-2"
              >
                Track Your Order
              </button>
              <button
                onClick={() => {
                  router.push("/cart");
                }}
                className="p-2"
              >
                Bag
              </button>
            </div>
          </Drawer>
        </div>
        {/*menue for desktop */}
        <div className="flex flex-wrap text-sm px-5 items-center max-sm:hidden">
          {navItems.map((item, index: number) => (
            <div
              key={index}
              onClick={() => {
                router.push(item.path);
                // dispatch(setTab(index));
              }}
              className={`h-full py-2 mx-3 cursor-pointer hover:border-b hover:scale-125 `}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="py-2 mx-3 cursor-pointer max-sm:hidden">
          <IoIosSearch
            onClick={() => {
              setShowSearch(true);
            }}
            size={23}
            className="hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
