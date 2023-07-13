import React from 'react';

type CardProps = {
    photo:string;
    text: string;
}

const Card = ({photo, text}:CardProps) => {
  return (
<div className="card m-3">
  <img className="card-img-top" src={photo} alt="Cake"/>
  <div className="card-body">
    <p className="card-text">{text.toUpperCase()}</p>
  </div>
</div>
  )
}

export default Card;
