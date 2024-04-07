import { createSlice } from '@reduxjs/toolkit'


export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
        state.quizzes = {
            [action.payload.id] : action.payload,
            ...state.quizzes
        }
    }
  },
})

export const quizzesSelector = state => state.quizzes.quizzes
export const { addQuiz } = quizzesSlice.actions

export default quizzesSlice.reducer