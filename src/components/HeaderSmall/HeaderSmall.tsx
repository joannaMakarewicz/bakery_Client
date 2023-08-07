import React from "react";
import bcg29 from "../../assets/bcg29.jpg";
import bcg27 from "../../assets/bcg27.jpg";
import "../HeaderSmall/HeaderSmall.scss";

const HeaderSmall = () => {
  return (
    <div className="headerSmall">
      <img className="headerSmall__photo" src={bcg29} alt="random cake" />
      <img className="headerSmall__photo" src={bcg27} alt="random cake" />
    </div>
  );
};

export default HeaderSmall;
