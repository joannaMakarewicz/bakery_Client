import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Arrow from "../Arrow/Arrow";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Header from "../Main/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
  backgroundImages?: string[];
};


const Layout = ({ children, backgroundImages= [''] }: LayoutProps) => {

  let isHome = useLocation();

  return (
    <>
      <Navbar />
      <Arrow />
      {isHome.pathname === "/" || isHome.pathname === "/bakery_Client"?
      <Header/>
      :
      <HeaderSmall backgroundImages={backgroundImages} />
      }
      {children}
      <Footer />
    </>
  );
};

export default Layout;
