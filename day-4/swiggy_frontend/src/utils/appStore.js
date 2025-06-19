import cartReducer from "./cartSlice";
// import userReducer from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        // user: userReducer
    }
});

export default appStore;