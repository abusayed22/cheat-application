import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";
import authSlice from "../auth/authSlice";

const store = configureStore({
     reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authSlice,
     },
     devTools: process.env.NODE_ENV !== "production",
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;