"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import ImageUploader from "../imageUploader/ImageUploader";

const DesignYourOwn = () => {
  //quantity of the product
  const [quantity, setQuantity] = useState(1);
  //handle show prod description
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div>
      <div className="w-full bg-[#fffffff6] py-6 sm:py-10">
        <div className="w-[97vw] min-[1069px]:w-[66em] mx-auto">
          <div className="flex flex-wrap font-light">
            Home / Collection /
            <p className="ml-2 text-gray-400">Print Your Imagination</p>
          </div>
          {/*images of products and slider dots */}
          <div className="flex max-[1069px]:flex-col min-[1069px]:gap-8 max-xl:items-center">
            <div className="w-fit mx-auto flex flex-col items-center mt-5 ">
              <div className="w-[95vw] h-[60vh] max-sm:h-[26em] md:w-[32em] md:h-[38em] max-md:relative">
                <div className="rounded-full p-1 bg-white md:hidden absolute top-3 right-3">
                  <FaHeartCirclePlus className={`text-black `} size={30} />
                </div>
                <Image
                  style={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                  alt="polaroid"
                  src="/Images/home/custom/uploadYourOwn1.jpeg"
                  width={1600}
                  height={1600}
                />
              </div>
            </div>
            {/*product details */}
            <div className="w-full mt-5 px-5">
              <p className="text-2xl md:text-4xl font-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde?
              </p>
              <p className="text-sm mt-1">Custom Creation</p>
              <hr className="my-4" />
              <div className="flex items-center mt-1">
                <p className="text-lg md:text-xl font-semibold ml-2 ">
                  Rs. 200
                </p>
              </div>
              {/* <div className="mt-5">
                <p className="text-gray-400 text-sm">Select the type</p>
              </div> */}
              {/*Upload your image */}
              <div className="mt-5">
                <ImageUploader/>
              </div>
              {/* quantity */}
              <p className="text-gray-400 mt-5 text-sm">Quantity</p>
              <div className="border border-black py-3 px-2 flex items-center font-extralight justify-between mt-1 w-[6em] text-lg">
                <FaMinus
                  onClick={() => {
                    quantity > 0 && setQuantity(quantity - 1);
                  }}
                  className="cursor-pointer"
                  size={12}
                />
                {quantity}
                <FaPlus
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="cursor-pointer"
                  size={12}
                />
              </div>
              {/* offers */}
              <ul className="text-gray-500 list-disc mt-5 ml-6 text-md">
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
              </ul>
              <div
                // onClick={handelAddToCart}
                className="lg:w-[50%] mt-5 border-2 rounded-lg p-2 text-center cursor-pointer bg-black text-white font-black"
              >
                Add to Cart
              </div>
              <div className="cursor-pointer border-t border-b px-2 py-2 border-gray-300 text-black w-[100%] sm:w-[70%] mt-5">
                <div
                  onClick={() => {
                    showDesc ? setShowDesc(false) : setShowDesc(true);
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex w-fit items-center gap-2">
                    <MdOutlineDescription size={25} />
                    PRODUCT DESCRIPTION
                  </div>
                  <RiArrowDropDownLine size={27} />
                </div>
                {showDesc && (
                  <ul className="list-disc ml-8 mt-2 max-sm:text-sm text-gray-500">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, asperiores?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, asperiores?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, asperiores?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, asperiores?
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignYourOwn;
