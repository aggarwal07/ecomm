"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCart, setErrors, setUser } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import CartCard from "./CartCard";
import { HiOutlineArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import { FaPlus, FaMinus } from "react-icons/fa6";
const Cart = () => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.auth.user?.cart || []);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  //if user has not signed in
  if (user) {
  } else {
    return (
      <div className="bg-gray-200 h-[78vh] w-[24em] absolute top-0 rounded-xl right-0  flex flex-col items-center justify-center p-2">
        <p className="text-2xl text-gray-700 font-semibold text-center uppercase">
          Please sign in to add this product to your cart!!
        </p>
        {/* <form action=""></form> */}
      </div>
    );
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
        console.log("Product removed from cart successfully");
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
  //handling quantity
  const handleIncreaseQuantity = async (unit: any) => {
    let newCart = user.cart.map((item: any) =>
      item._id === unit?._id ? { ...item, quantity: item.quantity + 1 } : item
    );
    await updateCart(newCart);
  };

  const handleDecreaseQuantity = async (unit: any,index:number) => {
    if (unit.quantity ==1){
      handleRemoveCart(index);
    }
    let newCart = user.cart.map((item: any) =>
      item._id === unit?._id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    await updateCart(newCart);
  };

  const handleSetQuantity = async (unit: any, quantity: number) => {
    let newCart = user.cart.map((item: any) =>
      item._id === unit?._id ? { ...item, quantity: quantity } : item
    );
    await updateCart(newCart);
  };

  const updateCart = async (newCart: any) => {
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
        console.log("Cart updated successfully");
        // dispatch(openCart());
        dispatch(setCart(newCart));
      } else {
        console.error(
          "Failed to update cart:",
          response.status,
          response.statusText
        );
      }
    } catch (error: any) {
      console.error("Error updating cart:", error.message);
    }
  };
  return (
    <div className="w-fit h-[78vh] mx-auto text-gray-600 p-2 sm:p-5 bg-gray-200 ">
      <div className="font-medium max-sm:mt-2">
        <p>Shopping Cart</p>
        <p className="mt-1">
          You have {cart.length} {cart.length > 1 ? "items" : "item"} in your
          cart
        </p>
      </div>
      <div className="w-fit gap-1 md:gap-2 mt-4 flex flex-col h-[50vh] overflow-y-auto">
        {cart.map((product: any, index: any) => (
          <div
            key={index}
            className="h-fit w-[97vw] sm:w-[34em] flex items-center relative rounded-md bg-black"
          >
            <div className="flex text-gray-400 absolute left-[45%] items-center gap-1">
              <FaMinus
                className="cursor-pointer"
                size={14}
                onClick={() => {
                  handleDecreaseQuantity(product,index);
                }}
              />
              <input
                type="text"
                className="outline-none w-[2em] p-1 text-sm text-center bg-black text-white rounded-md "
                value={product?.quantity}
                // onChange={()=>{handleSetQuantity(product, product?.quantity)}}
              />
              <FaPlus
                className="cursor-pointer"
                size={14}
                onClick={() => {
                  handleIncreaseQuantity(product);
                }}
              />
            </div>
            <MdDelete
              onClick={() => {
                handleRemoveCart(index);
              }}
              className="absolute right-2 cursor-pointer text-white"
              size={25}
            />
            <CartCard product={product} />
          </div>
        ))}
      </div>
      {/* <div className="border p-3 mt-5 mx-auto w-[97vw] sm:w-[24em] rounded-lg text-white bg-gradient-to-b from-black to bg-gray-700 lg:p-5"> */}
      {/* <p className="font-bold text-xl lg:mb-2">Price Details</p>
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
        </div> */}
      <div className="flex w-[19em] items-center p-2 px-5 mx-auto bg-gradient-to-r from-[#4ca2be] to bg-[#54b4d3] rounded-lg  mt-5 justify-between">
        <p className="text-right">₹ {calculateTotalPrice()}</p>
        <button
          onClick={() => {
            router.push("/checkout");
          }}
          className="flex items-center"
        >
          CHECKOUT <HiMiniArrowLongRight className="ml-2" size={25} />{" "}
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cart;
