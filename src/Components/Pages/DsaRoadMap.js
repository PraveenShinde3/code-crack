import React from "react";
import Tags from "../Tags/Tags";
import { motion as m, easeOut } from "framer-motion";

const DsaRoadMap = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="py-20 px-10"
    >
      <div className="container mx-auto h-96 flex justify-center items-center bg-[#D09CFA] border-3 border-black">
        <Tags name="Comming Soon" className="text-4xl" />
      </div>
    </m.div>
  );
};

export default DsaRoadMap;
