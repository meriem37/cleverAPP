import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl = "http://192.168.12.187:3000/";
export const apiSlice = createApi({
reducerPath: 'api',
baseQuery: fetchBaseQuery({ baseUrl }),
endpoints: (builder) =>({
getProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }), 
        // Orders
        createOrder: builder.mutation({
          query: (newOrder) => ({
            url: 'orders',
            method: 'POST',
            body: newOrder,
          }),
        }),
        getOrder: builder.query({
          query: (ref) => `orders/${ref}`,
        }),
        getAllOrders: builder.query({
          query: () => 'orders',
        }),
}),

});

export const { useGetProductsQuery, useGetProductQuery,useCreateOrderMutation,
  useGetOrderQuery,useGetAllOrdersQuery } = apiSlice;


