import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../ExtraContent/ExtraContent.scss";

const ExtraContent = () => {
  return (
    <div className="extraContent ps-3 pe-3 pt-1 pb-1">
      <div>
        <a href="x" target="facebook">
          <BsFacebook className="me-3" />
        </a>
        <a href="x" target="instagram">
          <BsInstagram className="me-3" />
        </a>
        <a href="x" target="location">
          <FaLocationDot />
        </a>
      </div>
      <a href="tel:+48508046549" className="extraContent__tel">
        <BsFillTelephoneFill className="me-1" />
        508 046 549
      </a>
    </div>
  );
};

export default ExtraContent;
