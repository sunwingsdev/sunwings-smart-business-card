import baseApi from "../../baseApi";

const whatsAppApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWhatsApp: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/whatsapp`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteWhatsApp: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/whatsapp/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateWhatsAppMutation, useDeleteWhatsAppMutation } =
  whatsAppApi;
