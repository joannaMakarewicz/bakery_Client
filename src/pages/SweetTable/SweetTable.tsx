import React, { useEffect, useState } from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Gallery from "../../components/Gallery/Gallery";
import sweetTableLeft from "../../assets/sweetTableLeft.jpeg";
import sweetTableMiddle from "../../assets/sweetTableMiddle.jpeg";
import sweetTableRight from "../../assets/sweetTableRight.jpeg";
import sweetTableAdditional from "../../assets/sweetTableAdditional.jpg";
import MainContent from "../../components/MainContent/MainContent";
import "../SweetTable/SweetTable.scss";
import axiosInstance from "../../services/config";
import Layout from "../../components/Layout/Layout";

const SweetTable = () => {
  useWebsiteTitle("Chodź na ciacho - słodki stół");

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

  const [loading, setLoading] = useState<boolean>();
 

  const listOfSweetTablePhotos = cakesAttachments.map((sweetTablePhoto) => {
    return sweetTablePhoto.url;
  });

  const getSweetTablePictures = async () => {
    setLoading(true);
    await axiosInstance.get("/sweetTableGallery").then((response) => {
      setSweetTablePictures(response.data.records);
    });
    setLoading(false);
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
    buttonLink: "/kontakt",
    bcg: sweetTableAdditional,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout backgroundImages={backgroundImages} loading={loading}>
        <MainContent information={information} />
        <Gallery listOfImages={listOfImages} />
      </Layout>
    </>
  );
};

export default SweetTable;
