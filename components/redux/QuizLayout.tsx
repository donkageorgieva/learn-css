"use client";

import { IQuizQuestion } from "@/interfaces/IQuizQuestion";
import { setQuiz } from "@/redux/features/quizSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import QuestionBlock from "../UI/QuestionBlock";
interface Props {
  questions: Array<IQuizQuestion>;
}
const QuizLayout = ({ questions }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  dispatch(
    setQuiz({
      questions,
    })
  );
  const currentQuestion = useSelector(
    (state: RootState) => state.quiz.currentQuestion
  );
  const questionInArrayIndex = questions.findIndex(
    (question) => question._id === currentQuestion
  );
  const questionProps =
    questionInArrayIndex === -1
      ? questions[0]
      : questions[questionInArrayIndex];
  return (
    <>
      <QuestionBlock {...questionProps} />
    </>
  );
};

export default QuizLayout;
