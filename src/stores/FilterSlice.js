import { createSlice } from "@reduxjs/toolkit";
import Products from '../data.json'

export const filterSlice = createSlice({
    name: 'products',
    initialState: Products.products,
    reducers: {
        filterSize: (state, action) => {
            if (action.payload.size.length > 0) {  
                state = Products.products
                // const x = state 
                return state.filter((item) => item.size === action.payload.size)
            }
        },
        counterItem: (state) => {
            console.log(state.length)
            return state.length
        }
    }
})

export const { filterSize, counterItem} = filterSlice.actions

export default filterSlice.reducer