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
      <div className="md:w-[23em] md:h-[23em] w-[12.5em] h-[12.5em]">
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
      <p className="text-center mt-5 text-lg">{product.name}</p>
      <p className="text-center text-sm text-gray-400 font-light">{product.price}</p>
    </div>
  );
};

export default ProductCard;
