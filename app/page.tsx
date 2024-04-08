"use client";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import HeroSection from "./components/Home/HeroSection";
import Contact from "./components/ContactMe/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Resume />
      <Contact />
    </>
  );
}
