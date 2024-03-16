import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import service from "../../assets/Images/ab-1.jpg";
import sale from "../../assets/Images/ab-2.jpg";
import here from "../../assets/Images/ab-4.jpg";
import mission from "../../assets/Images/project-7.jpg";

const AboutPage = () => {
  return (
    <>
      <Header />{" "}
      <div className="About">
        <div className="firstbox">
          <div className="offer">What We Offer</div>
          <img src={service} alt="service" className="service" />
          <img src={sale} alt="sale" className="sale" />
          <img src={here} alt="here" className="here" />
          <div className="sales">
            <ul>
              <li>
                <h1>Sale</h1>
              </li>
              <p className="des">
                A great selection of top quality used tractors parts.
              </p>
            </ul>
          </div>

          <div className="parts">
            <ul>
              <li>
                <h2>Parts</h2>
              </li>
              <p className="desi"> A large number stock of parts available .</p>
            </ul>
          </div>

          <div className="he">
            <ul>
              <li>
                <h3>Here</h3>
              </li>
              <p className="desic">Tractors,parts are available here.</p>
            </ul>
          </div>
        </div>
        <div className="secondbox">
          <div className="our">Our mission</div>
          <p className="p2">
            By empowering and investing in our employees, we will build and
            maintain long-term relationships with the communities and businesses
            we serve.
          </p>
          <img src={mission} alt="mission" className="mission" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutPage;
