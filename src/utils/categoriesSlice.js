import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice=createSlice({
    name: 'categories',
    initialState: {status: "Loading", data: null},
    reducers: {
        setCategoriesData: (state,action) => {
            state.status="Success";
            state.data=action.payload;
        },
        setCategoriesError: (state,action) => {
            state.status="Error";
            state.data=action.payload;
        }
    }
})

export const {setCategoriesData, setCategoriesError}=categoriesSlice.actions;
export default categoriesSlice.reducer;