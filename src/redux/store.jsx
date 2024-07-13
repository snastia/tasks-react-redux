import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './filterSlice';
import { taskReducer } from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer
  }
})
