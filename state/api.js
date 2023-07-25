import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//endpoint i want to call
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: [],
  endpoints: (builder) => ({
    postAiText: builder.mutation({
      query: (payload) => ({
        url: "openai/text",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { usePostAiTextMutation } = api;
