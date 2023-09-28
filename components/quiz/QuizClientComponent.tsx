"use client";

import { IQuizQuestion } from "@/interfaces/IQuizQuestion";
import { setQuiz } from "@/redux/features/quizSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionBlock from "./QuestionBlock";
interface Props {
  questionId: string;
}
const QuizClientComponent = ({ questionId }: Props) => {
  const router = useRouter();
  // const dispatch: AppDispatch = useDispatch();
  // dispatch(
  //   setQuiz({
  //     questions,
  //   })
  // );

  const currentQuestion = useSelector(
    (state: RootState) => state.quiz.currentQuestion
  );
  // const questionInArrayIndex = questions.findIndex(
  //   (question) => question._id === currentQuestion
  // )
  const redirectTo = currentQuestion ? currentQuestion : questionId;
  useEffect(() => {
    router.push(`quiz/question/${redirectTo}`);
  }, []);

  return <>{/* <QuestionBlock {...questionProps} /> */}</>;
};

export default QuizClientComponent;
