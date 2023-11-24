import React, { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import "../Home/Home.scss";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  useWebsiteTitle("Chodź na ciacho - strona główna");
  const [loading, setLoading] = useState<boolean>();

  useEffect(()=> {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200);
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout loading={loading}>
        <Main />
      </Layout>
    </>
  );
};

export default Home;
