"use client";
import StyleProfileContainer from "./styles/Profile/HeadContainer.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import HeroSection from "./components/Home/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Resume />
    </>
  );
}
