'use client'
import React from "react";
import ImageUploader from "../imageUploader/ImageUploader";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CustomCreate = () => {
  const router = useRouter();
  return (
    <div className="md:flex w-[97vw] xl:w-[66em] mx-auto bg-[#242833] max-md:py-3">
      <div className="max-md:mx-auto w-[75%] sm:w-[50%] md:w-[50%] h-[40vh] md:h-[60vh]">
        <Image
          style={{
            objectFit: "fill",
            height: "100%",
          }}
          alt="Custom Create"
          src="/Images/home/custom/uploadYourOwn1.jpeg"
          width={1600}
          height={1600}
          className=""
        />
      </div>
      <div className=" w-[97%] md:w-[50%] flex justify-center max-md:mx-auto">
        <div className="text-center w-[80%] mt-5 md:mt-24 flex flex-col items-center">
          <p className="text-white text-3xl md:text-5xl font-bold">
            Create Your Personalized Products
          </p>
          <p
            style={{ lineHeight: "30px" }}
            className="text-gray-400 text-sm md:text-md mt-3 md:mt-5"
          >
            Design your personalized products with us. Choose from range of
            products like Wall Posters, Mousepads, Canvas, and more. Express
            your creativity and make everyday items uniquely yours.
          </p>
          <button onClick={()=>{router.push("/designYourOwn")}} className="bg-white p-2 px-3 md:p-3 md:px-6 md:self-start mt-5 md:mt-10  rounded-xl border border-black text-black text-md md:text-xl hover:scale-110">
            Create !
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCreate;
