"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setErrors, setUser } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCard from "./CartCard";

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
    <div className="mt-10">
      <h1 className="text-3xl font-semibold mb-4 w-fit mx-auto">
        Shopping Cart
      </h1>
      <div className="flex w-[50vw] mt-10 mx-auto">
        <div className="w-fit gap-2 md:gap-5 flex flex-col">
          {cart.map((product: any, index: any) => (
            <div key={index} className="h-fit p-3 w-[30vw] border relative">
              <RxCross2
                onClick={() => {
                  handleRemoveCart(index);
                }}
                className="absolute top-1 right-1 cursor-pointer"
                size={25}
              />
              <CartCard product={product} />
            </div>
          ))}
        </div>
        <div className="border p-3 w-[20vw] justify-self-end">
          <p>Price Details ({cart.length} items)</p>
          <div className="flex mt-2 w-full justify-between">
            <div>
              <p>Total MRP</p>
              <p>Misclenous Charges</p>
              <p>Shipping Fee</p>
            </div>
            <div className="text-right">
              <p>₹ {calculateTotalPrice()}</p>
              <p>₹ 0</p>
              <p>Free</p>
            </div>
          </div>
          <hr className="mt-2 mb-2" />
          <div className="flex w-full justify-between">
            <p>Grand Total</p>
            <p className="text-right">₹ {calculateTotalPrice()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
