"use client";
import StyleProfileContainer from "./styles/Profile/HeadContainer.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
const HomeSection = dynamic(() => import("./components/Home/Home"), {
  ssr: false,
});

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});

// const About = dynamic(() => import("./components/About/About"), {
//   ssr: false,
// });
export default function Home() {
  return (
    <>
      <div
        className={`${StyleProfileContainer.Main__Container}`}
      >
        <Suspense>
          <Navbar />
          <HomeSection />
        </Suspense>
      </div>
      
        <About />
        <Resume/>
    </>
  );
}
