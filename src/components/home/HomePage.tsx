"use client";
import React, { useState } from "react";
import Splash from "../splash/Splash";
import LandingSection from "./Home";

const HomePage = () => {
  //splash when website is loaded
  const [showSplash, setShowSplash] = useState(true);

  const handleTimeout = () => {
    setShowSplash(false);
  };
  return (
    <div>
      {showSplash ? <Splash onTimeout={handleTimeout} /> : <LandingSection />}
    </div>
  );
};

export default HomePage;
