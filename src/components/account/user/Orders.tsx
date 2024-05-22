"use client";
import React, { useEffect, useState } from "react";
import { TbWorldSearch } from "react-icons/tb";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const [orderId, setOrderId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [OrderDetailshide,setOrderDetails] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if(orderId){try {
        const response = await fetch(
          `https://backendfiggle.onrender.com/api/orders/${orderId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      }}
    };

    fetchData();
  }, [orderId]);
  console.log(data, "orderid");
  return (
    <div className="w-full mx-auto flex flex-col items-center p-5 px-10 h-[70vh]">
      <div className="w-full">
        <p className="w-full text-5xl font-bold">
          Check The Status <br /> Of Your Order
        </p>
        <p className="text-xl w-full mt-5">Enter Your Order Id</p>
        <input
          className="w-full mt-1 text-lg text-black p-1 px-2 outline-none rounded-lg red-shadow"
          placeholder="Order Id"
          type="text"
          onChange={(e) => {
            setOrderId(e.target.value);
          }}
        />
        {error && <div className="text-red-500">{error}</div>}
        <button onClick={()=>{setOrderDetails(true)}} className="bg-blue-400 my-3 mx-auto rounded-xl w-[10em] sm:w-[4em]  flex items-center gap-[0.5vw] justify-center p-2 text-center uppercase font-bold">
          <TbWorldSearch size={25} />
        </button>
        {OrderDetailshide&&data ?<OrderDetails data ={data}/>:""}
      </div>
    </div>
  );
};

export default Orders;
