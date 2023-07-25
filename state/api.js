import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASSE_URL }),
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
