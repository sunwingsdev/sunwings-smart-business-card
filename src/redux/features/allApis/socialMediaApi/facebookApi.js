import baseApi from "../../baseApi";

const facebookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacebook: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/facebook`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteFacebook: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/facebook/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateFacebookMutation, useDeleteFacebookMutation } =
  facebookApi;
