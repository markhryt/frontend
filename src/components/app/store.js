import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "../ProductsList/ProductListSlice";
export default configureStore({
    reducer: {
        productList: ProductListSlice
    }
})