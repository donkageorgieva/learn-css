import QuizLayout from "@/components/redux/QuizLayout";

const Quiz = async () => {
  let questions;
  try {
    const response = await fetch(`${process.env.localEnv}/api/questions`);

    if (response.ok) {
      questions = await response.json();
    }
  } catch (err) {
    throw new Error("There was an error fetching the questions");
  }

  return (
    <>
      <QuizLayout questions={questions} />
    </>
  );
};

export default Quiz;
