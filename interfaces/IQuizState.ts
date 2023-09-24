import { IQuizQuestion } from "./IQuizQuestion";

export interface IQuizState {
  questions: Array<IQuizQuestion>;
  currentQuestion: string;
}
