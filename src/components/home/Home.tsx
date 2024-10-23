"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setProducts } from "@/store/slices/products";
import ProductCard from "@/components/products/ProductCard";
import ContactUs from "@/components/actionButton/CartActionButton";
import { useAppDispatch } from "@/store/hooks";
import { Product } from "@/types/types";
import { HiArrowLongRight, HiMiniCheckBadge } from "react-icons/hi2";
import { FaShippingFast, FaUpload } from "react-icons/fa";
import Paralax from "./Paralax";
import { BiSolidOffer } from "react-icons/bi";
import CustomCreate from "./CustomCreate";

const LandingSection = () => {
  const dispatch = useAppDispatch();
  //Product Api data fetching
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
  console.log(ProductData);
  //router
  const router = useRouter();
  const popularCategories = [
    {
      image: "/Images/home/popularCategories/Posters.jpg",
      text: "Posters",
      slug: "Poster",
    },
    {
      image: "/Images/home/popularCategories/MousePads.jpg",
      text: "Mouse Pads",
      slug: "Mouse Pad",
    },
    {
      image: "/Images/home/popularCategories/Keyboard.png",
      text: "Keyboard Stickers",
      slug: "Keyboard Stickers",
    },
  ];
  const agenda = [
    {
      icon: <FaShippingFast className="w-14 h-14 md:w-20 md:h-20" />,
      text: "",
    },
    {
      icon: <HiMiniCheckBadge className="w-14 h-14 md:w-20 md:h-20" />,
      text: "",
    },
    {
      icon: <BiSolidOffer className="w-14 h-14 md:w-20 md:h-20" />,
      text: "",
    },
    {
      icon: <FaUpload className="w-14 h-14 md:w-20 md:h-20" />,
      text: "",
    },
  ];
  return (
    <div className="text-white">
      <div>
        {/*landing image */}
        <div className="bg-[#111111]">
          <div className="w-full  mx-auto  overflow-hidden relative bg-[#111111] ">
            <Image
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
              alt="polaroid"
              src="/Images/home/landing.png"
              width={1600}
              height={1600}
            />
          </div>
        </div>
        {/*Popular Category */}
        <div className="bg-[#111111]">
          <div className="w-[97vw] xl:w-[66em] pt-10 mx-auto ">
            <p className="py-3 tex-xl md:text-2xl xl:text-3xl font-bold">
              Discover the Best: Explore Our Popular Categories!
            </p>
            <div className="w-full grid lg:grid-cols-3 grid-cols-2 max-xl:w-fit mx-auto gap-2 md:gap-4 h-[25em]">
              {popularCategories.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      router.push("/collection/" + item.slug);
                    }}
                    key={index}
                    className="cursor-pointer h-full w-[11.5em] md:w-[18em] xl:w-[21em] flex justify-center items-center overflow-hidden rounded-sm relative"
                  >
                    <Image
                      style={{
                        objectFit: "fill",
                        height: "100%",
                      }}
                      alt="polaroid"
                      src={item.image}
                      width={1600}
                      height={1600}
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="text-black font-semibold text-md lg:text-xl absolute bottom-0 w-full flex justify-center items-center cursor-pointer py-1 lg:py-2 bg-[#dbdbdb]">
                      Shop Now
                      <HiArrowLongRight size={22} className="ml-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* football cat. */}
        <div className="bg-[#111111]">
          <div className="w-[97vw] xl:w-[66em] mx-auto">
            <p className="font-bold tex-xl md:text-2xl xl:text-3xl py-4">
              Browse by Genre: Find Your Perfect Poster!
            </p>
            <div className="w-full h-[25em] md:h-[35em] xl:h-[45em] flex gap-2 md:gap-4">
              <div
                onClick={() => {
                  router.push("/collection/Poster?category=Tv_Show");
                }}
                className="w-[50%] h-full overflow-hidden rounded-sm relative cursor-pointer"
              >
                <Image
                  style={{
                    objectFit: "fill",
                    height: "100%",
                  }}
                  alt="polaroid"
                  src="/Images/home/genre/TVShows.png"
                  width={1600}
                  height={1600}
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="text-black font-semibold text-md lg:text-xl absolute bottom-0 w-full flex justify-center items-center cursor-pointer py-1 lg:py-2 bg-[#dbdbdb]">
                  Shop Now
                  <HiArrowLongRight size={22} className="ml-2" />
                </div>
              </div>
              <div className="w-[50%] flex flex-col gap-2 md:gap-4">
                <div
                  onClick={() => {
                    router.push("/collection/Poster?category=Football");
                  }}
                  className="cursor-pointer w-full h-[50%] overflow-hidden rounded-sm relative"
                >
                  <Image
                    style={{
                      objectFit: "fill",
                      height: "100%",
                    }}
                    alt="polaroid"
                    src="/Images/home/genre/Football.png"
                    width={1600}
                    height={1600}
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                  <div className="text-black font-semibold text-md lg:text-xl absolute bottom-0 w-full flex justify-center items-center cursor-pointer py-1 lg:py-2 bg-[#dbdbdb]">
                    Shop Now
                    <HiArrowLongRight size={22} className="ml-2" />
                  </div>
                </div>
                <div
                  onClick={() => {
                    router.push("/collection/Poster?category=DC");
                  }}
                  className="cursor-pointer w-full h-[50%] overflow-hidden rounded-sm relative"
                >
                  <Image
                    style={{
                      objectFit: "fill",
                      height: "100%",
                    }}
                    alt="polaroid"
                    src="/Images/home/genre/DC.png"
                    width={1600}
                    height={1600}
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                  <div className="text-black font-semibold text-md lg:text-xl absolute bottom-0 w-full flex justify-center items-center cursor-pointer py-1 lg:py-2 bg-[#dbdbdb]">
                    Shop Now
                    <HiArrowLongRight size={22} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*paralax */}
        <div className="">
          <Paralax />
        </div>
        {/*white space */}
        <div className="h-[5vh] bg-[#111111] "></div>
        {/*agenda */}
        <div className="bg-[#242833] py-10">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 items-center w-[97vw] xl:w-[66em] mx-auto">
            {agenda.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  {item.icon}
                  <p className="text-gray-400 text-xs md:text-sm mt-3 text-center px-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam est aperiam, adipisci voluptas nobis dignissimos
                    architecto alias non impedit eum quis quas eligendi
                    voluptatibus ipsa.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* design your own poster */}
        <div className="bg-[#111111] pt-10">
          <CustomCreate />
        </div>

        {/*product categories*/}
        <div className="bg-[#111111]">
          <p className="text-xl md:text-2xl xl:text-3xl font-semibold pt-10 text-center">
            FEATURED DROPS
          </p>
          <div className="w-fit max-sm:grid max-sm:grid-cols-2 xl:w-[66em] flex flex-wrap gap-4 sm:gap-2 xl:gap-5 mx-auto mt-10 pb-10">
            {ProductData &&
              ProductData.slice(0, 8).map((item, index) => (
                <div className="cursor-pointer" key={index}>
                  <ProductCard product={item} />
                </div>
              ))}
          </div>
        </div>
        {/*contanct action button */}
        <ContactUs />
      </div>
    </div>
  );
};

export default LandingSection;
