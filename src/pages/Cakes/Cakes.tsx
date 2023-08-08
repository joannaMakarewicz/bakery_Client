import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { PiNumberCircleOneThin } from "react-icons/pi";
// import { PiNumberCircleTwoThin } from "react-icons/pi";
// import { PiNumberCircleThreeThin } from "react-icons/pi";
import Button from "../../components/Button/Button";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import Header from "../../components/Main/Header/Header";
import bcg3 from "../../assets/bcg3.jpeg";
import bcg19 from "../../assets/bcg19.jpeg";
import bcg1 from "../../assets/bcg1.jpeg";
import bcg22 from "../../assets/bcg19.jpeg";
import bcg9 from "../../assets/bcg9.jpeg";
import bcg24 from "../../assets/bcg21.jpeg";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import "../Cakes/Cakes.scss";

const Cakes = () => {
  useWebsiteTitle("Torty");
  return (
    <>
      <ExtraContent />
      <Navbar />
      <HeaderSmall />
      <section className="cakes">
        <article className="special">
          <p className="special__content">Niepowtarzalne, wyjątkowe</p>
          <h1 className="special__heading">Torty na każdą okazję</h1>
        </article>
        <article className="cakes__content">
          <div className="cakes__content--frame">
            <img src={bcg3} alt="cakes" width={"100%"} />
          </div>

          <div className="cakes__text">
            <div className="cakes__extra">
              <span>Spełniamy marzenia</span>
            </div>
            <p className="cakes__description">
              Okrągłe, kwadratowe, piętrowe, bezowe, wymarzone. Twoja wizja,
              smaki, styl składają się na unikalność najważniejszego deseru
              uroczystości. Nasze doświadczenie mówi, że nie ma ograniczeń –
              stworzymy dla Ciebie tort, którego nigdy nie zapomnisz. Wyzwania i
              nietuzinkowe rozwiązania to nasz żywioł. Bawimy się formą,
              teksturą i dekorem. Tworzymy niepowtarzalne kombinacje smaków,
              które zmieniają się u nas w zależności od pory roku.
            </p>
            <Button value={"Wycena"} />
          </div>
        </article>
        <article className="gallery">
          <h2 className="gallery__heading">Galeria</h2>
          <div className="gallery__box">
            <div className="gallery__frame">
              <img src={bcg19} alt="cakes" width={"100%"} />
            </div>
            <div className="gallery__frame">
              <img src={bcg9} alt="cakes" width={"100%"} />
            </div>
            <div className="gallery__frame">
              <img src={bcg1} alt="cakes" width={"100%"} />
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Cakes;
