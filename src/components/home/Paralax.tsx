"use client";
import { useScroll, useTransform , motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Paralax = () => {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset : ['start start', 'end end']
  });
  const scale4 = useTransform(scrollYProgress , [0,1],[1.5,1])
  return (
    <div ref={container} className=" overflow-hidden my-20">
      <motion.div style={{scale : scale4}} className="w-full h-[55vh]">
        <Image
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
          alt="polaroid"
          src="/Images/home/animation/collage.webp"
          width={1600}
          height={1600}
          className=" "
        />
      </motion.div>
    </div>
  );
};

export default Paralax;