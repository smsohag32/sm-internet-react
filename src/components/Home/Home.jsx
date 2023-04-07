import React from "react";
import Lottie from "lottie-react";
import user from "./isp.json";
import Packages from "../Packages/Packages";
import Banner from "../Banner/Banner";
const Home = () => {
  return (
    <div className="">
      <Banner />
      <div>
        <Packages />
      </div>
    </div>
  );
};

export default Home;
