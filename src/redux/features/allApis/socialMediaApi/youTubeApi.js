import baseApi from "../../baseApi";

const youTubeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createYoutube: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/youtube`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteYoutube: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/youtube/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateYoutubeMutation, useDeleteYoutubeMutation } =
  youTubeApi;
