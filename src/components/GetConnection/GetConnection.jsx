import React from "react";
import { useLoaderData } from "react-router-dom";

const GetConnection = () => {
  const packageData = useLoaderData();

  return (
    <div className="flex items-center min-h-[70vh] gap-4">
      <p>get connection</p>
      <div className="flex flex-col w-full gap-5 bg-red-200 p-5 items-center">
        <input
          type="text"
          placeholder="Your name"
          className="input w-full max-w-xs"
          required
        />
        <input
          type="number"
          placeholder="Your Number"
          className="input w-full max-w-xs"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Address"
          className="input w-full max-w-xs"
        />
        <button className="btn btn-primary">Confirm</button>
      </div>
      <div className="bg-red-200 h-full">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laborum
          labore quod error dolorem, sint at odit temporibus corporis quam
          magnam quisquam quis ad optio illum amet dicta quidem similique!
        </p>
      </div>
    </div>
  );
};

export default GetConnection;
