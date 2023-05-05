import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "RestaurantsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://quickbites.onrender.com/",
  }),
  tagTypes: [
    "restaurants",
    "restaurant",
    "order",
    "reviews",
    "myorder",
    "allfood",
    "user",
    "food",
    "addfood",
    "nightdrink",
    "gift",
    "birthday",
    "party",
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
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    addFood: builder.mutation({
      query: (data) => ({
        url: "/addfood",
        method: "POST",
        body: data,
      }),
      providesTags: ["addfood"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/user",
      }),
      providesTags: ["user"],
    }),
    getDrink: builder.query({
      query: () => ({
        url: "/nightdrink",
      }),
      providesTags: ["nightdrink"],
    }),
    getGift: builder.query({
      query: () => ({
        url: "/gift",
      }),
      providesTags: ["gift"],
    }),
    getBirthDay: builder.query({
      query: () => ({
        url: "/birthday",
      }),
      providesTags: ["birthday"],
    }),
    getParty: builder.query({
      query: () => ({
        url: "/party",
      }),
      providesTags: ["party"],
    }),
    getBreakfast: builder.query({
      query: () => ({
        url: "/breakfast",
      }),
      providesTags: ["breakfast"],
    }),
    getLunch: builder.query({
      query: () => ({
        url: "/lunch",
      }),
      providesTags: ["lunch"],
    }),
    getDinner: builder.query({
      query: () => ({
        url: "/dinner",
      }),
      providesTags: ["dinner"],
    }),
    getMorningCoffee: builder.query({
      query: () => ({
        url: "/morningcoffee",
      }),
      providesTags: ["morningcoffee"],
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
 useAddFoodMutation,
 useGetAllUserQuery,
 useDeleteUserMutation,

 useGetDrinkQuery,
 useGetBirthDayQuery,
 useGetGiftQuery,
 useGetPartyQuery,

 useGetBreakfastQuery,
 useGetLunchQuery,
 useGetDinnerQuery,
 useGetMorningCoffeeQuery,




 
} = apiSlice;