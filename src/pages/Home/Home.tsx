import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Main/Header/Header";
import "../Home/Home.scss";


const Home = () => {
  return (
    <>
      <ExtraContent />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
