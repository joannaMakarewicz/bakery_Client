import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import Arrow from '../../components/Arrow/Arrow';
import Gallery from '../../components/Gallery/Gallery';
import wedding1 from "../../assets/wedding1.jpeg";
import wedding2 from "../../assets/wedding2.jpeg";
import wedding3 from "../../assets/wedding3.jpeg";
import wedding4 from "../../assets/wedding4.jpeg";
import wedding5 from "../../assets/wedding5.jpeg";
import wedding6 from "../../assets/wedding6.jpeg";
import wedding7 from "../../assets/wedding7.jpeg";
import wedding8 from "../../assets/wedding8.jpeg";
import wedding9 from "../../assets/wedding9.jpeg";
import wedding10 from "../../assets/wedding10.jpeg";
import weddingLeft from "../../assets/weddingLeft.jpeg";
import weddingMiddle from "../../assets/weddingMiddle.jpeg";
import weddingRight from "../../assets/weddingRight.jpeg";
import HeaderSmall from '../../components/HeaderSmall/HeaderSmall';
import "../Wedding/Wedding.scss";
import MainContent from '../../components/MainContent/MainContent';


const Wedding = () => {
  useWebsiteTitle('Wesela');

  const listOfImages:string[] = [
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding5,
    wedding6,
    wedding7,
    wedding8,
    wedding9,
    wedding10
  ];

  const backgroundImages = [
    weddingLeft,
    weddingMiddle,
    weddingRight
  ]

  const information = {
    topHeading: "magiczne, wyjątkowe",
    header: "Osłodzimy Twoje wesele",
    title:"spełniamy marzenia",
    text:"Osłodzimy Wasze przyjęcie weselne wyjątkowym tortem i słodkościami. Całość przygotowana w pięknej aranżacji.  Wypożyczenie pater, naczyń i dekoracji uwzględniona jest w indywidualnej ofercie.  Skontaktuj się z nami poprzez formularz a my zgodnie z Twoimi wyobrażeniami przygotujemy dla Ciebie wyjątkową ofertę.",
    buttonName:"Zapytaj o ofertę",
    buttonLink:"/contact"
  };
  
  useEffect (()=> {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
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
