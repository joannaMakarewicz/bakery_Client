import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { PiNumberCircleOneThin } from "react-icons/pi";
// import { PiNumberCircleTwoThin } from "react-icons/pi";
// import { PiNumberCircleThreeThin } from "react-icons/pi";
import Button from "../../components/Button/Button";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import Arrow from "../../components/Arrow/Arrow";
import bcg3 from "../../assets/bcg3.jpeg";
import bcg19 from "../../assets/bcg19.jpeg";
import bcg1 from "../../assets/bcg1.jpeg";
import bcg2 from "../../assets/bcg2.jpeg";
import bcg28 from "../../assets/bcg28.jpg";
import bcg9 from "../../assets/bcg9.jpeg";
import bcg24 from "../../assets/bcg21.jpeg";
import bcg31 from "../../assets/bcg31.jpg";
import bcg26 from "../../assets/bcg26.jpg";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import "../Cakes/Cakes.scss";

const Cakes = () => {
  useWebsiteTitle("Torty");

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow/>
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
            <Button value="Wycena" href="/quotation" />
          </div>
        </article>
        <article className="cakesGallery">
          <h2 className="cakesGallery__heading">Galeria</h2>
          <div className="cakesGallery__box">
            <a  href={bcg19} className="cakesGallery__frame">
              <img src={bcg19} alt="cakes" width={"100%"} />
            </a>
            <a href={bcg31} className="cakesGallery__frame">
              <img src={bcg31} alt="cakes" width={"100%"} />
            </a>
            <a href={bcg1} className="cakesGallery__frame">
              <img src={bcg1} alt="cakes" width={"100%"} />
              </a>
            <a href={bcg2} className="cakesGallery__frame">
              <img src={bcg2} alt="cakes" width={"100%"} />
              </a>
            <a href={bcg24} className="cakesGallery__frame">
              <img src={bcg24} alt="cakes" width={"100%"} />
              </a>
            <a href={bcg9} className="cakesGallery__frame">
              <img src={bcg9} alt="cakes" width={"100%"} />
              </a>
            <a href={bcg26} className="cakesGallery__frame">
              <img src={bcg26} alt="cakes" width={"100%"} />
              </a>
            <a href={bcg28} className="cakesGallery__frame">
              <img src={bcg28} alt="cakes" width={"100%"} />
              </a>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Cakes;
