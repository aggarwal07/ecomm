"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setCart, setErrors, setUser } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import CartCard from "./CartCard";
import { HiOutlineArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { clearCart, closeCart, setCart } from "@/store/slices/cart";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Cart = () => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.cart.cart || []);
  const dispatch = useAppDispatch();

  const handleRemoveCart = async (index: number) => {
    const newCart = cart.filter((item: any, i: any) => i !== index);
    dispatch(setCart(newCart));
  };
  //total MRP
  function calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += parseInt(item?.price) * parseInt(item?.quantity);
    }
    return totalPrice;
  }
  //discount
  function calculateDiscount(): number {
    let totalDiscount = 0;
    for (const item of cart) {
      if (item?.maxPrice != "") {
        console.log(totalDiscount);
        totalDiscount +=
          (parseInt(item?.maxPrice) - parseInt(item?.price)) *
          parseInt(item?.quantity);
      }
      // totalDiscount += parseInt(item?.discount);
    }
    return totalDiscount;
  }
  //handling quantity
  const handleIncreaseQuantity = async (unit: any) => {
    let newCart = cart.map((item: any) =>
      item?._id === unit?._id ? { ...item, quantity: item?.quantity + 1 } : item
    );
    dispatch(setCart(newCart));
  };

  const handleDecreaseQuantity = async (unit: any, index: number) => {
    if (unit.quantity == 1) {
      handleRemoveCart(index);
    }
    let newCart = cart.map((item: any) =>
      item?._id === unit?._id && item?.quantity > 1
        ? { ...item, quantity: item?.quantity - 1 }
        : item
    );
    dispatch(setCart(newCart));
  };

  const handleSetQuantity = async (unit: any, quantity: number) => {
    let newCart = cart.map((item: any) =>
      item?._id === unit?._id ? { ...item, quantity: quantity } : item
    );
    // await updateCart(newCart);
  };
  useGSAP(()=>{
    gsap.from('#cartMainDiv div',{
      x:50,
      duration:0.5,
      ease:"power1.out",
      stagger:0.1,
      opacity : 0,
    })
  })
  return (
    <div id="cartMainDiv" className="w-fit h-[100vh] mx-auto text-white p-2 sm:p-5 background-gradient">
      <div className="font-medium max-sm:mt-2">
        <div className="flex justify-between">
          <p className="font-black text-xl lg:text-2xl">Cart</p>
          <button
            onClick={() => {
              setTimeout(() => {
                dispatch(closeCart());
              }, 500);
              gsap.to("#cart", {
                opacity: 0,
                duration: 0.7,
                scale: 0,
                x: 150,
                y: 200,
                ease: "power4.out",
              });
            }}
            className="flex gap-1 items-center border bg-white px-2 cursor-pointer rounded-full text-xs lg:text-sm text-black"
          >
            <RxCross2 size={15} />
            Close
          </button>
        </div>
        <p className="mt-4 text-right text-sm lg:text-md">
          You have {cart.length} {cart.length > 1 ? "items" : "item"} in your
          cart
        </p>
      </div>
      <div className="w-fit gap-1 md:gap-2 mt-1 flex flex-col h-[65%] overflow-y-auto p-2 rounded-lg shadow-2xl bg-gray-200 min-w-[25vw]">
        {cart.length < 1 ? (
          <div className="flex flex-col items-center justify-center h-[35%] w-full text-gray-400">
            <LuShoppingCart size={120} />
            <p className="text-lg mt-4">No items in the cart</p>
          </div>
        ) : (
          ""
        )}
        {cart.map((product: any, index: any) => (
          <div
            key={index}
            className="h-fit w-[97vw] sm:w-[34em] flex items-center relative rounded-md bg-black"
          >
            <div className="flex text-gray-400 absolute left-[53%] items-center gap-1">
              <FaMinus
                className="cursor-pointer"
                size={12}
                onClick={() => {
                  handleDecreaseQuantity(product, index);
                }}
              />
              <input
                type="text"
                className="outline-none w-[2em] p-1 text-xs text-center bg-black text-white rounded-md "
                value={product?.quantity}
                // onChange={()=>{handleSetQuantity(product, product?.quantity)}}
              />
              <FaPlus
                className="cursor-pointer"
                size={12}
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
      <div className="w-full text-black p-2 px-5 mx-auto h-[21%] bg-gray-200 rounded-lg  mt-5">
        <div className="justify-between h-[30%] flex items-center">
          <p className="text-gray-500 text-xs 2xl:text-sm">Discount</p>
          <p className="text-sm 2xl:text-lg">-₹{calculateDiscount()}</p>
        </div>
        <div className="flex items-center text-lg h-[40%] border-t border-b border-gray-300">
          <div className="w-[40%] h-full flex max-2xl:items-center 2xl:flex-col max-2xl:justify-around justify-center">
            <p className="text-gray-500 text-sm">Subtotal</p>{" "}
            <p className="font-bold text-lg 2xl:text-xl">
              {" "}
              ₹{calculateTotalPrice()}
            </p>
          </div>
          <button
            onClick={() => {
              if (cart.length < 1) {
                alert("Please Add Products To Your Cart!!!");
              } else {
                router.push("/checkout");
              }
            }}
            className="flex items-center justify-center text-white bg-green-500  h-full w-[60%] hover:text-xl hover:w-[95%]"
          >
            CHECKOUT
            {/* <HiMiniArrowLongRight className="ml-2" size={25} />{" "} */}
          </button>
        </div>
        <div
          onClick={() => {
            router.back();
          }}
          className="text-center text-sm lg:text-md cursor-pointer font-bold h-[30%] flex items-center justify-center"
        >
          Continue Shopping
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cart;
