import apiSlice from "../api/apiSlice";
import { userLogin } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/user",
                method: "POST",
                body: data
            }),
            onQueryStarted: async (args, {queryFulfilled, dispatch}) => {
                // this is passimistake update
                try {
                    const res = await queryFulfilled;

                    localStorage.setItem(JSON.stringify(res));

                    dispatch(userLogin({
                        accessToken: res.data.accessToken,
                        user: res.data.user
                    }))
                } catch (error) {}
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            }), 
            onQueryStarted: async (args, {queryFulfilled, dispatch}) => {
                // this is passimistake update
                try {
                    const res = await queryFulfilled;

                    localStorage.setItem(JSON.stringify(res));

                    dispatch(userLogin({
                        accessToken: res.data.accessToken,
                        user: res.data.user
                    }))
                } catch (error) {}
            }
        })
    })
})

// export default authApi;
export const {useRegisterMutation, useLoginMutation} = authApi