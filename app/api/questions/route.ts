import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Question } from "@/Models/Question";
import { ObjectId } from "mongodb";
import { NextApiRequest } from "next";
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    let question;
    if (id) {
      question = await Question.findById(id);
    }
    if (!question) {
      return NextResponse.json(
        { message: "Question does not exist" },
        { status: 404 }
      );
    }
    // const questions = await Question.find();

    return NextResponse.json(question, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "There was an error fetching the questions" },
      { status: 500 }
    );
  }
}
