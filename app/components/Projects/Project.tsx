"use client";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import React from "react";
import dynamic from "next/dynamic";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProjectStyle from "../../styles/Project/Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <ScreenHeading title="Project" subHeading="Personal Project" />
      <div className={`${ProjectStyle.ProjectSection}`}>
        <Container className={`${ProjectStyle.ContainerItem}`}>
          <Row>
            <OwlCarousel
             
              id="testimonial-carousel"
              {...options}
              autoplay={true}
              autoplaySpeed={1000}
              autoplayTimeout={1000}
            >
              <Col lg={12}>
                <div className={`${ProjectStyle.ProjectItem}`}>
                  <img src="/bg-4.jpg" alt="" />
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
      </div>
      <div className={`${ProjectStyle.FooterImage}`}>
        <img src="/wavefooterhero.png" alt="" />
      </div>
    </div>
  );
};

export default Project;
