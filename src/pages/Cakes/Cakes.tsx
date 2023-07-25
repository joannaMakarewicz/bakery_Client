import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { PiNumberCircleOneThin } from "react-icons/pi";
// import { PiNumberCircleTwoThin } from "react-icons/pi";
// import { PiNumberCircleThreeThin } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import bcg3 from "../../assets/bcg3.jpeg";
import bcg19 from "../../assets/bcg19.jpeg";
import bcg1 from "../../assets/bcg1.jpeg";
import bcg22 from "../../assets/bcg19.jpeg";
import bcg9 from "../../assets/bcg9.jpeg";
import bcg24 from "../../assets/bcg21.jpeg";
import "../Cakes/Cakes.scss";

const Cakes = () => {
  return (
    <>
      <ExtraContent />
      <Navbar />
      <section className="cakes">
        <article className="cakes__bcg">

        </article>
        <article className="cakes__content">
          <div className="cakes__content--frame">
            <img src={bcg3} alt="cakes" width={"100%"} />
          </div>

          <div className="cakes__text">
            <div className="w-25 mx-auto my-3 cakes__border" />
            <h1 className="cakes__heading">Torty na każdą okazję</h1>
            <div className="w-25 mx-auto my-3 cakes__border" />
            <p className="cakes__description p-1 m-3">
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
