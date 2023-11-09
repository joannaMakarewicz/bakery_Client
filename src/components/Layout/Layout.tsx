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
  backgroundImages?: string[];
};

const Layout = ({ children, backgroundImages = [""] }: LayoutProps) => {
  const [policy, setPolicy] = useState<boolean>(false);

  const showPolicy = () => {
    setPolicy(!policy)
    console.log(!policy)
  };

  let isHome = useLocation();

  return (
    <>
      {policy ?<PolicyRegulationsDraft showPolicy={showPolicy}/> : null}
      <Navbar />
      <Arrow />
      {isHome.pathname === "/" || isHome.pathname === "/bakery_Client" ? (
        <Header />
      ) : (
        <HeaderSmall backgroundImages={backgroundImages} />
      )}

      {children}

      <Footer showPolicy={showPolicy} />
    </>
  );
};

export default Layout;
