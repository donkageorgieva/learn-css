"use client";

import cx from "classnames";
import { IQuizQuestion } from "@/interfaces/IQuizQuestion";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { setAnswer } from "@/redux/features/quizSlice";
import { formatStringForCompare } from "@/utils/formatStringForCompare";

const QuestionBlock = (props: IQuizQuestion) => {
  const dispatch: AppDispatch = useDispatch();
  const answeredQuestion = useSelector((state: RootState) =>
    state.quiz.answers.find((answerObject) => answerObject._id === props._id)
  );
  console.log(props, "PROPs");

  const onAnswer = (answerText: string) => {
    dispatch(
      setAnswer({
        answer: {
          _id: props._id,
          answer: answerText,
        },
      })
    );
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card title={props.question}>
        <ol className="list-inside list-decimal">
          {props.answers.map((answerItem, index) => (
            <li
              key={index}
              className={cx(
                "cursor-pointer rounded-md p-3 my-2 bg-teal-50 hover:bg-teal-500 transition-all hover:text-white",
                answeredQuestion !== undefined &&
                  answeredQuestion?.answer === answerItem &&
                  "bg-teal-500 text-white"
              )}
              onClick={onAnswer.bind(null, answerItem)}
            >
              {answerItem}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
};
export default QuestionBlock;
