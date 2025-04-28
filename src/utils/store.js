import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice';

// creating store to store all the data
const store=configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer
    }
})

export default store;