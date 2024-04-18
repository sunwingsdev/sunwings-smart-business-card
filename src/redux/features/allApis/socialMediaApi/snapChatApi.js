import baseApi from "../../baseApi";

const snapChatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSnapchat: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/snapchat`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteSnapchat: builder.mutation({
      query: ({ uid, id }) => ({
        url: `/users/${uid}/snapchat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateSnapchatMutation, useDeleteSnapchatMutation } =
  snapChatApi;
