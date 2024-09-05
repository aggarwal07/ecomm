"use client";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import SearchCard from "./SearchCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface SearchProps {
  closeSearch: () => void;
}
const Search: React.FC<SearchProps> = ({ closeSearch }) => {
  const [searchText, setSearchText] = useState("");
  //   const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [limitedData, setLimitedData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backendfiggle.onrender.com/api/search?q=${searchText}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLimitedData(result.slice(0, 5));
        // setLoading(false);
      } catch (err) {
        // setError('Failed to fetch data');
        // setLoading(false);
      }
    };

    fetchData();
  }, [searchText]);
  // console.log(limitedData, "search Data");
  // animation work for the search bar
  useGSAP(() => {
    const tl = gsap.timeline();
    tl
      // .from("#searchDiv", {
      //   duration: 0.4,
      //   y: -100,
      //   opacity: 0,
      //   // ease:"elastic.in",
      // })
      .from("#inputBox", {
        duration: 0.4,
        x: 1000,
        // opacity: 0,
        ease: "circ.out",
      });
    gsap.from("#resultBox", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "elastic.out",
    });
  });
  // close button clicked animation
  function closeBar() {
    gsap.to("#inputBox", {
      duration: 0.4,
      x: 1000,
      // opacity: 0,
      ease: "circ.in",
    });
    setTimeout(() => {
      closeSearch();
    },400);
  }

  return (
    <div id="searchDiv" className="z-[1001]">
      <div className="h-[7em] bg-gray-800 flex items-center justify-center">
        <div
          id="inputBox"
          className="w-[70vw] lg:w-[50em] h-[2em] sm:h-[3em] relative"
        >
          <input
            type="text"
            className="rounded-lg w-full h-full bg-gray-800 text-white text-sm sm:text-lg p-1 px-3 outline-none border border-gray-400 focus:border-white focus:border-2"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="h-full flex items-center justify-center absolute right-0 top-0 text-white pr-3 cursor-pointer">
            <IoIosSearch size={24} />
          </div>
          {searchText && (
            <div
              id="resultBox"
              className="w-[70vw] lg:w-[50em] h-[60vh] bg-gray-800 mx-auto absolute border border-t-0 border-gray-400 rounded-lg p-5 overflow-y-auto "
            >
              <p className="text-md text-gray-400 uppercase w-[65%] mx-auto ">
                Products / {searchText}
              </p>
              <div className="w-[65%] mx-auto h-[0.01em] bg-gray-400 my-3"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 mt-7 w-fit h-fit my-auto mx-auto">
                {limitedData.map((item, index) => (
                  <div key={index} className="">
                    <SearchCard product={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <IoCloseOutline
          onClick={closeBar}
          className="text-white cursor-pointer ml-2 "
          size={30}
        />
      </div>
    </div>
  );
};

export default Search;
