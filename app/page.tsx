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
export default function Home() {
  return (
    <div className="z-0 flex min-h-fit items-center justify-center bg-HeroSection bg-cover bg-center text-center font-sans">
      <div className="flex items-center text-HeroSection-ProfileParent-Color">
        <div>
          <div className="">
            <div className="">
              <Link
                href="https://www.facebook.com/lmtafred918/"
                className="color-white p-[8px] pl-0"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="hover:scale-150"
                />
              </Link>
              <Link href="" className="color-white p-[8px] pl-0 ">
                <FontAwesomeIcon icon={faGoogle} className="hover:scale-150" />
              </Link>
              <Link
                href="https://github.com/begasic2001"
                className="color-white p-[8px] pl-0 "
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="hover:scale-150"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/l%C6%B0%C6%A1ng-minh-th%C3%A0nh-a6880a208/"
                className="color-white p-[8px] pl-0 "
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="hover:scale-150"
                />
              </Link>
            </div>
          </div>

          <div className="text-[24px]">
            <span className="text-[40px]">
              {" "}
              Hello, I'm{" "}
              <span className="font-medium text-HeroSection-HightlightText-Color">
                Thanh
              </span>
            </span>
          </div>

          <div className="mb-[24px] ml-0 mr-0 mt-[14px] flex flex-col">
            <span className="text-TextHireMe">
              {" "}
              <h1 className="text-[40px]">
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
              <span className="mt-[5px] text-[19px] font-light">
                Lorem ipsum dolor, sit amet c aliquam incidunt vero repellendus
                expedita illum voluptate.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              className="w-[160px] rounded-[50px] border-2 border-solid bg-BtnHireMe-BackGroundHireMe py-[14px] text-[14px] text-TextHireMe 
             hover:border-2 hover:border-BtnHireMe-HoverBorderHireMe hover:text-HoverTextHireMe"
            >
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

        <div className="ml-[100px] flex h-[380px] w-[380px] items-center justify-center rounded-[50%] shadow-ProfilePicture">
          <div className="z-10 h-[92%] w-[92%] rounded-[50%] bg-HeroProfile bg-cover bg-center bg-no-repeat hover:scale-[1.07] hover:duration-1000 hover:ease-out"></div>
        </div>
      </div>
    </div>
  );
}
