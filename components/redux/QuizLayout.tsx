"use client";

import { IQuizQuestion } from "@/interfaces/IQuizQuestion";
import { setQuiz } from "@/redux/features/quizSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import QuestionBlock from "../Quiz/QuestionBlock";
import QuizNavigation from "../Quiz/QuizNavigation";
import { useRouter } from "next/navigation";

interface Props {
  questions: Array<IQuizQuestion>;
}
const QuizLayout = ({ questions }: Props) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  dispatch(
    setQuiz({
      questions,
    })
  );

  const currentQuestion = useSelector((state: RootState) =>
    state.quiz.questions.find(
      (question) => question._id === state.quiz.currentQuestion
    )
  );

  return (
    <form className="flex flex-col justify-center items-center h-screen ">
      {!currentQuestion ? (
        <QuestionBlock {...questions[0]} />
      ) : (
        <QuestionBlock {...currentQuestion} />
      )}
      <QuizNavigation />
    </form>
  );
};

export default QuizLayout;
