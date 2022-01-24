import { configureStore } from "@reduxjs/toolkit";

import authReducer from './loginSlice'
// import cartVisibilityReducer from './cartVisibilitySlice'
import cartSliceReducer from "./cartSlice";
import descriptionReducer from './productDescriptionSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        // cartVisibility: cartVisibilityReducer,
        cart: cartSliceReducer,
        description: descriptionReducer
    }
})

export default store