import React, { useEffect, useState } from 'react';
import Header from "./Header/Header";
import Carousel from "react-bootstrap/Carousel";
import Offer from "./Offer/Offer";
import Arrow from "../Arrow/Arrow";
import "../Main/Main.scss";
import axiosInstance from "../../services/config";
import Feedback from "../Feedback/Feedback";
import { AiFillStar } from "react-icons/ai";

const Main = () => {
  type Opinions = {
    fields: {
      authorName: string;
      content: string;
    };
  }[];

  const [opinions, setOpinions] = useState<Opinions>([]);

  const getOpinions = async () => {
    await axiosInstance.get("/opinions").then((response) => {
      setOpinions(response.data.records);
    });
  };

  useEffect(() => {
    getOpinions();
  }, []);


  return (
    <main className="main pb-5">
      <Arrow />
      <Header />
      <article className="main__section main__section--1">
        <div className="w-25 mx-auto my-3 main__border" />
        <h1 className="main__heading">
          CHODŹ NA CIACHO – ZACHWYCAJĄCE WYPIEKI NA KAŻDĄ OKAZJĘ
        </h1>
        <div className="w-25 mx-auto my-3 main__border" />
        <p className="main__description">
          U nas powstają wyjątkowe artystyczne torty, ciasta i ciasteczka
          tworzone z ogromną pasją i zaangażowaniem w każdy szczegół. Magia
          naszych wypieków przejawia się w niebanalnym wyglądzie i wyjątkowym
          smaku. Są to słodkości przygotowywane na indywidualne zamówienia a
          przy ich tworzeniu bazujemy wyłącznie na najlepszej jakości
          składnikach i autorskich przepisach. Smak, jakość i wygląd idą u nas w
          parze!
        </p>
      </article>

      <article className="main__opinion">
        <div>
          <AiFillStar className="star me-2" />
          <AiFillStar className="star me-2" />
          <AiFillStar className="star me-2" />
        </div>
        <h2>Opinie naszych Klientów</h2>
        <div>
          <AiFillStar className="star me-2" />
          <AiFillStar className="star me-2" />
          <AiFillStar className="star me-2" />
        </div>
        <div className="main__section">
          <Carousel className="myOwnCarousel">
            {opinions.map((opinion, key) => {
              return (
                <Carousel.Item>
                  <Feedback
                    authorName={opinion.fields.authorName}
                    text={opinion.fields.content}
                    key={opinion.fields.authorName}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="noCarousel">
            {opinions.map((opinion, key) => {
              return (
                <Feedback
                  authorName={opinion.fields.authorName}
                  text={opinion.fields.content}
                  key={opinion.fields.authorName}
                />
              );
            })}
          </div>
        </div>
      </article>
      <article className="main__section main__section--2">
        <p className="main__description main__description--2">
          Miłość do słodkości, rękodzieła i wszystkiego co piękne w naturze
          przejawia się w tym, co tworzymy. Smak, jakość i wygląd to podstawowe
          kryteria, którymi kierujemy się przy tworzeniu naszych słodkości.
          Uwielbiamy bawić się smakiem i tworzyć nowe połączenia smakowe. Na
          bieżąco śledzimy trendy smakowe i wizualne w nowoczesnym
          cukiernictwie, bierzemy udział w szkoleniach i ciągle się rozwijamy.
          Wszystko co dla Was przygotowujemy jest tworzone z sercem i pasją!
        </p>

        <Offer />
      </article>
    </main>
  );
};

export default Main;
