import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="address">
          <p className="contactdetails">Contact Details</p>
          <p className="currentaddress">Address</p>
          <p className="plot">
            D-25,Focal Point, Phase v,Ludhiana(Punjab)141010
          </p>
          <p className="phone">Call us</p>
          <p className="number">+91-161-5086086</p>
          <p className="emai">E-Mail</p>
          <p className="mail">Anvindus2004@gmail.com</p>
        </div>
        <div className="dataname">
          <input
            type="text"
            placeholder="enter your name"
            className="name"
          ></input>
          <input
            type="text"
            placeholder="enter your e-mail"
            className="emails"
          ></input>
          <input
            type="text"
            placeholder="enter your message"
            className="requirement"
          ></input>
          <button>submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
