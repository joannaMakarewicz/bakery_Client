import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.scss";

type CardProps = {
offers: {
  photo: string;
  heading: string;
  name: string;
  content: string;
}
};

const Card = ({ offers }: CardProps) => {
  return (
    <>
      <Link to={`/${offers.name}`}>
        <figure className="myCard">
          <div className="myCard__img card rounded-0">
            <img className="card-img-top rounded-0" src={offers.photo} alt={offers.name} />
          </div>
          <figcaption className="myCard__body">
            <h3>{offers.heading.toUpperCase()}</h3>
            <p>{offers.content}</p>
          </figcaption>
        </figure>
      </Link>
    </>
  );
};

export default Card;
