import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: [
    "logo",
    "banner",
    "visitInfo",
    "sCardImg",
    "pCardImg",
    "users",
    "education",
    "jobExperience",
    "facebook",
    "twitter",
    "instagram",
    "whatsApp",
    "linkedin",
    "youtube",
    "tiktok",
    "snapchat",
    "personalWebsite",
  ],
  endpoints: () => ({}),
});

export default baseApi;
