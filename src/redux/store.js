import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import {contactsReducer, themeReducer, authReducer} from './reducers/rootReducer';

const defaultMiddleware = getDefaultMiddleware();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'] 
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    theme: themeReducer,
    auth: persistReducer(persistConfig, authReducer)
  },
  middleware: [...defaultMiddleware]
});

export const persistor = persistStore(store);
