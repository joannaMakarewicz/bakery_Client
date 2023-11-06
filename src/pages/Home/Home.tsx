import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import "../Home/Home.scss";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  useWebsiteTitle("Strona główna");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <Main />
      </Layout>
    </>
  );
};

export default Home;
