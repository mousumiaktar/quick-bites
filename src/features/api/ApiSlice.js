import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "RestaurantsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: [
    "restaurants",
    "restaurant",
    "order",
    "reviews",
    "myorder",
    "allfood",
    "food",
    "addfood",
  ],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "/restaurants",
      }),
      providesTags: ["restaurants"],
    }),
    getRestaurantById: builder.query({
      query: (id) => ({
        url: `/restaurants/${id}`,
      }),
      providesTags: ["restaurant"],
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/order",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: () => ({
        url: "/reviews",
      }),
      providesTags: ["reviews"],
    }),
    getOrderWithEmail: builder.query({
      query: (email) => ({
        url: `myorder?email=${email}`,
      }),
      providesTags: ["myorder"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/myorder/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["myorder", "order"],
    }),
    getAllFood: builder.query({
      query: () => ({
        url: "/allfood",
      }),
      providesTags: ["allfood"],
    }),
    deleteFood: builder.mutation({
      query: (id) => ({
        url: `/allfood/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allfood", "food"],
    }),
    addFood: builder.mutation({
      query: (data) => ({
        url: "/addfood",
        method: "POST",
        body: data,
      }),
      providesTags: ["addfood"],
    }),
  }),
});

export const {
 useGetRestaurantsQuery,
 useGetRestaurantByIdQuery,
 useAddOrderMutation,
 useAddReviewMutation,
 useGetReviewQuery,
 useGetOrderWithEmailQuery,
 useDeleteOrderMutation,
 useDeleteFoodMutation,
 useGetAllFoodQuery,
 useAddFoodMutation
 
} = apiSlice;