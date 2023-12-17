import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/cartSlice";

const appStore = configureStore({
    reducer : {
        cart : cartSlice
    }
});

export default appStore;