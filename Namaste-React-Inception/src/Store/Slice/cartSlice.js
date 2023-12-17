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
          let cart = [...state.cartItems]
          let desiredIndex = cart?.findIndex((item) =>item?.card.info.id == action.payload)
        if(desiredIndex!= -1) {
             cart?.splice(desiredIndex, 1);
            return {...state, cartItems : cart}
        } else {
            return {...state}
        }
        },
        clearCart : (state) =>{
            return {...state, cartItems: []}
        }
    }
});
export const {addItem, removeItem, clearCart} = cartSlice?.actions; 
export default cartSlice?.reducer;