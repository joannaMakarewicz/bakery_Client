import React from "react";
import "../HeaderSmall/HeaderSmall.scss";

type HeaderSmallProps = {
  backgroundImages: string[];
  loading?: boolean;
};

const HeaderSmall = ({
  backgroundImages,
  loading = false,
}: HeaderSmallProps) => {
  return (
    <>
      {loading ? (
        <p className="headerSmall--1 headerSmall">
          <div className="headerSmall__icon spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </p>
      ) : (
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
      )}
    </>
  );
};

export default HeaderSmall;
