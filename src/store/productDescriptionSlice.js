import { createSlice } from "@reduxjs/toolkit";

const description = createSlice({
    name: 'description',
    initialState: { items: [] },
    reducers: {
        showDescription(state, action) {
            const newItem = action.payload;
            state.items = []
            state.items.push({
                id: newItem.id,
                price: newItem.price,
                name: newItem.title,
                description: newItem.description,
                img: newItem.img
            })
            
        }
    }
})

export const descriptionActions = description.actions

export default description.reducer