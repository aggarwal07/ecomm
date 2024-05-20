import Checkout from "@/components/checkout/Checkout";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Checkout />
      </div>
    </div>
  );
};

export default page;
