import React, { useState } from 'react';
import ExtraContent from '../../components/ExtraContent/ExtraContent';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import Arrow from '../../components/Arrow/Arrow';
import bcg23 from "../../assets/bcg23.jpeg";
import Gallery from '../../components/Gallery/Gallery';
import bcg21 from "../../assets/bcg21.jpeg";
import bcg22 from "../../assets/bcg19.jpeg";
import bcg20 from "../../assets/bcg20.jpeg";
import bcg53 from "../../assets/bcg53.jpg";
import bcg54 from "../../assets/bcg54.jpg";
import HeaderSmall from '../../components/HeaderSmall/HeaderSmall';
import Button from '../../components/Button/Button';
import "../Wedding/Wedding.scss";


const Wedding = () => {
  useWebsiteTitle('Wesela');

  const listOfImages:string[] = [
    bcg21,
    bcg22,
    bcg20,
    bcg23,
  ];

  const backgroundImages = [
    bcg53,
    bcg54
  ]

  return (
    <>
        <ExtraContent />
        <Navbar />
        <Arrow/>
        <HeaderSmall backgroundImages={backgroundImages}/>
        <section className="wedding">
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
            <Button value="Zapytaj o ofertę" href="/contact"/>
          </div>

        </article>
        <Gallery listOfImages={listOfImages}/>
      </section>
        <Footer />
    </>
  )
}

export default Wedding;
