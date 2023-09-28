import QuizClientComponent from "@/components/quiz/QuizClientComponent";

const Quiz = async () => {
  let data;
  try {
    const response = await fetch(`${process.env.localEnv}/api/quiz`);

    if (response.ok) {
      data = await response.json();
    }
  } catch (err) {
    throw new Error("There was an error fetching the first Question");
  }

  return <QuizClientComponent questionId={data.firstQuestion._id} />;
};

export default Quiz;
