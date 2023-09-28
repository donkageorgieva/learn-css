import { Question } from "@/Models/Question";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const firstQuestion = await Question.findOne();

    if (firstQuestion) {
      return NextResponse.json({ firstQuestion });
    }

    throw new Error("Question not found");
  } catch (error) {
    return NextResponse.json(
      { message: "There was an error fetching first question of this quiz" },
      { status: 404 }
    );
  }
}
