"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ImageUpload from "@/ImageTools/Upload/ImageUpload";

const Polaroid = () => {
  //set uploaded image
  const [uploadedImage, setUploadedImage] = useState<string>(
    "/Images/home/1.webp"
  );

  const handleImageUpload = (imageData: string) => {
    setUploadedImage(imageData);
  };
  return (
    <div className="mt-10">
      <div className="w-[97vw] lg:w-[60em] mx-auto">
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
              src={uploadedImage}
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
        <div className="mt-8 w-[22em] md:w-[34em] mx-auto flex h-[5em] shadow-xl p-2">
          <ImageUpload onImageUpload={handleImageUpload} />
        </div>
      </div>
    </div>
  );
};

export default Polaroid;
