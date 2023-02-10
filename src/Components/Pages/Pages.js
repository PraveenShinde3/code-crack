import React from "react";
import QuestionsRecords from "../../Data/questions.json";
import { useState, useEffect } from "react";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import DsaRoadMap from "./DsaRoadMap";
import Home from "./Home";

const Pages = () => {
  const [questionData, setQuestionData] = useState(
    JSON.parse(localStorage.getItem("questions-data")) || QuestionsRecords
  );

  const updateStatus = (status, id) => {
    const tempNoteData = [...questionData];

    const index = tempNoteData.findIndex((item) => item.id === id);
    if (index < 0) return;
    // console.log("update function called" + id);
    // console.log(tempNoteData);
    tempNoteData[index].status = status;
    setQuestionData(tempNoteData);
  };

  useEffect(() => {
    localStorage.setItem("questions-data", JSON.stringify(questionData));
    // console.log("set item");
    // console.log(questionData);
  }, [questionData]);

  return (
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/dsa-sheet"
        element={
          <Main questionData={questionData} updateStatus={updateStatus} />
        }
      ></Route>
      <Route path="/dsa-roadmap" element={<DsaRoadMap />}></Route>
    </Routes>
  );
};

export default Pages;
