import React from "react";
import { Result } from "../../types/question";

interface Props {
  result: Result;
}

const ExamResult: React.FC<Props> = (props) => {
  const { result } = props;
  return (
    <div className="question-block">
      <h3 className="result-title">
        You'are an: {result.isIntrovert ? "Introvert" : "Extrovert"}
      </h3>
    </div>
  );
};

export default ExamResult;
