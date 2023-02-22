import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../services/apiUrl';

const noticesApiSlice = createApi({
  reducerPath: 'noticesApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/notices`,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['notices'],
  endpoints: builder => ({
    getNoticesList: builder.query({
      query: ({ page = 1, limit = 10, search, category = 'sell' }) =>
        `/?category=${category}&limit=${limit}&page=${page}${
          search ? '&search=' + search : ''
        }`,
      keepUnusedDataFor: 30,
      providesTags: ['notices'],
    }),

    getUserNoticesList: builder.query({
      query: ({ page = 1, limit = 10, search }) =>
        `owner/?limit=${limit}&page=${page}${
          search ? '&search=' + search : ''
        }`,
      keepUnusedDataFor: 30,
      providesTags: ['notices'],
    }),

    getNoticeById: builder.query({
      query: noticeId => `/${noticeId}`,
      keepUnusedDataFor: 30,
      providesTags: ['notices'],
    }),

    addNotice: builder.mutation({
      query: notice => ({
        url: `/`,
        method: 'POST',
        body: notice,
      }),
      invalidatesTags: ['notices'],
    }),

    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['notices'],
    }),
  }),
  refetchOnReconnect: true,
});

export const {
  useGetNoticesListQuery,
  useGetNoticeByIdQuery,
  useGetUserNoticesListQuery,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApiSlice;

export default noticesApiSlice;
