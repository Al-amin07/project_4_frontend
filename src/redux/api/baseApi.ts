/* eslint-disable @typescript-eslint/no-explicit-any */
// import { toast } from "react-toastify";

import { RootState } from "./../store";
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logout, setUser } from "../features/user/userSlice";

const baseApiQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

const customBaseApiQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  let result = await baseApiQuery(args, api, extraOptions);
  console.log({ result });
  if (
    result?.error?.status === 401 ||
    (result?.error?.data as { message?: string })?.message === "jwt expired"
  ) {
    const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({ user, token: data?.data?.accessToken }));
      result = await baseApiQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  } else if (result?.error) {
    console.log("Here");
    const errorMessage =
      (result?.error?.data as { message?: string })?.message ||
      "Something went wrong";
    throw new Error(errorMessage);
    // toast.error(errorMessage);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseApiQuery,
  tagTypes: ["Car"],
  endpoints: () => ({}),
});
