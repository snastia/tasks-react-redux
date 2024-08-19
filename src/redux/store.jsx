import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './filterSlice';
import { taskReducer } from './taskSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
    auth: authReducer
  }
 })