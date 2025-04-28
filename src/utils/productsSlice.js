import {createSlice} from '@reduxjs/toolkit'

// creating slice to store all the products
const productsSlice=createSlice({
    name: 'products',
    initialState: {status: "Loading", data: null},
    reducers: {
        setProductsData: (state,action) => {
            state.status="Success";
            state.data=action.payload;
        },
        setProductsError: (state,action) => {
            state.status="Error";
            state.data=action.payload;
        }
    }
})

export const {setProductsData, setProductsError}=productsSlice.actions;
export default productsSlice.reducer;
