"use client";
import StyleProfileContainer from "./styles/Profile/HeadContainer.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const HomeSection = dynamic(() => import("./components/Home/Home"), {
  ssr: false,
});

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <div
        className={`${StyleProfileContainer.Main__Container} ${StyleProfileContainer.robotoregular}`}
      >
        <Suspense>
          <Navbar />
          <HomeSection />
        </Suspense>
      </div>
    </>
  );
}
