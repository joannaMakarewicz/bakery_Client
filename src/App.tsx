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
  type AppData = {
    fields: {
      name: string;
      owner: string;
      tel: string;
      email: string;
      fb: string;
      instagram: string;
      address: string;
      city: string;
      google: string;
    };
  }[];



  const [myDataAirtable, setMyDataAirtableData] = useState<AppData>([]);

  const getMyDataAirtable = async () => {
    await axiosInstance.get("/myData").then((response) => {
      setMyDataAirtableData(response.data.records);
    });
  };

  useEffect(() => {
    getMyDataAirtable();
  }, []);

  const myData = {
    name: myDataAirtable[0]?.fields?.name,
    owner: myDataAirtable[0]?.fields?.owner,
    tel: myDataAirtable[0]?.fields?.tel,
    email: myDataAirtable[0]?.fields?.email,
    fb: myDataAirtable[0]?.fields?.fb,
    instagram: myDataAirtable[0]?.fields?.instagram,
    address: myDataAirtable[0]?.fields?.address,
    city: myDataAirtable[0]?.fields?.city,
    google: myDataAirtable[0]?.fields?.google,
  };



  return (
    <MyDataContext.Provider value={{ myData: myData }}>
      <Router>
        <Routes>
        <Route path="/bakery_Client" element={<Home />} />
          <Route path="/glowna" element={<Home />} />
          <Route path="/torty" element={<Cakes />} />
          <Route path="/wesela" element={<Wedding />} />
          <Route path="/slodkistol" element={<SweetTable />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </MyDataContext.Provider>
  );
}

export default App;
