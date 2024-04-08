import React, { useState } from "react";
import StylesNav from "../styles/Profile/header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Navbar = () => {
  const [showHeaderOptions, setShowHeaderOptions] = useState<boolean>(false);
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
              href={"/home"}
              className={`${StylesNav.header__optionSeperator} ${StylesNav.header__optionSeperatorActive}`}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className={`${StylesNav.header__optionSeperator} `}
            >
              About
            </Link>
            <Link
              href={"/resume"}
              className={`${StylesNav.header__optionSeperator} `}
            >
              Resume
            </Link>
            <Link
              href={"/project"}
              className={`${StylesNav.header__optionSeperator} `}
            >
              Project
            </Link>
            <Link
              href={"/contact"}
              className={`${StylesNav.header__optionSeperator} `}
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
