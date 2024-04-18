import baseApi from "../../baseApi";

const instagramApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createInstagram: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/instagram`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteInstagram: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/instagram/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateInstagramMutation, useDeleteInstagramMutation } =
  instagramApi;
