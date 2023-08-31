import React, { useState } from 'react';
import ExtraContent from '../../components/ExtraContent/ExtraContent';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import Arrow from '../../components/Arrow/Arrow';
import bcg23 from "../../assets/bcg23.jpeg";
import Gallery from '../../components/Gallery/Gallery';
import bcg21 from "../../assets/bcg21.jpeg";
import bcg22 from "../../assets/bcg19.jpeg";
import bcg20 from "../../assets/bcg20.jpeg";
import bcg53 from "../../assets/bcg53.jpg";
import bcg54 from "../../assets/bcg54.jpg";
import bcg3 from "../../assets/bcg3.jpeg";
import HeaderSmall from '../../components/HeaderSmall/HeaderSmall';
import Button from '../../components/Button/Button';
import "../Wedding/Wedding.scss";
import MainContent from '../../components/MainContent/MainContent';


const Wedding = () => {
  useWebsiteTitle('Wesela');

  const listOfImages:string[] = [
    bcg21,
    bcg22,
    bcg20,
    bcg23,
  ];

  const backgroundImages = [
    bcg53,
    bcg54
  ]

  const information = {
    topHeading: "magiczne, wyjątkowe",
    header: "Osłodzimy Twoje wesele",
    bcg: bcg3,
    title:"spełniamy marzenia",
    text:"Osłodzimy Wasze przyjęcie weselne wyjątkowym tortem i słodkościami. Całość przygotowana w pięknej aranżacji.  Wypożyczenie pater, naczyń i dekoracji uwzględniona jest w indywidualnej ofercie.  Skontaktuj się z nami poprzez formularz a my zgodnie z Twoimi wyobrażeniami przygotujemy dla Ciebie wyjątkową ofertę.",
    buttonName:"Zapytaj o ofertę",
    buttonLink:"/contact"
  };

  return (
    <>
        <ExtraContent />
        <Navbar />
        <Arrow/>
        <HeaderSmall backgroundImages={backgroundImages}/>
        <MainContent information={information} />
        <Gallery listOfImages={listOfImages}/>

        <Footer />
    </>
  )
}

export default Wedding;
