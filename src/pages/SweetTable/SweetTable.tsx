import React, { useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Arrow from "../../components/Arrow/Arrow";
import Gallery from "../../components/Gallery/Gallery";
import sweetTable1 from "../../assets/sweetTable1.jpeg";
import sweetTable2 from "../../assets/sweetTable2.jpeg";
import sweetTable3 from "../../assets/sweetTable3.jpeg";
import sweetTable4 from "../../assets/sweetTable4.jpeg";
import sweetTable5 from "../../assets/sweetTable5.jpeg";
import sweetTable6 from "../../assets/sweetTable6.jpeg";
import sweetTable7 from "../../assets/sweetTable7.jpeg";
import sweetTable8 from "../../assets/sweetTable8.jpeg";
import sweetTable9 from "../../assets/sweetTable9.jpeg";
import sweetTable10 from "../../assets/sweetTable10.jpeg";
import sweetTableLeft from "../../assets/sweetTableLeft.jpeg";
import sweetTableMiddle from "../../assets/sweetTableMiddle.jpeg";
import sweetTableRight from "../../assets/sweetTableRight.jpeg";
import MainContent from "../../components/MainContent/MainContent";
import "../SweetTable/SweetTable.scss";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";

const SweetTable = () => {
  useWebsiteTitle("Słodki stół");

  const listOfImages:string[] = [
    sweetTable1,
    sweetTable2,
    sweetTable3,
    sweetTable4,
    sweetTable5,
    sweetTable6,
    sweetTable7,
    sweetTable8,
    sweetTable9,
    sweetTable10
  ];

  const backgroundImages = [
    sweetTableLeft,
    sweetTableMiddle,
    sweetTableRight
  ]

  const information = {
    topHeading: "niepowtarzalne, wyjątkowe",
    header: "Słodkości dla każdego",
    title:"spełniamy marzenia",
    text:"Słodki stół w naszym wykonaniu to niezapomniana uczta smakowa i wizualna. Dbamy o każdy nawet najdrobniejszy szczegół przy tworzeniu tej niebananej, słodkiej oprawy Waszej uroczystości. Wszystko przygotujemy zgodnie z motywem przewodnim i kolorystyką przyjęcia. Nasz słodki stół może pojawić się na Waszym weselu, chrzcinach, urodzinach czy przy innej okazji i zachwycić Was i Waszych gości pięknem wykonania i wyjątkowym smakiem.",
    buttonName:"Zapytaj o ofertę",
    buttonLink:"/contact"
  };

  useEffect (()=> {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
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
