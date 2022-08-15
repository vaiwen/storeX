import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './FilterSlice'

export default configureStore({
    reducer: {
        products: filterReducer
    }
})