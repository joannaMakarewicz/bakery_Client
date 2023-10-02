import React from 'react';
import Card from '../../Card/Card';
import bcg7 from "../../../assets/offerCakes.jpeg";
import bcg8 from "../../../assets/bcg8.jpg";
import bcg23 from "../../../assets/offerWedding.jpeg";

import "../Offer/Offer.scss";

const Offer = () => {

  return (
    <article className='offer m-3 p-1'>
      <Card photo={bcg7} text={'Torty'} name={'cakes'}/>
      <Card photo={bcg8} text={'Słodkie stoły'} name={'sweetTable'}/>
      <Card photo={bcg23} text={'Wesela'} name={'wedding'}/>
    </article>
  )
}

export default Offer;
