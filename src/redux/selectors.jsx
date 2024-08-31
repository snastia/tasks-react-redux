import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = state => state.tasks.items;
export const selectLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFilters = state => state.filters.status;
export const selectIsLogged = state => state.auth.isLoggedIn;

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

export const selectTaskCount = createSelector([selectTasks],
    (tasks) => {
       
  return tasks.reduce((acc, task) => {
    if (task.completed) {
       acc.completed += 1 
    } else {
       acc.active += 1
    }
    return acc
  }, {active: 0, completed: 0})
    }
)