import React, { useEffect} from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import "../Home/Home.scss";


const Home = () => {
  useWebsiteTitle("Strona główna");

  useEffect (()=> {
    window.scrollTo(0,0)
  }, [])
  
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
