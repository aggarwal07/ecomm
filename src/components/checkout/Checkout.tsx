"use client";
import React from "react";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { useState, useEffect } from "react";
import Address from "./Address";
import Payment from "./Payment";
import OrderPlaced from "./OrderPlaced";
import { RxCross2 } from "react-icons/rx";
const Checkout = () => {
  const pages = [
    {
      id: "0",
      page: <Address onClick={() => setPage(1)} />,
    },
    {
      id: "1",
      page: <OrderPlaced />,
    },
    {
      id: "2",
      page: <Payment />,
    },
  ];
  const [page, setPage] = useState(0);
  const [alert, setAlert] = useState(true);
  return (
    <div className="w-full bg-gray-100">
      {alert&&<div className="flex items-center justify-center bg-black absolute w-full h-full bg-opacity-70 z-[1001]">
        <div className="absolute w-[80vw] bg-gray-200 text-md rounded-2xl lg:w-[25vw] top-[10vh] p-10 text-center">
        <RxCross2 className="absolute top-2 right-2 text-black hover:scale-125 cursor-pointer" size={25} onClick={()=>{setAlert(false)}} />
          Currently, We only accept <strong>Cash on Delivery(COD)</strong> . <br /> More payment options
          coming soon!
        </div>
      </div>}
      <div className="w-full h-[2vh]"></div>
      <div className="w-[97vw] lg:w-[66em] mx-auto">
        <div className="flex items-center w-fit gap-2 sm:gap-6 lg:gap-8 mx-auto text-gray-700 uppercase text-sm">
          <p className="">Address</p>
          <p>---------</p>
          <p>Order Placed</p>
          {/* <p>---------</p>
          <p>Payment</p> */}
        </div>
        <div className="w-fit mx-auto">{pages[page].page}</div>
      </div>
    </div>
  );
};

export default Checkout;
