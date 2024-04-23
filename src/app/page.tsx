import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
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
        className="mx-auto mt-10 w-[34vw] h-[70vh] shadow-2xl"
      >
        <div className="h-[5vh]"></div>
        {/*polaroid image */}
        <div className="mx-auto w-[30vw] h-[45vh] shadow-2xl">
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
        <div className="mx-auto text-center mt-8 w-[28vw] italic">
          <p className="font-bold text-[2.5em]">Heading</p>
          <p className="text-[1.5em]">Subtitle</p>
        </div>
      </div>


    </div>
  );
}
