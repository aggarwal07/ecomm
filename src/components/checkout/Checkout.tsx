"use client";
import React from "react";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { useState, useEffect } from "react";
import Address from "./Address";
import Payment from "./Payment";
import OrderPlaced from "./OrderPlaced";
const Checkout = () => {
  const pages = [
    {
      id: "0",
      page: <Address onClick={() => setPage(1)}/>,
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
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full h-[2vh]"></div>
      <div className="w-[97vw] lg:w-[66em] mx-auto">
        <div className="flex items-center w-fit gap-2 sm:gap-6 lg:gap-8 mx-auto text-gray-700 uppercase text-sm">
          <p className="">Address</p>
          <p>---------</p>
          <p>Review</p>
          <p>---------</p>
          <p>Payment</p>
        </div>
        <div className="w-fit mx-auto">{pages[page].page}</div>
      </div>
    </div>
  );
};

export default Checkout;
