"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import { useRouter } from "next/navigation";
import { Product } from "@/types/types";
import { setProducts } from "@/store/slices/products";
interface ProductListing {
  productType: string;
}

const ProductsListing: React.FC<ProductListing> = ({ productType }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [ProductData, setProdData] = useState<Product[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backendfiggle.onrender.com/api/products/${productType}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setProdData(jsonData);
        dispatch(setProducts(jsonData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleClick = (category: string) => {
    const filteredProducts = ProductData?.filter(
      (product) => product.category === category
    );
    if (filteredProducts) {
      setProdData(filteredProducts);
    }
  };
  return (
    <div className="mt-10 text-white w-[97vw] xl:w-[66em] mx-auto">
      <div className="w-full max-sm:px-2 text-2xl md:text-3xl xl:text-4xl font-bold">
        {decodeURIComponent(productType)}
      </div>
      <div className="max-sm:px-2 w-full text-right text-sm mt-10 ">
        {ProductData?.length} Products
      </div>
      <div className="flex mt-5">
        <div className="xl:w-[22%] w-[18%] max-sm:hidden">
          <p className="text-lg">Filters</p>
          <hr className="mb-5 mt-5" />
          <p className="mb-2">Genre</p>
          <div className="flex items-center mb-1 text-sm">
            <input
              type="checkbox"
              name="Football"
              onClick={() => handleClick("Football")}
            />
            <p className="ml-4">football</p>
          </div>
          <div className="flex items-center mb-1 text-sm">
            <input type="checkbox" name="Football" />
            <p className="ml-4">Marvels</p>
          </div>
          <div className="flex items-center mb-1 text-sm">
            <input type="checkbox" name="Football" />
            <p className="ml-4">Quotes</p>
          </div>
        </div>
        <div className="w-fit gap-4 sm:gap-2 md:gap-5 grid grid-cols-2 lg:grid-cols-3 mx-auto  mb-10">
          {ProductData &&
            ProductData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                >
                  <ProductCard product={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
