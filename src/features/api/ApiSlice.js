import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "RestaurantsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["restaurants", "restaurant"],
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

    getAllFood: builder.query({
      query: () => ({
        url: "/allfood",
      }),
      providesTags: ["allfood"],
    }),

    // post review on database
		createReview: builder.mutation({
			query: data => ({
				url: "/reviews",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["reviews"],
		}),

    deleteFood: builder.mutation({
			query: id => ({
				url: `/allfood/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["allfood", "food"],
		}),




  }),
});

export const {
 useGetRestaurantsQuery,
 useGetRestaurantByIdQuery,
 useCreateReviewMutation,
 useGetAllFoodQuery,
 useDeleteFoodMutation
 
} = apiSlice;