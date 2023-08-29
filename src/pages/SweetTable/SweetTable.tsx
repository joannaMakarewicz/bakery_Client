import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Arrow from "../../components/Arrow/Arrow";
import Button from "../../components/Button/Button";
import Gallery from "../../components/Gallery/Gallery";
import bcg47 from "../../assets/bcg47.jpg";
import bcg44 from "../../assets/bcg44.jpg";
import bcg39 from "../../assets/bcg39.jpg";
import bcg40 from "../../assets/bcg40.jpg";
import bcg17 from "../../assets/bcg17.jpeg";
import bcg30 from "../../assets/bcg30.jpg";
import bcg32 from "../../assets/bcg32.jpg";
import bcg38 from "../../assets/bcg38.jpg";
import bcg34 from "../../assets/bcg34.jpg";
import bcg46 from "../../assets/bcg46.jpg";
import bcg51 from "../../assets/bcg51.jpg";
import "../SweetTable/SweetTable.scss";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";

const SweetTable = () => {
  useWebsiteTitle("Słodki stół");

  const listOfImages:string[] = [
    bcg34,
    bcg47,
    bcg39,
    bcg44,
    bcg30,
    bcg38,
    bcg17,
    bcg32,
  ];

  const backgroundImages = [
    bcg46,
    bcg51
  ]

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow />
      <HeaderSmall backgroundImages={backgroundImages} />
      <section className="sweetTable">
        <article className="sweetTable__content">
          <div className="sweetTable__content--frame">
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
        <Gallery listOfImages={listOfImages} />
      </section>
      <Footer />
    </>
  );
};

export default SweetTable;
