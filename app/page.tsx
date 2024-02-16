"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Typical from "react-typical";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import stylesNav from "./styles/header.module.scss";
import StyleProfile from "./components/Home/Home.module.scss";
export default function Home() {
  return (
    <>
      <div className={`${StyleProfile.Home__Container} ${StyleProfile.robotoregular}`}>
        <div>
          <div className={stylesNav.header__container}>
            <div className={stylesNav.header__parent}>
              <div className={stylesNav.header__hamburger}>
                <FontAwesomeIcon
                  className={`${stylesNav.header__hamburgerBars} ${stylesNav.header__showhamburger}`}
                  icon={faBars}
                />
              </div>
              <div className={stylesNav.header__logo}>
                <span>MT</span>
              </div>
              {/* show-hamburger-options */}
              <div className={stylesNav.header__options}>
                <Link
                  href={"/home"}
                  className={`${stylesNav.header__optionSeperator} ${stylesNav.header__optionSeperatorActive}`}
                >
                  Home
                </Link>
                <Link
                  href={"/home"}
                  className={`${stylesNav.header__optionSeperator} `}
                >
                  About
                </Link>
                <Link
                  href={"/home"}
                  className={`${stylesNav.header__optionSeperator} `}
                >
                  About
                </Link>
                <Link
                  href={"/home"}
                  className={`${stylesNav.header__optionSeperator} `}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${StyleProfile.Home__ProfileContainer} ${StyleProfile.robotoregular}`}
        >
          <div className={`${StyleProfile.Home__ProfileParent}`}>
            <div>
              <div className="">
                <div className="">
                  <Link href="https://www.facebook.com/lmtafred918/">
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      className={`${StyleProfile.Home__ProfileLink}`}
                    />
                  </Link>
                  <Link href="">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className={`${StyleProfile.Home__ProfileLink}`}
                    />
                  </Link>
                  <Link href="https://github.com/begasic2001">
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className={`${StyleProfile.Home__ProfileLink}`}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/l%C6%B0%C6%A1ng-minh-th%C3%A0nh-a6880a208/">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className={`${StyleProfile.Home__ProfileLink}`}
                    />
                  </Link>
                </div>
              </div>

              <div className={`${StyleProfile.Home__ProfileDetailsName}`}>
                <span className={`${StyleProfile.Home__ProfilePrimaryText}`}>
                  {" "}
                  Hello, I'm{" "}
                  <span
                    className={`${StyleProfile.Home__ProfileHighlightText}`}
                  >
                    Thanh
                  </span>
                </span>
              </div>

              <div className={`${StyleProfile.Home__ProfileDetailRole}`}>
                <span className={`${StyleProfile.Home__ProfilePrimaryText}`}>
                  {" "}
                  <h1>
                    {" "}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Backend Dev",
                        1000,
                        "Frontend Dev",
                        1000,
                        "UX/UI Design",
                        1000,
                        "Mobile Dev",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className={`${StyleProfile.Home__ProfileRoleTagline}`}>
                    Lorem ipsum dolor, sit amet c aliquam incidunt vero
                    repellendus expedita illum voluptate.
                  </span>
                </span>
              </div>

              <div className="profile-optins">
                <button className={`${StyleProfile.Home__ProfileBtnPrimary}`}>
                  {""}
                  Hire Me{" "}
                </button>
                <a
                  href="CV_LuongMinhThanh_WebDeveloper.pdf"
                  download={"CV_LuongMinhThanh_WebDeveloper.pdf"}
                >
                  <button
                    className={`${StyleProfile.Home__ProfileBtnSecondary}`}
                  >
                    Get CV
                  </button>
                </a>
              </div>
            </div>

            <div className={`${StyleProfile.Home__ProfileAvatar}`}>
              <div
                className={`${StyleProfile.Home__ProfileAvatar__Main}`}
              ></div>
            </div>
          </div>
        </div>

        <div className={`${StyleProfile.Home__FooterContainer}`}>
          <div className={`${StyleProfile.Home__FooterParent}`}>
            <img src="/wavefooterhero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
