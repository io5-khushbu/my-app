import "./style.css";
import React from "react";
// import logo from "../../Assets/images/mt-1501-home-icon-3 copy.png";

function Footer(){
    return(
        <div className="footer">
            {/* <img src={logo} alt="logo" className="logo" /> */}
<div className="anv">ANV Industries LTD</div>
<p className="para">ANV Industries Ltd.,With its Modern Machinery & Workshop, has become One of the Leading
 manufacturer & export of Tractor Parts. All our machines are microprocessor controlled with
     multi stage parameter settings, which helps us achieve the highest levels of quality and efficiency.</p>
    <div className="quick">QUICK LINK  </div>
    <div className="icons">
    <div className="home"><li>HOME</li></div>
    
    <div className="ab"><li>ABOUT US</li></div>
    <div className="pr"><li>PRODUCT</li></div>
    <div className="en"> <li>ENQUIRY</li></div>
    <div className="co"> <li>CONTACT</li></div>
    <div className="in"> <li>INFRASTRUCTRE</li></div></div>
    <div className="add"><li>ADDRESS</li>
    <p className="addd">D-25, focal point,phase v,Ludhiana (Punjab)141010</p>
    </div>
    <div className="con"><li>CONTACT</li>
    <p className="cont">+91-161-5086086</p>
    </div>
    <div className="email"><li>E-MAIL</li>
    <p className="email1">anvinds2004@gmail.com</p>
    </div>
    <div className="copy">Copyright © 2018 All Rights Reserved.</div>
   
   
    
   
        </div>
    );
}

export default Footer;