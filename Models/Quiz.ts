import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  title: String,
  description: String,
});
