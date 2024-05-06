"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import { useRouter } from "next/navigation";
import { Product } from "@/types/types";
import { setProducts } from "@/store/slices/products";

const ProductsListing = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [ProductData, setProdData] = useState<Product[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backendfiggle.onrender.com/api/products"
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
  return (
    <div className="mt-10">
      <div className="w-fit gap-2 md:gap-5 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto mt-10 mb-10">
        {ProductData && ProductData.map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                var query = "/products/" + item._id;
                router.push(query);
              }}
            >
              <ProductCard product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsListing;
