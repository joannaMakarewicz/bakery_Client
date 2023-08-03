import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import "../Home/Home.scss";


const Home = () => {
  useWebsiteTitle("Strona główna")
  return (
    <>
      <ExtraContent />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
