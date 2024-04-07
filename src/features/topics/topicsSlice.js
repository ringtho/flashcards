import { createSlice } from '@reduxjs/toolkit'
import { addQuiz } from '../quizzes/quizzesSlice'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics = {
              [action.payload.id]: {
                ...action.payload,
                quizIds: [],
              },
              ...state.topics,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) => {
                const { id, topicId } = action.payload
                if (state.topics[topicId]) {
                    state.topics[topicId].quizIds.push(id)
                }
            })
    }
})

export const topicsSelector = state => state.topics.topics
export const { addTopic } = topicsSlice.actions

export default topicsSlice.reducer