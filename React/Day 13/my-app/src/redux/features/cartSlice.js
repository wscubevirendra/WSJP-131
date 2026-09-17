import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state) => {
            console.log(state)
        },
        removecart: (state) => {
            console.log(state)

        },
        qtyHanlder: (state) => {
            console.log(state)


        }

    },
})

// Action creators are generated for each case reducer function
export const { addTocart, removecart, qtyHanlder } = cartSlice.actions

export default cartSlice.reducer