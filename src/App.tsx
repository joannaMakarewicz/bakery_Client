import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Cakes from "./pages/Cakes/Cakes";
import Wedding from "./pages/Wedding/Wedding";
import SweetTable from "./pages/SweetTable/SweetTable";
import MyDataContext from "./context/MyDataContext";
import Contact from "./pages/Contact/Contact";
import Quotation from "./pages/Quotation/Quotation";

function App() {
  const myData = {
    name: "Chodź na ciacho",
    owner: "Magdalena Kalinowska",
    tel: 603909932,
    email: "chodznaciachogdansk@gmail.com",
    fb: "https://m.facebook.com/chodznaciachogdansk/",
    instagram: "https://www.instagram.com/chodz_na_ciacho/",
    address: "Leona Wyczółkowskiego 14A/3",
    city: "80-147 Gdańsk",
    google: "https://www.google.pl/maps/place/Chod%C5%BA+na+ciacho/@54.3527029,18.6245243,17z/data=!3m1!4b1!4m6!3m5!1s0x46fd73e278063c51:0x6b1d9a2057e63c9b!8m2!3d54.3526998!4d18.6270992!16s%2Fg%2F11s5w_2t47?entry=ttu"
   
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
          <Route path="/quotation" element={<Quotation />} />
          {/* <Route path="/bakery" element={<Navigate to="/" />} /> */}
          {/* <Route end path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </MyDataContext.Provider>
  );
}

export default App;
