import React from "react";
import "../Gallery/Gallery.scss";
import bcg19 from "../../assets/bcg19.jpeg";
import bcg1 from "../../assets/bcg1.jpeg";
import bcg2 from "../../assets/bcg2.jpeg";
import bcg28 from "../../assets/bcg28.jpg";
import bcg35 from "../../assets/bcg35.jpg";
import bcg24 from "../../assets/bcg21.jpeg";
import bcg31 from "../../assets/bcg31.jpg";
import bcg26 from "../../assets/bcg26.jpg";

const Gallery = () => {
  const listOfImages: string[] = [
    bcg19,
    bcg31,
    bcg1,
    bcg2,
    bcg24,
    bcg35,
    bcg26,
    bcg28,
  ];

  return (
    <article className="gallery">
      <h2 className="gallery__heading">Galeria</h2>
      <div className="gallery__box">

        {listOfImages.map((el) => {
          return (
            <a href={el} className="gallery__frame" key={el}>
              <img src={el} alt="cakes" width={"100%"} />
            </a>
          );
        })}

      </div>
    </article>
  );
};

export default Gallery;
