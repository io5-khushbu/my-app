import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Product7 from "../../assets/Images/project-7.jpg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Tractor = () => {
  const navigate = useNavigate();
  const handleRedirectPage = (e, path) => {
    navigate(`/${path}`);
  };
  return (
    <>
      <Container fluid id="tractorBk">
        <Row id="marginTp">
          <Col xs={6}>
            <Image src={Product7} alt="product7" className="product7" rounded />
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={6} id="selling1">
                We are one of the largest suppliers of selling agriculture &
                tractor equipment parts.
              </Col>
            </Row>
            <Row>
              <Col xs={6} id="modern">
                ANV Industries Ltd.,With its Modern Machinery & Workshop, has
                become One of the Leading manufacturer & export of Tractor
                Parts. All our machines are microprocessor controlled with multi
                stage parameter settings, which helps us achieve the highest
                levels of quality and efficiency.{" "}
              </Col>
            </Row>
            <Row id="colorCode">
              <Col xs={6}>30</Col>
              <Col xs={6}>1000</Col>
            </Row>
            <Row id="clients">
              <Col xs={6}>Years of Experience</Col>
              <Col xs={6}>Clients</Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={6}></Col>
          <Col md={3}>
            <Button
              variant="light"
              id="learnBtn"
              onClick={(e) => handleRedirectPage(e, "contact")}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tractor;
