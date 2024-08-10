import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = state => state.tasks.items;
export const selectLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFilters = state => state.filters.status;

export const selectVisibleTasks = createSelector([selectTasks, selectFilters], 
    (tasks, statusFilter) => {
        switch (statusFilter) {
            case statusFilters.active:
              return tasks.filter(task => !task.completed);
        
            case statusFilters.completed:
              return tasks.filter(task => task.completed);
        
            default:
              return tasks;
          }
})
    
