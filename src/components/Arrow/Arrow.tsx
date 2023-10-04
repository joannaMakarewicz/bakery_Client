import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "../Arrow/Arrow.scss";

const Arrow = () => {
  return (
    <div className="arrow">
      <a href="#top">
        <BsFillArrowUpCircleFill />
      </a>
    </div>
  );
};

export default Arrow;
