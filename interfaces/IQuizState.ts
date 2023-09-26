import { IQuizAnswer } from "./IQuizAnswer";
import { IQuizQuestion } from "./IQuizQuestion";

export interface IQuizState {
  questions: Array<IQuizQuestion>;
  currentQuestion?: string;
  answers: Array<IQuizAnswer>;
}
