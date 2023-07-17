import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bcg from "../../../assets/bcg1.jpeg";
import bcg2 from "../../../assets/bcg2.jpeg";
import bcg3 from "../../../assets/bcg3.jpeg";
import bcg4 from "../../../assets/bcg4.jpeg";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Carousel>
        <Carousel.Item>
          <img
            className="header__img d-block w-100"
            src={bcg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Słodkie stoły</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="header__img d-block w-100"
            src={bcg2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Wesela</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex">
            <img
              className="header__img d-block w-50"
              src={bcg3}
              alt="Third slide"
            />
            <img
              className="header__img d-block w-50"
              src={bcg4}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Torty</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;
