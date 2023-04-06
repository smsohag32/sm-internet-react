import React from "react";
import { useLoaderData } from "react-router-dom";
import Package from "../Package/Package";

const Packages = () => {
  const packages = useLoaderData();
  console.log(packages);
  return (
    <div className="cs-container">
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {packages.map((pk) => (
          <Package pk={pk} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
