import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getAccount: builder.query<DefaultRequest<FallenFutureAccount>, string>({
      query: (uuid) => ({
        url: `/account/${uuid}`,
        method: "GET",
      }),
    }),
    createAccount: builder.mutation<
      void,
      { uuid: string; body: { username: string } }
    >({
      query: ({ uuid, body }) => ({
        url: `/account/${uuid}`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});
