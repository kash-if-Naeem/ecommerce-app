import { createSlice } from "@reduxjs/toolkit";

const cartVisibility = createSlice({
    name: 'cartVisibility',
    initialState: { cartIsVisible: false},
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible  
        }
    }
})

export const cartVisibilityActions = cartVisibility.actions

export default cartVisibility.reducer;