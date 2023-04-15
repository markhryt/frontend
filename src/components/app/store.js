import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "../ProductsList/ProductListSlice";
import HeaderSlice from "../header/HeaderSlice";
import LoginSlice from "../account/login/LoginSlice";
import RegisterSlice from "../account/register/RegisterSlice";
import LogoutSlice from "../account/logout/LogoutSlice";
export default configureStore({
    reducer: {
        productList: ProductListSlice,
        header: HeaderSlice,
        login: LoginSlice,
        register: RegisterSlice,
        logout: LoginSlice,
    }
})