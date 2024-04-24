import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-fit">
      <div className="md:w-[23em] md:h-[23em] w-[12.5em] h-[12.5em]">
        <Image
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          alt="polaroid"
          src="/Images/home/1.webp"
          width={1600}
          height={1600}
        />
      </div>
      <p className="text-center mt-5 text-lg">Name</p>
      <p className="text-center text-sm text-gray-400 font-light">Price</p>
    </div>
  );
};

export default ProductCard;
