import { createSlice } from "@reduxjs/toolkit";

const initialState = [
       { id: 0, text: "Learn HTML and CSS", completed: true },
       { id: 1, text: "Get good at JavaScript", completed: true },
       { id: 2, text: "Master React", completed: false },
       { id: 3, text: "Discover Redux", completed: false },
       { id: 4, text: "Build amazing apps", completed: false },
];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask(state, action){
        state.push(action.payload)
      },
      deleteTask(state, action){
        return state.filter(task => task.id !== action.payload)
      },
      toggleCompleted(state, action){
        return state.map(task => {
            if(task.id === action.payload){
                return {
                    ...task, completed: !task.completed
                }
            }
            return task
        })
      }
    }
})

export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions
export const taskReducer = taskSlice.reducer