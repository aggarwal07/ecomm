import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
const ProductCard = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ecomm-backend-3z6a.onrender.com/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
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
