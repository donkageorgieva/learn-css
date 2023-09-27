import QuestionBlock from "@/components/UI/QuestionBlock";

interface Params {
  params: { id: string };
}

const Question = async ({ params: { id } }: Params) => {
  const response = await fetch(`${process.env.localEnv}/api/quiz/${id}`);
  let question;
  if (response.ok) {
    question = await response.json();
  }
  return question && <QuestionBlock {...question} />;
};

export default Question;
