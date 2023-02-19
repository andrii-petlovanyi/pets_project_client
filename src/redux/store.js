import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userApiSlice from './user/userApiSlice';
import userReducer from './user/userSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import newsApiSlice from './news/newsApisSlice';
import noticesApiSlice from './notices/noticesApiSlice';
import friendsApiSlice from './friends/friendsApiSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  userApiSlice.middleware,
  newsApiSlice.middleware,
  noticesApiSlice.middleware,
  friendsApiSlice.middleware,
];

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(userPersistConfig, userReducer),
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [noticesApiSlice.reducerPath]: noticesApiSlice.reducer,
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
    [friendsApiSlice.reducerPath]: friendsApiSlice.reducer,
  },
  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
