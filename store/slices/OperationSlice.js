import { createSlice } from "@reduxjs/toolkit";
import CalculateService from "../../services/CalculateService";

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
            console.log(state.operations);
            state.operations = state.operations.slice(0, state.operations.length - 1)
        },
        resultOfOperations(state) {
            const res = CalculateService.calclulate(state.operations)

            if (res.error) {
                state.operations = res.error
            } else {
                state.operations = res.result.toString()
            }
        }
    }
})

export const { resetOperations, replaceOperations, delLastOperation, pushOperation, resultOfOperations } = operationSlice.actions

export const operationReducer = operationSlice.reducer