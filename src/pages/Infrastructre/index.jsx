import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import first from "../../assets/Images/in-1.jpg";
import second from "../../assets/Images/in-2.jpg";
import third from "../../assets/Images/in-3.jpg";
import fourth from "../../assets/Images/in-4.jpg";

const Infrastructre = () => {
  return (
    <>
      <Header />
      <div className="infrastructre">
        <div className="firstb">
          <img src={third} alt="second" className="third" />
          <p className="fourthp">
            At ANV Industries Ltd., our approach to design and manufacturing is
            rooted in meticulous planning and proactive quality assurance. We
            initiate every project with comprehensive quality assurance plans,
            pinpointing potential areas of non-performance to mitigate risks
            from the outset. Our commitment to excellence is reflected in our
            choice of materials, exclusively sourcing from internationally
            renowned suppliers to craft tractor parts that are not only reliable
            but also meet global quality standards. Our expertise in
            cutting-edge CAD/CAM technology and solid modelling software is
            pivotal in reducing lead times for mold development, allowing us to
            respond swiftly to market demands. Our facility is equipped with an
            array of precision testing instruments, including profile projectors
            and hardness testers, ensuring that every product we deliver adheres
            to the highest measures of quality and durability.
          </p>
          <img src={first} alt="first" className="first" />
          <p className="secondp">
            At ANV Industries Ltd., quality isn’t just a concern; it’s our prime
            directive. Our robust and mandatory quality policy is the
            cornerstone of our operations, ensuring that every goal we set is
            not just met but exceeded. The principles of Durability, Quality,
            and Dependability are not merely attributes of our products; they
            are the very pillars upon which the ANV quality program stands. Our
            unwavering commitment to these standards is what distinguishes the
            ANV group in the marketplace and cements our reputation as a leader
            in the tractor parts manufacturing industry
          </p>
        </div>

        <div className="secondb">
          <p className="thirdp">
            ANV Industries Ltd.: A Pinnacle of Precision and Excellence in
            Tractor Parts Manufacturing At ANV Industries Ltd., we pride
            ourselves on our state-of-the-art machinery and workshop facilities,
            which have firmly established us as a premier manufacturer and
            exporter of tractor parts. Our commitment to innovation is evident
            in every product that leaves our factory floor . Each machine in our
            arsenal operates under microprocessor control, featuring multi-stage
            par ameter settings that ensure unparalleled quality and efficiency.
            Our dedication to excellence ex tends to our fully equipped tool
            room, designed to fulfill the intricate demands of our production
            processes. We understand that time is of the essence, especially
            when it comes to new developments . That’s why we guarantee short
            delivery times as a fundamental aspect of our contracts. Engagement
            with our clients is at the heart of our operation. Upon receiving
            orders, we meticulously discuss component drawings and quality
            standards to ensure every specification is met with precision. At
            ANV Industries Ltd., we don’t just meet expectations; we exceed them
          </p>
          <img src={fourth} alt="fourth" className="fourth" />
          <p className="firstp">
            Our workshop is the backbone of ANV Industries Ltd., equipped with
            an array of sophisticated machinery that defines the standard for
            precision and quality. The fleet includes: CNC Turning Centres: The
            epitome of precision, delivering complex geometries with impeccable
            accuracy. Centering & Facing Machines (WMW Germany): Renowned for
            their robust performance, ensuring perfect alignment and finish.
            Hydraulic Cylindrical Grinders: For achieving superior surface
            finish and tight tolerances on cylindrical surfaces. Lathe Machines:
            The cornerstone of metalworking, providing versatility and
            reliability. Gear Hobbing Machines: Crafting intricate gears with
            utmost precision. Horizontal Milling Machines: Ideal for complex
            cutting and shaping operations. Vertical Milling Machines: Offering
            precise depth and plane control. Drilling Machines: Engineered for
            pinpoint accuracy in drilling operations. Spline Hobbing Machines:
            Specialized in creating detailed spline profiles. Each piece of
            equipment at ANV Industries Ltd. is a testament to our commitment to
            excellence, enabling us to meet the diverse and exacting needs of
            our clients.
          </p>
          <img src={second} alt="second" className="second" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Infrastructre;
