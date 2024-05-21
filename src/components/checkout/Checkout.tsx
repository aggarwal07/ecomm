"use client";
import React from "react";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { useState, useEffect } from "react";
import Address from "./Address";
import Review from "./Review";
import Payment from "./Payment";
const Checkout = () => {
  const pages = [
    {
      id: "0",
      page: <Address onClick={() => setPage(1)}/>,
    },
    {
      id: "1",
      page: <Review />,
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
      <div className="w-[66em] mx-auto">
        <div className="flex items-center w-fit gap-8 mx-auto text-gray-700 uppercase text-sm">
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
