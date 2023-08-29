import React from "react";
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
import MainContent from "../../components/MainContent/MainContent";
import "../Cakes/Cakes.scss";

const Cakes = () => {
  useWebsiteTitle("Torty");

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
    title:"spełniamy marzenia",
    text:"Okrągłe, kwadratowe, piętrowe, bezowe, wymarzone. Twoja wizja, smaki, styl składają się na unikalność najważniejszego deseru uroczystości. Nasze doświadczenie mówi, że nie ma ograniczeń – stworzymy dla Ciebie tort, którego nigdy nie zapomnisz. Wyzwania i nietuzinkowe rozwiązania to nasz żywioł. Bawimy się formą, teksturą i dekorem. Tworzymy niepowtarzalne kombinacje smaków, które zmieniają się u nas w zależności od pory roku.",
    buttonName:"Wycena",
    buttonLink:"/quotation"
  };

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow />
      <HeaderSmall backgroundImages={backgroundImages} />

      <MainContent information={information} />
      <Gallery listOfImages={listOfImages} />

      <Footer />
    </>
  );
};

export default Cakes;
