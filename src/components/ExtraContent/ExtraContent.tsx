import React, { useContext } from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import "../ExtraContent/ExtraContent.scss";
import MyDataContext from "../../context/MyDataContext";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

type ExtraContentProps = {
  fb: JSX.Element;
  instagram: JSX.Element;
  google: JSX.Element;
};

const ExtraContent = () => {
  const contactData = useContext(MyDataContext);
  const contactDataToShow = ["fb", "instagram", "google"];

  const iconsToRender: ExtraContentProps = {
    fb: <BsFacebook />,
    instagram: <BsInstagram />,
    google: <FaLocationDot />,
  };

  return (
    <MyDataContext.Consumer>
      {(contactData) => (
        <div className="extraContent">
          <div>
            {Object.entries(contactData.myData).map(([key, value]) => {
              if (contactDataToShow.includes(key)) {
                return (
                  <a
                    href={`${value}`}
                    target="_blank"
                    rel="noreferrer"
                    key={key}
                    className="me-3"
                  >
                    {iconsToRender[key as keyof typeof iconsToRender]}
                  </a>
                );
              }
              return null;
            })}
          </div>
          <a
            href={`tel:${contactData.myData.tel}`}
            className="extraContent__tel"
          >
            {<BsFillTelephoneFill className="me-1" />}
            {contactData.myData.tel}
          </a>
        </div>
      )}
    </MyDataContext.Consumer>
  );
};

export default ExtraContent;
