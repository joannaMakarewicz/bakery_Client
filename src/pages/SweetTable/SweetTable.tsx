import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Arrow from "../../components/Arrow/Arrow";
import Button from "../../components/Button/Button";
import Gallery from "../../components/Gallery/Gallery";
import bcg47 from "../../assets/bcg47.jpg";
import bcg44 from "../../assets/bcg44.jpg";
import bcg39 from "../../assets/bcg39.jpg";
import bcg40 from "../../assets/bcg40.jpg";
import bcg17 from "../../assets/bcg17.jpeg";
import bcg30 from "../../assets/bcg30.jpg";
import bcg32 from "../../assets/bcg32.jpg";
import bcg38 from "../../assets/bcg38.jpg";
import bcg34 from "../../assets/bcg34.jpg";
import bcg46 from "../../assets/bcg46.jpg";
import bcg51 from "../../assets/bcg51.jpg";
import bcg3 from "../../assets/bcg3.jpeg";
import MainContent from "../../components/MainContent/MainContent";
import "../SweetTable/SweetTable.scss";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";

const SweetTable = () => {
  useWebsiteTitle("Słodki stół");

  const listOfImages:string[] = [
    bcg34,
    bcg47,
    bcg39,
    bcg44,
    bcg30,
    bcg38,
    bcg17,
    bcg32,
  ];

  const backgroundImages = [
    bcg46,
    bcg51
  ]

  const information = {
    topHeading: "niepowtarzalne, wyjątkowe",
    header: "Słodkości dla każdego",
    bcg: bcg3,
    title:"spełniamy marzenia",
    text:"Słodki stół w naszym wykonaniu to niezapomniana uczta smakowa i wizualna. Dbamy o każdy nawet najdrobniejszy szczegół przy tworzeniu tej niebananej, słodkiej oprawy Waszej uroczystości. Wszystko przygotujemy zgodnie z motywem przewodnim i kolorystyką przyjęcia. Nasz słodki stół może pojawić się na Waszym weselu, chrzcinach, urodzinach czy przy innej okazji i zachwycić Was i Waszych gości pięknem wykonania i wyjątkowym smakiem.",
    buttonName:"Zapytaj o ofertę",
    buttonLink:"/contact"
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

export default SweetTable;
