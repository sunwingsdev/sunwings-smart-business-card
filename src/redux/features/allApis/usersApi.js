import baseApi from "../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    getUserByUid: builder.query({
      query: (uid) => `/users/${uid}`,
      providesTags: ["users"],
    }),
    createAuser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateAuserProfilePicture: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/profile-image`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateAuserCoverPhoto: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/profile-cover`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateAuserAboutMe: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/about-me`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    createQrCode: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/qr-code`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    updateQRCode: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/qr-code`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    updateTheme: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/theme`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    updateAuserBasicInfo: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/basic-info`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getUserEducation: builder.query({
      query: (uid) => `/users/${uid}/education`,
      providesTags: ["users"],
    }),

    updateUserRole: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/role`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByUidQuery,
  useCreateAuserMutation,
  useUpdateAuserProfilePictureMutation,
  useUpdateAuserCoverPhotoMutation,
  useUpdateAuserAboutMeMutation,
  useCreateQrCodeMutation,
  useUpdateQRCodeMutation,
  useUpdateThemeMutation,
  useUpdateAuserBasicInfoMutation,
  useGetUserEducationQuery,
  useUpdateUserRoleMutation,
} = usersApi;
