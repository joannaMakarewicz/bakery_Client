import React from 'react';
import "../PolicyRegulationsDraft/PolicyRegulationsDraft.scss";

type PolicyRegulationsDraftProps = {
    // policyRegulationsData:{
    //     heading: string;
    //     name:string;
    // }
    // children:React.ReactNode;
    showPolicy:()=>void;
}

const PolicyRegulationsDraft = ({showPolicy}:PolicyRegulationsDraftProps) => {
    return (
        <div className="policy">
          <div className="policy__content">
            <h1 className="policy__heading mb-5">heading</h1>
            <div className="policyText">
                <h2 className="m-5">Name</h2>
                <ol className="text-start">
                    text
                </ol>
            </div>
           
            <div>
              <button className="btn policyText__icon" onClick={showPolicy}>Zamknij</button>
            </div>
          </div>
        </div>
      );
}

export default PolicyRegulationsDraft;
