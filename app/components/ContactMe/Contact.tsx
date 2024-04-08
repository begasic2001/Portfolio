import ScreenHeading from "@/app/utils/ScreenHeading/ScreenHeading";
import ContactStyle from "../../styles/Contact/Contact.module.scss";
import React from "react";

const Contact = () => {
  return (
    <div className={`${ContactStyle.Container}`}>
      <ScreenHeading title="Contact" subHeading="Lets Keep In Touch" />
      <form className={`${ContactStyle.baseForm}`}>
        <input
          name="name"
          type="text"
          className={`${ContactStyle.feedback_input}`}
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className={`${ContactStyle.feedback_input}`}
          placeholder="Email"
        />
        <textarea
          name="text"
          className={`${ContactStyle.textarea} ${ContactStyle.feedback_input}`}
          placeholder="Comment"
        ></textarea>
        <input
          type="submit"
          value="SUBMIT"
          className={`${ContactStyle.submit}`}
        />
      </form>
    </div>
  );
};

export default Contact;