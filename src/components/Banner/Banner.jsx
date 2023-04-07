import React from "react";
import image from "./reretewt.png";

const Banner = () => {
  return (
    <div className=" relative bg-opacity-25 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex flex-col py-48 px-10 md:flex-row justify-center items-center cs-container">
        <div></div>
        <div className="w-full flex flex-col gap-5">
          <p className="font-extrabold md:text-5xl text-2xl text-white">
            Journey With Fast Internet
          </p>
          <p className="font-bold text-white">
            Fast Speed + No Service Charge + No Contracts + Powerful Coverage
          </p>
          <p className="mt-10">
            <span className="font-bold text-4xl primary-text">BDT 1000</span>{" "}
            /mo
          </p>
          <button className="btn btn-primary w-[50%]">Get connection</button>
        </div>
        <div className="p-10 primary-text bg-white absolute right-40 shadow-xl -bottom-5">
          <p className="text-2xl font-bold">Contact now : +88019</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
