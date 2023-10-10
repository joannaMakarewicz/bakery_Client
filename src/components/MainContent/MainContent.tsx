import React from "react";
import Button from "../../components/Button/Button";
import bcg from "../../assets/weddingAdditional.jpeg";
import "../MainContent/MainContent.scss";

type MainContentProps = {
  information: {
    topHeading: string;
    header: string;
    bcg?: string;
    title?: string;
    text?: string;
    buttonName: string;
    buttonLink: string;
  };
};

const MainContent = ({ information }: MainContentProps) => {
  return (
    <section className="mainContent">
      <article className="special">
        <p className="special__content">{information.topHeading}</p>
        <h1 className="special__heading">{information.header}</h1>
      </article>
      <article className="mainContent__content">
        <div className="mainContent__content--frame">
          <img src={bcg} alt="cakes" width={"100%"} />
        </div>
        <div className="mainContent__text">
          <div className="mainContent__extra">
            <span>{information.title}</span>
          </div>
          <p className="mainContent__description">{information.text}</p>
          <Button
            value={information.buttonName}
            href={information.buttonLink}
          />
        </div>
      </article>
    </section>
  );
};

export default MainContent;
