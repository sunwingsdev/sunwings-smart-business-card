import baseApi from "../baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => "/banner",
      providesTags: ["banner"],
    }),
    updateBanner: builder.mutation({
      query: ({ id, data }) => ({
        url: `/banner/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const { useGetBannerQuery, useUpdateBannerMutation } = bannerApi;
