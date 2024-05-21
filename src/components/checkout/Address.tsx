"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useState } from "react";
import CartCard from "../account/CartCard";
import InputBox from "../ui/InputBox";
import {
  setAddresss,
  setCarts,
  setCitys,
  setMobiles,
  setNames,
  setPostals,
  setStates,
} from "@/store/slices/checkout";
interface AddressProps {
  onClick: () => void;
}
const Address: React.FC<AddressProps> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.auth.user?.cart) || [];
  const user = useAppSelector((state) => state.auth.user);
  //form data
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const handlePay = () => {
    dispatch(setNames(name));
    dispatch(setMobiles(mobile));
    dispatch(setPostals(postal));
    dispatch(setAddresss(address));
    dispatch(setStates(state));
    dispatch(setCitys(city));
    dispatch(setCarts(cart));
    onClick();
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
    <div className="flex flex-col items-center mt-14">
      <div className="w-full flex max-lg:flex-col">
        <div className="lg:w-[30em] lg:border-r border-gray-300 px-8">
          <p className="text-black text-md uppercase font-bold mb-4">
            Contact Details
          </p>
          <InputBox label="Name*" onChange={(e) => setName(e.target.value)} />
          <InputBox
            label="Mobile No*"
            onChange={(e) => setMobile(e.target.value)}
          />
          <p className="text-black text-md uppercase font-bold mb-4 mt-8">
            Address
          </p>
          <InputBox
            label="Postal Code*"
            onChange={(e) => setPostal(e.target.value)}
          />
          <InputBox
            label="Address(House No,Building,Street,City)*"
            onChange={(e) => setAddress(e.target.value)}
          />
          <InputBox label="City*" onChange={(e) => setCity(e.target.value)} />
          <InputBox label="State*" onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="lg:w-[36em] flex flex-col gap-2 px-8">
          <div className="my-4 lg:hidden border border-gray-200 " />
          <div className="h-[25em] overflow-y-auto max-lg:shadow-2xl max-lg:p-2">
            {cart.map((item: any, index: number) => (
              <div key={index} className="bg-black rounded-2xl">
                <CartCard product={item} />
              </div>
            ))}
          </div>
          <div className="border p-3 mt-5 mx-auto w-[70vw] lg:w-[24em] rounded-lg text-white bg-gradient-to-b from-black to bg-gray-700 lg:p-5">
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
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handlePay();
        }}
        className="p-2 px-8 uppercase font-bold my-8 rounded-full w-fit bg-pink-600 text-white"
      >
        Pay Rs.{calculateTotalPrice()}
      </button>
    </div>
  );
};
export default Address;
