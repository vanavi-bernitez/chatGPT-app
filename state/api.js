import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//endpoints i want to call
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),
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
    postAiCode: builder.mutation({
      query: (payload) => ({
        url: "openai/code",
        method: "POST",
        body: payload,
      }),
    }),
    postAiAssist: builder.mutation({
      query: (payload) => ({
        url: "openai/assist",
        method: "POST",
        body: payload,
      }),
    }),
    postLogin: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    postSignup: builder.mutation({
      query: (payload) => ({
        url: "auth/signup",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  usePostAiTextMutation,
  usePostAiCodeMutation,
  usePostAiAssistMutation,
  usePostLoginMutation,
  usePostSignupMutation,
} = api;
