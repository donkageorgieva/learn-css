import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: String,
  answers: Array<String>,
  rightAnswer: String,
});

export const Question =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);
