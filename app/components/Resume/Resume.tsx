import React, { useState } from "react";
import ResumeStyle from "../../styles/Resume/Resume.module.scss";
import ScreenHeading from "@/app/utils/ScreenHeading/ScreenHeading";
interface Props {
  heading: string;
  fromDate?: string;
  toDate?: string;
  subHeading?: string;
  description?: string;
}

const Resume = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState<number>(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState<{
    style: any;
  }>({ style: {} });

  const ResumeHeading = (props: Props): React.JSX.Element => {
    return (
      <div className={`${ResumeStyle.ResumeHeading}`}>
        <div className={`${ResumeStyle.ResumeHeadingMain}`}>
          <div className={`${ResumeStyle.ResumeHeadingBullet}`}>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className={`${ResumeStyle.ResumeHeadingDate}`}>
                {`${props.fromDate}-${props.toDate}`}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className={`${ResumeStyle.ResumeHeadingSubHeading}`}>
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className={`${ResumeStyle.ResumeHeadingDescription}`}>
            <span>{props?.description ? props?.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };
  const resumeBullets = [
    { label: "Education", logoSrc: "./education.svg" },
    { label: "Work History", logoSrc: "./work-history.svg" },
    { label: "Programming Skills", logoSrc: "./programming-skills.svg" },
    { label: "Projects", logoSrc: "./projects.svg" },
    { label: "Interests", logoSrc: "./interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", logoSkill: "" },
    { skill: "JavaScript", logoSkill: "" },
    { skill: "JavaScript", logoSkill: "" },
    { skill: "JavaScript", logoSkill: "" },
    { skill: "JavaScript", logoSkill: "" },
    { skill: "JavaScript", logoSkill: "" },
    { skill: "JavaScript", logoSkill: "" },
  ];

  const projectDetails = [
    {
      title: "StudyAT",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A Personal Project",
      subHeading: "Technologies Used:",
    },
    {
      title: "Tourbooking",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A Personal Project",
      subHeading: "Technologies Used:",
    },
    {
      title: "Shopping Flower",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A Personal Project",
      subHeading: "Technologies Used:",
    },
  ];

  const resumeDetails = [
    <div className={`${ResumeStyle.ResumeScreenContainer}`} key={"Education"}>
      <ResumeHeading
        heading={"Information Technology"}
        subHeading={"Bachelor of information technology"}
        fromDate={"2019"}
        toDate={"2023"}
      />
    </div>,
    <div
      className={`${ResumeStyle.ResumeScreenContainer}`}
      key={"Work-Experience"}
    >
      <ResumeHeading
        heading={"TMA Solutions INTERN BACKEND"}
        subHeading={"BACKEND ASP.NET CORE API"}
        fromDate={"02/2023"}
        toDate={"05/2023"}
      />
      <div className={`${ResumeStyle.ResumeScreenExperienceDescription}`}>
        <span className={`${ResumeStyle.ResumeScreenExperienceText}`}>
          Current Working
        </span>
      </div>

      <div className={`${ResumeStyle.ResumeScreenExperienceDescription}`}>
        <span className={`${ResumeStyle.ResumeScreenExperienceText}`}>
          Current Working
        </span>
        <br />
        <span className={`${ResumeStyle.ResumeScreenExperienceText}`}>
          Current Working
        </span>
        <br />
        <span className={`${ResumeStyle.ResumeScreenExperienceText}`}>
          Current Working
        </span>
      </div>
    </div>,
    <div
      className={`${ResumeStyle.ResumeScreenContainer} ${ResumeStyle.ResumeProgrammingSkillContainer}`}
      key={"Programming Skills"}
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div
          className={`${ResumeStyle.ResumeProgrammingSkillContainer__SkillParent}`}
          key={index}
        >
          <div
            className={`${ResumeStyle.ResumeProgrammingSkillContainer__SkillParentBullet}`}
          ></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div className="active percentage"></div>
          </div>
        </div>
      ))}
    </div>,
    <div className={`${ResumeStyle.ResumeScreenContainer}`} key={"Project"}>
      {projectDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,
    <div className={`${ResumeStyle.ResumeScreenContainer}`} key={"Interests"}>
      <ResumeHeading heading="Teaching" description="Apart from being a tech" />
      <ResumeHeading heading="Teaching" description="Apart from being a tech" />
      <ResumeHeading heading="Teaching" description="Apart from being a tech" />
    </div>,
  ];

  const handleCarousel = (index: number) => {
    let offSetHeight = 360;
    let newCarouselOffSet = {
      style: { transform: "translateY(" + index * offSetHeight * -1 + "px" },
    };
    setCarouselOffSetStyle(newCarouselOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index == selectedBulletIndex
            ? `${ResumeStyle.ResumeBullet} ${ResumeStyle.ResumeBulletSelected}`
            : `${ResumeStyle.ResumeBullet}`
        }
      >
        <img
          src={bullet.logoSrc}
          alt=""
          className={`${ResumeStyle.ResumeBulletLogo}`}
        />
        <span className={`${ResumeStyle.ResumeBulletLabel}`}>
          {bullet.label}
        </span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className={`${ResumeStyle.ResumeDetailsCarousel}`}
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };
  return (
    <div className={`${ResumeStyle.Container} ${ResumeStyle.ScreenContainer}`}>
      <div className={`${ResumeStyle.ResumeContent}`}>
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
        <div className={`${ResumeStyle.ResumeCard}`}>
          <div className={`${ResumeStyle.ResumeBullets}`}>
            <div className={`${ResumeStyle.ResumeBulletContainer}`}>
              <div className={`${ResumeStyle.ResumeBulletIcon}`}></div>
              <div className={`${ResumeStyle.ResumeBulletList}`}>
                {getBullets()}
              </div>
            </div>
          </div>
          <div className={`${ResumeStyle.ResumeBulletDetails}`}>
            {getResumeScreen()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
