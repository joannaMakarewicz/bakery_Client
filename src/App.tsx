import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Cakes from "./pages/Cakes/Cakes";
import Wedding from "./pages/Wedding/Wedding";
import SweetTable from "./pages/SweetTable/SweetTable";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/sweetTable" element={<SweetTable />} />
      <Route path="/bakery" element={<Navigate to="/" />} />
      {/* <Route end path="/" element={<Home />} /> */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </Router>
  )
}

export default App;
