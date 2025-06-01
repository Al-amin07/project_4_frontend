/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCar: builder.query({
            query: (args) => {
                const params = new URLSearchParams()
                if (args) {
                    args.forEach((el: { name: string; value: string }) => params.append(el.name, el.value))
                }
                return {
                    url: '/cars',
                    method: 'GET',
                    params
                }
            },
            providesTags: ['Car'],
        }),
        getSingleCar: builder.query({
            query: (id: string) => `/cars/${id}`
        }),
        deleteCar: builder.mutation({
            query: (id: string) => ({
                url: `/cars/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Car']
        }),
        updateCar: builder.mutation({
            query: (payload: { id: string, data: any }) => ({
                url: `/cars/${payload.id}`,
                method: 'PUT',
                body: payload.data
            }),
            invalidatesTags: ['Car']
        }),
        createCar: builder.mutation({
            query: (body) => ({
                url: '/cars',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Car']
        })
    })
})
export const { useGetAllCarQuery, useCreateCarMutation, useGetSingleCarQuery, useDeleteCarMutation, useUpdateCarMutation } = carApi