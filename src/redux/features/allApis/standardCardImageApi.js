import baseApi from "../baseApi";

const stanndardCardImageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStanndardCardImage: builder.query({
      query: () => "/stanndard-card-image",
      providesTags: ["sCardImg"],
    }),

    createStanndardCardImage: builder.mutation({
      query: (data) => ({
        url: "/stanndard-card-image",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sCardImg"],
    }),

    updateStanndardCardImage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/stanndard-card-image/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["sCardImg"],
    }),
  }),
});

export const {
  useGetAllStanndardCardImageQuery,
  useCreateStanndardCardImageMutation,
  useUpdateStanndardCardImageMutation,
} = stanndardCardImageApi;
