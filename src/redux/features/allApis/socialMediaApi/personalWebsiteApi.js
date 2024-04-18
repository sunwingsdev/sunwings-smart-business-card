import baseApi from "../../baseApi";

const personalWebsiteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPersonalWebsite: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/personal-website`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deletePersonalWebsite: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/personal-website/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useCreatePersonalWebsiteMutation,
  useDeletePersonalWebsiteMutation,
} = personalWebsiteApi;
