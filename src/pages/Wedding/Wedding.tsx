import React from 'react';
import ExtraContent from '../../components/ExtraContent/ExtraContent';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import bcg23 from "../../assets/bcg23.jpeg"
import "../Wedding/Wedding.scss";

const Wedding = () => {
  return (
    <>
        <ExtraContent />
        <Navbar />
        <section className="wedding">
        <article className="wedding__bcg">
          <h1>Wesela</h1>
        </article>
        <article className="wedding__content">
            <div className="wedding__content--frame">
            <img src={bcg23} alt="cakes" width={"100%"} />
            </div>
          
          <div>
            <h2 className="wedding__heading">Wesela</h2>
            <p className="wedding__description">
              Okrągłe, kwadratowe, piętrowe, bezowe, wymarzone. Twoja wizja,
              smaki, styl składają się na unikalność najważniejszego deseru
              uroczystości. Nasze doświadczenie mówi, że nie ma ograniczeń –
              stworzymy dla Ciebie tort, którego nigdy nie zapomnisz. Wyzwania i
              nietuzinkowe rozwiązania to nasz żywioł. Bawimy się formą,
              teksturą i dekorem. Tworzymy niepowtarzalne kombinacje smaków,
              które zmieniają się u nas w zależności od pory roku.
            </p>
          </div>

        </article>
      </section>
        <Footer />
    </>
  )
}

export default Wedding