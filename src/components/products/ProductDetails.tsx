"use client";
import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ProductDetails {
  productName: string;
}
const ProductDetails: React.FC<ProductDetails> = ({ productName }) => {
  //for heart
  const [heart, setHeart] = useState(false);
  //FeaturedDrops List
  const featuredDrops = [
    { id: "1", imageLink: "/Images/home/1.webp" },
    { id: "2", imageLink: "/Images/home/1.webp" },
    { id: "3", imageLink: "/Images/home/1.webp" },
    { id: "4", imageLink: "/Images/home/1.webp" },
  ];
  //slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className="mt-10">
      <div className="w-[60em] mx-auto">
        <div className="flex font-light">
          Home / Collection / <p className="ml-2 text-gray-400">Poloroid</p>
        </div>
        {/*images of products and slider dots */}
        <div className="w-fit mx-auto flex flex-col items-center mt-5 ">
          <div className="w-[32em] h-[38em]">
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
          <div className="mt-3">dots</div>
        </div>
        {/*product details */}
        <div className="w-full mt-10 flex justify-between">
          {/*left box */}
          <div className="w-[60%] text-lg p-5">
            <p className="text-2xl font-medium">Product Name</p>
            <p className="mt-5 font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              dolorem, asperiores nostrum quibusdam ducimus quam aspernatur
              aliquam eum aliquid quisquam molestias! Laborum pariatur amet
              quaerat enim sed nihil repellat quibusdam ut, necessitatibus sequi
              quia distinctio dolorum eaque perspiciatis fuga laboriosam,
              aperiam, inventore sint corrupti cumque. Amet iure provident
              consectetur voluptates.
            </p>
          </div>
          {/*right box */}
          <div className="w-[30%] p-5 text-xl font-light">
            <p className="mb-5">Price</p>
            <label className="mt-5" htmlFor="select">
              Select the type
            </label>
            <br />
            <select
              className="w-full rounded-lg border-2 p-1 mt-2 text-center"
              name=""
              id="select"
            >
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <label className="mt-5" htmlFor="select">
              Select the type
            </label>
            <br />
            <select
              className="w-full rounded-lg border-2 p-1 mt-2 text-center"
              name=""
              id="select"
            >
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <div className="w-full flex justify-between mt-3">
              <div className="w-[75%] border-2 rounded-lg p-2 text-center">
                Add to cart
              </div>
              <div className="w-[20%] border-2 rounded-lg p-2 flex items-center justify-center">
                <FaRegHeart
                  onClick={() => {
                    heart ? setHeart(false) : setHeart(true);
                  }}
                  className={`${heart ? "text-red-600" : "text-black"}`}
                  size={30}
                />
              </div>
            </div>
            <div className="w-full p-2 rounded-lg bg-black text-white mt-3 text-center text-2xl font-medium ">
              Buy Now
            </div>
          </div>
        </div>
      </div>
      {/*recommendation sections */}
      <div className="w-[80vw] mt-10 mx-auto">
        <p className="text-[#503114] mb-5 text-2xl font-semibold mt-10 text-center">
          FEATURED DROPS
        </p>
        <Slider {...settings}>
          {featuredDrops.map((item, index) => (
            <div className="" key={index}>
              <ProductCard />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetails;
