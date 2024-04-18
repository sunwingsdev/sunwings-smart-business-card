import baseApi from "../../baseApi";

const linkedInApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLinkedIn: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/linkedin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteLinkedIn: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/linkedin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateLinkedInMutation, useDeleteLinkedInMutation } =
  linkedInApi;
