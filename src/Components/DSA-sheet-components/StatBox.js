import React from "react";

const StatBox = (props) => {
  return (
    <div className="border-3 border-black p-2 min-w-fit w-60 h-48 bg-[#EEF1F7] flex flex-col justify-between">
      <h1 className="text-8xl text-center p-3">{props.number}</h1>
      <p className="bg-black text-white text-center py-2">{props.difficulty}</p>
    </div>
  );
};

export default StatBox;
