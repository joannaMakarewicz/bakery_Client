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

function App() {
  const myData = {
    name: "Chodź na ciacho",
    owner: "Magdalena Kalinowska",
    tel: 603909932,
    email: "chodznaciachogdansk@gmail.com",
    fb: "https://m.facebook.com/chodznaciachogdansk/",
    instagram: "https://www.instagram.com/chodz_na_ciacho/",
    address: "Leona Wyczółkowskiego 14A/3, 80-147 Gdańsk",
  };

  return (
    <MyDataContext.Provider value={{ myData: myData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/sweetTable" element={<SweetTable />} />
          <Route path="/bakery" element={<Navigate to="/" />} />
          {/* <Route end path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </MyDataContext.Provider>
  );
}

export default App;
