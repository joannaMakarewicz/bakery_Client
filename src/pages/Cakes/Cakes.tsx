import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { PiNumberCircleOneThin } from "react-icons/pi";
import { PiNumberCircleTwoThin } from "react-icons/pi";
import { PiNumberCircleThreeThin } from "react-icons/pi";
import Button from 'react-bootstrap/Button';
import bcg23 from "../../assets/bcg23.jpeg";
import "../Cakes/Cakes.scss";

const Cakes = () => {
  return (
    <>
      <ExtraContent />
      <Navbar />
      <section className="cakes">
        <article className="cakes__bcg">
          <h1>Torty</h1>
        </article>
        <article className="cakes__content">
            <div className="cakes__content--frame">
            <img src={bcg23} alt="cakes" width={"100%"} />
            </div>
          
          <div>
            <h2 className="cakes__heading">twój tytuł</h2>
            <p className="cakes__description">
              Okrągłe, kwadratowe, piętrowe, bezowe, wymarzone. Twoja wizja,
              smaki, styl składają się na unikalność najważniejszego deseru
              uroczystości. Nasze doświadczenie mówi, że nie ma ograniczeń –
              stworzymy dla Ciebie tort, którego nigdy nie zapomnisz. Wyzwania i
              nietuzinkowe rozwiązania to nasz żywioł. Bawimy się formą,
              teksturą i dekorem. Tworzymy niepowtarzalne kombinacje smaków,
              które zmieniają się u nas w zależności od pory roku.
            </p>
          </div>

          <aside className="cakes__additional">
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

          </aside>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Cakes;
