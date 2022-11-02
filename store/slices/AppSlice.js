import { createSlice } from "@reduxjs/toolkit";

const initialState = { calculateString: '' }

export const appSlice = createSlice({
    name: 'app-slice',
    initialState,
    reducers: {
        resetCalclulateString(state) {
            state.calculateString = ''
        },
        replaceCalculateString(state, action) {
            state.calculateString = action.payload
        },
        pushInCalculateString(state, action) {
            state.calculateString += action.payload
        }
    }
})

export const { replaceCalculateString, resetCalclulateString, pushInCalculateString } = appSlice.actions

export const appReducer = appSlice.reducer