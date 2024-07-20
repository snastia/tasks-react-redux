import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 5},
    reducers: {
        increment(state, action){
            return {
                ...state,
                value: state.value += action.payload
            }
        }
    }
})

export const store = configureStore({reducer: counterSlice.reducer})