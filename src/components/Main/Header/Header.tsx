import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bcg24 from "../../../assets/bcg24.jpeg";
import bcg17 from "../../../assets/bcg17.jpeg";
import bcg10 from "../../../assets/bcg10.jpeg";
import bcg4 from "../../../assets/bcg4.jpeg";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Carousel>
        <Carousel.Item>
          <img
            className="header__img d-block w-100"
            src={bcg24}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex">
            <img
              className="header__img d-block w-100"
              src={bcg10}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="header__img d-block w-100"
            src={bcg17}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;
