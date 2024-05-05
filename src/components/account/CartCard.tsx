import React from "react";
import { Product } from "@/types/types";
import Image from "next/image";
interface ProductCardProps {
  product: Product;
}
const CartCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex h-fit w-fit">
      <div className="w-[5vw] h-[14vh]">
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
        <p className="font-light">{product.description[0]}...</p>
        <p className="font-semibold">₹ {product.price}</p>

      </div>
    </div>
  );
};

export default CartCard;
