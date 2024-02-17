import React from "react";
import StylesNav from "../styles/Profile/header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div className={StylesNav.header__container}>
        <div className={StylesNav.header__parent}>
          <div className={StylesNav.header__hamburger}>
            <FontAwesomeIcon
              className={`${StylesNav.header__hamburgerBars} ${StylesNav.header__showhamburger}`}
              icon={faBars}
            />
          </div>
          <div className={StylesNav.header__logo}>
            <span>MT</span>
          </div>
          {/* show-hamburger-options */}
          <div className={StylesNav.header__options}>
            <Link
              href={"/home"}
              className={`${StylesNav.header__optionSeperator} ${StylesNav.header__optionSeperatorActive}`}
            >
              Home
            </Link>
            <Link
              href={"/home"}
              className={`${StylesNav.header__optionSeperator} `}
            >
              About
            </Link>
            <Link
              href={"/home"}
              className={`${StylesNav.header__optionSeperator} `}
            >
              About
            </Link>
            <Link
              href={"/home"}
              className={`${StylesNav.header__optionSeperator} `}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
