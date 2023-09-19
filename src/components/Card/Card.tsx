import React, { useState } from "react";
import "../Card/Card.scss";
import { Link } from "react-router-dom";

type CardProps = {
  photo: string;
  text: string;
  name: string;
};

const Card = ({ photo, text, name }: CardProps) => {
  return (
    <>
    <Link to={`/${name}`}>
      <figure className="myCard">
        <div className="myCard__img card rounded-0">
          <img className="card-img-top rounded-0" src={photo} alt={name} />
        </div>
        <figcaption className="myCard__body">
          <h3>{text.toUpperCase()}</h3>
          <p>
            Weekends don't count unless you spend them doing something
            completely pointless.
          </p>
        </figcaption>
        
      </figure>
      </Link>
    </>
  );
};

export default Card;
