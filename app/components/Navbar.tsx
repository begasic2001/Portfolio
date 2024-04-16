import React, { useState } from "react";
import StylesNav from "../styles/Profile/header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
import { scroller, Link } from "react-scroll";
const Navbar = () => {
  const [showHeaderOptions, setShowHeaderOptions] = useState<boolean>(false);

  const [selectedNavbarIndex, setSelectedNavbarIndex] = useState<number>(0);
  const scrollToAbout = (index:number) => {
    index ==selectedNavbarIndex ? :
    scroller.scrollTo("scroll-to-about", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  function scrollToResume(): void {
    scroller.scrollTo("scroll-to-resume", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  function scrollToProject(): void {
    scroller.scrollTo("scroll-to-project", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  function scrollToContact(): void {
    scroller.scrollTo("scroll-to-contact", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <div>
      <div
        className={StylesNav.header__container}
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className={StylesNav.header__parent}>
          <div
            className={StylesNav.header__hamburger}
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon
              className={`${StylesNav.header__hamburgerBars} `}
              icon={faBars}
            />
          </div>
          <div className={StylesNav.header__logo}>
            <span>MT</span>
          </div>
          {/* show-hamburger-options */}
          <div
            className={
              showHeaderOptions
                ? `${StylesNav.header__options} ${StylesNav.header__showhamburger}`
                : `${StylesNav.header__options}`
            }
          >
            <Link
              className={`${StylesNav.header__optionSeperator} ${StylesNav.header__optionSeperatorActive}`}
            >
              Home
            </Link>
            <Link
              // index == selectedNavbarIndex ? : 
              className={`${StylesNav.header__optionSeperator} `}
              onClick={() => scrollToAbout(1)}
            >
              About
            </Link>
            <Link
              className={`${StylesNav.header__optionSeperator} `}
              onClick={() => scrollToResume()}
            >
              Resume
            </Link>
            <Link
              className={`${StylesNav.header__optionSeperator} `}
              onClick={() => scrollToProject()}
            >
              Project
            </Link>
            <Link
              className={`${StylesNav.header__optionSeperator} `}
              onClick={() => scrollToContact()}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
