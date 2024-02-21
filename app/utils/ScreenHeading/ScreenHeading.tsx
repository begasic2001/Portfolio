import React from "react";
import ScreenHeadingStyles from "../../styles/ScreenHeading/ScreenHeading.module.scss";
interface Props {
  title: string;
  subHeading: string;
}
const ScreenHeading = ({ title, subHeading }: Props) => {
  return (
    <div className={`${ScreenHeadingStyles.HeadingContainer}`}>
      <div className={`${ScreenHeadingStyles.HeadingContainerScreen}`}>
        <span>{title}</span>
      </div>
      {subHeading ? (
        <div className={`${ScreenHeadingStyles.HeadingScreenSub}`}>
          <span>{subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className={`${ScreenHeadingStyles.HeadingSeparator}`}>
        <div className={`${ScreenHeadingStyles.HeadingSeparatorLine}`}>
          <div className={`${ScreenHeadingStyles.HeadingSeparatorBlob}`}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;
