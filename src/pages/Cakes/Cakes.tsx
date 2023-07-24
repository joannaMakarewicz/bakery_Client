import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { PiNumberCircleOneThin } from "react-icons/pi";
// import { PiNumberCircleTwoThin } from "react-icons/pi";
// import { PiNumberCircleThreeThin } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import bcg23 from "../../assets/bcg23.jpeg";
import bcg19 from "../../assets/bcg19.jpeg";
import bcg21 from "../../assets/bcg21.jpeg";
import bcg22 from "../../assets/bcg19.jpeg";
import bcg20 from "../../assets/bcg20.jpeg";
import bcg24 from "../../assets/bcg21.jpeg";
import "../Cakes/Cakes.scss";

const Cakes = () => {
  return (
    <>
      <ExtraContent />
      <Navbar />
      <section className="cakes">
        <article className="cakes__bcg">
          <h1 className="text-light">Torty</h1>
        </article>
        <article className="cakes__content">
          <div className="cakes__content--frame">
            <img src={bcg23} alt="cakes" width={"100%"} />
          </div>

          <div className="cakes__text">
            <div className="w-25 mx-auto my-3 cakes__border" />
            <h2 className="cakes__heading">Torty na każdą okazję</h2>
            <div className="w-25 mx-auto my-3 cakes__border" />
            <p className="cakes__description">
              Okrągłe, kwadratowe, piętrowe, bezowe, wymarzone. Twoja wizja,
              smaki, styl składają się na unikalność najważniejszego deseru
              uroczystości. Nasze doświadczenie mówi, że nie ma ograniczeń –
              stworzymy dla Ciebie tort, którego nigdy nie zapomnisz. Wyzwania i
              nietuzinkowe rozwiązania to nasz żywioł. Bawimy się formą,
              teksturą i dekorem. Tworzymy niepowtarzalne kombinacje smaków,
              które zmieniają się u nas w zależności od pory roku.
            </p>
            <Button className="cakes__button">Wycena</Button>
          </div>

          {/* <aside className="cakes__additional">
            <div className="cakes__additional--bcg h-100">
            <h3 className="cakes__additional--heading p-2">Co ma wpływ na cenę tortu:</h3>
            <ul className="p-0 text-start">
                <li><PiNumberCircleOneThin className="cakes__special"/>Wielkość
                <p>Wybierz rozmiar tortu sugerując się liczbą zaproszonych gości</p></li>
                <li><PiNumberCircleTwoThin className="cakes__special"/>Smak
                <p>Wybierz rozmiar tortu sugerując się liczbą zaproszonych gości</p></li>
                <li><PiNumberCircleThreeThin className="cakes__special"/>Ozdoby
                <p>Wybierz rozmiar tortu sugerując się liczbą zaproszonych gości</p></li>
                </ul>
                <Button className="cakes__button">Wycena</Button>
            </div>

          </aside> */}
        </article>
        <article className="gallery">
            <h3 className="gallery__heading">Galeria</h3>
            <div className="gallery__box">
            <img src={bcg19} alt="cakes" width={"100%"} />
            <img src={bcg20} alt="cakes" width={"100%"} />
            <img src={bcg21} alt="cakes" width={"100%"} />
            </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Cakes;
