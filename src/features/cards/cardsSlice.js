import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload
            state.cards = {
                [id]: { id, front, back},
                ...state.cards
            }
        }
    }
})

// export const cardsSelector = (state, id) => state.cards.cards[id]
export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer