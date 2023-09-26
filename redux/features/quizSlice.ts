import { IQuizAnswer } from "@/interfaces/IQuizAnswer";
import { IQuizState } from "@/interfaces/IQuizState";
import { formatStringForCompare } from "@/utils/formatStringForCompare";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IQuizState = {
  questions: [],
  answers: [],
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz(state, action) {
      if (state.questions.length === 0) {
        state.questions = [...action.payload.questions];
        if (!state.currentQuestion) {
          state.currentQuestion = action.payload.questions[0];
        }
      }
    },
    setAnswer(state, action) {
      const answerId = action.payload.answer._id;
      const answerInStateIndex = state.answers.findIndex(
        (answer: IQuizAnswer) => answer._id === answerId
      );
      if (answerInStateIndex === -1) {
        state.answers.push(action.payload.answer);
      } else {
        const answeredItem = state.answers[answerInStateIndex];
        if (
          formatStringForCompare(answeredItem.answer) !==
          formatStringForCompare(action.payload.answer.answer)
        ) {
          state.answers[answerInStateIndex] = {
            ...state.answers[answerInStateIndex],
            answer: action.payload.answer.answer,
          };
        }
      }
    },
  },
});
export const { setQuiz, setAnswer } = quizSlice.actions;
const quizReducer = quizSlice.reducer;
export default quizReducer;
