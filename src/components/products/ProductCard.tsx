import React from "react";
import Image from "next/image";
import { Product } from "@/types/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-fit transition-transform duration-300 transform hover:scale-105">
      <div className="md:w-[15.5em] md:h-[19.5em] w-[12.5em] h-[12.5em] ">
        <Image
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          alt={product.name}
          src={product.images[0]} // Assuming only one image for simplicity
          width={1600}
          height={1600}
          className=""
        />
        {product.maxPrice && <div className="border-b border-r absolute top-0 left-0 p-1 italic px-4 bg-black">SALE</div>}
      </div>
      <div className="p-6 bg-[#dbdbdb] text-gray-800 h-28">
        <p className=" text-lg font-semibold uppercase">{product.name}</p>
        {product.maxPrice && (
          <p className=" line-through text-sm ">Rs. {product.maxPrice}</p>
        )}
        <p className=" text-md font-medium ">Rs. {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
