import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61c4d1aff1af4a0017d997fd.mockapi.io/",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    // deleteContacts: builder.mutation({
    //   query: (contactId) => ({
    //     url: `/contacts/${contactId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Contacts"],
    // }),
    createContacts: builder.mutation({
      query: ({ name, number }) => ({
        url: "/contacts",
        method: "POST",
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactsApi;
