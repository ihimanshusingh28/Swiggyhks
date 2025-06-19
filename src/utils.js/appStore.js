import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;
// For modification of app store we use reducer 