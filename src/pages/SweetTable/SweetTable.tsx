import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
// import { PiNumberCircleOneThin } from "react-icons/pi";
// import { PiNumberCircleTwoThin } from "react-icons/pi";
// import { PiNumberCircleThreeThin } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import Header from "../../components/Main/Header/Header";
import bcg11 from "../../assets/bcg11.jpeg";
import bcg15 from "../../assets/bcg15.jpeg";
import bcg12 from "../../assets/bcg12.jpeg";
import bcg13 from "../../assets/bcg13.jpeg";

import "../SweetTable/SweetTable.scss";

const SweetTable = () => {
  useWebsiteTitle("Słodki stół");

  return (
    <>
      <ExtraContent />
      <Navbar />
      <section className="sweetTable">
<Header/>
        <article className="sweetTable__content">
          <div className="sweetTable__content--frame">
            <img src={bcg11} alt="sweetTable" width={"100%"} />
          </div>

          <div className="sweetTable__text">
            <div className="w-25 mx-auto my-3 sweetTable__border" />
            <h1 className="sweetTable__heading">Słodkości dla każdego</h1>
            <div className="w-25 mx-auto my-3 sweetTable__border" />
            <p className="sweetTable__description">
              Okrągłe, kwadratowe, piętrowe, bezowe, wymarzone. Twoja wizja,
              smaki, styl składają się na unikalność najważniejszego deseru
              uroczystości. Nasze doświadczenie mówi, że nie ma ograniczeń –
              stworzymy dla Ciebie tort, którego nigdy nie zapomnisz. Wyzwania i
              nietuzinkowe rozwiązania to nasz żywioł. Bawimy się formą,
              teksturą i dekorem. Tworzymy niepowtarzalne kombinacje smaków,
              które zmieniają się u nas w zależności od pory roku.
            </p>
            <Button className="sweetTable__button" value={"Zapytaj o ofertę"}></Button>
          </div>
        </article>
        <article className="gallery">
          <h2 className="gallery__heading">Galeria</h2>
          <div className="gallery__box">
            <div className="gallery__frame">
              <img src={bcg15} alt="cakes" width={"100%"} />
            </div>
            <div className="gallery__frame">
              <img src={bcg12} alt="cakes" width={"100%"} />
            </div>
            <div className="gallery__frame">
              <img src={bcg13} alt="cakes" width={"100%"} />
            </div>
   
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default SweetTable;
