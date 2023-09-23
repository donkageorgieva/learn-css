import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { Question } from "@/Models/Question";
export async function POST(req: NextRequest, res: NextResponse) {
  const URI = process.env.MONGODB_URI;
  let client;

  try {
    if (URI) {
      client = await mongoose.connect(URI);
    }
  } catch (error) {}
  try {
    const request = await req.json();
    await Question.create(request);

    return NextResponse.json({ message: "Question created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "There was an error creating your question" },
      { status: 500 }
    );
  }
}
