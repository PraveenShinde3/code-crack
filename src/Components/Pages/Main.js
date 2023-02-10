import React from "react";
import Statistics from "../DSA-sheet-components/Statistics";
import Questions from "../DSA-sheet-components/Questions";
import { easeOut, motion as m } from "framer-motion";

const Main = (props) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="py-10"
    >
      <Statistics />
      <Questions
        questionData={props.questionData}
        updateStatus={props.updateStatus}
      />
    </m.div>
  );
};

export default Main;
