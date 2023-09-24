import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Question } from "@/Models/Question";
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const questions = await Question.find();

    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "There was an error fetching the questions" },
      { status: 500 }
    );
  }
}
