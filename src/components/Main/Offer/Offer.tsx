import React from 'react';
import Card from '../../Card/Card';
import bcg7 from "../../../assets/bcg7.jpg";
import bcg8 from "../../../assets/bcg8.jpg";

import "../Offer/Offer.scss";

const Offer = () => {

  return (
    <article className='offer m-3 mt-5' id="offer">
      <Card photo={bcg7} text={'Torty'} name={'cakes'}/>
      <Card photo={bcg8} text={'Słodkie stoły'} name={'sweetTable'}/>
      <Card photo={bcg8} text={'Wesela'} name={'weddings'}/>
    </article>
  )
}

export default Offer;
