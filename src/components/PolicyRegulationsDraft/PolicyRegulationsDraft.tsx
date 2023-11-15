import React from 'react';
import "../PolicyRegulationsDraft/PolicyRegulationsDraft.scss";
import Regulations from '../Regulations/Regulations';
import Policy from '../Policy/Policy';

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

<div className="policy">
          <div className="policy__content">
            <h1 className="policy__heading mb-5">{policy? "Polityka prywatności" : "Regulamin"}</h1>
            <div className="policyText">
                <h2 className="m-5">Postanowienia ogólne</h2>
                
                    {policy? <Policy/> : <Regulations/>}
              
            </div>
           
            <div>
              <button className="btn policyText__icon" onClick={policy? showPolicy : showRegulations}>Zamknij</button>
            </div>
          </div>
        </div>
      );
}

export default PolicyRegulationsDraft;
