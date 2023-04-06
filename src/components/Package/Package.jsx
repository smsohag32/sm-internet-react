import React from "react";

const Package = ({ pk }) => {
  const { name, speed, price, validity, benefits } = pk;
  return (
    <div className="card w-full bg-blue-300  text-primary-content">
      <div className="badge absolute font-extrabold text-center text-md py-5 outline-none border-none h-14 -right-8 top-6 w-[50%] bg-red-300 rotate-12  badge-outline">
        {name}
      </div>
      <div className="card-body text-opacity-100">
        <h2 className="card-title font-extrabold">{speed}</h2>
        <p>Validity: {validity}</p>
        <p>
          {benefits.map((bn) => (
            <li>{bn}</li>
          ))}
        </p>
        <p className="font-extrabold text-xl">
          {price} <span className="text-md text-red-400">/mo</span>{" "}
        </p>
        <div className="">
          <button className="btn w-full">Get Now</button>
        </div>
      </div>
    </div>
  );
};

export default Package;
