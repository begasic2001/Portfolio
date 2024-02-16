"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Typical from "react-typical";
import StylesHomeModule from "./styles/Home.module.scss";
const Home = () => {
  return (
    <>
      <div
        className={`${StylesHomeModule.Home__ProfileContainer} ${StylesHomeModule.robotoregular}`}
      >
        <div className={`${StylesHomeModule.Home__ProfileParent}`}>
          <div>
            <div className="">
              <div className="">
                <Link
                  href="https://www.facebook.com/lmtafred918/"
                  className={`${StylesHomeModule.Home__ProfileLink}`}
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </Link>
                <Link
                  href=""
                  className={`${StylesHomeModule.Home__ProfileLink}`}
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
                <Link
                  href="https://github.com/begasic2001"
                  className={`${StylesHomeModule.Home__ProfileLink}`}
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/l%C6%B0%C6%A1ng-minh-th%C3%A0nh-a6880a208/"
                  className={`${StylesHomeModule.Home__ProfileLink}`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>

            <div className={`${StylesHomeModule.Home__ProfileDetailsName}`}>
              <span className={`${StylesHomeModule.Home__ProfilePrimaryText}`}>
                {" "}
                Hello, I'm{" "}
                <span
                  className={`${StylesHomeModule.Home__ProfileHighlightText}`}
                >
                  Thanh
                </span>
              </span>
            </div>

            <div className={`${StylesHomeModule.Home__ProfileDetailRole}`}>
              <span className={`${StylesHomeModule.Home__ProfilePrimaryText}`}>
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
                <span
                  className={`${StylesHomeModule.Home__ProfileRoleTagline}`}
                >
                  Lorem ipsum dolor, sit amet c aliquam incidunt vero
                  repellendus expedita illum voluptate.
                </span>
              </span>
            </div>

            <div className="profile-optins">
              <button className={`${StylesHomeModule.Home__ProfileBtnPrimary}`}>
                {""}
                Hire Me{" "}
              </button>
              <a
                href="CV_LuongMinhThanh_WebDeveloper.pdf"
                download={"CV_LuongMinhThanh_WebDeveloper.pdf"}
              >
                <button className="ml-[28px] w-[160px] rounded-[50px] bg-BtnGetCV-BackGroundGetCV py-[14px] text-[14px] font-bold text-TextHireMe hover:ml-[28px] hover:bg-[cornsilk] hover:text-[#111]">
                  Get CV
                </button>
              </a>
            </div>
          </div>

          <div className="ml-[100px] flex h-[380px] w-[380px] items-center justify-center rounded-[50%] shadow-ProfilePicture lg:mx-0 lg:ml-[80px] lg:mr-0">
            <div className="z-10 h-[92%] w-[92%] rounded-[50%] bg-HeroProfile bg-cover bg-center bg-no-repeat hover:scale-[1.07] hover:duration-1000 hover:ease-out"></div>
          </div>
        </div>
      </div>

      <div className="flex h-[17.8%] w-full justify-center overflow-hidden">
        <div className="h-full max-h-[1920px] w-full">
          <img
            src="/wavefooterhero.png"
            alt=""
            className="h-[130px] w-full max-w-full bg-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
