import React from "react";
import { Question } from "../../types/question";

interface Props {
  question: Question;
  isFirst: boolean;
  isLast: boolean;
  selectedOption?: number;
  onAnswerSelect: (index: number) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
}

const QuestionBlock: React.FC<Props> = (props) => {
  const {
    question,
    isFirst,
    isLast,
    selectedOption,
    onAnswerSelect,
    onNextQuestion,
    onPrevQuestion,
  } = props;
  return (
    <div className="question-block">
      <p className="question-title">{question.question}</p>
      <div className="question-options">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          return (
            <button
              key={`OP_${index}`}
              className={isSelected ? "selected" : ""}
              onClick={() => onAnswerSelect(index)}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="question-footer">
        <button disabled={isFirst} onClick={onPrevQuestion}>
          Prev
        </button>
        <button onClick={onNextQuestion}>{isLast ? "Submit" : "Next"}</button>
      </div>
    </div>
  );
};

export default QuestionBlock;
