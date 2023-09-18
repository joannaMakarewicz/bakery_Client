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
import bcg19 from "../../assets/bcg19.jpeg";
import bcg1 from "../../assets/bcg1.jpeg";
import bcg2 from "../../assets/bcg2.jpeg";
import bcg28 from "../../assets/bcg28.jpg";
import bcg35 from "../../assets/bcg35.jpg";
import bcg24 from "../../assets/bcg21.jpeg";
import bcg31 from "../../assets/bcg31.jpg";
import bcg26 from "../../assets/bcg26.jpg";
import bcg29 from "../../assets/bcg29.jpg";
import bcg27 from "../../assets/bcg27.jpg";
import bcg3 from "../../assets/bcg3.jpeg";
import bcg46 from "../../assets/bcg46.jpg";
import MainContent from "../../components/MainContent/MainContent";
import Button from "../../components/Button/Button";
import "../Cakes/Cakes.scss";
import FormQuotation from "../../components/FormQuotation/FormQuotation";

const Cakes = () => {
  useWebsiteTitle("Torty");


  const [info, setInfo] = useState<boolean>(false);

  const listOfImages: string[] = [
    bcg19,
    bcg31,
    bcg1,
    bcg2,
    bcg24,
    bcg35,
    bcg26,
    bcg28,
  ];

  const backgroundImages = [bcg29, bcg27];

  const information = {
    topHeading: "urodziny, chrzest, komunia",
    header: "Torty na każdą okazję",
    bcg: bcg3,
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
          <div className="mainContent__content--frame">
            <img src={information.bcg} alt="cakes" width={"100%"} />
          </div>

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
