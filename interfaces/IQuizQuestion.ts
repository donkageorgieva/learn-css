import { IQuizAnswer } from "./IQuizAnswer";

export interface IQuizQuestion {
  _id: string;
  question: string;
  answers: Array<string>;
  rightAnswer: string;
}
