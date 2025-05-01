import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState: {},
    reducers:{
        addToCart:(state,action)=>{
            if(action.payload.id in state){
                state[action.payload.id].quantity+=1;
            }
            else{
                state[action.payload.id]={
                    ...action.payload,
                    quantity:1
                }
            }
        },

        incrementQuantity: (state,action)=>{
            state[action.payload].quantity+=1;
        },

        decrementQuantity: (state,action)=>{
            state[action.payload].quantity-=1;
        },

        removeFromCart: (state,action)=>{
            delete state[action.payload];
        },
    }
})

export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;