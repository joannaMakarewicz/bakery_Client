import React from "react";
import Card from "../../Card/Card";
import bcg7 from "../../../assets/offerCakes.jpeg";
import bcg8 from "../../../assets/bcg8.jpg";
import bcg23 from "../../../assets/offerWedding.jpeg";

import "../Offer/Offer.scss";

const Offer = () => {
  const offers = [
    {
      photo: bcg7,
      heading: "Torty",
      name: "cakes",
      content: "Wyjątkowe i wymarzone, przygotowywane na indywidualne zamówienie."
    },
    {
      photo: bcg8,
      heading: "Słodkie stoły",
      name: "sweetTable",
      content: "Osłodzimy Wasze przyjęcie weselne wyjątkowym tortem i słodkościami.",
    },
    {
      photo: bcg23,
      heading: "Wesela",
      name: "wedding",
      content: "Słodki stół w naszym wykonaniu to niezapomniana uczta smakowa i wizualna.",
    },
  ];

  return (
    <article className="offer">
      {offers.map((offer) => {
        return <Card offers={offer} key={offer.name}/>;
      })}
    </article>
  );
};

export default Offer;
