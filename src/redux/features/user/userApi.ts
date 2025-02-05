/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from "@/types/user.type";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    getAllUser: builder.query({
      query: () => "/auth/all-user",
      transformResponse: (res: any) => {
        return res?.data;
      },
    }),
    getAdminData: builder.query({
      query: () => "/admin",
    }),
    updateUser: builder.mutation({
      query: (obj: { body: Partial<TUser>; id: string }) => ({
        url: `/auth/user/${obj.id}`,
        method: "PUT",
        body: obj.body,
      }),
    }),
    changePassword: builder.mutation({
      query: (obj: { body: any; id: string }) => ({
        url: `/auth/user/change-password/${obj.id}`,
        method: "PUT",
        body: obj.body,
      }),
    }),
    getMe: builder.query({
      query: (id: string) => `/auth/user/get-me/${id}`,
      transformResponse: (res: any) => {
        return res?.data;
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAdminDataQuery,
  useRegisterMutation,
  useGetAllUserQuery,
  useUpdateUserMutation,
  useGetMeQuery,
  useChangePasswordMutation,
} = userApi;
