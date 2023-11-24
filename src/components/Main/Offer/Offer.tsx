import React from "react";
import Card from "../../Card/Card";
import offerCakes from "../../../assets/offerCakes.jpeg";
import offerSweet from "../../../assets/offerSweet.jpg";
import offerWedding from "../../../assets/offerWedding.jpeg";

import "../Offer/Offer.scss";

const Offer = () => {
  const offers = [
    {
      photo: offerCakes,
      heading: "Torty",
      name: "torty",
      content: "Wyjątkowe i wymarzone, przygotowywane na indywidualne zamówienie."
    },
    {
      photo: offerSweet,
      heading: "Słodkie stoły",
      name: "slodkistol",
      content: "Osłodzimy Wasze przyjęcie weselne wyjątkowym tortem i słodkościami.",
    },
    {
      photo: offerWedding,
      heading: "Wesela",
      name: "wesela",
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
