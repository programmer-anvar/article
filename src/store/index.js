import { configureStore } from "@reduxjs/toolkit";
import counReducer from '../reducers/countSlice'

export default configureStore({
    reducer: counReducer,
})