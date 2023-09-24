import { Question } from "@/Models/Question";
import { connectToDatabase } from "@/lib/db";
import { formatStringForCompare } from "@/utils/formatStringForCompare";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const requestBody = await req.json();
    const answers = requestBody.answers;
    const questions = await Question.find();
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      const userAnswer = answers[index]
        ? formatStringForCompare(answers[index])
        : "";
      const rightAnswer = question.rightAnswer
        ? formatStringForCompare(question.rightAnswer)
        : "";
      if (userAnswer === rightAnswer) {
        correctAnswers++;
      }
    });

    const totalQuestions = questions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    return NextResponse.json(percentage, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "There was an error sending your results" },
      { status: 500 }
    );
  }
}
