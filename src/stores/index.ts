import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

const persistConfig = {
  key: 'stock-flex',
  storage: AsyncStorage,
  whitelist: [
    'auth',
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
});

export const persistor = persistStore(store);
saga.run(rootSaga);

setupListeners(store.dispatch);
