import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../services/apiUrl';

const newsApiSlice = createApi({
  reducerPath: 'newsApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/news`,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['news'],
  endpoints: builder => ({
    getNewsList: builder.query({
      query: ({ page = 1, limit = 10, search }) =>
        `/?limit=${limit}&page=${page}${search ? '&search=' + search : ''}`,
      keepUnusedDataFor: 30,
      providesTags: ['news'],
    }),
  }),
  refetchOnReconnect: true,
});

export const { useGetNewsListQuery } = newsApiSlice;

export default newsApiSlice;
