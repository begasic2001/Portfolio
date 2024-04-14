"use client";
import ScreenHeading from "@/app/utils/ScreenHeading/ScreenHeading";
import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProjectStyle from "../../styles/Project/Project.module.scss";
const options = {
  loop: true,
  margin: 0,
  nav: true,
  animateIn: "bounceInRight",
  animateOut: "bounceOutRight",
  dots: true,
  autoplay: true,
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

const Project = () => {
  return (
    <div>
      <ScreenHeading title="Project" subHeading="Personal Project" />
      <div className={`${ProjectStyle.ProjectSection}`}>
        <Container >
          <Row>
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <Col lg={12}>
                <div className={`${ProjectStyle.ProjectItem}`}>
                  <Image src="/bg-4.jpg" width={100} height={100} alt="" />

                  <p>Description project</p>
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
