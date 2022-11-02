import { createSlice } from "@reduxjs/toolkit";

const initialState = { operations: '' }

export const operationSlice = createSlice({
    name: 'operation-slice',
    initialState,
    reducers: {
        resetOperations(state) {
            state.operations = ''
        },
        replaceOperations(state, action) {
            state.operations = action.payload
        },
        pushOperation(state, action) {
            state.operations += action.payload
        },
        delLastOperation(state, action) {
            state.operations = state.operations.slice(0, state.operations.length - 1)
        },
        resultOfOperations(state) {

        }
    }
})

export const { resetOperations, replaceOperations, delLastOperation, pushOperation, resultOfOperations } = operationSlice.actions

export const operationReducer = operationSlice.reducer