import baseApi from "../baseApi";

const visitingInformationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVisitingInfo: builder.query({
      query: () => "/visiting-information",
      providesTags: ["visitInfo"],
    }),

    createVisitingInfo: builder.mutation({
      query: (data) => ({
        url: "/visiting-information",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["visitInfo"],
    }),

    updateVisitingInfo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/visiting-information/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["visitInfo"],
    }),
  }),
});

export const {
  useGetAllVisitingInfoQuery,
  useCreateVisitingInfoMutation,
  useUpdateVisitingInfoMutation,
} = visitingInformationApi;
