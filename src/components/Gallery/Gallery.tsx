import React from "react";
import "../Gallery/Gallery.scss";

type GalleryProps = {
    listOfImages:string[]
}

const Gallery = ({listOfImages}:GalleryProps) => {


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
