import Image from "next/image";
import React from "react";
interface AddedCartPopUpProps {
  unit: any;
  isVisible: boolean;
}
const AddedCartPopUp: React.FC<AddedCartPopUpProps> = ({ unit, isVisible }) => {
  return (
    <div
      className={`${
        isVisible ? "added-cart-popup" : "hidden"
      } flex items-center justify-between bg-[#242833] p-2 w-[9em] sm:w-[10em] fixed top-20 right-5 sm:right-10`}
    >
      <div className="overflow-hidden w-[2em] sm:w-[2.5em] ">
        <Image
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          alt="polaroid"
          src={unit?.images[0]}
          width={1600}
          height={1600}
        />
      </div>
      <p className="text-white text-xs sm:text-sm font-bold">Added To Cart</p>
    </div>
  );
};

export default AddedCartPopUp;
