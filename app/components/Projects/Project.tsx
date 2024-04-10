"use client";
import ScreenHeading from "@/app/utils/ScreenHeading/ScreenHeading";
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,

  // loop: true,
  // margin: 0,
  nav: true,
  animateIn: "bounceInRight",
  animateOut: "bounceOutRight",
  dots: true,
  // autoplay: true,
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
      <Container>
        <Row>
          <OwlCarousel className="owl-carousel owl-theme" id="" {...options}>
            <Col lg={12}>
              <div className="testi-item">
                <div className="testi-comment">
                  {/* <Image src={} width={100} height={100} /> */}
                  <p>Description project</p>
                </div>
              </div>
            </Col>
          </OwlCarousel>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
