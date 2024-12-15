import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tasksReducer from './tasksSlice';
import usersReducer from './usersSlice';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};

const rootReducer = combineReducers({
  tasks:tasksReducer,
  users:usersReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
reducer:persistedReducer,
middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:false,
  }),
});

export const persistor = persistStore(store);

export default store;
