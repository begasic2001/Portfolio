"use client";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import $ from "jquery";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProjectStyle from "../../styles/Project/Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element } from "react-scroll";
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }
const Project = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // window.$ = window.jQuery = require("jquery");
      return;
    }
  }, []);
  const options = {
    loop: true,
    margin: 5,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    smartSpeed: 1000,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      800: {
        items: 2,
      },

      1000: {
        items: 2,
      },

      1243: {
        items: 3,
      },
    },
  };
  return (
    <>
      <ScreenHeading title="Project" subHeading="Personal Project" />
      <div className={`${ProjectStyle.ProjectSection}`}>
        <Element name="scroll-to-3">
          <Container className={`${ProjectStyle.ContainerItem}`}>
            <Row>
              <OwlCarousel
                id="testimonial-carousel"
                {...options}
                className="owl-theme"
              >
                <Col lg={12}>
                  <div className={`${ProjectStyle.ProjectItem}`}>
                    <Image
                      src="/CSharp.png"
                      alt="Project"
                      width={50}
                      height={50}
                    />
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className={`${ProjectStyle.faQuoteLeft}`}
                    />
                    <p>Description project</p>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className={`${ProjectStyle.faQuoteRight}`}
                    />
                  </div>
                </Col>
              </OwlCarousel>
            </Row>
          </Container>
        </Element>
      </div>
    </>
  );
};

export default Project;
