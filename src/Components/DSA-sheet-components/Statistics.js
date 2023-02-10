import React from "react";
import StatBox from "./StatBox";

const Statistics = () => {
  return (
    <div className="container mx-auto  content-center sm:justify-center flex flex-col sm:flex-row gap-20 py-20 flex-wrap">
      <StatBox difficulty="Easy" number="98" />
      <StatBox difficulty="Medium" number="124" />
      <StatBox difficulty="Hard" number="67" />
    </div>
  );
};

export default Statistics;
