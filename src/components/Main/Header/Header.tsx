import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bcg24 from "../../../assets/bcg24.jpeg";
import bcg17 from "../../../assets/bcg17.jpeg";
import bcg10 from "../../../assets/bcg10.jpeg";
import bcg21 from "../../../assets/bcg21.jpeg";
import bcg30 from "../../../assets/bcg30.jpg";
import bcg28 from "../../../assets/bcg28.jpg";
import bcg3 from "../../../assets/bcg3.jpeg";
import bcg4 from "../../../assets/bcg4.jpeg";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header" id="top">
      <div className="header__images">
      <img className="header__photo header__photo--1" src={bcg28} alt="slide first"/>
      <Carousel className="header__photo header__photo--2">
        <Carousel.Item>
          <img
            className="header__img w-100"
            src={bcg24}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex">
            <img
              className="header__img w-100"
              src={bcg10}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="header__img w-100"
            src={bcg17}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <img className="header__photo header__photo--3" src={bcg30} alt="slide third"/>
      </div>

    </header>
  );
};



export default Header;
