import React, { Suspense } from "react";
import StyleProfileContainer from "../../styles/Profile/HeadContainer.module.scss";
import Navbar from "../Navbar";
import Home from "./Home";

const HeroSection = () => {
  return (
    <div className={`${StyleProfileContainer.Main__Container}`}>
      <Suspense>
        <Navbar />
        <Home />
      </Suspense>
    </div>
  );
};

export default HeroSection;
