import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Ads from "./components/Ads/Ads";

function App() {
  const [isScroll, setIsScroll] = useState(false);

  const changleColor = () => {
    if (window.scrollY >= 90) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", changleColor);
  return (
    <div>
      <Ads></Ads>
      <div
        className={`sticky z-40 top-0 ${
          isScroll
            ? "bg-[#242733] text-white transform duration-300"
            : "bg-transparent text-black transform duration-150"
        }`}
      >
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
