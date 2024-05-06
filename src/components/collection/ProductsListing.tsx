"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import ProductCard from "../products/ProductCard";
import { useRouter } from "next/navigation";

const ProductsListing = () => {
  const router = useRouter();
  const products = useAppSelector((state) => state.product.products);
  return (
    <div className="mt-10">
      <div className="w-fit gap-2 md:gap-5 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto mt-10 mb-10">
        {products.map((item, index) => {
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
