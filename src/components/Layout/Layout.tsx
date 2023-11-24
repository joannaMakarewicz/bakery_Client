import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Arrow from "../Arrow/Arrow";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Header from "../Main/Header/Header";

import Policy from "../Policy/Policy";
import PolicyRegulationsDraft from "../PolicyRegulationsDraft/PolicyRegulationsDraft";

type LayoutProps = {
  children: React.ReactNode;
  loading?:boolean;
  backgroundImages?: string[];
};

const Layout = ({ children,loading=false, backgroundImages = [""] }: LayoutProps) => {
  const [policy, setPolicy] = useState<boolean>(false);
  const [regulations, setRegulations] = useState<boolean>(false);

  const showPolicy = () => {
    setPolicy(!policy)
    console.log(`"policy:" ${!policy}`)
  };

  const showRegulations = () => {
    setRegulations(!regulations)
  };

  let isHome = useLocation();

  return (
    <>
      {(policy || regulations) ?<PolicyRegulationsDraft showPolicy={showPolicy} policy={policy} regulations={regulations} showRegulations={showRegulations}/> : null}
      <Navbar />
      <Arrow />
      {isHome.pathname === "/" || isHome.pathname === "/bakery_Client" || isHome.pathname === "/glowna" ? (
        <Header loading={loading}  />
      ) : (
        <HeaderSmall backgroundImages={backgroundImages} loading={loading} />
      )}

      {children}

      <Footer showPolicy={showPolicy} showRegulations={showRegulations} />
    </>
  );
};

export default Layout;
