import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import responseReducer from './responseSlice';

// creating store to store all the data
const store=configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
        response: responseReducer
    }
})

export default store;