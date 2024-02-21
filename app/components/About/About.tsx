import React from "react";
import AboutStyles from "../../styles/About/About.module.scss";
import ScreenHeading from "@/app/utils/ScreenHeading/ScreenHeading";

const SCREEN_ABOUT = {
  description:
    "FullStack Web developer with background knowledge of MERN stacks & .NET CORE API",
  hightlights: {
    bullets: [
      "Full stack and mobile web development",
      "Interactive Front End as per the design",
      "Photoshop, illustrator, indesign design a logo",
      "Building REST API",
      "Managing database",
    ],
    heading: "Here are a few highlights",
  },
};

const renderHighlight = () => {
  return SCREEN_ABOUT.hightlights.bullets.map((value, i) => (
    <div className={`${AboutStyles.Highlight}`} key={i}>
      <div className={`${AboutStyles.Highlight__Blob}`}></div>
      <span>{value}</span>
    </div>
  ));
};

const About = () => {
  // {`${AboutStyles.About__Container} ${AboutStyles.About__ScreenContainer} {`${AboutStyles.About__Parents}`}
  return (
    <div
      className={`${AboutStyles.About__Container} ${AboutStyles.About__ScreenContainer}`}
    >
      <div className={`${AboutStyles.About__Parents}`}>
        <ScreenHeading title="About Me" subHeading="Why Choose Me?" />
        <div className={`${AboutStyles.About__Card}`}>
          <div className={`${AboutStyles.About__Profile}`}></div>
          <div className={`${AboutStyles.About__Details}`}>
            <span className={`${AboutStyles.About__Description}`}>
              {SCREEN_ABOUT.description}
            </span>
            <div className={`${AboutStyles.About__Highlights}`}>
              <div className={`${AboutStyles.About__HighlightHeading}`}>
                <span>{SCREEN_ABOUT.hightlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className={`${AboutStyles.About__Options}`}>
              {/* <button className={`${StyleProfile.Home__ProfileBtnPrimary}`}>
                {""}
                Hire Me{" "}
              </button>
              <a
                href="CV_LuongMinhThanh_WebDeveloper.pdf"
                download={"CV_LuongMinhThanh_WebDeveloper.pdf"}
              >
                <button className={`${StyleProfile.Home__ProfileBtnSecondary}`}>
                  Get CV
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
