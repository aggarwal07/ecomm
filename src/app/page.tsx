"use client";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setUnit } from "@/store/slices/units";
import { setProducts } from "@/store/slices/products";
import { useAppSelector } from "@/store/hooks";
import ProductCard from "@/components/products/ProductCard";
import ContactUs from "@/components/contact/ContactUs";
import { useAppDispatch } from "@/store/hooks";
import { Product } from "@/types/types";




export default function Home() {
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
  //FeaturedDrops List
  const featuredDrops = [
    { id: "1", imageLink: "/Images/home/1.webp" },
    { id: "2", imageLink: "/Images/home/1.webp" },
    { id: "3", imageLink: "/Images/home/1.webp" },
    { id: "4", imageLink: "/Images/home/1.webp" },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  var settingsProducts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/*Polaroid */}
      <div
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
        }}
        className="mx-auto mt-10 w-[22em] md:w-[34em] h-[33em] md:h-[41.375em] shadow-2xl border-2 border-gray-500"
      >
        <Slider {...settings}>
          <div
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
            }}
            className="mx-auto w-[22em] md:w-[34em] h-[33em] md:h-[41.375em] shadow-2xl"
          >
            <div className="h-[2em] md:h-[3em]"></div>
            {/*polaroid image */}
            <div className="mx-auto w-[20em] md:w-[30em] h-[22em] md:h-[27em] shadow-2xl ">
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
            {/*polaroid description */}
            <div className="mx-auto text-center mt-8 w-[17em] md:w-[28em] italic">
              <p className="font-bold text-[1.7em] md:text-[2.5em]">Heading</p>
              <p className="text-[1.1em] md:text-[1.5em]">Subtitle</p>
            </div>
          </div>
          <div>
            <Image
              style={{
                objectFit: "fill",
                height: "100%",
              }}
              alt="polaroid"
              src="/Images/home/1.webp"
              width={1600}
              height={1600}
            />
          </div>
        </Slider>
      </div>
      {/*2nd division */}
      <div className="w-full bg-gray-100 mt-24 py-8">
        <p className="text-[2em] text-center">
          Find the perfect custom canvas for you
        </p>
        <div className="w-full md:w-[40em] mx-auto flex max-md:flex-col items-center md:justify-between mt-10">
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(255, 0, 0, 0.5)",
            }}
            className="rounded-xl w-[12em] h-[3.5em] text-center text-white bg-black"
          >
            Explore Collection
          </button>
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 255, 0.5)",
            }}
            className="rounded-xl w-[12em] h-[3.5em] text-center text-white bg-black max-md:mt-3"
          >
            Design Your Own
          </button>
        </div>
      </div>
      {/*Category Slider */}
      <div className="bg-black mt-10 py-2">
        <div className="mx-5 my-5">
          <Slider {...settingsProducts}>
            {featuredDrops.map((item, index) => (
              <div
                key={index}
                className="w-[23vw] h-[16em] md:h-[25em] bg-red-600 outline relative"
              >
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
                <p className="text-white text-2xl absolute top-[50%] left-[46%] uppercase">
                  text
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/*product categories*/}
      <p className="text-[#503114] text-2xl font-semibold mt-10 text-center">
        FEATURED DROPS
      </p>
      <div className="w-fit gap-2 md:gap-5 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto mt-10 mb-10">
        {ProductData &&
          ProductData.map((item, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                var query = "/products/" + item._id;
                router.push(query);
                dispatch(setUnit(item));
              }}
              key={index}
            >
              <ProductCard product={item} />
            </div>
          ))}
      </div>
      {/*contanct action button */}
      <ContactUs />
    </div>
  );
}
