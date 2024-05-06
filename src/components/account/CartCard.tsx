'use client'
import React from "react";
import { Product } from "@/types/types";
import { useState } from "react";
import Image from "next/image";
interface ProductCardProps {
  product: Product;
}
const CartCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedPrice , setSelectedPrice] = useState("");
  const handleTypeSelect = (e:any)=>{
    const selectedItemId = e.target.value;
    const selectedItem = product?.type.find(item => item._id === selectedItemId);
    if (selectedItem) {

      setSelectedPrice(selectedItem.price)
    }
  }
  return (
    <div className="flex h-fit w-fit">
      <div className="w-[7.5em] h-[7.5em] rounded-2xl overflow-hidden">
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
      <div className="flex flex-col h-full justify-around ml-3">
        <p className="font-semibold">{product.name.toUpperCase()}</p>
        <select
              className="w-full rounded-lg border-2 p-1 mt-2 text-center"
              name=""
              id="select"
              onChange={handleTypeSelect}
            >
              {product?.type.map((item, index) => {
                return (
                  <option key={index} value={item._id}  >
                    {item.material} - {item.size}
                  </option>
                );
              })}
            </select>
            <p>{selectedPrice?selectedPrice:product.price}</p>
          
        </div>
    </div>
  );
};

export default CartCard;
