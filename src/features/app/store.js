import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";
// import authSliceReducer from "../auth/authSlice";
import authSliceReducer from "../../features/auth/authSlice"

const store = configureStore({
     reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authSliceReducer,
     },
     devTools: process.env.NODE_ENV !== "production",
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;