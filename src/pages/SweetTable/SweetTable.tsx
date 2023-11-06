import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Arrow from "../../components/Arrow/Arrow";
import Gallery from "../../components/Gallery/Gallery";
import sweetTableLeft from "../../assets/sweetTableLeft.jpeg";
import sweetTableMiddle from "../../assets/sweetTableMiddle.jpeg";
import sweetTableRight from "../../assets/sweetTableRight.jpeg";
import sweetTableAdditional from "../../assets/sweetTableAdditional.jpg";
import MainContent from "../../components/MainContent/MainContent";
import "../SweetTable/SweetTable.scss";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import axiosInstance from "../../services/config";
import Layout from "../../components/Layout/Layout";

const SweetTable = () => {
  useWebsiteTitle("Słodki stół");

  type SweetTablePictures = {
    fields: {
      attachments: [
        {
          url: string;
        }
      ];
    };
  }[];

  const [sweetTablePictures, setSweetTablePictures] =
    useState<SweetTablePictures>([]);
  const cakesAttachments = sweetTablePictures.map((item) => {
    return item.fields.attachments[0];
  });

  const listOfSweetTablePhotos = cakesAttachments.map((sweetTablePhoto) => {
    return sweetTablePhoto.url;
  });

  const getSweetTablePictures = async () => {
    await axiosInstance.get("/sweetTableGallery").then((response) => {
      setSweetTablePictures(response.data.records);
    });
  };

  useEffect(() => {
    getSweetTablePictures();
  }, []);

  const listOfImages: string[] = listOfSweetTablePhotos;

  const backgroundImages = [sweetTableLeft, sweetTableMiddle, sweetTableRight];

  const information = {
    topHeading: "niepowtarzalne, wyjątkowe",
    header: "Słodkości dla każdego",
    title: "spełniamy marzenia",
    text: "Słodki stół w naszym wykonaniu to niezapomniana uczta smakowa i wizualna. Dbamy o każdy nawet najdrobniejszy szczegół przy tworzeniu tej niebananej, słodkiej oprawy Waszej uroczystości. Wszystko przygotujemy zgodnie z motywem przewodnim i kolorystyką przyjęcia. Nasz słodki stół może pojawić się na Waszym weselu, chrzcinach, urodzinach czy przy innej okazji i zachwycić Was i Waszych gości pięknem wykonania i wyjątkowym smakiem.",
    buttonName: "Zapytaj o ofertę",
    buttonLink: "/contact",
    bcg: sweetTableAdditional,
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

export default SweetTable;
