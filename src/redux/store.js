import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { contactsReduser } from './contanctsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';

const persistConfig = {
  key: 'contacts',
//   version:1,
  storage,
};
const persistContactsReducer = persistReducer(persistConfig, contactsReduser);

const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filter: filterReduser,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store)
export default store;
