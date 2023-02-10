import React from "react";
import Accordion from "../Accordion/Accordion";
import { useEffect } from "react";
import { memo } from "react";

const Questions = (props) => {
  // let tb_data = QuestionsRecords.map((records) => {
  //   return (
  //     <tr>
  //       <td>{records.status}</td>
  //       <td>{records.problem}</td>
  //       <td>{records.difficulty}</td>
  //       <td>
  //         <a href={records.links.leetcode} className="text-2xl" target="_blank">
  //           Leetcode
  //         </a>
  //         <a
  //           href={records.links.geeksForGeeks}
  //           className="text-2xl"
  //           target="_blank"
  //         >
  //           geeksforgeeks
  //         </a>
  //       </td>
  //     </tr>
  //   );
  // });

  const arrayData = props.questionData.filter((record) => {
    return record.topic === "Arrays";
  });
  const stringData = props.questionData.filter((record) => {
    return record.topic === "String";
  });
  const linkedListData = props.questionData.filter((record) => {
    return record.topic === "Linked List";
  });

  useEffect(() => {
    if (arrayData.length !== 0) {
      // console.log(seprateData[0].id);
    }
  }, [arrayData]);

  return (
    <div className="container mx-auto  w-full lg:w-11/12 px-10">
      <Accordion
        questionsCompleted="23"
        totalQuestions="35"
        data={arrayData}
        updateStatus={props.updateStatus}
      />
      <Accordion
        questionsCompleted="12"
        totalQuestions="23"
        data={stringData}
        updateStatus={props.updateStatus}
      />
      <Accordion
        questionsCompleted="03"
        totalQuestions="45"
        data={linkedListData}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default memo(Questions);
