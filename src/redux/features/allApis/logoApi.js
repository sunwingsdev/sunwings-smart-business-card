import baseApi from "../baseApi";

const logoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLogo: builder.query({
      query: () => "/logo",
      providesTags: ["logo"],
    }),
    updateLogo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/logo/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["logo"],
    }),
  }),
});

export const { useGetLogoQuery, useUpdateLogoMutation } = logoApi;
