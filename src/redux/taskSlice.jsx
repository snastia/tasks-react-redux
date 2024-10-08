import { createSlice } from "@reduxjs/toolkit";
import { getTasks, deleteTask, addTask, toggleCompleted } from "./operations";
 
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        addTask(state, action) {
            state.push(action.payload)
        },
        deleteTask(state, action) {
            return state.filter(task => task.id !== action.payload)
        },
        toggleCompleted(state, action) {
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,completed: !task.completed,
                    };
                }
                return task
            })
        }
    
    },
    extraReducers: (builder) => {
        builder
    .addCase(getTasks.pending, (state) => {
                state.isLoading = true
            })
    .addCase(getTasks.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.items = action.payload
            })
    .addCase(getTasks.rejected, (state, action) => {
            state.error = action.payload
    })
    .addCase(addTask.pending, (state) => {
        state.isLoading = true
    })
    .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.items.push(action.payload.data)
    })
    .addCase(addTask.rejected, (state, action) => {
        state.error = action.payload
    })
    .addCase(deleteTask.pending, (state) => {
        state.isLoading = true
    })
    .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        const taskIndex = state.items.findIndex((item) => {
            return item.id === action.payload
        }) 
        state.items.splice(taskIndex, 1)
    })
    .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.payload
    })
    .addCase(toggleCompleted.pending, (state) => {
        state.isLoading = true
    })
    .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null

        const taskIdx = state.items.findIndex(item => item.id === action.payload.data.id)
        state.items.splice(taskIdx, 1, action.payload.data)
    })
    .addCase(toggleCompleted.rejected, (state, action) => {
        state.error = action.payload
    })
    }
})

export const taskReducer = taskSlice.reducer