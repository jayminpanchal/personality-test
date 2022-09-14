import { useState } from "react";

import { Questions } from "../../mocks/questions";
import { Answer, Result } from "../../types/question";
import QuestionBlock from "./question";
import ExamResult from "./result";
import "./style.css";

const ExamPage = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<Result | null>(null);

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === Questions.length - 1;

  const onNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return;
    }

    const introvertAnwers = answers.filter((answer, index: number) => {
      const question = Questions[index];
      return question.introvertAnswers.includes(answer.option);
    }).length;

    const extrovertAnwers = answers.filter((answer, index: number) => {
      const question = Questions[index];
      return question.extrovertAnswers.includes(answer.option);
    }).length;

    if (introvertAnwers > extrovertAnwers) {
      setResult({ isIntrovert: true });
    } else {
      setResult({ isExtrovert: true });
    }
  };

  const onPrevQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const onAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    if (newAnswers[currentQuestionIndex]) {
      newAnswers[currentQuestionIndex].option = optionIndex;
    } else {
      newAnswers.push({
        questionId: currentQuestionIndex,
        option: optionIndex,
      });
    }
    setAnswers(newAnswers);
  };

  const renderContent = () => {
    if (result) {
      return <ExamResult result={result} />;
    }

    return (
      <QuestionBlock
        question={Questions[currentQuestionIndex]}
        isFirst={isFirstQuestion}
        isLast={isLastQuestion}
        selectedOption={answers[currentQuestionIndex]?.option}
        onAnswerSelect={onAnswerSelect}
        onNextQuestion={onNextQuestion}
        onPrevQuestion={onPrevQuestion}
      />
    );
  };

  return <div className="container">{renderContent()}</div>;
};

export default ExamPage;
