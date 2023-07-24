import React from 'react';
import ExtraContent from '../../components/ExtraContent/ExtraContent';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import bcg23 from "../../assets/bcg23.jpeg";
import Button from "react-bootstrap/Button";
import bcg19 from "../../assets/bcg19.jpeg";
import bcg21 from "../../assets/bcg21.jpeg";
import bcg22 from "../../assets/bcg19.jpeg";
import bcg20 from "../../assets/bcg20.jpeg";

import "../Wedding/Wedding.scss";

const Wedding = () => {
  return (
    <>
        <ExtraContent />
        <Navbar />
        <section className="wedding">
        <article className="wedding__bcg">
        </article>
        <article className="wedding__content">
          <div className="wedding__content--frame">
            <img src={bcg23} alt="wedding" width={"100%"} />
          </div>

          <div className="wedding__text">
            <div className="w-25 mx-auto my-3 wedding__border" />
            <h1 className="wedding__heading">Osłodzimy Twoje wesele</h1>
            <div className="w-25 mx-auto my-3 wedding__border" />
            <p className="wedding__description">
              Okrągłe, kwadratowe, piętrowe, bezowe, wymarzone. Twoja wizja,
              smaki, styl składają się na unikalność najważniejszego deseru
              uroczystości. Nasze doświadczenie mówi, że nie ma ograniczeń –
              stworzymy dla Ciebie tort, którego nigdy nie zapomnisz. Wyzwania i
              nietuzinkowe rozwiązania to nasz żywioł. Bawimy się formą,
              teksturą i dekorem. Tworzymy niepowtarzalne kombinacje smaków,
              które zmieniają się u nas w zależności od pory roku.
            </p>
            <Button className="wedding__button">Zapytaj o ofertę</Button>
          </div>

        </article>
        <article className="gallery">
            <h2 className="gallery__heading">Galeria</h2>
            <div className="gallery__box">
            <div className="gallery__frame">
              <img src={bcg20} alt="cakes" width={"100%"} />
            </div>
            <div className="gallery__frame">
              <img src={bcg21} alt="cakes" width={"100%"} />
            </div>
            <div className="gallery__frame">
              <img src={bcg22} alt="cakes" width={"100%"} />
            </div>
            </div>
        </article>
      </section>
        <Footer />
    </>
  )
}

export default Wedding;
