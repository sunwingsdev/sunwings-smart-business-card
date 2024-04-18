import baseApi from "../baseApi";

const premiumCardImageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPremiumCardImage: builder.query({
      query: () => "/premium-card-image",
      providesTags: ["pCardImg"],
    }),

    createPremiumCardImage: builder.mutation({
      query: (data) => ({
        url: "/premium-card-image",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["pCardImg"],
    }),

    updatePremiumCardImage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/premium-card-image/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["pCardImg"],
    }),
  }),
});

export const {
  useGetAllPremiumCardImageQuery,
  useCreatePremiumCardImageMutation,
  useUpdatePremiumCardImageMutation,
} = premiumCardImageApi;
