"use client";
import React from "react";
import { Product } from "@/types/types";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ProductCardProps {
  product: Product;
  popup? : boolean;
}
const CartCard: React.FC<ProductCardProps> = ({ product,popup }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between h-fit w-full sm:w-[29.5em] text-white p-3">
      <div className="flex items-center">
        <div onClick={() => {
                var query = "/products/" + product._id;
                router.push(query);
              }} className="w-[4.5em] h-[4.5em] rounded-2xl overflow-hidden cursor-pointer ">
          <Image
            style={{
              objectFit: "cover",
              height: "100%",
            }}
            alt="polaroid"
            src={product.images[0]}
            width={1600}
            height={1600}
          />
        </div>
        <div className="flex flex-col h-fit justify-around ml-4">
          <p className="font-bold text-md lg:text-xl mb-1 ">{product.name.toUpperCase()}</p>
          <p className="max-sm:text-sm">
            {product.type[0].size}, {product.type[0].material}
          </p>
        </div>
      </div>
      <div className="h-fit flex items-center ">
        {/* <input
          type="text"
          className="w-[1.9em] h-[1.9em] border-2 text-center"
        /> */}
        {product.maxPrice && (
          <p className={` line-through text-xs lg:text-sm ${popup?"hidden":""} max-lg:hidden `}>Rs. {product.maxPrice}</p>
        )}
        <p className="font-bold text-md lg:text-lg max-lg:mx-[2em] lg:ml-[0.5em]">₹ {product.price}</p>
      </div>
    </div>
  );
};

export default CartCard;
