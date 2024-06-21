import Orders from "@/components/account/user/Orders";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Orders/>
      </div>
    </div>
  );
};

export default page;
