import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="min-h-[calc(100vh-240px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
