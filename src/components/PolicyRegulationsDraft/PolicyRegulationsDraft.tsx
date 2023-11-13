import React from 'react';
import "../PolicyRegulationsDraft/PolicyRegulationsDraft.scss";

type PolicyRegulationsDraftProps = {
    // policyRegulationsData:{
    //     heading: string;
    //     name:string;
    // }
    // children:React.ReactNode;
    policy?:boolean;
    regulations?:boolean;
    showPolicy?:()=>void;
    showRegulations?:()=>void;
}

const PolicyRegulationsDraft = ({policy, regulations, showPolicy, showRegulations}:PolicyRegulationsDraftProps) => {
    return (
        <>
        {
policy?
<div className="policy">
          <div className="policy__content">
            <h1 className="policy__heading mb-5">Polityka prywatności</h1>
            <div className="policyText">
                <h2 className="m-5">Name</h2>
                <ol className="text-start">
                    texst do Polityki prywatności
                </ol>
            </div>
           
            <div>
              <button className="btn policyText__icon" onClick={showPolicy}>Zamknij</button>
            </div>
          </div>
        </div>
        :
        <div className="policy">
          <div className="policy__content">
            <h1 className="policy__heading mb-5">Regulamin</h1>
            <div className="policyText">
                <h2 className="m-5">Name</h2>
                <ol className="text-start">
                    text do Regulamin
                </ol>
            </div>
           
            <div>
              <button className="btn policyText__icon" onClick={showRegulations}>Zamknij</button>
            </div>
          </div>
        </div>
        }</>
        
      );
}

export default PolicyRegulationsDraft;
