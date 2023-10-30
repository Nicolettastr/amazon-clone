import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInBag: 0
}

export const shoppingSlice = createSlice({
    name: 'shoppingBag',
    initialState,
    reducers: {
        addItemToBag: (state, action) => {
            state.itemsInBag = action.payload
        },
        deleteItemsInBag: (state, action) => {
            state.itemsInBag = action.payload
        }
    }
});

export const { addItemToBag, deleteItemsInBag } = shoppingSlice.actions;
export const selectItemsInBag = (state) => state.shoppingBag;
export default shoppingSlice.reducer;
