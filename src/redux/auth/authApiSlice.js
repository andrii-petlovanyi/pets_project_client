import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../services/apiUrl';

const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/users`,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['users'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => ({
        url: `/register`,
        method: 'POST',
        body: { name: user.name, email: user.email },
        providesTags: ['users'],
      }),
    }),

    logInUser: builder.mutation({
      query: user => ({
        url: `/login`,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
      providesTags: ['users'],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: `/logout`,
      }),
      providesTags: ['users'],
    }),

    getUser: builder.query({
      query: () => ({
        url: '/current',
      }),
      providesTags: ['users'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
} = authApiSlice;

export default authApiSlice;
