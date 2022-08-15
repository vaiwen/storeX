import { createSlice } from "@reduxjs/toolkit";
import Products from '../data.json'

export const filterSlice = createSlice({
    name: 'products',
    initialState: Products ,    
    reducers: {
        filter: (state, action) => {
            return state.filter(item => item.size === action.payload.size)
        }
    }
})

export const { filter } = filterSlice.actions

export default filterSlice.reducer