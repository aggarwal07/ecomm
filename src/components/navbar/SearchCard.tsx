import Image from "next/image";
import React from "react";
import { Product } from "@/types/types";
import { useRouter } from "next/navigation";
interface SearchCardProps {
  product: Product;
}
const SearchCard: React.FC<SearchCardProps> = ({ product }) => {
    const router = useRouter();
  return (
    <div onClick={()=>{router.push("products/"+product._id)}} className="flex gap-3 bg-gray-100 p-2 rounded-md cursor-pointer">
      <div className="w-[5em] h-[6em] rounded-md overflow-hidden">
        <Image
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          alt="search Image"
          src={product.images[0]}
          width={1600}
          height={1600}
        />
      </div>
      <div className="flex flex-col text-gray-700">
      <p className=" text-sm lg:text-md uppercase">{product.name}</p>
      <div className="flex-row-reverse flex items-center gap-2">

        {product.maxPrice && (
            <p className=" line-through text-xs">Rs. {product.maxPrice}</p>
        )}
        <p className="text-xs lg:text-sm">Rs. {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
