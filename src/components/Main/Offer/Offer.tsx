import React from 'react';
import Card from '../../Card/Card';
import bcg7 from "../../../assets/bcg7.jpg";
import bcg8 from "../../../assets/bcg8.jpg";

import "../Offer/Offer.scss";

const Offer = () => {

  return (
    <article className='offer'>
      <Card photo={bcg7} text={'Torty'}/>
      <Card photo={bcg8} text={'Sodkie stoły'}/>
      <Card photo={bcg8} text={'Wesele'}/>
    </article>
  )
}

export default Offer;
