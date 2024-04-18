import baseApi from "../baseApi";

const educationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEducation: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/education`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteEducation: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/education/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateEducationMutation, useDeleteEducationMutation } =
  educationApi;
