"use client";
import React from "react";
import Image from "next/image";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";
import { Product } from "@/types/types";
import { setProducts } from "@/store/slices/products";
import { useRouter } from "next/navigation";
import { setErrors, setUser } from "@/store/slices/auth";
// import ImageGen from "./ImageGen";
interface ProductDetails {
  productName: string;
}
const ProductDetails: React.FC<ProductDetails> = ({ productName }) => {
  const router = useRouter();
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
  // Function to find a product by its _id
  const findProductById = (productId: any) => {
    return ProductData?.find((product) => product._id === productId);
  };
  const unit = findProductById(productName);
  console.log(unit);
  //for heart
  const [heart, setHeart] = useState(false);
  //handleCart
  const user = useAppSelector((state) => state.auth.user);
  const handelAddToCart = async () => {
    //updating Redux before adding to cart
    if (user){
    try {
      const response = await fetch(`https://backendfiggle.onrender.com/api/accounts/${user.email}/${user.password}`);
      if (response.ok) {
          const data = await response.json();
          console.log('Login successful', data);
          dispatch(setUser(data));
      } else {
          const { message } = await response.json();
          setErrors(message);
      }
  } catch (error) {
      console.error('Login error:', error);
      setErrors('An error occurred. Please try again later.');
  }
    const newCart = user?.cart.concat(unit);

      try {
        const endpoint = `https://backendfiggle.onrender.com/api/accounts/${user._id}`;
        const requestBody = {
          cart: newCart, 
        };
        const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        console.log("Product added to cart successfully");
      } else {
        console.error(
          "Failed to add product to cart:",
          response.status,
          response.statusText
        );
      }
    } catch (error:any) {
      console.error("Error adding product to cart:", error.message);
    }
  }
  else{
    router.push('/accounts');
  }
  };
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
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-10">
      <div className="w-[97vw] lg:w-[60em] mx-auto">
        <div className="flex font-light">
          Home / Collection / <p className="ml-2 text-gray-400">{unit?.name}</p>
        </div>
        {/*images of products and slider dots */}
        <div className="w-fit mx-auto flex flex-col items-center mt-5 ">
          <div className="w-[95vw] h-[60vh] max-sm:h-[26em] md:w-[32em] md:h-[38em] max-md:relative">
            <div className="rounded-full p-1 bg-white md:hidden absolute top-3 right-3">
              <FaHeartCirclePlus
                onClick={() => {
                  heart ? setHeart(false) : setHeart(true);
                }}
                className={`${heart ? "text-red-600" : "text-black"} `}
                size={30}
              />
            </div>
            <Image
              style={{
                objectFit: "cover",
                height: "100%",
              }}
              alt="polaroid"
              src={unit?.images[0] || ""}
              width={1600}
              height={1600}
            />
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-6 mt-4 mx-2">
            {unit?.images.slice(1).map((item, i) => (
              <div
                key={i}
                // onClick={()=>{setGalleryImage(item)}}
                className="cursor-pointer"
              >
                <Image
                  className="h-full"
                  src={item}
                  alt="productLayout2"
                  width={190}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
        {/*product details */}
        <div className="w-full mt-10 flex justify-between max-md:flex-col-reverse">
          {/*left box */}
          <div className="md:w-[60%] text-lg p-5">
            <p className="text-2xl font-medium max-md:hidden">{unit?.name}</p>
            <p className="-mt-4 md:mt-5 font-light">
              {unit?.description.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </p>
          </div>
          {/*right box */}
          <div className="md:w-[30%] p-5 text-xl font-light">
            <p className="text-4xl md:text-2xl max-md:mb-3 font-medium md:hidden">
              {unit?.name}
            </p>
            <p className="mb-3">{unit?.price}</p>
            <label className="mt-5" htmlFor="select">
              Select the type
            </label>
            <br />
            <select
              className="w-full rounded-lg border-2 p-1 mt-2 text-center"
              name=""
              id="select"
            >
              {unit?.type.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.price} - {item.material} - {item.size}
                  </option>
                );
              })}
              {/* <option value="">1</option>
              <option value="">2</option> */}
            </select>
            {/* <label className="mt-5" htmlFor="select">
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
            </select> */}
            <div className="w-full flex max-lg:flex-col  justify-between mt-3">
              <div
                onClick={handelAddToCart}
                className="lg:w-[75%] border-2 rounded-lg p-2 text-center"
              >
                Add to cart
              </div>
              <div className="max-md:hidden lg:w-[20%] max-lg:mt-3 border-2 lg:p-2 rounded-lg flex items-center justify-center">
                <FaHeartCirclePlus
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
      <div className="w-[80vw] max-sm:w-[96vw] max-lg:w-[97vw] mt-10 mx-auto">
        <p className="text-[#503114] mb-5 text-2xl font-semibold mt-10 text-center">
          FEATURED DROPS
        </p>
        <Slider {...settings}>
          {ProductData?.map((item, index) => (
            <div className="" key={index}>
              <ProductCard product={item} />
            </div>
          ))}
        </Slider>
        {/* <ImagePreview/> */}
      </div>
    </div>
  );
};

export default ProductDetails;
