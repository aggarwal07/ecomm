// /components/Splash.tsx
import React, { useEffect, FC } from "react";
import {
  Dancing_Script
} from "@next/font/google";
interface SplashProps {
  onTimeout: () => void;
}
const Dancing = Dancing_Script({ subsets: ["latin"] });
const Splash: FC<SplashProps> = ({ onTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    },900);

    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className="bg-black absolute top-0 h-[100vh] text-white w-[100vw] flex items-center justify-center">
      <div className={Dancing.className}>
        <p className="text-2xl sm:text-3xl 2xl:text-4xl italic font-bold zoom">Print Your Imagination</p>
      </div>
    </div>
  );
};

export default Splash;
