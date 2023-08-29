import React from 'react';
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
import FormQuotation from '../../components/FormQuotation/FormQuotation';

const Quotation = () => {
  useWebsiteTitle("Torty");

  
  const backgroundImages = [
    bcg29,
    bcg27
  ]

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow/>
      <HeaderSmall backgroundImages={backgroundImages} />
      <section className="quotation">
        <article className="quotationSpecial">
          <p className="quotationSpecial__content">Niepowtarzalne, wyjątkowe</p>
          <h1 className="quotationSpecial__heading">Torty na każdą okazję</h1>
        </article>
        <FormQuotation/>
      </section>
      <Footer />
    </>
  );
};


export default Quotation;
