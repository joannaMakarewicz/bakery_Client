import React, { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../ExtraContent/ExtraContent.scss";
import MyDataContext from "../../context/MyDataContext";

const ExtraContent = () => {
  const contactData = useContext(MyDataContext);

  return (
    <MyDataContext.Consumer>
      {(contactData) => (
        <div className="extraContent ps-3 pe-3 pt-1 pb-1">
          <div>
            <a href={contactData.myData.fb} target="_blank" rel="noreferrer">
              <BsFacebook className="me-3" />
            </a>
            <a href={contactData.myData.instagram} target="_blank" rel="noreferrer">
              <BsInstagram className="me-3" />
            </a>
            <a href={contactData.myData.google} target="_blank" rel="noreferrer">
              <FaLocationDot />
            </a>
          </div>
          <a href={`tel:${contactData.myData.tel}`} className="extraContent__tel">
            <BsFillTelephoneFill className="me-1" />
            {contactData.myData.tel}
          </a>
        </div>
      )}
    </MyDataContext.Consumer>
  );
};

export default ExtraContent;
