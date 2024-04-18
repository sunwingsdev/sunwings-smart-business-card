import baseApi from "../../baseApi";

const tiktokApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTiktok: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/tiktok`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteTiktok: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/tiktok/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateTiktokMutation, useDeleteTiktokMutation } = tiktokApi;
