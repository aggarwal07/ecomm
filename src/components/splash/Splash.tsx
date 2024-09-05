// /components/Splash.tsx
import React, { useEffect, FC } from "react";
import { Dancing_Script } from "@next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
interface SplashProps {
  onTimeout: () => void;
}
const Dancing = Dancing_Script({ subsets: ["latin"] });
const Splash: FC<SplashProps> = ({ onTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, 900);

    return () => clearTimeout(timer);
  }, [onTimeout]);
  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.to("#tagLine", {
  //     scale : 3000,
  //     duration: 0.9,
  //     delay : 0.9,
  //     ease : "power4.in"
  //   });
  // });
  return (
    <div className="bg-black absolute top-0 h-[100vh] overflow-hidden text-white w-[100vw] flex items-center justify-center">
      <div id="tagLine" className={Dancing.className}>
        <p className="text-2xl sm:text-3xl 2xl:text-4xl italic font-bold zoom">
          Print Your Imagination
        </p>
      </div>
    </div>
  );
};

export default Splash;
