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
  interface AppData {
    [key:string]:string;
  }

  const [myDataAirtable, setMyDataAirtableData]=useState<AppData>({})


  const getMyDataAirtable = async () => {
    await axiosInstance.get("/myData").then((response) => {
      setMyDataAirtableData(response.data.records[0].fields);
    });
    
  };

  useEffect(() => {
    getMyDataAirtable();

  }, []);


  const myData = {
    name: myDataAirtable.name,
    owner: myDataAirtable.owner,
    tel: myDataAirtable.tel,
    email: myDataAirtable.email,
    fb: myDataAirtable.fb,
    instagram: myDataAirtable.instagram,
    address: myDataAirtable.address,
    city: myDataAirtable.city,
    google:myDataAirtable.google
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
