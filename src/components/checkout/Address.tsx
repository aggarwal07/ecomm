"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import CartCard from "../account/CartCard";
import InputBox from "../ui/InputBox";
import {
  setAddresss,
  setCarts,
  setCitys,
  setDate,
  setMobiles,
  setNames,
  setOrderId,
  setPostals,
  setStates,
} from "@/store/slices/checkout";
import axios from "axios";
import { PostalData } from "@/types/types";
import { setErrors, setUser } from "@/store/slices/auth";
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
  const [postalData, setPostalData] = useState<PostalData | null>(null);
   //remove all products from Cart
   const handleRemoveCart = async () => {
    // const newCart = user?.cart.filter((item: any, i: any) => i !== index);
    try {
      const endpoint = `https://backendfiggle.onrender.com/api/accounts/${user._id}`;
      const requestBody = {
        cart: [],
      };
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        console.log("Products removed from cart successfully");
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
    // try {
    //   const response = await fetch(
    //     `https://backendfiggle.onrender.com/api/accounts/${user.email}/${user.password}`
    //   );
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log("Login successful", data);
    //     dispatch(setUser(data));
    //   } else {
    //     const { message } = await response.json();
    //     setErrors(message);
    //   }
    // } catch (error) {
    //   console.error("Login error:", error);
    //   setErrors("An error occurred. Please try again later.");
    // }
  };
  const handlePay = (orderId:string) => {
    dispatch(setOrderId(orderId));
    dispatch(setDate(new Date().toString()))
    dispatch(setNames(name));
    dispatch(setMobiles(mobile));
    dispatch(setPostals(postal));
    dispatch(setAddresss(address));
    dispatch(setStates(state));
    dispatch(setCitys(city));
    dispatch(setCarts(cart));
    onClick();
  };
  // post request to api
  const handlePlaceOrder = async () => {
    //random order id
    function generateRandomOrderId(length: number): string {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
    const randomOrderId = generateRandomOrderId(15);
    const formData = {
      orderId : randomOrderId,
      name: name,
      phoneNumber: mobile,
      address: {
        pinCode: postal,
        address: address,
        city: city,
        state: state,
        orderDate : new Date().toString(),
      },
      cart: cart,
    };
    // e.preventDefault();
    try {
      const response = await fetch(
        "https://backendfiggle.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        handleRemoveCart();
        handlePay(data.orderId)
      } else {
        const { message } = await response.json();
        alert(message);
      }
    } catch (error) {
      alert(error);
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
  //validating pincode and states
  function isValidIndianPostalCode(postalCode: any) {
    const regex = /^[1-9]\d{5}$/;
    return regex.test(postalCode);
  }
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        if (postal.length === 6 && isValidIndianPostalCode(postal)) {
          const response = await axios.get(
            `https://api.postalpincode.in/pincode/${postal}`
          );
          const data = response.data[0];
          setPostalData(data);
          if (data.Status === "Success") {
            const postOffice = data.PostOffice[0];
            setState(postOffice.State);
            setCity(postOffice.District);
          } else {
            setPostalData(null);
            alert("Enter a Valid Postal Code");
          }
        } else {
          setPostalData(null);
          // alert("Enter a Valid Postal Code");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setState("");
        setCity("");
      }
    };

    fetchData();
  }, [postal]);

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
          {postalData ? (
            <div className="relative my-4">
              <label
                className="absolute -top-[14.4px] left-2 bg-gray-100 p-1 text-[13px] text-gray-400"
                htmlFor="city"
              >
                City*
              </label>
              <select
                className="bg-gray-100 w-full h-[2.2em] px-3 outline-none text-lg border-gray-300 border rounded-md focus:border-black"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {postalData?.PostOffice.map((office: any, index: number) => (
                  <option key={index} value={office.Name}>
                    {office.Name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <InputBox
              label="City*"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          )}
          <InputBox
            label="State*"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </div>
        <div className="lg:w-[36em] flex flex-col gap-2 px-8">
          <div className="my-4 lg:hidden border border-gray-200 " />
          <div className="h-[25em] flex flex-col gap-2 overflow-y-auto max-lg:shadow-2xl max-lg:p-2">
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
          handlePlaceOrder();
        }}
        className="p-2 px-8 uppercase font-bold my-8 rounded-full w-fit bg-pink-600 text-white"
      >
        Pay Rs.{calculateTotalPrice()}
      </button>
    </div>
  );
};
export default Address;
