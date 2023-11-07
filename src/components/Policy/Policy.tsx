import React from "react";
import "../Policy/Policy.scss";

type PolicyProps =  {
    showPolicy:()=>void;
}

const Policy = ({showPolicy}:PolicyProps) => {
  return (
    <div className="policy">
      <div className="policy__content">
        <header className="policy__heading">Polityka prywatności</header>
        <div className="policyText"></div>
        <div>
          <button onClick={showPolicy}>Zamknij</button>
        </div>
      </div>
    </div>
  );
};

export default Policy;
