import apiSlice from "../api/apiSlice";

const conversationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConverstaions: builder.query({
            query: (email) => `/conversation?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
        })
    })
})

export const {} = conversationApi;