"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setErrors, setUser } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import CartCard from "./CartCard";
import { HiOutlineArrowLongLeft,HiMiniArrowLongRight } from "react-icons/hi2";

const Cart = () => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.auth.user?.cart || []);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  if (user) {
  } else {
    router.push("accounts");
  }
  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch(
          `https://backendfiggle.onrender.com/api/accounts/${user.email}/${user.password}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful", data);
          dispatch(setUser(data));
        } else {
          const { message } = await response.json();
          dispatch(setErrors(message));
        }
      } catch (error) {
        console.error("Login error:", error);
        dispatch(setErrors("An error occurred. Please try again later."));
      }
    };

    // Call the loginUser function when the component mounts
    loginUser();
  }, []);
  const handleRemoveCart = async (index: number) => {
    const newCart = user?.cart.filter((item: any, i: any) => i !== index);
    try {
      const endpoint = `https://backendfiggle.onrender.com/api/accounts/${user._id}`;
      const requestBody = {
        cart: newCart,
      };
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        console.log("Product added to cart successfully");
      } else {
        console.error(
          "Failed to add product to cart:",
          response.status,
          response.statusText
        );
      }
    } catch (error: any) {
      console.error("Error adding product to cart:", error.message);
    }
    try {
      const response = await fetch(
        `https://backendfiggle.onrender.com/api/accounts/${user.email}/${user.password}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        dispatch(setUser(data));
      } else {
        const { message } = await response.json();
        setErrors(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors("An error occurred. Please try again later.");
    }
  };
  //total MRP
  function calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of cart) {
        totalPrice += parseInt(item.price);
    }
    return totalPrice;
}
  return (
    <div className="mt-10 w-[97vw] lg:w-[60em] mx-auto text-gray-600">
      <div className="text-xl flex items-center font-bold mb-4 w-fit">
      <HiOutlineArrowLongLeft size={32}/> <p className="ml-2">Continue Shopping</p>
      </div>
      <hr />
      <div className="mt-4 font-medium">
        <p>Shopping Cart</p>
        <p className="mt-1">You have {cart.length} {cart.length>1?"items":"item"} in your cart</p>
      </div>
      <div className="flex max-lg:flex-col justify-between w-full mt-8">
        <div className="w-fit gap-2 md:gap-5 flex flex-col">
          {cart.map((product: any, index: any) => (
            <div key={index} className="h-fit p-3 w-[97vw] lg:w-[34em] flex items-center relative shadow-2xl rounded-md mb-5">
              <MdDelete
                onClick={() => {
                  handleRemoveCart(index);
                }}
                className="absolute right-2 cursor-pointer"
                size={25}
              />
              <CartCard product={product} />
            </div>
          ))}
        </div>
        <div className="border p-3 w-[97vw] lg:w-[24em] rounded-lg text-white bg-gradient-to-b from-[#3b71ca] to bg-[#2f5aa2] lg:p-5">
          <p className="font-bold text-xl lg:mb-2">Price Details</p>
          <hr />
          <div className="flex mt-2 w-full justify-between">
            <div>
              <p className="mt-2">Total MRP</p>
              <p className="mt-2">Misclenous Charges</p>
              <p className="mt-2">Shipping Fee</p>
            </div>
            <div className="text-right">
              <p className="mt-2">₹ {calculateTotalPrice()}</p>
              <p className="mt-2">₹ 0</p>
              <p className="mt-2">Free</p>
            </div>
          </div>
          <div className="flex w-[19em] items-center p-2 px-5 mx-auto bg-gradient-to-r from-[#4ca2be] to bg-[#54b4d3] rounded-lg  mt-5 justify-between">
            <p className="text-right">₹ {calculateTotalPrice()}</p>
            <div className="flex items-center">CHECKOUT <HiMiniArrowLongRight className="ml-2" size={25} /> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
