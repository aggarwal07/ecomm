import React from "react";
import Image from "next/image";

interface Product {
  name: string;
  price: string;
  description: string[];
  images: string[];
  type: ProductType[];
  category: string;
}

interface ProductType {
  size: string;
  material: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-fit">
      <div className="md:w-[15.5em] md:h-[19.5em] w-[12.5em] h-[12.5em]">
        <Image
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          alt={product.name}
          src={product.images[0]} // Assuming only one image for simplicity
          width={1600}
          height={1600}
        />
      </div>
      <div className="p-6 bg-[#dbdbdb] text-gray-800">

      <p className=" text-lg font-semibold uppercase">{product.name}</p>
      <p className=" text-md ">₹ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
