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
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="w-full flex">
        <div className="w-[30em] border-r border-gray-300 px-8">
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
        <div className="w-[36em] flex flex-col gap-2 px-8">
          {cart.map((item: any, index: number) => (
            <div key={index} className="bg-black rounded-2xl">
              <CartCard product={item} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          handlePay();
        }}
        className="p-2 px-8 uppercase font-bold my-8 rounded-full w-fit bg-pink-600 text-white"
      >
        Pay Rs.1000
      </button>
    </div>
  );
};
export default Address;
