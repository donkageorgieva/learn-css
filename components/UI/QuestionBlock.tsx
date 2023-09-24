import { IQuizQuestion } from "@/interfaces/IQuizQuestion";

const QuestionBlock = (props: IQuizQuestion) => {
  return <>{props.question}</>;
};
export default QuestionBlock;
