import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="bg-[#242733]">
        <Header></Header>
      </div>
      <div className="min-h-[calc(100vh-240px)]">
        <Outlet></Outlet>
      </div>
      <div className="primary-color">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
