import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { API_URL } from '../../services/apiUrl';

const userApiSlice = createApi({
  reducerPath: 'userApiSlice',
  baseQuery: fetchBaseQuery({
    // baseUrl: `${API_URL}/users`,
    baseUrl: `http://localhost:3002/api/users`,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['user', 'favorites', 'pets'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => ({
        url: `/register`,
        method: 'POST',
        body: user,
        providesTags: ['user'],
      }),
    }),

    logInUser: builder.mutation({
      query: user => ({
        url: `/login`,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
      providesTags: ['user'],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: `/logout`,
      }),
      providesTags: ['user'],
    }),

    getUser: builder.query({
      query: () => ({
        url: '/current',
      }),
      providesTags: ['user'],
    }),

    updateUser: builder.mutation({
      query: formData => ({
        url: `/`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['user'],
    }),

    addToFavorite: builder.mutation({
      query: noticeId => ({
        url: `/favorites/${noticeId}`,
        method: 'PATCH',
        body: '',
      }),
      invalidatesTags: ['favorites'],
    }),

    getFavoritesList: builder.query({
      query: () => ({
        url: '/favorites',
      }),
      providesTags: ['favorites'],
    }),

    deleteFromFavorite: builder.mutation({
      query: noticeId => ({
        url: `/favorites/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['favorites'],
    }),

    addMyPets: builder.mutation({
      query: pet => ({
        url: `/pets`,
        method: 'POST',
        body: pet,
      }),
      invalidatesTags: ['pets'],
    }),

    deleteMyPets: builder.mutation({
      query: petId => ({
        url: `/pets/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['pets'],
    }),
  }),
  refetchOnReconnect: true,
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useAddToFavoriteMutation,
  useGetFavoritesListQuery,
  useDeleteFromFavoriteMutation,
  useDeleteMyPetsMutation,
  useAddMyPetsMutation,
} = userApiSlice;

export default userApiSlice;
