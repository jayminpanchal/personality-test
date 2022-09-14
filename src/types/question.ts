export interface Question {
  id: number;
  question: string;
  options: string[];
  introvertAnswers: number[];
  extrovertAnswers: number[];
}

export interface Answer {
  questionId: number;
  option: number;
}

export interface Result {
  isIntrovert?: boolean;
  isExtrovert?: boolean;
}
