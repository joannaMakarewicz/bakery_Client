import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import Arrow from "../../components/Arrow/Arrow";
import Gallery from "../../components/Gallery/Gallery";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import cakesLeft from "../../assets/cakesLeft.jpeg";
import cakesRight from "../../assets/cakesRight.jpeg";
import cakesMiddle from "../../assets/cakesMiddle.jpeg";
import cakesAdditional from "../../assets/cakesAdditional.jpeg";
import formQuotationImg2 from "../../assets/formQuotationImg2.jpg";
import "../Cakes/Cakes.scss";
import FormQuotation from "../../components/FormQuotation/FormQuotation";
import MainContent from "../../components/MainContent/MainContent";
import MyDataContext from "../../context/MyDataContext";
import axiosInstance from "../../services/config";
import Layout from "../../components/Layout/Layout";

const Cakes = () => {
  useWebsiteTitle("Torty");

  type CakesPictures = {
    fields: {
      attachments: [
        {
          url: string;
        }
      ];
    };
  }[];

  const [cakesPictures, setCakesPictures] = useState<CakesPictures>([]);
  const cakesAttachments = cakesPictures.map((item) => {
    return item.fields.attachments[0];
  });

  const listOfCakesPhotos = cakesAttachments.map((cakesPhoto) => {
    return cakesPhoto.url;
  });

  const getCakesPictures = async () => {
    await axiosInstance.get("/cakesGallery").then((response) => {
      setCakesPictures(response.data.records);
    });
  };

  useEffect(() => {
    getCakesPictures();
  }, []);

  const listOfImages: string[] = listOfCakesPhotos;

  const [info, setInfo] = useState<boolean>(false);

  const backgroundImages = [cakesLeft, cakesMiddle, cakesRight];

  const information = {
    topHeading: "urodziny, chrzest, komunia",
    header: "Torty na każdą okazję",
    title: "spełniamy marzenia",
    text: "Wyjątkowe i wymarzone, przygotowywane na indywidualne zamówienie. Stworzymy dla Ciebie niezapomniany tort na wesele, urodziny, komunię, chrzciny, wieczory panieńskie/kawalerskie, baby shawer i na każdą inną okazję.",
    buttonName: "Wycena",
    buttonLink: "/quotation",
    bcg: cakesAdditional,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MyDataContext.Consumer>
      {(cakesPhotosFromContext) => (
        <>
          <Layout backgroundImages={backgroundImages}>
            <MainContent
              information={information}
              setInfo={() => {
                setInfo(true);
              }}
            />
            <section className="cakesQuotation">
              {info ? (
                <>
                  <FormQuotation />
                  <div className="mainContent__frame">
                    <img
                      className="mainContent__img"
                      src={formQuotationImg2}
                      alt="przykład ciast"
                    />
                  </div>
                </>
              ) : null}
            </section>

            <Gallery listOfImages={listOfImages} />
          </Layout>
        </>
      )}
    </MyDataContext.Consumer>
  );
};

export default Cakes;
