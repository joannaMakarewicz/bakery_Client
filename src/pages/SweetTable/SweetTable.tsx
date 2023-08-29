import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Arrow from "../../components/Arrow/Arrow";
import Button from "../../components/Button/Button";
import bcg11 from "../../assets/bcg11.jpeg";
import bcg15 from "../../assets/bcg15.jpeg";
import bcg12 from "../../assets/bcg12.jpeg";
import bcg13 from "../../assets/bcg13.jpeg";
import "../SweetTable/SweetTable.scss";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";

const SweetTable = () => {
  useWebsiteTitle("Słodki stół");

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow/>
      <HeaderSmall/>
      <section className="sweetTable">
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
            <Button value="Zapytaj o ofertę" href="/contact" />
          </div>
        </article>
        <article className="sweetTableGallery">
          <h2 className="sweetTableGallery__heading">Galeria</h2>
          <div className="sweetTableGallery__box">
            <div className="sweetTableGallery__frame">
              <img src={bcg15} alt="cakes" width={"100%"} />
            </div>
            <div className="sweetTableGallerygallery__frame">
              <img src={bcg12} alt="cakes" width={"100%"} />
            </div>
            <div className="sweetTableGallery__frame">
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
