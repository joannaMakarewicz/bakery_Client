import React, { useEffect, useState } from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { PiNumberCircleOneThin } from "react-icons/pi";
// import { PiNumberCircleTwoThin } from "react-icons/pi";
// import { PiNumberCircleThreeThin } from "react-icons/pi";

import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import Arrow from "../../components/Arrow/Arrow";
import Gallery from "../../components/Gallery/Gallery";

import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import cakes1 from "../../assets/cakes1.jpeg";
import cakes2 from "../../assets/cakes2.jpeg";
import cakes3 from "../../assets/cakes3.jpeg";
import cakes4 from "../../assets/cakes4.jpeg";
import cakes5 from "../../assets/cakes5.jpeg";
import cakes6 from "../../assets/cakes6.jpeg";
import cakes7 from "../../assets/cakes7.jpeg";
import cakes8 from "../../assets/cakes8.jpeg";
import cakes9 from "../../assets/cakes9.jpeg";
import cakes10 from "../../assets/cakes10.jpeg";
import cakesLeft from "../../assets/cakesLeft.jpeg";
import cakesMiddle from "../../assets/cakesMiddle.jpeg";
import cakesRight from "../../assets/cakesRight.jpeg";
import bcg46 from "../../assets/bcg46.jpg";
import "../Cakes/Cakes.scss";
import FormQuotation from "../../components/FormQuotation/FormQuotation";

const Cakes = () => {
  useWebsiteTitle("Torty");


  const [info, setInfo] = useState<boolean>(false);

  const listOfImages: string[] = [
    cakes1,
    cakes2,
    cakes3,
    cakes4,
    cakes5,
    cakes6,
    cakes7,
    cakes8,
    cakes9,
    cakes10
  ];

  const backgroundImages = [cakesLeft, cakesMiddle, cakesRight];

  const information = {
    topHeading: "urodziny, chrzest, komunia",
    header: "Torty na każdą okazję",
    title: "spełniamy marzenia",
    text: "Wyjątkowe i wymarzone, przygotowywane na indywidualne zamówienie. Stworzymy dla Ciebie niezapomniany tort na wesele, urodziny, komunię, chrzciny, wieczory panieńskie/kawalerskie, baby shawer i na każdą inną okazję.",
    buttonName: "Wycena",
    buttonLink: "/quotation",
  };

  const showInfo = () => {
    setInfo(true);
  };

  useEffect (()=> {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow />
      <HeaderSmall backgroundImages={backgroundImages} />

      <section className="mainContent">
        <article className="special">
          <p className="special__content">{information.topHeading}</p>
          <h1 className="special__heading">{information.header}</h1>
        </article>
        <article className="mainContent__content">
          <div className="mainContent__text">
            <div className="mainContent__extra">
              <span>{information.title}</span>
            </div>
            <p className="mainContent__description">{information.text}</p>
            <div className="button" id="quotation">
              <a
                href="#quotation"
                className="btn"
                id="button__icon"
                onClick={showInfo}
              >
                {information.buttonName}
              </a>
            </div>
          </div>
        </article>
      </section>
      <section className="cakesQuotation">
        {info ? (
          <>
            <FormQuotation />
            <div className="mainContent__frame">
              <img className="mainContent__img" src={bcg46} alt="przykład ciast" />
            </div>
          </>
        ) : null}
      </section>

      <Gallery listOfImages={listOfImages} />

      <Footer />
    </>
  );
};

export default Cakes;
