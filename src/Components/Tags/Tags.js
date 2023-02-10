import React from "react";

const Tags = (props) => {
  return (
    <div className={`absolute ${props.position}`}>
      <div className=" text-[8px] px-2 py-1 md:px-5 md:py-2 md:text-base border-2 border-b-3 md:border-3 md:border-b-6 bg-white font-bold border-black ">
        {props.name}
      </div>
    </div>
  );
};

export default Tags;
