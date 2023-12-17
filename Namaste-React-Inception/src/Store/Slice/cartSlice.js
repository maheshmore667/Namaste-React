import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState : {
        cartItems : []
    },
    reducers : {
        addItem : (state, action) =>{
            state?.cartItems?.push(action.payload);
        },
        removeItem : (state, action) =>{
            let requiredItems = [];
            requiredItems = state?.cartItems?.filter((cartItem)=> cartItem === action.payload)
            return [...state, requiredItems];
        },
        clearCart : (state) =>{
            return {...state, cartItems: []}
        }
    }
});
export const {addItem, removeItem, clearCart} = cartSlice?.actions; 
export default cartSlice?.reducer;