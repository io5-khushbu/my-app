import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Setting from "../../assets/Icons/setting.png";
import Man from "../../assets/Icons/man.png";
import AnvCar from "../../assets/Icons/car-icon.png";

import Col from "react-bootstrap/Col";
import "./style.css";
import { Image } from "react-bootstrap";

const Professional = () => {
  return (
    <>
      <Container id="marginTop">
        <Row id="choose">
          <Col>Why choose us? Because we are very professional</Col>
        </Row>
        <Row>
          <Col id="workShop">
            ANV Industries Ltd.,With its Modern Machinery & Workshop, has become
            One of the Leading manufacturer & export of Tractor Parts. All our
            machines are <br /> microprocessor controlled with multi stage
            parameter settings, which helps us achieve the highest levels of
            quality and efficiency.
          </Col>
        </Row>
        <Row>
          <Col>
            <br /> ANV Industries Ltd. its own fully equipped tool room to meet
            its requirements. Short delivery time for new developments is the
            essence of all contracts.
            <br />
            On receipt of orders from customers, component drawings and quality
            norms are discussed in detail.
          </Col>
        </Row>
        <Row id="manufacturing">
          <Col>
            <Col>
              <Image src={Setting} alt="setting" rounded />
            </Col>
            <Col className=" lines">
              Hitech Machinary Usage For <br />
              Better Manufacturing
            </Col>
          </Col>

          <Col>
            <Col>
              <Image src={Man} alt="man" rounded />
            </Col>
            <Col className=" lines">The Effective Teamwork</Col>
          </Col>
          <Col>
            <Col>
              <Image src={AnvCar} alt="car" rounded />
            </Col>
            <Col className=" lines">
              Top Quality Lines of Farm & TractorEquipment
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Professional;
