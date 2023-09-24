import { IQuizState } from "@/interfaces/IQuizState";
import { createSlice } from "@reduxjs/toolkit";
const initialState: IQuizState = {
  questions: [],
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
  },
});
export const { setQuiz } = quizSlice.actions;
const quizReducer = quizSlice.reducer;
export default quizReducer;
