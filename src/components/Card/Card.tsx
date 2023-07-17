import React from "react";
import "../Card/Card.scss";

type CardProps = {
  photo: string;
  text: string;
};

const Card = ({ photo, text }: CardProps) => {
  return (
    <picture className="myCard ">
      <div className="card rounded-0">
        <img className="card-img-top rounded-0" src={photo} alt="Cake" />
        <div className="card-body">
          <p className="card-text">{text.toUpperCase()}</p>
        </div>
      </div>
    </picture>
  );
};

export default Card;
