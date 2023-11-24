import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../../assets/firstSlide.jpeg";
import thirdSlide from "../../../assets/thirdSlide.jpeg";
import secondSlide from "../../../assets/secondSlide.jpeg";
import headerRight from "../../../assets/headerRight.jpg";
import headerLeft from "../../../assets/headerLeft.jpeg";
import "../Header/Header.scss";

type HeaderProps = {
  loading:boolean
}

const Header = ({loading}:HeaderProps) => {
  return (
    <>
      {loading ? (
        <p className="headerSmall--1 headerSmall">
          <div className="headerSmall__icon spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </p>
      ) : (
        <header className="header">
          <div className="header__images">
            <img
              className="header__photo header__photo--1"
              src={headerLeft}
              alt="Słodki stół"
            />
            <Carousel className="header__photo header__photo--2">
              <Carousel.Item>
                <img
                  className="header__img w-100"
                  src={firstSlide}
                  alt="Tort biały z różowymi różami"
                />
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex">
                  <img
                    className="header__img w-100"
                    src={secondSlide}
                    alt="Tort zielony na Chrzest Święty"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="header__img w-100"
                  src={thirdSlide}
                  alt="Tort czarny z kobietą i czerwonymi różami"
                />
              </Carousel.Item>
            </Carousel>
            <img
              className="header__photo header__photo--3"
              src={headerRight}
              alt="Słodki stół"
            />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
