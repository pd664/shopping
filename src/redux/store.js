import { configureStore } from "@reduxjs/toolkit";
import allProducts from "./reducer/allProducts";
import categories from "./reducer/category";
import cartReducer from "./reducer/cartReducer";
import subTotalReducer from "./reducer/subTotal";

const store = configureStore({
    reducer: {
        allProducts,
        categories,
        cartReducer,
        subTotalReducer
    }
});

export default store