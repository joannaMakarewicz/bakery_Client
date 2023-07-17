import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Main/Header/Header";
import "../Home/Home.scss";
import MyDataContext from "../../context/MyDataContext";

const Home = () => {
  const myData = {
    name:"Chodź na ciacho",
    owner:"Magdalena Kalinowska",
    tel: 603909932,
    email: "chodznaciachogdansk@gmail.com",
    fb: "https://m.facebook.com/chodznaciachogdansk/",
    instagram: "https://www.instagram.com/chodz_na_ciacho/",
    address: "Leona Wyczółkowskiego 14A/3, 80-147 Gdańsk",
  };
  return (
    <>
      <MyDataContext.Provider value={{ myData: myData }}>
        <ExtraContent />
        <Navbar />
        <Header/>
        <Main />
        <Footer />
      </MyDataContext.Provider>
    </>
  );
};

export default Home;
