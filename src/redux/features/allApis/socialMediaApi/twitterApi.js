import baseApi from "../../baseApi";

const twitterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTwitter: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/twitter`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteTwitter: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/twitter/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateTwitterMutation, useDeleteTwitterMutation } =
  twitterApi;
