import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white h-60 bg-gradient-to-r pt-[6px] from-[#F8D872] via-[#AC41F0] to-[#7B10D2]">
      <div className=" h-full w-full bg-black">
        <div className=" container mx-auto h-full p-10 flex flex-col justify-between items-center">
          <p className="text-center font-bold">Code Crack</p>
          <p className="text-center text-2xl">
            Ready to Unleash Your Full Potential?
          </p>
          <div>
            <button className="button bg-white font-mono font-bold text-black py-2 px-4 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
