import { nanoid } from "nanoid"

export const addTask = (text) => {
    return {
      type: 'tasks/addTask',
    payload: {
        id: nanoid(),
        text: text,
        completed: false  
    }
}}

export const deleteTask = (id) => {
  return {
    type: 'tasks/deleteTask',
  payload: {
      id,
  }
}}

export const toggleTask = (id) => {
  return {
    type: 'tasks/toggleTask',
  payload: {
      id,
  }
}}

// {
//     type: 'tasks/deleteTask'
// }
// {
//     type: 'tasks/toggleTask'
// }
// {
//     type: 'filters/changeFilters'
// }