import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Product1 from "../../assets/Images/product-1.png";
import Product2 from "../../assets/Images/product-2.png";
import Product3 from "../../assets/Images/product-3.png";
import Product4 from "../../assets/Images/product-4.png";
import Product5 from "../../assets/Images/product-5.png";
import Product6 from "../../assets/Images/product-6.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Product = () => {
  const navigate = useNavigate();
  const handleRedirectPage = (e, path) => {
    navigate(`/${path}`);
  };
  return (
    <>
      <Container>
        <Row className="marginT">
          <Col md={3} sm={1} id="ourPro">
            OUR <br />
            PRODUCT
          </Col>
          <Col md={3}>
            <Image src={Product1} thumbnail className="productImage" />
            <Col md={3} className="picText">
              REAR WHEEL AXLE
            </Col>
          </Col>
          <Col md={3}>
            <Image src={Product2} thumbnail className="productImage" />
            <Col md={3} className="picText">
              PINS
            </Col>
          </Col>
          <Col md={3}>
            <Image src={Product3} thumbnail className="productImage" />
            <Col md={3} className="picText">
              PINION SHAFTS
            </Col>
          </Col>
        </Row>

        <Row className="marginB">
          <Col md={3}>
            <Button
              variant="light"
              id="viewBtn"
              onClick={(e) => handleRedirectPage(e, "product")}
            >
              View Collection
            </Button>
          </Col>
          <Col md={3}>
            <Image src={Product4} thumbnail className="productImage" />
            <Col md={3} className="picText">
              STUB AXLES
            </Col>
          </Col>
          <Col md={3}>
            <Image src={Product5} thumbnail className="productImage" />
            <Col md={3} className="picText">
              PTO SHAFTS
            </Col>
          </Col>
          <Col md={3}>
            <Image src={Product6} thumbnail className="productImage" />
            <Col md={3} className="picText">
              REAR AXLES
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Product;
