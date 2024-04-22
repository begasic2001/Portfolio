import React, { useState } from "react";
import StylesNav from "../styles/Profile/header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { scroller, Link } from "react-scroll";
const Navbar = () => {
  const [showHeaderOptions, setShowHeaderOptions] = useState<boolean>(false);
  const [selectedNavbarIndex, setSelectedNavbarIndex] = useState<number>(0);
  const Links = [
    {
      label: "Home",
    },
    {
      label: "About",
    },
    {
      label: "Resume",
    },
    {
      label: "Project",
    },
    {
      label: "Contact",
    },
  ];
  const scrollTo = (index: number) => {
    scroller.scrollTo(`scroll-to-${index}`, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setSelectedNavbarIndex(index);
  };

  return (
    <div>
      <div className={StylesNav.header__container}>
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
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            {Links.map((link, index) => (
              <Link
                className={
                  index == selectedNavbarIndex
                    ? `${StylesNav.header__optionSeperator} ${StylesNav.header__optionSeperatorActive}`
                    : `${StylesNav.header__optionSeperator}`
                }
                onClick={() => scrollTo(index)}
                to=""
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
