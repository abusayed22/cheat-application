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
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: res.data.accessToken,
                        user: res.data.user
                    }));

                    dispatch(userLogin({
                        accessToken: res.data.accessToken,
                        user: res.data.user
                    }))

                } catch (error) { }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: res.data.accessToken,
                        user: res.data.user
                    }));

                    dispatch(userLogin({
                        accessToken: res.data.accessToken,
                        user: res.data.user
                    }))

                } catch (error) { }
            }
        })
    })
})

// export default authApi;
export const { useRegisterMutation, useLoginMutation } = authApi