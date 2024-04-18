import baseApi from "../baseApi";

const jobExperienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJobExperience: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/job-experience`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteJobExperience: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/job-experience/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useCreateJobExperienceMutation,
  useDeleteJobExperienceMutation,
} = jobExperienceApi;
