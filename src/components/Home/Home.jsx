import React from "react";
import Lottie from "lottie-react";
import user from "./isp.json";
const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center items-center cs-container">
        <div>
          <Lottie className="w-full" animationData={user} loop={true}></Lottie>
        </div>
        <div className="w-full">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            quibusdam?
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn btn-primary">Get connection</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
