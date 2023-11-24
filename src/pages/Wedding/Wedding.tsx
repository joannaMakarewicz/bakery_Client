import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Arrow from "../../components/Arrow/Arrow";
import Gallery from "../../components/Gallery/Gallery";
import weddingAdditional from "../../assets/weddingAdditional.jpeg";
import weddingLeft from "../../assets/weddingLeft.jpeg";
import weddingMiddle from "../../assets/weddingMiddle.jpeg";
import weddingRight from "../../assets/weddingRight.jpeg";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import "../Wedding/Wedding.scss";
import MainContent from "../../components/MainContent/MainContent";
import axiosInstance from "../../services/config";
import Layout from "../../components/Layout/Layout";

const Wedding = () => {
  useWebsiteTitle("Chodź na ciacho - wesela");

  type WeddingPictures = {
    fields: {
      attachments: [
        {
          url: string;
        }
      ];
    };
  }[];

  const [weddingPictures, setWeddingPictures] = useState<WeddingPictures>([]);
  const weddingAttachments = weddingPictures.map((item) => {
    return item.fields.attachments[0];
  });

  const listOfWeddingPhotos = weddingAttachments.map((weddingPhoto) => {
    return weddingPhoto.url;
  });

  const getWeddingPictures = async () => {
    await axiosInstance.get("/weddingGallery").then((response) => {
      setWeddingPictures(response.data.records);
    });
  };

  useEffect(() => {
    getWeddingPictures();
  }, []);


  const listOfImages: string[] = listOfWeddingPhotos;

  const backgroundImages = [weddingLeft, weddingMiddle, weddingRight];

  const information = {
    topHeading: "magiczne, wyjątkowe",
    header: "Osłodzimy Twoje wesele",
    title: "spełniamy marzenia",
    text: "Osłodzimy Wasze przyjęcie weselne wyjątkowym tortem i słodkościami. Całość przygotowana w pięknej aranżacji.  Wypożyczenie pater, naczyń i dekoracji uwzględniona jest w indywidualnej ofercie.  Skontaktuj się z nami poprzez formularz a my zgodnie z Twoimi wyobrażeniami przygotujemy dla Ciebie wyjątkową ofertę.",
    buttonName: "Zapytaj o ofertę",
    buttonLink: "/kontakt",
    bcg: weddingAdditional,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout backgroundImages={backgroundImages}>
        <MainContent information={information} />
        <Gallery listOfImages={listOfImages} />
      </Layout>
    </>
  );

};

export default Wedding;
