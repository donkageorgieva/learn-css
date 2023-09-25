import { IQuizQuestion } from "@/interfaces/IQuizQuestion";
import Card from "./Card";

const QuestionBlock = (props: IQuizQuestion) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card title={props.question}>
        <ol className="list-inside list-decimal">
          {props.answers.map((answer, index) => (
            <li
              key={index}
              className="cursor-pointer rounded-md p-3 my-2 bg-teal-50 hover:bg-teal-500 transition-all hover:text-white"
            >
              {answer}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
};
export default QuestionBlock;
