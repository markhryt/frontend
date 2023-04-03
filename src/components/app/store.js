import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "../ProductsList/ProductListSlice";
import HeaderSlice from "../header/HeaderSlice";
export default configureStore({
    reducer: {
        productList: ProductListSlice,
        header: HeaderSlice
    }
})