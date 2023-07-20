import React from "react";
import "../Card/Card.scss";

type CardProps = {
  photo: string;
  text: string;
  name:string
};

const Card = ({ photo, text, name}: CardProps) => {



  return (
    <picture className="myCard ">
      <div className="card rounded-0">
        <img className="card-img-top rounded-0" src={photo} alt="Cake" />
      </div>
      <button className="myCard__body">
          {text.toUpperCase()}
        </button>
    </picture>
  );
};

export default Card;
