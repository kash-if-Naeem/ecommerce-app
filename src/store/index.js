import { configureStore } from "@reduxjs/toolkit";

import authReducer from './loginSlice'
import cartVisibilityReducer from './cartVisibilitySlice'
import cartSliceReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cartVisibility: cartVisibilityReducer,
        cart: cartSliceReducer
    }
})

export default store