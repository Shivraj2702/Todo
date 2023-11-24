import {configureStore} from "@reduxjs/toolkit"
import  todoReducer from "./reducers"

export const store = configureStore({
    reducer: todoReducer
})