import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// creating store
export const store = configureStore({
    reducer : rootReducer
})