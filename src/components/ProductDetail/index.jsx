import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import P1 from "../../assets/Images/P11.jpg";
import P2 from "../../assets/Images/P12.jpg";
import P3 from "../../assets/Images/P13.jpg";
import P4 from "../../assets/Images/P14.jpg";
import P5 from "../../assets/Images/P3.jpg";
import P6 from "../../assets/Images/P5.jpg";
import P7 from "../../assets/Images/P7.jpg";
import P8 from "../../assets/Images/P9.jpg";

import "./style.css";

const ProductDetail = () => {
  return (
    <>
      <Container>
        <Row>
          <Col id="massey">
            The parts department holds large stocks for most manufacturers
            including, John Deere, Case IH,
            <br /> David Brown, Ford/New Holland, Massey Ferguson and many
            others.{" "}
          </Col>
        </Row>
        <Row className="marginT">
          <Col xs={6} md={3}>
            <Image src={P1} rounded className="pro-Image" />
            <Col md={3} className="picText">
              CENTRE PI
            </Col>
          </Col>
          <Col xs={6} md={3}>
            <Image src={P2} rounded className="pro-Image" />
            <Col md={3} className="picText">
              ROTAVATOR BLADE
            </Col>
          </Col>
          <Col xs={6} md={3}>
            <Image src={P3} rounded className="pro-Image" />
            <Col md={3} className="picText">
              ROTAVATOR CHECK NUT
            </Col>
          </Col>
          <Col xs={6} md={3}>
            <Image src={P4} rounded className="pro-Image" />
            <Col md={3} className="picText">
              {" "}
              TRIANGULAR YOKE
            </Col>
          </Col>
        </Row>{" "}
        <Row className="marginT1">
          <Col xs={6} md={3}>
            <Image src={P5} rounded className="pro-Image" />
            <Col md={3} className="picText">
              SHOVEL BOLT
            </Col>
          </Col>
          <Col xs={6} md={3}>
            <Image src={P6} rounded className="pro-Image" />
            <Col md={3} className="picText">
              {" "}
              FRONT WHEEL HUB
            </Col>
          </Col>
          <Col xs={6} md={3}>
            <Image src={P7} rounded className="pro-Image" />
            <Col md={3} className="picText">
              BEVEL GEAR
            </Col>
          </Col>
          <Col xs={6} md={3}>
            <Image src={P8} rounded className="pro-Image" />
            <Col md={3} className="picText">
              YOKE
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProductDetail;
