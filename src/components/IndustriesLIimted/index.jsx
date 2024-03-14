import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";

const IndustriesLimited = () => {
  return (
    <>
      <Container fluid className="anv1">
        <Row>
          <Col sm={12} id="anv-limit">
            <strong className="anv-limited">
              ANV INDUSTRIES LIMITED
              <br />
              AN ISO CERTIFIED 9001 : 2000 COMPANY
            </strong>
          </Col>
          <Col sm={12} id="anv-tractor">
            <strong className="agriculture">
              Agriculture & <br />
              Tractor Equipment Parts
            </strong>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default IndustriesLimited;
