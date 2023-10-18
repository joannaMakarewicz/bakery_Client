import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cakes from "./pages/Cakes/Cakes";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import MyDataContext from "./context/MyDataContext";
import SweetTable from "./pages/SweetTable/SweetTable";
import Wedding from "./pages/Wedding/Wedding";
import axiosInstance from "./services/config";
import "./App.scss";

function App() {

  const [myDataTest, setMyData]=useState<[]>([])

  const getMyData = async () => {
    await axiosInstance.get("/myData").then((response) => {
      setMyData(response.data.records);
    });
  };

  useEffect(() => {
    getMyData();
  }, []);

  console.log(myDataTest);

  const myData = {
    name: "Chodź na ciacho",
    owner: "Magdalena Kalinowska",
    tel: 603909932,
    email: "chodznaciachogdansk@gmail.com",
    fb: "https://m.facebook.com/chodznaciachogdansk/",
    instagram: "https://www.instagram.com/chodz_na_ciacho/",
    address: "Leona Wyczółkowskiego 14A/3",
    city: "80-147 Gdańsk",
    google:
      "https://www.google.pl/maps/place/Chod%C5%BA+na+ciacho/@54.3527029,18.6245243,17z/data=!3m1!4b1!4m6!3m5!1s0x46fd73e278063c51:0x6b1d9a2057e63c9b!8m2!3d54.3526998!4d18.6270992!16s%2Fg%2F11s5w_2t47?entry=ttu",
    };

  return (
    <MyDataContext.Provider value={{ myData: myData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bakery_Client" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/sweetTable" element={<SweetTable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </MyDataContext.Provider>
  );
}

export default App;
