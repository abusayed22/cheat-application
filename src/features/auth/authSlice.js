import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    user: undefined
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLogOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        }
    }
})

export const { userLogin, userLogOut } = authSlice.actions;
export default authSlice.reducer;