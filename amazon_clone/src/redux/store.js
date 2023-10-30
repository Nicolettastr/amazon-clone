import { configureStore } from "@reduxjs/toolkit";
import shoppingBagReducer from './shoppingBagSlice';

const store = configureStore({
    reducer: {
        shoppingBag: shoppingBagReducer,
    }
})

export default store;