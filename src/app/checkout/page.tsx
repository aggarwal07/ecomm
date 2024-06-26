import Checkout from "@/components/checkout/Checkout";
import Footer from "@/components/footer/Footer";
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
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default page;
