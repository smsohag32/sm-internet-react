import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
