import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import SemesterThree from "./pages/SemesterThree";
import SemesterFour from "./pages/SemesterFour"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SemesterThree" element={<SemesterThree/>}/>
          <Route path="/SemesterFour" element={<SemesterFour/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
