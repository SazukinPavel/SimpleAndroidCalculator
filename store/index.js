import { configureStore } from "@reduxjs/toolkit";
import { operationReducer } from "./slices/OperationSlice";


export const store = configureStore({
    reducer: { operation: operationReducer }
})
