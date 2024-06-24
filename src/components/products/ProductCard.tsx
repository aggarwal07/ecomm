import React from "react";
import Image from "next/image";
import { Product } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openCart, setCart } from "@/store/slices/cart";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cart = useAppSelector((state) => state.cart.cart);
  const handelAddToCart = async () => {
    var newCart = [];
    if (
      cart.some((item: Product) => item.type[0]._id === product.type[0]?._id)
    ) {
      console.log("product already in cart");
      newCart = cart.map((item: Product) =>
        item.type[0]._id === product?.type[0]?._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = cart.concat(product);
    }
    dispatch(setCart(newCart));
    dispatch(openCart());
  };
  return (
    <div className="transition-transform duration-300 transform sm:hover:scale-105 md:w-[15.5em] w-[10.5em]">
      <div
        onClick={() => {
          var query = "/products/" + product._id;
          router.push(query);
        }}
        className="md:w-[15.5em] md:h-[19.5em] w-[10.5em] h-[14.2em] overflow-hidden "
      >
        <Image
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          alt={product.name}
          src={product.images[0]} // Assuming only one image for simplicity
          width={1600}
          height={1600}
          className="max-md:scale-110"
        />
        {product.maxPrice && (
          <div className="max-md:text-xs border-b border-r absolute top-0 left-0 p-1 italic px-4 bg-black">
            SALE
          </div>
        )}
      </div>
      <div className="flex flex-col px-2 py-2 lg:px-3 lg:py-4 bg-[#e9e9e9] text-gray-800 h-[10em] md:h-[11.5em]">
        <p
          onClick={() => {
            var query = "/products/" + product._id;
            router.push(query);
          }}
          style={{ lineHeight: "18px" }}
          className="text-xs md:text-sm font-semibold line-clamp-2"
        >
          {product.name} | {product.type[0].size}
        </p>
        <div
          onClick={() => {
            var query = "/products/" + product._id;
            router.push(query);
          }}
          className="flex-col max-sm:items-center max-sm:gap-2 mt-3 md:mt-4"
        >
          {product.maxPrice && (
            <p className=" line-through text-xs md:text-sm text-gray-500 ">
              Rs.{product.maxPrice}.00
            </p>
          )}
          <p className="text-sm md:text-md text-gray-600">From Rs.{product.price}.00</p>
        </div>
        <button
          onClick={handelAddToCart}
          className="border border-gray-500 w-[80%] md:w-[14em] max-md:text-sm absolute bottom-4 self-center py-1 rounded-lg  text-gray-500 mt-4 cursor-pointer hover:text-black hover:border-black"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
