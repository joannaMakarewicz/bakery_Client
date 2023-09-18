import React, { useEffect} from "react";
import "../Quotation/Quotation.scss";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { PiNumberCircleOneThin } from "react-icons/pi";
// import { PiNumberCircleTwoThin } from "react-icons/pi";
// import { PiNumberCircleThreeThin } from "react-icons/pi";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import Arrow from "../../components/Arrow/Arrow";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import bcg29 from "../../assets/bcg29.jpg";
import bcg27 from "../../assets/bcg27.jpg";
import FormQuotation from "../../components/FormQuotation/FormQuotation";
import MainContent from "../../components/MainContent/MainContent";

const Quotation = () => {
  useWebsiteTitle("Torty");

  const backgroundImages = [bcg29, bcg27];

  useEffect (()=> {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow />
      <HeaderSmall backgroundImages={backgroundImages} />
      <FormQuotation />
      <Footer />
    </>
  );
};

export default Quotation;
