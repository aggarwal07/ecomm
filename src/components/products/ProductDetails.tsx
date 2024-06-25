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
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineDescription } from "react-icons/md";
import { FaPlus,FaMinus } from "react-icons/fa6";
// import { setCart, setErrors, setUser } from "@/store/slices/auth";
import Alert from "../alert/Alert";
import { openCart, setCart } from "@/store/slices/cart";
import MobileCartPopUp from "../actionButton/MobileCartPopUp";
// import ImageGen from "./ImageGen";
interface ProductDetails {
  productName: string;
}
const ProductDetails: React.FC<ProductDetails> = ({ productName }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [typeSelected, setTypeSelected] = useState(0);
  const [ImgSelected, setImgSelected] = useState(0);
  //quantity of the product
  const [quantity , setQuantity] = useState(1);
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
  // console.log(ProductData);
  // Function to find a product by its _id
  const findProductById = (productId: any) => {
    return ProductData?.find((product) => product._id === productId);
  };
  const [unit, setUnit] = useState(findProductById(productName));
  const [CartUnit, setCartUnit] = useState(findProductById(productName));
  useEffect(() => {
    if (ProductData) {
      const foundProduct = ProductData.find(
        (product) => product._id === productName
      );
      setUnit(foundProduct);
      setCartUnit(foundProduct);
    }
  }, [ProductData, productName]);
  //handle show prod description
  const [showDesc, setShowDesc] = useState(false);

  //handle type selection
  const handleTypeSelect = (e: any, selectedItemId: string) => {
    console.log(unit, "initializing");
    if (unit) {
      // Moving the selected type to the top of the array
      const selectedIndex = unit.type.findIndex(
        (item) => item._id === selectedItemId
      );
      const sortedType = [...unit.type];
      const selectedItem = sortedType.splice(selectedIndex, 1)[0];
      sortedType.unshift(selectedItem);
      // Setting the price of unit as the type selected
      const updatedUnit = {
        ...unit,
        price: selectedItem.price,
      };
      const updatedCartUnit = {
        ...unit,
        type: sortedType,
        price: selectedItem.price,
      };
      // Update the state with the modified unit
      setUnit(updatedUnit);
      setCartUnit(updatedCartUnit);
    }
    console.log(unit, "final");
  };

  //for heart
  const [heart, setHeart] = useState(false);
  const cart = useAppSelector((state) => state.cart.cart);
  //handleCart
  const handelAddToCart = async () => {
    var newCart = [];
    if (
      cart.some((item: Product) => item.type[0]._id === CartUnit?.type[0]?._id)
    ) {
      console.log("product already in cart");
      newCart = cart.map((item: Product) =>
        item.type[0]._id === CartUnit?.type[0]?._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = cart.concat({ ...CartUnit, quantity: quantity });
    }
    dispatch(setCart(newCart));
    dispatch(openCart());
  };
  // Split the key by uppercase letters and join with spaces
  const makeKeyReadable = (key: string) =>
    key
      .replace(/_/g, " ") // Replace underscores with spaces
      .split(/(?=[A-Z])/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  //slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          // initialSlide: 2,
          // centerMode: true,
        },
      },
      {
        breakpoint: 784,
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
    <div className="">
      {/* white space */}
      {/* <div className="w-full h-[1em] sm:h-[2em] bg-[#fffffff6]"></div> */}
      <div className="w-full bg-[#fffffff6] py-6 sm:py-10">
        <div className="w-[97vw] min-[1069px]:w-[66em] mx-auto">
          <div className="flex flex-wrap font-light">
            Home / Collection / {unit?.productType} /{" "}
            <p className="ml-2 text-gray-400">{unit?.name}</p>
          </div>
          {/*images of products and slider dots */}
          <div className="flex max-[1069px]:flex-col max-xl:items-center">
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
                  src={unit?.images[ImgSelected] || ""}
                  width={1600}
                  height={1600}
                />
              </div>
              <div className="grid grid-cols-4 gap-2 md:gap-6 mt-4 mx-2">
                {unit?.images.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setImgSelected(i);
                    }}
                    className="cursor-pointer sm:max-[1069px]:w-[12vw]"
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
            <div className="w-full mt-5 px-5">
              <p className="text-2xl md:text-4xl font-black ">{unit?.name}</p>
              <p className="text-sm mt-1">
                {makeKeyReadable(unit?.category || "")}
              </p>
              <hr className="my-4" />
              <div className="flex items-center mt-1">
                {unit?.maxPrice && (
                  <p className=" line-through text-sm md:text-md text-[#8f8f8f] ">
                    Rs. {unit?.maxPrice}
                  </p>
                )}
                <p className="text-lg md:text-xl font-semibold ml-2 ">
                  Rs. {unit?.price}
                </p>
              </div>
              {/* <div className="mt-2">
                <label className="" htmlFor="select">
                  Select the type
                </label>
                <br />
                <select
                  className="w-[50%] rounded-lg border-2 p-1 mt-1 text-center"
                  name=""
                  id="select"
                  onChange={handleTypeSelect}
                >
                  {unit?.type.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.price} - {item.material} - {item.size}
                      </option>
                    );
                  })}
                </select>
              </div> */}
              <div className="mt-5">
                <p className="text-gray-400 text-sm">Select the type</p>
                <div className="mt-1 flex flex-wrap gap-3">
                  {unit?.type.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={(e) => {
                          handleTypeSelect(e, item._id);
                          setTypeSelected(index);
                        }}
                        className={`${
                          index == typeSelected ? "border-black border-2" : ""
                        } border rounded-md flex flex-col items-center min-w-fit p-5 cursor-pointer hover:scale-105`}
                      >
                        <p>Rs. {item.price}</p>
                        <p>{item.material}</p>
                        <p>{item.size}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* quantity */}
              <p className="text-gray-400 mt-5 text-sm">Quantity</p>
              <div className="border border-black py-3 px-2 flex items-center font-extralight justify-between mt-1 w-[6em] text-lg">
              <FaMinus onClick={()=>{quantity>0&&setQuantity(quantity-1)}} className="cursor-pointer" size={12} />
              {quantity}
              <FaPlus onClick={()=>{setQuantity(quantity+1)}} className="cursor-pointer" size={12} />
              </div>
              {/* offers */}
              <ul className="text-gray-500 list-disc mt-5 ml-6 text-md">
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
                <li className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  recusandae! Lorem ipsum dolor sit amet.
                </li>
              </ul>
              <div
                onClick={handelAddToCart}
                className="lg:w-[50%] mt-5 border-2 rounded-lg p-2 text-center cursor-pointer bg-black text-white font-black"
              >
                Add to Cart
              </div>
              <div className="cursor-pointer border-t border-b px-2 py-2 border-gray-300 text-black w-[100%] sm:w-[70%] mt-5">
                <div
                  onClick={() => {
                    showDesc ? setShowDesc(false) : setShowDesc(true);
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex w-fit items-center gap-2">
                    <MdOutlineDescription size={25} />
                    PRODUCT DESCRIPTION
                  </div>
                  <RiArrowDropDownLine size={27} />
                </div>
                {showDesc && (
                  <ul className="list-disc ml-8 mt-2 max-sm:text-sm text-gray-500">
                    {unit?.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              {/* product added successful popup */}
              {/* {showAlert && (
                <Alert
                  message="Product Added To Cart!"
                  onClose={handleCloseAlert}
                />
              )} */}
              {/* <div className="max-md:hidden lg:w-[20%] max-lg:mt-3 border-2 lg:p-2 rounded-lg flex items-center justify-center">
                <FaHeartCirclePlus
                  onClick={() => {
                    heart ? setHeart(false) : setHeart(true);
                  }}
                  className={`${heart ? "text-red-600" : "text-black"}`}
                  size={30}
                />
              </div> */}
              {/* <div className="w-full p-2 rounded-lg bg-black text-white mt-3 text-center text-2xl font-medium ">
                Buy Now
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*white space */}
      {/* <div className="w-full h-[1em] sm:h-[2em] bg-[#fffffff6]"></div> */}
      {/*recommendation sections */}
      {/* <div className="text-white w-[90vw] max-sm:w-[96vw] max-lg:w-[97vw] mt-10 mx-auto"> */}
        {/* recommendations */}
        <div className="w-[97vw] min-[1069px]:w-[66em] mx-auto text-white">
          <p className="text-lg lg:text-3xl mt-10">You May Also Like ...</p>
          <div className="flex flex-wrap justify-around lg:justify-between">
            {ProductData?.filter(
              (item) =>
                item.productType === unit?.productType &&
                item.category === unit?.category
            )
              ?.slice(0, 4)
              ?.map((item, index) => (
                <div className="mt-5" key={index}>
                  <ProductCard product={item} />
                </div>
              ))}
          </div>
        </div>
        {/* <p className="mb-5 text-2xl font-semibold mt-10 text-center">
          FEATURED DROPS
        </p>
        <Slider {...settings}>
          {ProductData?.map((item, index) => (
            <div className="" key={index}>
              <ProductCard product={item} />
            </div>
          ))}
        </Slider> */}
      {/* </div> */}
      {/* added to cart PopUp */}
      <div>
        <MobileCartPopUp unit={unit} />
      </div>
    </div>
  );
};

export default ProductDetails;
