import QuestionBlock from "@/components/quiz/QuestionBlock";

interface Params {
  params: { id: string };
}

const Question = async ({ params: { id } }: Params) => {
  const response = await fetch(
    `${process.env.localEnv}/api/questions?id=${id}`
  );

  let question;
  if (response.ok) {
    question = await response.json();
  }

  return <QuestionBlock {...question} />;
};

export default Question;
