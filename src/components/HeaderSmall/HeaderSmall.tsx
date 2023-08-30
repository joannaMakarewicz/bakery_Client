import React from "react";
import "../HeaderSmall/HeaderSmall.scss";

type HeaderSmallProps = {
  backgroundImages: string[];
};

const HeaderSmall = ({ backgroundImages }: HeaderSmallProps) => {
  return (
    <div className="headerSmall">
      {backgroundImages.map((el) => {
        return (
          <img
            className="headerSmall__photo"
            src={el}
            alt="random cake"
            key={el}
          />
        );
      })}
    </div>
  );
};

export default HeaderSmall;
